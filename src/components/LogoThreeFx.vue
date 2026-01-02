<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'

const props = defineProps<{
  sparkleCount?: number
  padding?: number // 向外擴展的距離
}>()

const containerEl = ref<HTMLDivElement | null>(null)
const canvasEl = ref<HTMLCanvasElement | null>(null)
let cleanup: (() => void) | null = null

// 柔和圓形光點
function createSoftGlowTexture() {
  const size = 128
  const c = document.createElement('canvas')
  c.width = size
  c.height = size
  const ctx = c.getContext('2d')
  if (!ctx) return new THREE.Texture()

  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  g.addColorStop(0, 'rgba(255,255,255,1)')
  g.addColorStop(0.15, 'rgba(255,255,255,0.8)')
  g.addColorStop(0.4, 'rgba(255,255,255,0.3)')
  g.addColorStop(0.7, 'rgba(255,255,255,0.1)')
  g.addColorStop(1, 'rgba(255,255,255,0)')

  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)

  const tex = new THREE.CanvasTexture(c)
  tex.minFilter = THREE.LinearFilter
  tex.magFilter = THREE.LinearFilter
  return tex
}

// 四角星芒（十字型）
function createFourPointStarTexture() {
  const size = 256
  const c = document.createElement('canvas')
  c.width = size
  c.height = size
  const ctx = c.getContext('2d')
  if (!ctx) return new THREE.Texture()

  ctx.clearRect(0, 0, size, size)
  const cx = size / 2
  const cy = size / 2

  ctx.save()
  ctx.translate(cx, cy)

  // 中心發光核心
  const coreGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 0.12)
  coreGrad.addColorStop(0, 'rgba(255,255,255,1)')
  coreGrad.addColorStop(0.5, 'rgba(255,255,255,0.7)')
  coreGrad.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = coreGrad
  ctx.beginPath()
  ctx.arc(0, 0, size * 0.12, 0, Math.PI * 2)
  ctx.fill()

  // 繪製光芒
  ctx.globalCompositeOperation = 'lighter'

  const drawRay = (length: number, width: number, alpha: number) => {
    const rayGrad = ctx.createLinearGradient(-length, 0, length, 0)
    rayGrad.addColorStop(0, 'rgba(255,255,255,0)')
    rayGrad.addColorStop(0.35, `rgba(255,255,255,${alpha * 0.4})`)
    rayGrad.addColorStop(0.5, `rgba(255,255,255,${alpha})`)
    rayGrad.addColorStop(0.65, `rgba(255,255,255,${alpha * 0.4})`)
    rayGrad.addColorStop(1, 'rgba(255,255,255,0)')

    ctx.fillStyle = rayGrad
    ctx.beginPath()
    ctx.moveTo(-length, 0)
    ctx.lineTo(0, -width)
    ctx.lineTo(length, 0)
    ctx.lineTo(0, width)
    ctx.closePath()
    ctx.fill()
  }

  // 主十字
  drawRay(size * 0.48, size * 0.025, 0.95)
  ctx.rotate(Math.PI / 2)
  drawRay(size * 0.48, size * 0.025, 0.95)

  // 斜向十字（較短較細）
  ctx.rotate(Math.PI / 4)
  drawRay(size * 0.32, size * 0.015, 0.6)
  ctx.rotate(Math.PI / 2)
  drawRay(size * 0.32, size * 0.015, 0.6)

  ctx.restore()

  const tex = new THREE.CanvasTexture(c)
  tex.minFilter = THREE.LinearFilter
  tex.magFilter = THREE.LinearFilter
  return tex
}

// 六角星芒
function createSixPointStarTexture() {
  const size = 256
  const c = document.createElement('canvas')
  c.width = size
  c.height = size
  const ctx = c.getContext('2d')
  if (!ctx) return new THREE.Texture()

  ctx.clearRect(0, 0, size, size)
  const cx = size / 2
  const cy = size / 2

  ctx.save()
  ctx.translate(cx, cy)

  // 中心核心
  const coreGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 0.1)
  coreGrad.addColorStop(0, 'rgba(255,255,255,1)')
  coreGrad.addColorStop(0.6, 'rgba(255,255,255,0.6)')
  coreGrad.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = coreGrad
  ctx.beginPath()
  ctx.arc(0, 0, size * 0.1, 0, Math.PI * 2)
  ctx.fill()

  ctx.globalCompositeOperation = 'lighter'

  // 六條光芒
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3
    ctx.save()
    ctx.rotate(angle)

    const rayGrad = ctx.createLinearGradient(0, 0, size * 0.42, 0)
    rayGrad.addColorStop(0, 'rgba(255,255,255,0.9)')
    rayGrad.addColorStop(0.25, 'rgba(255,255,255,0.5)')
    rayGrad.addColorStop(1, 'rgba(255,255,255,0)')

    ctx.fillStyle = rayGrad
    ctx.beginPath()
    ctx.moveTo(0, -size * 0.018)
    ctx.lineTo(size * 0.42, 0)
    ctx.lineTo(0, size * 0.018)
    ctx.closePath()
    ctx.fill()

    ctx.restore()
  }

  ctx.restore()

  const tex = new THREE.CanvasTexture(c)
  tex.minFilter = THREE.LinearFilter
  tex.magFilter = THREE.LinearFilter
  return tex
}

onMounted(async () => {
  if (!containerEl.value || !canvasEl.value) return

  const canvas = canvasEl.value
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    premultipliedAlpha: true,
  })
  renderer.setClearColor(0x000000, 0)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))

  const scene = new THREE.Scene()
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
  camera.position.z = 2

  const resize = () => {
    const padding = props.padding ?? 0
    const baseW = containerEl.value?.clientWidth ?? 1
    const baseH = containerEl.value?.clientHeight ?? 1
    const w = baseW + padding * 2
    const h = baseH + padding * 2

    renderer.setSize(w, h, false)
    camera.left = -w / 2
    camera.right = w / 2
    camera.top = h / 2
    camera.bottom = -h / 2
    camera.updateProjectionMatrix()
  }

  const ro = new ResizeObserver(() => resize())
  ro.observe(containerEl.value)
  resize()

  // 建立紋理
  const softGlowTex = createSoftGlowTexture()
  const fourPointStarTex = createFourPointStarTexture()
  const sixPointStarTex = createSixPointStarTexture()

  const sparkleGroup = new THREE.Group()
  scene.add(sparkleGroup)

  const sparkleCount = props.sparkleCount ?? 60

  interface Sparkle {
    sprite: THREE.Sprite
    type: 'soft' | 'fourStar' | 'sixStar'
    speed: number
    phase: number
    baseScale: number
    rotationSpeed: number
    baseX: number
    baseY: number
    floatRadius: number
    floatSpeed: number
  }

  const sparkles: Sparkle[] = []
  const rand = (a: number, b: number) => a + Math.random() * (b - a)

  const createSparkle = (type: 'soft' | 'fourStar' | 'sixStar'): Sparkle => {
    let tex: THREE.Texture
    let baseScale: number
    let speed: number

    // 顏色選擇：主要是暖色調（金色、白色）
    const colorChoice = Math.random()
    let tint: THREE.Color
    if (colorChoice < 0.45) {
      // 金色/琥珀色
      tint = new THREE.Color().setHSL(0.11 + Math.random() * 0.04, 0.85, 0.85)
    } else if (colorChoice < 0.85) {
      // 純白/淡黃
      tint = new THREE.Color().setHSL(0.14, 0.2, 0.98)
    } else {
      // 淡藍色點綴
      tint = new THREE.Color().setHSL(0.58, 0.5, 0.92)
    }

    switch (type) {
      case 'fourStar':
        tex = fourPointStarTex
        baseScale = rand(35, 70)
        speed = rand(0.5, 1.0)
        break
      case 'sixStar':
        tex = sixPointStarTex
        baseScale = rand(28, 50)
        speed = rand(0.6, 1.1)
        break
      default:
        tex = softGlowTex
        baseScale = rand(10, 28)
        speed = rand(1.0, 2.2)
    }

    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      color: tint,
      opacity: 0,
      rotation: rand(0, Math.PI * 2),
    })

    const sprite = new THREE.Sprite(mat)
    sprite.scale.set(baseScale, baseScale, 1)
    sparkleGroup.add(sprite)

    return {
      sprite,
      type,
      speed,
      phase: rand(0, Math.PI * 2),
      baseScale,
      rotationSpeed: type === 'soft' ? 0 : rand(-0.2, 0.2),
      baseX: 0,
      baseY: 0,
      floatRadius: rand(1, 5),
      floatSpeed: rand(0.4, 1.2),
    }
  }

  const layoutSparkles = () => {
    const padding = props.padding ?? 0
    const w = (containerEl.value?.clientWidth ?? 1) + padding * 2
    const h = (containerEl.value?.clientHeight ?? 1) + padding * 2

    for (const s of sparkles) {
      // 橢圓形分佈，貼合 Logo 形狀（橫向寬、縱向窄）
      // 大星芒分佈在外圈，小光點在內圈
      const isLargeStar = s.type === 'fourStar' || s.type === 'sixStar'

      if (isLargeStar) {
        // 大星芒：分佈在 Logo 邊緣和角落
        const angle = rand(0, Math.PI * 2)
        const radiusX = w * rand(0.3, 0.48)
        const radiusY = h * rand(0.25, 0.45)
        const x = Math.cos(angle) * radiusX
        const y = Math.sin(angle) * radiusY
        s.baseX = x
        s.baseY = y
      } else {
        // 小光點：更均勻分佈，但稍微集中在中心
        const x = rand(-w * 0.42, w * 0.42)
        const y = rand(-h * 0.38, h * 0.38)
        s.baseX = x
        s.baseY = y
      }

      s.sprite.position.set(s.baseX, s.baseY, 0)
    }
  }

  // 建立閃爍點：大星芒較少，小光點較多
  const fourStarCount = Math.floor(sparkleCount * 0.15)
  const sixStarCount = Math.floor(sparkleCount * 0.1)
  const softCount = sparkleCount - fourStarCount - sixStarCount

  for (let i = 0; i < fourStarCount; i++) {
    sparkles.push(createSparkle('fourStar'))
  }
  for (let i = 0; i < sixStarCount; i++) {
    sparkles.push(createSparkle('sixStar'))
  }
  for (let i = 0; i < softCount; i++) {
    sparkles.push(createSparkle('soft'))
  }

  layoutSparkles()

  const ro2 = new ResizeObserver(() => {
    resize()
    layoutSparkles()
  })
  ro2.observe(containerEl.value)

  let raf = 0
  const clock = new THREE.Clock()

  const tick = () => {
    const t = clock.getElapsedTime()

    for (const s of sparkles) {
      // 閃爍動畫 - 使用不同的波形組合
      const wave1 = Math.sin(t * s.speed + s.phase)
      const wave2 = Math.sin(t * s.speed * 1.7 + s.phase * 0.5)
      const blinkValue = 0.5 + 0.35 * wave1 + 0.15 * wave2
      const blink = Math.pow(Math.max(0, blinkValue), 2.2)

      // 透明度
      const minOpacity = s.type === 'soft' ? 0.15 : 0.08
      const maxOpacity = s.type === 'soft' ? 0.75 : 0.92
      const mat = s.sprite.material as THREE.SpriteMaterial
      mat.opacity = minOpacity + (maxOpacity - minOpacity) * blink

      // 縮放脈動
      const scaleMultiplier = s.type === 'soft' ? 0.75 + 0.4 * blink : 0.65 + 0.5 * blink
      const sc = s.baseScale * scaleMultiplier
      s.sprite.scale.set(sc, sc, 1)

      // 星芒緩慢旋轉
      if (s.rotationSpeed !== 0) {
        mat.rotation += s.rotationSpeed * 0.016
      }

      // 輕微浮動
      const floatX = Math.sin(t * s.floatSpeed + s.phase) * s.floatRadius
      const floatY = Math.cos(t * s.floatSpeed * 0.8 + s.phase * 1.3) * s.floatRadius
      s.sprite.position.set(s.baseX + floatX, s.baseY + floatY, 0)
    }

    renderer.render(scene, camera)
    raf = window.requestAnimationFrame(tick)
  }
  raf = window.requestAnimationFrame(tick)

  cleanup = () => {
    window.cancelAnimationFrame(raf)
    ro.disconnect()
    ro2.disconnect()
    renderer.dispose()
    softGlowTex.dispose()
    fourPointStarTex.dispose()
    sixPointStarTex.dispose()
    sparkleGroup.clear()
  }
})

onUnmounted(() => {
  cleanup?.()
  cleanup = null
})
</script>

<template>
  <div ref="containerEl" class="absolute inset-0 overflow-visible">
    <canvas
      ref="canvasEl"
      class="pointer-events-none absolute"
      :style="{
        left: `-${props.padding ?? 0}px`,
        top: `-${props.padding ?? 0}px`,
        width: `calc(100% + ${(props.padding ?? 0) * 2}px)`,
        height: `calc(100% + ${(props.padding ?? 0) * 2}px)`,
      }"
    />
  </div>
</template>
