import type { ChapterConfig, ChapterNode } from './types'

const nodes: ChapterNode[] = [
  // ===== 開場對話：合夥人催進度 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '早安！今天有個緊急狀況要跟你說。',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '怎麼了？發生什麼事？',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '我的合夥人剛傳訊息來，說她這週想看看專案目前的進度。',
    scene: 'sport',
    coachExpression: 'sigh',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '她不是工程師，但很在意產品能不能「跑起來」給她看。',
    scene: 'sport',
    coachExpression: 'sigh',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '所以⋯⋯我們要把專案跑起來給她看？',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '沒錯！但在那之前，我想先考考你⋯⋯',
    scene: 'sport',
    coachExpression: 'normal',
  },

  // ===== 選擇題情境對話 =====
  {
    type: 'choice',
    prompt: '你猜猜看，一個後端工程師剛進入新公司，最常見要做的第一件事是什麼？',
    options: [
      {
        id: 'a',
        label: '馬上開始寫新功能',
        response: '(捧腹大笑) 哈哈哈！太急了！你連專案長什麼樣子都不知道，怎麼寫新功能呢？',
        responseExpression: 'biglaugh',
        isCorrect: false,
      },
      {
        id: 'b',
        label: '把專案 Clone 下來，跑在自己的電腦上',
        response: '答對了！這才是正確的第一步。你得先把專案跑起來，才能開始理解它、修改它。',
        responseExpression: 'praise',
        isCorrect: true,
      },
      {
        id: 'c',
        label: '直接看程式碼找 Bug',
        response: '(忍不住笑出來) 哈哈，想法不錯，但你連專案都還沒跑起來，怎麼知道哪裡有 Bug？先讓它動起來才是王道。',
        responseExpression: 'biglaugh',
        isCorrect: false,
      },
      {
        id: 'd',
        label: '先去跟同事聊天認識環境',
        response: '(噗哧一笑) 社交很重要沒錯！但工程師的第一要務還是要先把開發環境搞定，才能真正開始工作啊。',
        responseExpression: 'biglaugh',
        isCorrect: false,
      },
    ],
    scene: 'sport',
    coachExpression: 'normal',
  },

  // ===== 解釋前端後端資料庫 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '好，既然要把專案跑起來，你得先搞懂這個專案到底是怎麼組成的。',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '一個完整的系統通常有三大部分：前端、後端、還有資料庫。',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '前端？後端？這三個有什麼不同？',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '讓我用電商網站來比喻。前端就像是網頁商城的頁面，商品展示、購物車、結帳畫面，是使用者看得到的部分。',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '後端就像是訂單處理中心，使用者看不到，但所有的訂單處理、庫存檢查、付款驗證都是在這裡完成的。',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '資料庫就像是商品倉庫，存放所有的會員資料、訂單紀錄、商品庫存。',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '原來如此！所以前端負責畫面，後端負責處理邏輯，資料庫負責存資料？',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(拍手) 完全正確！你理解得很快嘛。',
    scene: 'sport',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '來，我用互動的方式讓你更清楚這三層架構是怎麼運作的！',
    scene: 'sport',
    coachExpression: 'normal',
  },

  // ===== 系統架構互動式簡報 =====
  {
    type: 'interactiveSlide',
    slideId: 'architecture-intro',
    title: '系統架構入門',
    scene: 'sport',
    coachExpression: 'normal',
  },

  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '怎麼樣？現在對前端、後端、資料庫的分工應該很清楚了吧！',
    scene: 'sport',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '我們的 LiveFit 專案呢，前端用 Vue.js 寫的，後端是 Node.js，資料庫用 PostgreSQL。',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '這麼多東西，要怎麼在我的電腦上跑起來？',
    scene: 'sport',
    coachExpression: 'normal',
  },

  // ===== 介紹 Docker =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '好問題！這就要講到一個神奇的工具——Docker。',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '在軟體開發中，最常見的問題就是：「在我的電腦上可以跑啊！為什麼換一台電腦就壞掉了？」',
    scene: 'sport',
    coachExpression: 'sigh',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '聽起來很麻煩⋯⋯',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: 'Docker 就是來解決這個問題的！它可以把整個執行環境打包成一個「容器」。',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '想像你要搬家，與其把東西一件一件搬，不如把整個房間打包成一個貨櫃。',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '不管搬到哪裡，打開貨櫃就是一模一樣的環境！',
    scene: 'sport',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '哦！所以 Docker 就像是幫程式打包好的貨櫃？',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '沒錯！而且前任後端雖然把專案搞得一團糟，但至少有一件事做對了⋯⋯',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '他用 Docker 把整個環境打包好了。只要你安裝 Docker，一個指令就能把三個服務全部跑起來！',
    scene: 'sport',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '三個服務？',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '對，前端、後端、資料庫，各自跑在一個容器裡，但可以互相溝通。',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '來，我帶你用互動的方式理解 Docker 的運作原理！',
    scene: 'sport',
    coachExpression: 'praise',
  },

  // ===== Docker 互動式簡報 =====
  {
    type: 'interactiveSlide',
    slideId: 'docker-intro',
    title: 'Docker 互動實驗室',
    scene: 'sport',
    coachExpression: 'normal',
  },

  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '怎麼樣？現在應該對 Docker 和容器的概念更清楚了吧！',
    scene: 'sport',
    coachExpression: 'praise',
  },

  // ===== 主角好奇海克絲的背景 =====
  {
    type: 'dialogue',
    speaker: '你',
    text: '我很久以前就想問了⋯⋯海姐，你不是健身房老闆嗎？為什麼感覺懂得比我還多？',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(微微一笑) 哈，終於問了啊。',
    scene: 'sport',
    coachExpression: 'blush',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '其實我以前是工程師，還當過全端技術主管呢。寫了快十年的 Code。',
    scene: 'sport',
    coachExpression: 'proud',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '什麼！？那為什麼會轉行開健身房？',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '其實我以前重訓也當過瑜伽老師，後來想說來挑戰看看，把兩個專業結合起來。',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '工程師的經驗讓我知道怎麼設計系統，健身教練的經驗讓我知道怎麼照顧人。',
    scene: 'sport',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '所以就開了這間健身房，想做一個真正能幫助人的運動媒合平台。',
    scene: 'sport',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '原來是這樣⋯⋯難怪你講這些技術東西這麼順。',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(輕笑) 所以啊，你要是敢給我爆肝加班，我可是會直接把你從電腦前拖走的喔。',
    scene: 'sport',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '好、好的！我會注意的⋯⋯',
    scene: 'sport',
    coachExpression: 'normal',
  },

  // ===== 進入測驗 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '好，基本概念講完了。來驗收一下你學到了多少！',
    scene: 'sport',
    coachExpression: 'normal',
  },

  // ===== 測驗題目 =====
  {
    type: 'quiz',
    title: '前後端與 Docker 小考',
    scene: 'sport',
    coachExpression: 'praise',
    questions: [
      {
        id: 'd1',
        prompt: '前端的主要職責是什麼？',
        options: [
          { id: 'a', label: '使用者看到的畫面，負責互動與呈現' },
          { id: 'b', label: '處理商業邏輯和資料運算' },
          { id: 'c', label: '儲存所有的資料' },
        ],
        correctOptionId: 'a',
        explanation: '前端負責使用者看到的畫面，處理互動與呈現。',
      },
      {
        id: 'd2',
        prompt: '後端的主要職責是什麼？',
        options: [
          { id: 'a', label: '設計漂亮的使用者介面' },
          { id: 'b', label: '處理商業邏輯，決定要做什麼、怎麼做' },
          { id: 'c', label: '備份資料到雲端' },
        ],
        correctOptionId: 'b',
        explanation: '後端負責處理商業邏輯，是系統的大腦。',
      },
      {
        id: 'd3',
        prompt: '資料庫的主要職責是什麼？',
        options: [
          { id: 'a', label: '執行程式碼' },
          { id: 'b', label: '顯示網頁' },
          { id: 'c', label: '儲存所有資料（會員、訂單、商品等）' },
        ],
        correctOptionId: 'c',
        explanation: '資料庫負責儲存所有資料，像是倉庫一樣。',
      },
      {
        id: 'd4',
        prompt: '使用者點擊「購買課程」後，系統的處理順序是什麼？',
        options: [
          { id: 'a', label: '前端 → 後端 → 資料庫 → 後端 → 前端' },
          { id: 'b', label: '資料庫 → 後端 → 前端' },
          { id: 'c', label: '前端 → 資料庫 → 後端' },
        ],
        correctOptionId: 'a',
        explanation: '使用者操作前端，前端向後端發請求，後端存取資料庫，再回傳結果給前端顯示。',
      },
      {
        id: 'd5',
        prompt: 'Docker 主要解決什麼問題？',
        options: [
          { id: 'a', label: '讓程式碼執行得更快' },
          { id: 'b', label: '解決「在我的電腦可以跑，換台電腦就壞掉」的環境問題' },
          { id: 'c', label: '自動修復程式碼的 Bug' },
        ],
        correctOptionId: 'b',
        explanation: 'Docker 把執行環境打包起來，讓程式在任何電腦上都能用同樣的方式運行。',
      },
      {
        id: 'd6',
        prompt: 'Container（容器）是什麼？',
        options: [
          { id: 'a', label: '一種程式語言' },
          { id: 'b', label: 'Docker 打包出來的執行環境，像是一個貨櫃' },
          { id: 'c', label: '用來存放檔案的資料夾' },
        ],
        correctOptionId: 'b',
        explanation: 'Container 就是 Docker 打包出來的「貨櫃」，裡面包含程式碼和執行環境。',
      },
      {
        id: 'd7',
        prompt: '為什麼這個專案要用 Docker？',
        options: [
          { id: 'a', label: '因為程式碼太大，需要壓縮' },
          { id: 'b', label: '因為要確保每個人的開發環境一致，避免「在我電腦可以跑」的問題' },
          { id: 'c', label: '因為 Docker 是免費的' },
        ],
        correctOptionId: 'b',
        explanation: 'Docker 把執行環境打包成容器，讓專案在任何電腦上都能用同樣的方式運行，同時也方便管理多個服務。',
      },
      {
        id: 'd8',
        prompt: 'LiveFit 專案啟動後會有幾個 Container？',
        options: [
          { id: 'a', label: '1 個' },
          { id: 'b', label: '2 個' },
          { id: 'c', label: '3 個（前端、後端、資料庫）' },
        ],
        correctOptionId: 'c',
        explanation: 'LiveFit 有三個服務：前端、後端、資料庫，各自跑在一個容器裡。',
      },
      {
        id: 'd9',
        prompt: '前端服務跑在哪個 Port？',
        options: [
          { id: 'a', label: 'localhost:3000' },
          { id: 'b', label: 'localhost:8080' },
          { id: 'c', label: 'localhost:5432' },
        ],
        correctOptionId: 'a',
        explanation: '前端服務跑在 Port 3000。',
      },
      {
        id: 'd10',
        prompt: '如何確認後端服務是否正常運作？',
        options: [
          { id: 'a', label: '打開 localhost:3000 看 CSS 樣式是否正確' },
          { id: 'b', label: '打開 localhost:8080/healthcheck 看是否回傳 OK' },
          { id: 'c', label: '重新啟動電腦' },
        ],
        correctOptionId: 'b',
        explanation: '後端服務跑在 Port 8080，可以用 /healthcheck 端點確認是否正常。',
      },
    ],
  },

  // ===== 測驗完成後的對話 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(滿意地點頭) 很好！你已經掌握前後端和 Docker 的基本概念了。',
    scene: 'sport',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '那接下來就交給你嘍！',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '好的！我會照著教學把 Docker 裝好，然後把專案跑起來。',
    scene: 'sport',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '記得截圖給我看喔！這樣我才能跟合夥人報告進度。',
    scene: 'sport',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '加油，今天結束後你就能親眼看到 LiveFit 在你電腦上運作了！',
    scene: 'sport',
    coachExpression: 'praise',
  },

  // ===== 慶祝完成 =====
  {
    type: 'celebration',
    chapterTitle: '第三天：把專案跑起來',
    scene: 'sport',
    coachExpression: 'normal',
  },
]

export const chapter3: ChapterConfig = {
  id: 3,
  title: '第三天：把專案跑起來',
  nodes,
}
