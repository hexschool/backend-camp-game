<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { usePlayerStore } from '../stores/player'
import { useProgressStore } from '../stores/progress'
import { verifyPassword } from '../utils/cipher'

const router = useRouter()
const player = usePlayerStore()
const progress = useProgressStore()

const baseUrl = import.meta.env.BASE_URL

onMounted(() => {
  player.loadFromStorage()
  progress.loadFromStorage()
  window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
})

const playerName = computed(() => player.name || '玩家')
const endingType = computed(() => progress.endingType)
const endingScore = computed(() => progress.endingScore)

// 結局階段控制
const stage = ref(0)
const showHiddenEnding = ref(false)

// 結局內容
const endings = {
  bad: {
    title: '過勞',
    icon: '💀',
    color: 'rose',
    dialogues: [
      { speaker: '旁白', text: '專案勉強上線了，但到處都是 Bug。', coachExpression: 'normal' },
      { speaker: '旁白', text: '你看著滿屏的錯誤回報，開始瘋狂地修復。', coachExpression: 'normal' },
      { speaker: '旁白', text: '凌晨一點...兩點...三點...', coachExpression: 'normal' },
      { speaker: '旁白', text: '螢幕上的字開始變得模糊。', coachExpression: 'normal' },
      { speaker: '你', text: '再一下...再修一個就好...', coachExpression: 'normal' },
      { speaker: '旁白', text: '突然，手機響起。', coachExpression: 'normal' },
      { speaker: '海克絲', text: '喂？{playerName}？你還在公司嗎？', coachExpression: 'normal' },
      { speaker: '旁白', text: '你想回答，但聲音發不出來。', coachExpression: 'normal' },
      { speaker: '海克絲', text: '喂？你還好嗎？喂！', coachExpression: 'normal' },
      { speaker: '旁白', text: '畫面逐漸變暗...', coachExpression: 'normal' },
      { speaker: '海克絲', text: '我以前也是這樣的...', coachExpression: 'normal' },
      { speaker: '海克絲', text: '休息不是偷懶，是為了走更長的路。', coachExpression: 'normal' },
      { speaker: '海克絲', text: '好好休息吧。等你準備好了，我們再一起努力。', coachExpression: 'praise' },
    ],
  },
  normal: {
    title: '封印',
    icon: '🌑',
    color: 'sky',
    dialogues: [
      { speaker: '旁白', text: '你被系統通知吵醒。', coachExpression: 'normal' },
      { speaker: '系統', text: 'LiveFit 已成功部署上線。', coachExpression: 'normal' },
      { speaker: '旁白', text: '你打開手機，沒有海克絲的訊息。', coachExpression: 'normal' },
      { speaker: '旁白', text: '打開後台一看，發現有幾個小 Bug 被回報了。', coachExpression: 'normal' },
      { speaker: '你', text: '果然...還是有漏掉的地方。', coachExpression: 'normal' },
      { speaker: '旁白', text: '你嘆了口氣，開始修 Bug。', coachExpression: 'normal' },
      { speaker: '旁白', text: '雖然專案上線了，但心裡總覺得...好像少了什麼。', coachExpression: 'normal' },
      { speaker: '你', text: '也許...我還需要再努力一點。', coachExpression: 'normal' },
    ],
  },
  true: {
    title: '覺醒',
    icon: '🌟',
    color: 'emerald',
    dialogues: [
      { speaker: '旁白', text: '陽光照進房間，你被手機訊息吵醒。', coachExpression: 'normal' },
      { speaker: '海克絲', text: '早安，正式的後端工程師。', coachExpression: 'praise' },
      { speaker: '海克絲', text: 'LiveFit 第一天就有 500 人註冊，後端穩穩的，沒有任何 Bug。', coachExpression: 'praise' },
      { speaker: '旁白', text: '你看著訊息，嘴角不自覺地上揚。', coachExpression: 'normal' },
      { speaker: '海克絲', text: '還記得第一天你連環境都架不起來嗎？', coachExpression: 'normal' },
      { speaker: '海克絲', text: '現在的你，已經能獨立扛起整個後端了。', coachExpression: 'praise' },
      { speaker: '海克絲', text: '這是你應得的。記住這種感覺——穩健帶來的踏實。', coachExpression: 'praise' },
      { speaker: '海克絲', text: '後端的路還很長，但我相信你已經準備好了。', coachExpression: 'normal' },
      { speaker: '海克絲', text: '加油，{playerName}。', coachExpression: 'praise' },
    ],
  },
  hidden: {
    title: '傳承',
    icon: '🔮',
    color: 'amber',
    dialogues: [
      { speaker: '旁白', text: '你正準備關掉手機，突然收到一封新信件。', coachExpression: 'normal' },
      { speaker: '系統', text: '寄件者：海克絲\n主旨：給你的一封信', coachExpression: 'normal' },
      { speaker: '旁白', text: '你點開信件。', coachExpression: 'normal' },
      { speaker: '海克絲', text: '{playerName}，\n\n恭喜你正式成為正職員工！你好棒！\n\n附件裡有一個壓縮檔，是我想送給你的禮物。\n\n密碼的話...你應該知道的 😉\n\n—— 海姐', coachExpression: 'praise' },
      { speaker: '旁白', text: '你看著附件，想起了第七天在資料庫裡看到的那串亂碼。', coachExpression: 'normal' },
      { speaker: '輸入密碼', text: '__PASSWORD_INPUT__', coachExpression: 'normal' },
      { speaker: '旁白', text: '解壓縮成功！', coachExpression: 'normal' },
      { speaker: '旁白', text: '裡面是一個影片檔：「給未來的你.mp4」', coachExpression: 'normal' },
      { speaker: '旁白', text: '你點開播放。', coachExpression: 'normal' },
      { speaker: '旁白', text: '海克絲出現在畫面中，背景是健身房的辦公室。', coachExpression: 'normal' },
      { speaker: '海克絲', text: '嗨，{playerName}。', coachExpression: 'normal' },
      { speaker: '海克絲', text: '如果你看到這個影片，代表你真的做到了。全部的測驗都答對，還找到了那串亂碼。', coachExpression: 'praise' },
      { speaker: '海克絲', text: '我想跟你分享一些事情。', coachExpression: 'normal' },
      { speaker: '旁白', text: '她停頓了一下，眼神變得柔和。', coachExpression: 'normal' },
      { speaker: '海克絲', text: '看到你，就像是看到以前的我一樣。', coachExpression: 'normal' },
      { speaker: '海克絲', text: '以前的我剛進入接案公司，雖然每天都忙到三更半夜，但至少團隊成員感情都很不錯。再加上後端工程師可以整合很多系統，會感到很有成就感。', coachExpression: 'normal' },
      { speaker: '海克絲', text: '但後來...換了新主管，接了很多不良客戶。加班到凌晨變成家常便飯。', coachExpression: 'normal' },
      { speaker: '海克絲', text: '更重要的是，我很內耗。不懂得拒絕，不懂得要好好照顧自己。', coachExpression: 'normal' },
      { speaker: '旁白', text: '她苦笑了一下。', coachExpression: 'normal' },
      { speaker: '海克絲', text: '甚至還暈倒，搭上救護車呢。', coachExpression: 'normal' },
      { speaker: '海克絲', text: '是後來遇到瑜伽跟健身，才慢慢平緩下來。', coachExpression: 'normal' },
      { speaker: '海克絲', text: '所以我希望你，一定要以自己為優先。好好照顧好自己，才有多餘的能力照顧他人。', coachExpression: 'praise' },
      { speaker: '旁白', text: '她的表情變得認真。', coachExpression: 'normal' },
      { speaker: '海克絲', text: '再次恭喜你成為正職。', coachExpression: 'praise' },
      { speaker: '海克絲', text: '其實當我第七天看到你認真攻略資料庫的時候，我就認定你一定可以突破這次上線的挑戰。', coachExpression: 'normal' },
      { speaker: '海克絲', text: '這樣的決心和耐力，表示你真的很有潛能成為軟體工程師。', coachExpression: 'praise' },
      { speaker: '海克絲', text: '很多人都會認為工程師需要天賦才可以。但其實以前的我，也是天天被前輩念到長大。', coachExpression: 'normal' },
      { speaker: '海克絲', text: '前輩跟我說過一句話——', coachExpression: 'normal' },
      { speaker: '海克絲', text: '「人的一生就像是馬拉松。我們很常高估自己一年可以做的事，卻低估自己二三十年後的成長。」', coachExpression: 'normal' },
      { speaker: '海克絲', text: '慢慢成長，才是比較快的。', coachExpression: 'praise' },
      { speaker: '旁白', text: '影片畫面開始慢慢變暗。', coachExpression: 'normal' },
      { speaker: '海克絲', text: '看到這裡，影片也即將到尾聲了。', coachExpression: 'normal' },
      { speaker: '海克絲', text: '最後想和你說三件事。', coachExpression: 'normal' },
      { speaker: '海克絲', text: '第一，你真的很棒。', coachExpression: 'praise' },
      { speaker: '海克絲', text: '第二，你不用一開始就很厲害，但要開始才會很厲害。', coachExpression: 'normal' },
      { speaker: '海克絲', text: '第三...', coachExpression: 'normal' },
      { speaker: '旁白', text: '她露出溫暖的笑容。', coachExpression: 'praise' },
      { speaker: '海克絲', text: '只要你不放棄自己，海姐也不會放棄你。', coachExpression: 'praise' },
      { speaker: '海克絲', text: '加油，{playerName}。', coachExpression: 'praise' },
      { speaker: '旁白', text: '影片結束。', coachExpression: 'normal' },
      { speaker: '旁白', text: '你關掉影片，看著窗外的陽光。', coachExpression: 'normal' },
      { speaker: '你', text: '謝謝你，海姐。', coachExpression: 'praise' },
    ],
  },
}

// 取得目前結局
const currentEnding = computed(() => {
  if (showHiddenEnding.value) {
    return endings.hidden
  }
  return endings[endingType.value as keyof typeof endings] || endings.bad
})

// 目前對話
const currentDialogue = computed(() => {
  const dialogues = currentEnding.value.dialogues
  if (stage.value >= dialogues.length) return null
  const d = dialogues[stage.value]
  return {
    ...d,
    text: d.text.replace(/{playerName}/g, playerName.value),
  }
})

// 是否結束
const isFinished = computed(() => {
  return stage.value >= currentEnding.value.dialogues.length
})

// 是否可以觸發彩蛋結局（完美結局或彩蛋結局條件 + Day 7 道具）
const canTriggerHidden = computed(() => {
  const isEligible = endingType.value === 'true' || endingType.value === 'hidden'
  return isEligible && !showHiddenEnding.value && progress.hasDay7Item
})

// 彩蛋結局密碼輸入
const passwordInput = ref('')
const passwordError = ref('')

// 檢查當前是否為密碼輸入節點
const isPasswordInputNode = computed(() => {
  return currentDialogue.value?.text === '__PASSWORD_INPUT__'
})

// 可以回上一句
const canGoBack = computed(() => stage.value > 0 && !isPasswordInputNode.value)

// 場景與教練圖片
const sceneUrl = computed(() => `${baseUrl}images/scene/normal.png`)
const coachUrl = computed(() => {
  const expression = currentDialogue.value?.coachExpression || 'normal'
  return `${baseUrl}images/coach/${expression}.png`
})

// 說話者標籤樣式
const speakerTagClass = computed(() => {
  const speaker = currentDialogue.value?.speaker
  if (speaker === '海克絲') return 'border-amber-400/35 bg-amber-400/20 text-amber-200'
  if (speaker === '你') return 'border-sky-400/35 bg-sky-400/20 text-sky-200'
  if (speaker === '系統') return 'border-emerald-400/35 bg-emerald-400/20 text-emerald-200'
  return 'border-slate-400/35 bg-slate-400/20 text-slate-200'
})

const speakerLabel = computed(() => {
  const speaker = currentDialogue.value?.speaker
  if (speaker === '你') return playerName.value
  return speaker || '旁白'
})

function nextDialogue() {
  if (isPasswordInputNode.value) return
  if (stage.value < currentEnding.value.dialogues.length) {
    stage.value++
  }
}

function goBack() {
  if (stage.value > 0) {
    stage.value--
  }
}

function submitPassword() {
  if (!player.name) {
    passwordError.value = '找不到玩家名字，請重新開始遊戲'
    return
  }

  if (verifyPassword(passwordInput.value, player.name)) {
    passwordError.value = ''
    stage.value++
  } else {
    passwordError.value = '密碼錯誤，請再試一次'
  }
}

function triggerHiddenEnding() {
  showHiddenEnding.value = true
  stage.value = 0
}

function goHome() {
  router.push({ name: 'start' })
}

// 鍵盤支援
function onKeyDown(e: KeyboardEvent) {
  if (isPasswordInputNode.value) return
  if (isFinished.value) return

  if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
    e.preventDefault()
    nextDialogue()
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault()
    if (canGoBack.value) goBack()
  }
}
</script>

<template>
  <!-- 主容器 -->
  <div class="flex min-h-screen min-h-[100dvh] flex-col bg-slate-950 pt-14">
    <!-- 背景層 -->
    <div class="pointer-events-none fixed inset-0 z-0">
      <div class="absolute inset-0 bg-cover bg-center scale-[1.02] saturate-95" :style="{ backgroundImage: `url(${sceneUrl})` }" />
      <div class="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_90%,rgba(2,6,23,0),rgba(2,6,23,0.7))]" />
    </div>

    <!-- 頂部導航列 -->
    <header class="fixed inset-x-0 top-0 z-20 grid grid-cols-[auto_1fr_auto] items-center gap-2.5 px-4 py-3">
      <button
        class="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-extrabold text-white hover:bg-white/15 active:scale-[0.99]"
        type="button"
        @click="goHome"
      >
        返回首頁
      </button>
      <div class="text-center text-sm font-black text-white/90">
        {{ isFinished ? `結局：${currentEnding.title}` : '結局動畫' }}
      </div>
      <div class="w-10" />
    </header>

    <!-- 中間內容區 -->
    <main class="relative z-10 flex flex-1 flex-col justify-end">
      <!-- 教練圖片區域 -->
      <div v-if="!isFinished" class="pointer-events-none fixed inset-x-0 z-0 flex items-end justify-center" style="top: 56px; bottom: 160px;">
        <img
          class="h-full w-auto max-w-[85vw] object-contain object-bottom"
          :src="coachUrl"
          alt="海克絲"
        />
      </div>

      <!-- 結局完成畫面 -->
      <div v-if="isFinished" class="flex flex-1 flex-col items-center justify-center px-4">
        <div class="mb-8 text-center">
          <div class="mb-4 text-6xl">{{ currentEnding.icon }}</div>
          <h1 class="mb-2 text-3xl font-bold text-white">
            {{ showHiddenEnding ? '達成彩蛋結局' : '結局' }}
          </h1>
          <p
            class="text-2xl font-bold"
            :class="{
              'text-rose-400': currentEnding.color === 'rose',
              'text-sky-400': currentEnding.color === 'sky',
              'text-emerald-400': currentEnding.color === 'emerald',
              'text-amber-400': currentEnding.color === 'amber',
            }"
          >
            「{{ currentEnding.title }}」
          </p>
          <p class="mt-2 text-sm text-white/50">結局分數：{{ endingScore }}%</p>
        </div>

        <!-- 彩蛋結局觸發按鈕 -->
        <div v-if="canTriggerHidden" class="text-center">
          <p class="mb-4 text-white/60">等等...手機又響了？</p>
          <button
            class="rounded-xl border border-amber-500/50 bg-amber-900/30 px-6 py-3 font-semibold text-amber-400 transition-all hover:border-amber-400 hover:bg-amber-900/50"
            @click="triggerHiddenEnding"
          >
            查看新訊息
          </button>
        </div>

        <!-- 返回首頁按鈕 -->
        <button
          v-if="!canTriggerHidden"
          class="mt-4 rounded-xl border border-white/20 bg-slate-800/50 px-6 py-3 font-semibold text-white transition-all hover:border-white/40 hover:bg-slate-800"
          @click="goHome"
        >
          返回首頁
        </button>
      </div>

      <!-- 對話框區域 -->
      <div v-if="!isFinished" class="relative z-20 px-3 pb-safe-bottom md:pb-6">
        <div class="mx-auto w-full max-w-[1100px] rounded-2xl border border-white/15 bg-slate-950/95 p-4 backdrop-blur">
          <!-- 說話者標籤 -->
          <div class="mb-2 inline-flex items-center rounded-full border px-3 py-1 text-sm font-black" :class="speakerTagClass">
            {{ speakerLabel }}
          </div>

          <!-- 對話內容 / 密碼輸入 -->
          <div class="min-h-[72px] whitespace-pre-wrap text-white/90 leading-7 font-semibold">
            <template v-if="!isPasswordInputNode">
              {{ currentDialogue?.text }}
            </template>
            <template v-else>
              <p class="mb-4">請輸入解壓縮密碼...</p>
              <input
                v-model="passwordInput"
                type="text"
                class="mb-3 w-full max-w-md rounded-xl border border-white/20 bg-slate-800 px-4 py-3 text-white placeholder-white/40 focus:border-amber-400/50 focus:outline-none"
                placeholder="輸入密碼..."
                @keyup.enter="submitPassword"
              />
              <p v-if="passwordError" class="mb-3 text-sm text-rose-400">
                {{ passwordError }}
              </p>
              <button
                class="rounded-xl border border-amber-500/50 bg-amber-900/30 px-6 py-3 font-semibold text-amber-400 transition-all hover:border-amber-400 hover:bg-amber-900/50"
                @click="submitPassword"
              >
                確認
              </button>
              <p class="mt-3 text-xs text-white/30">
                提示：還記得第七天拿到的那串亂碼嗎？
              </p>
            </template>
          </div>

          <!-- 按鈕區 -->
          <div v-if="!isPasswordInputNode" class="mt-3 flex justify-end gap-2.5">
            <button
              class="rounded-xl border border-white/20 bg-white/10 px-3 py-2 font-black text-white hover:bg-white/15 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-30"
              type="button"
              :disabled="!canGoBack"
              @click="goBack"
            >
              上一句
            </button>
            <button
              class="rounded-xl border border-amber-300/35 bg-amber-300/20 px-3 py-2 font-black text-white hover:bg-amber-300/25 active:scale-[0.99]"
              type="button"
              @click="nextDialogue"
            >
              下一句
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.pb-safe-bottom {
  padding-bottom: max(1.5rem, env(safe-area-inset-bottom));
}
</style>
