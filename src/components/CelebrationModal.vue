<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'

const props = defineProps<{
  playerName: string
  chapterTitle: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const containerEl = ref<HTMLDivElement | null>(null)
const canvasEl = ref<HTMLCanvasElement | null>(null)
const showContent = ref(false)
let cleanup: (() => void) | null = null

// 建立煙火粒子紋理
function createFireworkTexture(color: THREE.Color) {
  const size = 64
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!

  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  gradient.addColorStop(0, `rgba(${Math.floor(color.r * 255)}, ${Math.floor(color.g * 255)}, ${Math.floor(color.b * 255)}, 1)`)
  gradient.addColorStop(0.3, `rgba(${Math.floor(color.r * 255)}, ${Math.floor(color.g * 255)}, ${Math.floor(color.b * 255)}, 0.8)`)
  gradient.addColorStop(0.6, `rgba(${Math.floor(color.r * 255)}, ${Math.floor(color.g * 255)}, ${Math.floor(color.b * 255)}, 0.3)`)
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, size, size)

  return new THREE.CanvasTexture(canvas)
}

// 建立星星紋理
function createStarTexture() {
  const size = 64
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!

  ctx.fillStyle = 'rgba(0, 0, 0, 0)'
  ctx.fillRect(0, 0, size, size)

  // 四角星
  ctx.fillStyle = '#FFD700'
  ctx.beginPath()
  const cx = size / 2
  const cy = size / 2
  const spikes = 4
  const outerRadius = size / 2 - 2
  const innerRadius = size / 6

  for (let i = 0; i < spikes * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius
    const angle = (i * Math.PI) / spikes - Math.PI / 2
    const x = cx + Math.cos(angle) * radius
    const y = cy + Math.sin(angle) * radius
    if (i === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.closePath()
  ctx.fill()

  // 發光效果
  ctx.shadowColor = '#FFD700'
  ctx.shadowBlur = 10
  ctx.fill()

  return new THREE.CanvasTexture(canvas)
}

// 建立彩帶紋理
function createConfettiTexture(color: THREE.Color) {
  const canvas = document.createElement('canvas')
  canvas.width = 16
  canvas.height = 32
  const ctx = canvas.getContext('2d')!

  ctx.fillStyle = `rgb(${Math.floor(color.r * 255)}, ${Math.floor(color.g * 255)}, ${Math.floor(color.b * 255)})`
  ctx.fillRect(0, 0, 16, 32)

  return new THREE.CanvasTexture(canvas)
}

function initThree() {
  if (!canvasEl.value || !containerEl.value) return

  const renderer = new THREE.WebGLRenderer({
    canvas: canvasEl.value,
    alpha: true,
    antialias: true,
  })
  renderer.setClearColor(0x000000, 0)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))

  const w = containerEl.value.clientWidth
  const h = containerEl.value.clientHeight
  renderer.setSize(w, h, false)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000)
  camera.position.z = 500

  // 煙火顏色
  const fireworkColors = [
    new THREE.Color(0xff6b6b), // 紅
    new THREE.Color(0xffd93d), // 黃
    new THREE.Color(0x6bcb77), // 綠
    new THREE.Color(0x4d96ff), // 藍
    new THREE.Color(0xc9b1ff), // 紫
    new THREE.Color(0xff9f45), // 橘
    new THREE.Color(0xf72585), // 粉紅
  ]

  // 煙火粒子系統
  interface Firework {
    particles: THREE.Points
    velocities: THREE.Vector3[]
    life: number
    maxLife: number
    phase: 'rising' | 'exploding' | 'fading'
    riseVelocity?: THREE.Vector3
    targetY?: number
  }

  const fireworks: Firework[] = []

  function createFirework(x: number, startY: number) {
    const color = fireworkColors[Math.floor(Math.random() * fireworkColors.length)]
    const particleCount = 80 + Math.floor(Math.random() * 60)
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    const velocities: THREE.Vector3[] = []

    // 初始位置都在同一點
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = x
      positions[i * 3 + 1] = startY
      positions[i * 3 + 2] = 0
      sizes[i] = 8 + Math.random() * 12

      // 球形爆炸速度
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const speed = 3 + Math.random() * 5
      velocities.push(
        new THREE.Vector3(
          Math.sin(phi) * Math.cos(theta) * speed,
          Math.sin(phi) * Math.sin(theta) * speed,
          Math.cos(phi) * speed * 0.3
        )
      )
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const material = new THREE.PointsMaterial({
      map: createFireworkTexture(color),
      size: 20,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: false,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    const targetY = 50 + Math.random() * 150

    fireworks.push({
      particles,
      velocities,
      life: 0,
      maxLife: 120 + Math.random() * 60,
      phase: 'rising',
      riseVelocity: new THREE.Vector3(0, 8 + Math.random() * 4, 0),
      targetY,
    })
  }

  // 星星粒子
  const starCount = 30
  const starGeometry = new THREE.BufferGeometry()
  const starPositions = new Float32Array(starCount * 3)
  const starSizes = new Float32Array(starCount)

  interface StarData {
    baseX: number
    baseY: number
    floatSpeed: number
    floatRadius: number
    rotateSpeed: number
    twinkleSpeed: number
    twinklePhase: number
  }
  const starData: StarData[] = []

  for (let i = 0; i < starCount; i++) {
    const x = (Math.random() - 0.5) * w * 0.9
    const y = (Math.random() - 0.5) * h * 0.7
    starPositions[i * 3] = x
    starPositions[i * 3 + 1] = y
    starPositions[i * 3 + 2] = -50
    starSizes[i] = 15 + Math.random() * 25

    starData.push({
      baseX: x,
      baseY: y,
      floatSpeed: 0.5 + Math.random() * 1,
      floatRadius: 5 + Math.random() * 15,
      rotateSpeed: 0.02 + Math.random() * 0.03,
      twinkleSpeed: 2 + Math.random() * 3,
      twinklePhase: Math.random() * Math.PI * 2,
    })
  }

  starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
  starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1))

  const starMaterial = new THREE.PointsMaterial({
    map: createStarTexture(),
    size: 30,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })

  const stars = new THREE.Points(starGeometry, starMaterial)
  scene.add(stars)

  // 彩帶粒子
  const confettiCount = 60
  interface ConfettiParticle {
    mesh: THREE.Mesh
    velocity: THREE.Vector3
    rotationSpeed: THREE.Vector3
    swayPhase: number
    swaySpeed: number
  }
  const confettiParticles: ConfettiParticle[] = []

  const confettiColors = [
    new THREE.Color(0xff6b6b),
    new THREE.Color(0xffd93d),
    new THREE.Color(0x6bcb77),
    new THREE.Color(0x4d96ff),
    new THREE.Color(0xf72585),
    new THREE.Color(0xff9f45),
  ]

  for (let i = 0; i < confettiCount; i++) {
    const color = confettiColors[Math.floor(Math.random() * confettiColors.length)]
    const geometry = new THREE.PlaneGeometry(8 + Math.random() * 8, 16 + Math.random() * 16)
    const material = new THREE.MeshBasicMaterial({
      map: createConfettiTexture(color),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
    })
    const mesh = new THREE.Mesh(geometry, material)

    mesh.position.set(
      (Math.random() - 0.5) * w,
      h / 2 + Math.random() * 200,
      (Math.random() - 0.5) * 100
    )
    mesh.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    )

    scene.add(mesh)

    confettiParticles.push({
      mesh,
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        -2 - Math.random() * 3,
        (Math.random() - 0.5) * 1
      ),
      rotationSpeed: new THREE.Vector3(
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1
      ),
      swayPhase: Math.random() * Math.PI * 2,
      swaySpeed: 2 + Math.random() * 2,
    })
  }

  let frame = 0
  let animationId: number

  // 初始煙火
  setTimeout(() => createFirework(-100, -h / 2 - 50), 100)
  setTimeout(() => createFirework(100, -h / 2 - 50), 400)
  setTimeout(() => createFirework(0, -h / 2 - 50), 700)

  // 顯示文字內容
  setTimeout(() => {
    showContent.value = true
  }, 800)

  function animate() {
    animationId = requestAnimationFrame(animate)
    frame++

    // 更新煙火
    for (let i = fireworks.length - 1; i >= 0; i--) {
      const fw = fireworks[i]
      const positions = fw.particles.geometry.attributes.position.array as Float32Array
      const particleCount = positions.length / 3

      if (fw.phase === 'rising') {
        // 上升階段
        for (let j = 0; j < particleCount; j++) {
          positions[j * 3 + 1] += fw.riseVelocity!.y
        }
        if (positions[1] >= fw.targetY!) {
          fw.phase = 'exploding'
        }
      } else {
        // 爆炸和消散階段
        fw.life++
        const progress = fw.life / fw.maxLife

        for (let j = 0; j < particleCount; j++) {
          const vel = fw.velocities[j]
          positions[j * 3] += vel.x * (1 - progress * 0.5)
          positions[j * 3 + 1] += vel.y * (1 - progress * 0.5) - 0.15 // 重力
          positions[j * 3 + 2] += vel.z * (1 - progress * 0.5)
        }

        // 淡出
        const mat = fw.particles.material as THREE.PointsMaterial
        mat.opacity = 1 - progress

        if (fw.life >= fw.maxLife) {
          scene.remove(fw.particles)
          fw.particles.geometry.dispose()
          ;(fw.particles.material as THREE.Material).dispose()
          fireworks.splice(i, 1)
        }
      }

      fw.particles.geometry.attributes.position.needsUpdate = true
    }

    // 持續發射煙火
    if (frame % 90 === 0 && fireworks.length < 5) {
      const x = (Math.random() - 0.5) * w * 0.6
      createFirework(x, -h / 2 - 50)
    }

    // 更新星星
    const starPos = stars.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < starCount; i++) {
      const data = starData[i]
      const t = frame * 0.02
      starPos[i * 3] = data.baseX + Math.sin(t * data.floatSpeed) * data.floatRadius
      starPos[i * 3 + 1] = data.baseY + Math.cos(t * data.floatSpeed * 0.7) * data.floatRadius * 0.5

      // 閃爍效果
      const twinkle = Math.sin(t * data.twinkleSpeed + data.twinklePhase) * 0.5 + 0.5
      ;(stars.geometry.attributes.size.array as Float32Array)[i] = (15 + twinkle * 25)
    }
    stars.geometry.attributes.position.needsUpdate = true
    stars.geometry.attributes.size.needsUpdate = true
    stars.rotation.z += 0.0005

    // 更新彩帶
    for (const confetti of confettiParticles) {
      confetti.mesh.position.add(confetti.velocity)
      confetti.mesh.rotation.x += confetti.rotationSpeed.x
      confetti.mesh.rotation.y += confetti.rotationSpeed.y
      confetti.mesh.rotation.z += confetti.rotationSpeed.z

      // 左右搖擺
      confetti.swayPhase += 0.05
      confetti.mesh.position.x += Math.sin(confetti.swayPhase * confetti.swaySpeed) * 0.5

      // 重置到頂部
      if (confetti.mesh.position.y < -h / 2 - 50) {
        confetti.mesh.position.y = h / 2 + 50
        confetti.mesh.position.x = (Math.random() - 0.5) * w
      }
    }

    renderer.render(scene, camera)
  }

  animate()

  const handleResize = () => {
    if (!containerEl.value) return
    const newW = containerEl.value.clientWidth
    const newH = containerEl.value.clientHeight
    renderer.setSize(newW, newH, false)
    camera.aspect = newW / newH
    camera.updateProjectionMatrix()
  }

  window.addEventListener('resize', handleResize)

  cleanup = () => {
    cancelAnimationFrame(animationId)
    window.removeEventListener('resize', handleResize)

    // 清理煙火
    for (const fw of fireworks) {
      scene.remove(fw.particles)
      fw.particles.geometry.dispose()
      ;(fw.particles.material as THREE.Material).dispose()
    }

    // 清理星星
    scene.remove(stars)
    starGeometry.dispose()
    starMaterial.dispose()

    // 清理彩帶
    for (const confetti of confettiParticles) {
      scene.remove(confetti.mesh)
      confetti.mesh.geometry.dispose()
      ;(confetti.mesh.material as THREE.Material).dispose()
    }

    renderer.dispose()
  }
}

onMounted(() => {
  initThree()
})

onUnmounted(() => {
  cleanup?.()
  cleanup = null
})
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90" role="dialog" aria-modal="true">
    <!-- Three.js 背景 -->
    <div ref="containerEl" class="absolute inset-0">
      <canvas ref="canvasEl" class="h-full w-full" />
    </div>

    <!-- 內容區塊 -->
    <div
      class="relative z-10 flex flex-col items-center px-6 text-center transition-all duration-700"
      :class="showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
    >
      <!-- 完成標章 -->
      <div class="mb-6 flex h-28 w-28 items-center justify-center rounded-full border-4 border-amber-400 bg-gradient-to-br from-amber-400 to-amber-600 shadow-[0_0_60px_rgba(251,191,36,0.5)]">
        <svg class="h-14 w-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <!-- 標題 -->
      <h2 class="mb-2 text-3xl font-black text-white drop-shadow-[0_2px_10px_rgba(251,191,36,0.5)] md:text-4xl">
        恭喜完成！
      </h2>

      <!-- 關卡名稱 -->
      <div class="mb-4 rounded-full border border-amber-400/30 bg-amber-400/20 px-4 py-1.5 text-lg font-bold text-amber-300">
        {{ chapterTitle }}
      </div>

      <!-- 玩家名稱 -->
      <p class="mb-8 text-xl font-bold text-white/90">
        <span class="text-amber-400">{{ playerName }}</span>，你做到了！
      </p>

      <!-- 繼續按鈕 -->
      <button
        class="rounded-xl border border-amber-400/40 bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-3 text-lg font-black text-white shadow-lg shadow-amber-500/30 transition-all hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-500/50 active:scale-[0.98]"
        type="button"
        @click="emit('close')"
      >
        繼續前進
      </button>
    </div>
  </div>
</template>
