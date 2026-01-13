import type { ChapterConfig, ChapterNode } from './types'

const nodes: ChapterNode[] = [
  // ===== 開場對話 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '早安！看起來精神不錯嘛，昨天有好好休息吧？',
    scene: 'meeting',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '📋 今日任務文件：https://hackmd.io/1H8XMmxXSXOGmvL2L70pwQ?view',
    scene: 'meeting',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '早安海姐！我昨天回去又把規格書看了一遍，感覺更清楚了。',
    scene: 'meeting',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '很好，有這個態度我就放心了。今天我們要正式進入開發環境了。',
    scene: 'meeting',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '太好了！我已經準備好要寫程式了！',
    scene: 'meeting',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(笑) 別急，在你動手寫任何一行程式之前，你得先學會一件事——如何把程式碼「拿到手」。',
    scene: 'meeting',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '拿到手？不就是下載嗎？',
    scene: 'meeting',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '在軟體開發的世界裡，我們用的是 Git 和 GitHub。這是每個工程師的必備技能。',
    scene: 'meeting',
    coachExpression: 'normal',
  },

  // ===== 介紹 Git =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '先來認識 Git 吧。Git 是一個「版本控制系統」，就像是程式碼的時光機。',
    scene: 'meeting',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '版本控制？像是報告_v1、報告_v2、報告_最終版那樣嗎？',
    scene: 'meeting',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(拍手) 完全正確！Git 就是幫你自動管理這些版本，而且更聰明、更有條理。',
    scene: 'meeting',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: 'Git 可以記錄每一次的修改歷史、讓你隨時回到過去的版本、也能讓多人同時協作開發。',
    scene: 'meeting',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '說再多不如動手做！來，海姐帶你進互動實驗室，親手體驗一下 Git 的魔力。',
    scene: 'meeting',
    coachExpression: 'praise',
  },

  // ===== Git 互動簡報 =====
  {
    type: 'interactiveSlide',
    slideId: 'git-intro',
    title: 'Git 互動實驗室',
    scene: 'meeting',
    coachExpression: 'normal',
  },

  {
    type: 'dialogue',
    speaker: '你',
    text: '哇！原來 Git 是這樣運作的，我懂了！',
    scene: 'meeting',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(滿意地點頭) 不錯嘛，有了這個基礎，接下來的概念對你來說就是小菜一碟了。',
    scene: 'meeting',
    coachExpression: 'praise',
  },

  // ===== 介紹 GitHub =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '那 GitHub 呢？它是一個「程式碼託管平台」，你可以把它想成程式碼的雲端硬碟。',
    scene: 'meeting',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '所以 Git 是工具，GitHub 是平台？',
    scene: 'meeting',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '沒錯！Git 裝在你的電腦上負責版本控制，GitHub 在網路上負責儲存和分享程式碼。',
    scene: 'meeting',
    coachExpression: 'praise',
  },

  // ===== 介紹 Clone =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '接下來要介紹一個重要的操作：Clone。',
    scene: 'meeting',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: 'Clone（克隆）就是把 GitHub 上的專案「下載到你的電腦」。',
    scene: 'meeting',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '就像把雲端上的檔案抓到本地嗎？',
    scene: 'meeting',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '沒錯！Clone 之後，你的電腦裡就會有一份完整的專案程式碼，可以開始修改和開發。',
    scene: 'meeting',
    coachExpression: 'praise',
  },

  // ===== 發現專案是 Public 的驚訝劇情 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '好，現在讓我把 LiveFit 的專案連結給你⋯⋯',
    scene: 'meeting',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '等等，這⋯⋯什麼？！',
    scene: 'meeting',
    coachExpression: 'shocked',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '這個專案竟然是 Public 的？！',
    scene: 'meeting',
    coachExpression: 'shocked',
    image: '/images/content/private-git.png',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: 'Public？那是什麼意思？',
    scene: 'meeting',
    coachExpression: 'sigh',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: 'Public 就是「公開」的意思。全世界任何人都可以看到這個專案的程式碼！',
    scene: 'meeting',
    coachExpression: 'sigh',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '後端專案通常會設成 Private（私人），因為裡面可能有資料庫連線、API 金鑰等敏感資訊⋯⋯',
    scene: 'meeting',
    coachExpression: 'sigh',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '前任後端⋯⋯竟然把專案完全公開在網路上⋯⋯',
    scene: 'meeting',
    coachExpression: 'sigh',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '這樣很危險嗎？',
    scene: 'meeting',
    coachExpression: 'sigh',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '非常危險！如果程式碼有漏洞，駭客就能直接研究怎麼攻擊我們的系統。',
    scene: 'meeting',
    coachExpression: 'angry',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(嘆氣) 算了，這就是我們接手的現況。之後記得幫我把敏感資訊處理好。',
    scene: 'meeting',
    coachExpression: 'sigh',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '現在先專心把專案抓下來吧，其他的之後再處理。',
    scene: 'meeting',
    coachExpression: 'sigh',
  },

  // ===== 進入測驗 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '好，理論講完了。來接受我的小考吧！',
    scene: 'meeting',
    coachExpression: 'normal',
  },

  // ===== 測驗題目 =====
  {
    type: 'quiz',
    title: 'Git 與 GitHub 小考',
    scene: 'meeting',
    coachExpression: 'praise',
    questions: [
      {
        id: 'g1',
        prompt: 'Git 是什麼類型的工具？',
        options: [
          { id: 'a', label: '版本控制系統' },
          { id: 'b', label: '程式編輯器' },
          { id: 'c', label: '雲端儲存平台' },
        ],
        correctOptionId: 'a',
        explanation: 'Git 是一個版本控制系統，用來追蹤程式碼的修改歷史。',
      },
      {
        id: 'g2',
        prompt: 'GitHub 與 Git 的關係是什麼？',
        options: [
          { id: 'a', label: 'GitHub 是 Git 的付費版本' },
          { id: 'b', label: 'Git 是版本控制工具，GitHub 是託管平台' },
          { id: 'c', label: 'Git 和 GitHub 是同一個東西的不同名稱' },
        ],
        correctOptionId: 'b',
        explanation: 'Git 是安裝在電腦上的版本控制工具，GitHub 是在網路上的程式碼託管平台。',
      },
      {
        id: 'g3',
        prompt: 'Clone 的作用是什麼？',
        options: [
          { id: 'a', label: '把 GitHub 上的專案下載到本地電腦' },
          { id: 'b', label: '把專案上傳到 GitHub' },
          { id: 'c', label: '建立新的分支' },
        ],
        correctOptionId: 'a',
        explanation: 'Clone 是把 GitHub 上的專案下載到你的本地電腦。',
      },
      {
        id: 'g4',
        prompt: 'Git 可以做到以下哪件事？',
        options: [
          { id: 'a', label: '讓程式碼執行得更快' },
          { id: 'b', label: '記錄每一次的修改歷史，讓你可以回到過去的版本' },
          { id: 'c', label: '自動修復程式碼的 Bug' },
        ],
        correctOptionId: 'b',
        explanation: 'Git 可以記錄每一次的修改歷史，讓你隨時回到過去的版本。',
      },
      {
        id: 'g5',
        prompt: 'GitHub 上的 Public 專案代表什麼？',
        options: [
          { id: 'a', label: '只有團隊成員可以看到' },
          { id: 'b', label: '任何人都可以看到這個專案的程式碼' },
          { id: 'c', label: '專案已經被刪除' },
        ],
        correctOptionId: 'b',
        explanation: 'Public（公開）代表任何人都可以在網路上看到這個專案的程式碼。',
      },
      {
        id: 'g6',
        prompt: '為什麼後端專案通常會設成 Private？',
        options: [
          { id: 'a', label: '因為程式碼很醜不想被看到' },
          { id: 'b', label: '避免程式碼漏洞被駭客研究、找到攻擊方式' },
          { id: 'c', label: '因為 GitHub 強制要求' },
        ],
        correctOptionId: 'b',
        explanation: '後端專案設成 Private 可以避免程式碼被公開，減少駭客研究漏洞、找到攻擊方式的風險。',
      },
      {
        id: 'g7',
        prompt: 'Clone 完成後，專案會出現在哪裡？',
        options: [
          { id: 'a', label: '你的 GitHub 帳號上' },
          { id: 'b', label: '你的本機電腦上' },
          { id: 'c', label: '雲端伺服器上' },
        ],
        correctOptionId: 'b',
        explanation: 'Clone 會把專案下載到你的本機電腦上，讓你可以開始開發。',
      },
    ],
  },

  // ===== 測驗完成後的對話 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(滿意地點頭) 很好！看來你已經掌握 Git 和 GitHub 的基本概念了。',
    scene: 'meeting',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: 'Git 和 GitHub 是工程師的基本功，就像廚師要會用刀一樣。用久了就會變成直覺。',
    scene: 'meeting',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '我會好好練習的！那接下來呢？',
    scene: 'meeting',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '今天先把專案拿到手，明天我們再來把它跑起來！記得好好休息。',
    scene: 'meeting',
    coachExpression: 'normal',
  },

  // ===== 慶祝完成 =====
  {
    type: 'celebration',
    chapterTitle: '第二天：把程式碼拿到手',
    scene: 'meeting',
    coachExpression: 'normal',
  },
]

export const chapter2: ChapterConfig = {
  id: 2,
  title: '第二天：把程式碼拿到手',
  nodes,
}
