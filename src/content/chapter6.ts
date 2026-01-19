import type { ChapterConfig, ChapterNode } from './types'

const nodes: ChapterNode[] = [
  // ===== 開場 =====
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '📋 今日任務文件：https://hackmd.io/lqJOD_PJTRepkArlKV57yg',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '對了，你對資料庫的部分熟悉了嗎？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '呃...還沒有很熟...',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(驚訝) 什麼？你應該知道我們是用 PostgreSQL 吧？那你對資料庫的概念熟嗎？',
    scene: 'normal',
    coachExpression: 'shocked',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '(一臉茫然) PostgreSQL...是那個有大象圖案的嗎？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(笑了笑) 其實沒那麼難啦！你有用過 Excel 嗎？',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '當然有啊！我還會用公式算成績呢！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '那你就已經知道一半的資料庫概念了！',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '真的嗎？Excel 跟資料庫有什麼關係？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '資料庫就像一堆有組織的 Excel 表格。今天我們先來認識什麼是「資料表」，以及 LiveFit 用了哪些表。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '讓我用簡報解釋給你看，先從「資料表設計」的基本概念開始！',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 第一個互動簡報：資料表設計入門 =====
  {
    type: 'interactiveSlide',
    slideId: 'table-design',
    title: '資料表設計入門',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 簡報後對話：銜接概念 =====
  {
    type: 'dialogue',
    speaker: '你',
    text: '原來如此！所以主鍵就像身分證號碼，外來鍵就是連到別張表的暗號！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(點頭) 完全正確！你抓到重點了。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '而且正規化很重要——把表格拆開，避免重複輸入和修改災難。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '我懂了！那 LiveFit 的資料表長什麼樣子呢？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(露出滿意的微笑) 問得好！其實 LiveFit 的資料庫裡有蠻多張資料表的...',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '像是使用者、教練、課程、預約紀錄、堂數方案、購買紀錄、技能...加起來超過十張！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '(驚訝) 這麼多！？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '別擔心，今天我們先認識其中 4 張最核心的資料表就好。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '分別是：堂數方案表、技能表、使用者表、還有購買紀錄表。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '搞懂這 4 張表，你就能理解 LiveFit 的核心運作邏輯了！',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '好！那我們開始吧！',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 第二個互動簡報：LiveFit 資料庫探險 =====
  {
    type: 'interactiveSlide',
    slideId: 'livefit-database',
    title: 'LiveFit 資料庫探險',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 簡報後對話 =====
  {
    type: 'dialogue',
    speaker: '你',
    text: '哇！原來 LiveFit 背後有這麼多資料表在運作！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(點頭) 沒錯！你剛剛看到的 4 張表，就是 LiveFit 的核心。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '讓我整理一下... CREDIT_PACKAGE 是堂數方案，SKILL 是技能清單...',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: 'USER 是使用者資料，還可以用 role 區分學員和教練！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: 'CREDIT_PURCHASE 是購買紀錄，用外來鍵連到 USER 和 CREDIT_PACKAGE！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(鼓掌) 太棒了！你已經掌握 LiveFit 資料庫的全貌了。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '對了，你還記得為什麼購買紀錄要記錄「當時的價格」嗎？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '因為方案可能會漲價！所以要把購買當下的價格記錄下來！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(滿意地點頭) 很好！資料庫設計有很多細節要注意，你今天學得不錯。',
    scene: 'normal',
    coachExpression: 'praise',
  },

  // ===== 測驗前對話 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(收起笑容，語氣變得認真) 好，最後讓我考考你！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '這次有 13 題，分成兩部分：資料庫觀念 4 題，LiveFit 資料表 9 題。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '(深呼吸) 好，我準備好了！',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 測驗題目 =====
  {
    type: 'quiz',
    title: '資料表設計小考',
    scene: 'normal',
    coachExpression: 'praise',
    questions: [
      // Part 1: 資料庫觀念篇 (4 題)
      {
        id: 'q1',
        prompt: '主鍵（Primary Key）的特性是什麼？',
        options: [
          { id: 'a', label: '可以重複' },
          { id: 'b', label: '絕對不能重複，就像身分證號碼' },
          { id: 'c', label: '可以不填' },
        ],
        correctOptionId: 'b',
        explanation: '主鍵就像身分證號碼，每筆資料都有唯一的編號，絕對不能重複。',
      },
      {
        id: 'q2',
        prompt: '如果把「金額」欄位設定為數字，可以輸入「五十萬」嗎？',
        options: [
          { id: 'a', label: '可以，資料庫很彈性' },
          { id: 'b', label: '不行，資料庫會擋下來' },
          { id: 'c', label: '要看心情' },
        ],
        correctOptionId: 'b',
        explanation: '資料型態很重要！如果欄位設定為數字，就只能輸入數字，輸入文字會被擋下來。',
      },
      {
        id: 'q3',
        prompt: '為什麼要把資料「正規化」（拆成多張表）？',
        options: [
          { id: 'a', label: '看起來比較專業' },
          { id: 'b', label: '避免重複輸入，改一次就好' },
          { id: 'c', label: '電腦規定的' },
        ],
        correctOptionId: 'b',
        explanation: '正規化可以避免同一份資料重複出現，修改時只要改一個地方就好，不用改 100 個地方。',
      },
      {
        id: 'q4',
        prompt: '外來鍵（Foreign Key）的作用是什麼？',
        options: [
          { id: 'a', label: '讓表格變漂亮' },
          { id: 'b', label: '用編號連到別張表的資料' },
          { id: 'c', label: '加密用的' },
        ],
        correctOptionId: 'b',
        explanation: '外來鍵就是「連到別張表的暗號」，用編號來建立表格之間的關聯。',
      },

      // Part 2: LiveFit 資料表篇 (9 題)
      {
        id: 'q5',
        prompt: 'CREDIT_PACKAGE 表是用來存什麼資料？',
        options: [
          { id: 'a', label: '會員資料' },
          { id: 'b', label: '堂數方案（7堂、14堂、21堂組合包）' },
          { id: 'c', label: '課程時間' },
        ],
        correctOptionId: 'b',
        explanation: 'CREDIT_PACKAGE 表存放堂數方案，像是 7 堂、14 堂、21 堂的組合包。',
      },
      {
        id: 'q6',
        prompt: 'CREDIT_PACKAGE 表的 credit_amount 欄位代表什麼？',
        options: [
          { id: 'a', label: '價格' },
          { id: 'b', label: '這個方案有幾堂課' },
          { id: 'c', label: '建立時間' },
        ],
        correctOptionId: 'b',
        explanation: 'credit_amount 代表這個方案包含幾堂課，例如 7、14、21。',
      },
      {
        id: 'q7',
        prompt: 'SKILL 表的 name 欄位為什麼不能重複？',
        options: [
          { id: 'a', label: '因為一種技能只需要記錄一次' },
          { id: 'b', label: '為了省空間' },
          { id: 'c', label: '沒有原因' },
        ],
        correctOptionId: 'a',
        explanation: '每種技能只需要記錄一次，例如「重訓」只要有一筆資料就好，不需要重複。',
      },
      {
        id: 'q8',
        prompt: 'USER 表的 role 欄位有什麼作用？',
        options: [
          { id: 'a', label: '記錄使用者的年齡' },
          { id: 'b', label: '分辨是學員（user）還是教練（coach）' },
          { id: 'c', label: '記錄使用者的密碼' },
        ],
        correctOptionId: 'b',
        explanation: 'role 欄位用來分辨使用者的身份，user 代表學員，coach 代表教練。',
      },
      {
        id: 'q9',
        prompt: '王小明、李燕容、小美剛註冊時，他們的 role 是什麼？',
        options: [
          { id: 'a', label: '都是 coach' },
          { id: 'b', label: '都是 user' },
          { id: 'c', label: '有的是 user 有的是 coach' },
        ],
        correctOptionId: 'b',
        explanation: '剛註冊的會員預設都是 user（學員），要變成教練需要管理員升級。',
      },
      {
        id: 'q10',
        prompt: '如果李燕容想從學員變成教練，要怎麼做？',
        options: [
          { id: 'a', label: '重新註冊一個新帳號' },
          { id: 'b', label: '把她的 role 從 user 改成 coach' },
          { id: 'c', label: '刪除她的資料' },
        ],
        correctOptionId: 'b',
        explanation: '只要把 role 欄位從 user 改成 coach，李燕容就能從學員變成教練，不需要重新註冊。',
      },
      {
        id: 'q11',
        prompt: 'USER 表的 email 欄位為什麼不能重複？',
        options: [
          { id: 'a', label: '每個信箱只能註冊一次' },
          { id: 'b', label: '為了好看' },
          { id: 'c', label: '可以重複啊' },
        ],
        correctOptionId: 'a',
        explanation: '一個 Email 只能註冊一個帳號，這樣才能確保每個人只有一個帳號。',
      },
      {
        id: 'q12',
        prompt: 'CREDIT_PURCHASE 表的 user_id 是什麼意思？',
        options: [
          { id: 'a', label: '使用者的密碼' },
          { id: 'b', label: '連到 USER 表，代表「誰買的」' },
          { id: 'c', label: '購買金額' },
        ],
        correctOptionId: 'b',
        explanation: 'user_id 是外來鍵，連到 USER 表，記錄這筆購買是哪位會員買的。',
      },
      {
        id: 'q13',
        prompt: '為什麼購買紀錄要記錄「當時的價格」？',
        options: [
          { id: 'a', label: '因為方案可能會漲價，要保留購買當時的價格' },
          { id: 'b', label: '為了好看' },
          { id: 'c', label: '沒有原因' },
        ],
        correctOptionId: 'a',
        explanation: '方案價格可能會調整，把購買當下的價格記錄下來，才能保留正確的金額。',
      },
    ],
  },

  // ===== 測驗完成後的對話 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(滿意地點頭) 很好！你已經掌握資料表的基本觀念了。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '記住，資料庫是系統的心臟，資料出錯比畫面出錯嚴重多了。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '我懂了！主鍵不能重複、外來鍵建立關聯、正規化避免災難！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(露出欣慰的笑容) 今天先把「表格怎麼看」學起來，明天我們再來學怎麼用 SQL 操作資料。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '看懂資料表之間的關聯，你就能理解整個系統是怎麼運作的！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '謝謝海克絲！我現在知道 LiveFit 的資料是怎麼存放的了。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '好，今天就到這裡。回去好好消化，明天見！',
    scene: 'normal',
    coachExpression: 'praise',
  },

  // ===== 慶祝完成 =====
  {
    type: 'celebration',
    chapterTitle: '第六天：資料庫幼幼班',
    scene: 'normal',
    coachExpression: 'praise',
  },
]

export const chapter6: ChapterConfig = {
  id: 6,
  title: '第六天：資料庫幼幼班',
  nodes,
}
