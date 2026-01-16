import type { ChapterConfig, ChapterNode } from './types'

const nodes: ChapterNode[] = [
  // ===== 開場對話：看到教練列表頁面 =====
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '今日任務文件：https://hackmd.io/D_v5KoZWR3Kg3Et2MWJHOg?view',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '你盯著 LiveFit 的教練列表頁面，看著一個個教練的照片和資料...',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '海克絲，我有個問題。這頁面上的教練資料，是從哪裡來的？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '難道是寫死在網頁裡面嗎？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(搖頭) 當然不是囉！你昨天不是才學過，會經常變動的資料要存在資料庫嗎？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '對對對，我記得！但是...資料庫的資料要怎麼跑到網頁上？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(微微一笑) 好問題！這些資料是從網路上「要」來的。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '從網路上要來的？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '對！你平常輸入一個網址，知道背後發生什麼事嗎？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '呃...網頁就跑出來了？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(笑) 那是你看到的結果。讓我告訴你背後發生了什麼事...',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 第一個互動遊戲：資料流填空 =====
  {
    type: 'interactiveSlide',
    slideId: 'drag-sort',
    title: '資料流填空挑戰',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 簡報後對話 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '怎麼樣？原來輸入網址背後有這麼多事情在發生吧！',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '原來如此！所以不是魔法，是有一整套流程在跑。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '那個名字就叫做「網路請求」，接下來我們來看簡報吧！',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 第二個互動簡報：什麼是網路請求 =====
  {
    type: 'interactiveSlide',
    slideId: 'network-request',
    title: '什麼是網路請求？',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 簡報後對話 =====
  {
    type: 'dialogue',
    speaker: '你',
    text: '喔～所以這就叫「網路請求」！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '原來我每天上網都在發網路請求，只是不知道而已。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(點頭) 沒錯！打開 Google、看 YouTube、滑 IG...通通都是網路請求。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '那這跟 API 有什麼關係？我一直聽到 API 這個詞...',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '問得好！API 就是一種網路請求，差別只在於「回傳什麼」。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '讓我用簡報解釋給你看...',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 第三個互動簡報：什麼是 API =====
  {
    type: 'interactiveSlide',
    slideId: 'api-intro',
    title: '什麼是 API？',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 簡報後對話 =====
  {
    type: 'dialogue',
    speaker: '你',
    text: '原來 API 就是這樣！一般網址回傳網頁給人看，API 回傳資料給程式用。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(拍手) 完全正確！你抓到重點了。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '所以回到你一開始的問題——教練資料從哪來？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '我知道了！前端發網路請求到 API，API 回傳教練資料，前端再把資料顯示出來！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(滿意地點頭) Bingo！接下來讓我們透過互動示範，看看 LiveFit 的 API 實際運作方式吧！',
    scene: 'normal',
    coachExpression: 'praise',
  },

  // ===== 第四個互動簡報：API 互動操作 Demo =====
  {
    type: 'interactiveSlide',
    slideId: 'api-demo',
    title: 'LiveFit API 互動操作',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== API Demo 後對話 =====
  {
    type: 'dialogue',
    speaker: '你',
    text: '哇！原來每個功能背後都對應一個 API！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(點頭) 沒錯！你剛剛親手操作的每一個動作，都是在呼叫不同的 API。',
    scene: 'normal',
    coachExpression: 'praise',
  },

  // ===== LiveFit 有多少 API =====
  {
    type: 'dialogue',
    speaker: '你',
    text: '對了海克絲，LiveFit 總共有幾個 API 啊？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(露出得意的微笑) LiveFit 目前設計了超過 30 個 API 喔！',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '30 個！？這麼多？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '對啊！你想想看，光是使用者就有：註冊、登入、登出、取得個人資料、修改個人資料...',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '教練有：取得教練列表、取得單一教練、新增課程、修改課程、刪除課程...',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '課程有：取得課程列表、預約課程、取消預約、查看預約紀錄...',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '每個功能背後都是一個 API。學會 API，你就能自己串接各種服務了！',
    scene: 'normal',
    coachExpression: 'praise',
  },

  // ===== 第三方服務整合 =====
  {
    type: 'dialogue',
    speaker: '你',
    text: '等等，所以後端工程師的工作就是開發 API 去連接自己的資料庫嗎？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(搖搖頭) 不只喔！這只是其中一部分。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '那以後我要去接別人的金流服務、第三方登入，他們是不是也像這樣子的方式來接資料呢？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(眼睛一亮) 你問到重點了！沒錯，原理完全一樣！',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '不管是金流、第三方登入、簡訊通知、雲端儲存...這些服務都有提供 API。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '後端工程師很大一部分的工作，就是整合這些第三方服務！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '所以不是單純做自己的服務，更多是要把各種服務「串」起來？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(滿意地點頭) Exactly！讓我用簡報來解釋這個概念。',
    scene: 'normal',
    coachExpression: 'praise',
  },

  // ===== 第三方服務整合簡報 =====
  {
    type: 'interactiveSlide',
    slideId: 'third-party',
    title: '整合第三方服務',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 簡報後對話 =====
  {
    type: 'dialogue',
    speaker: '你',
    text: '原來後端工程師像是「中央調度站」，要整合這麼多服務！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '對！所以學會 API 非常重要，因為幾乎所有服務都是透過 API 來串接的。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '我懂了！學會 API，就能接金流、接登入、接各種服務！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(欣慰地笑) 沒錯！這就是後端工程師的核心技能之一。',
    scene: 'normal',
    coachExpression: 'praise',
  },

  // ===== 秘密揭露 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(壓低聲音) 對了，跟你說個秘密...',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '什麼秘密？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '其實 LiveFit 的金流功能...目前還沒做好。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '蛤？！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(嘆氣) 前一任後端工程師離職前沒時間做完，所以金流那塊一直是空的。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '等你把基本功都學會、功能測試都正常之後...',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(看著你) 就要請你來開發金流串接囉！',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '(緊張) 我...我可以嗎？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(拍拍你的肩) 放心，到時候你已經準備好了。現在先把基礎打好！',
    scene: 'normal',
    coachExpression: 'praise',
  },

  // ===== 測驗題目 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '好，最後讓我用選擇題考考你！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'quiz',
    title: 'API 與網路請求小考',
    scene: 'normal',
    coachExpression: 'praise',
    questions: [
      {
        id: 'q1',
        prompt: '當你在瀏覽器輸入網址按下 Enter，第一步會發生什麼事？',
        options: [
          { id: 'a', label: '網頁直接出現' },
          { id: 'b', label: '電腦透過網路去找伺服器' },
          { id: 'c', label: '資料庫開始查詢資料' },
        ],
        correctOptionId: 'b',
        explanation: '輸入網址後，電腦會先透過網路找到伺服器，發送請求，等伺服器回傳內容後，網頁才會顯示。',
      },
      {
        id: 'q2',
        prompt: '「網路請求」指的是什麼？',
        options: [
          { id: 'a', label: '在網路上搜尋東西' },
          { id: 'b', label: '電腦和伺服器之間「一來一往」的溝通過程' },
          { id: 'c', label: '申請網路服務' },
        ],
        correctOptionId: 'b',
        explanation: '網路請求是你的電腦發送 Request 給伺服器，伺服器回傳 Response 的過程。',
      },
      {
        id: 'q3',
        prompt: '一般網址和 API 的差別是什麼？',
        options: [
          { id: 'a', label: '一般網址回傳 HTML 網頁，API 回傳 JSON 資料' },
          { id: 'b', label: '一般網址比較慢，API 比較快' },
          { id: 'c', label: '一般網址免費，API 要付費' },
        ],
        correctOptionId: 'a',
        explanation: '一般網址回傳 HTML（給人看的網頁），API 回傳 JSON（給程式用的資料）。',
      },
      {
        id: 'q4',
        prompt: '為什麼教練資料要透過 API 取得，而不是寫死在網頁裡？',
        options: [
          { id: 'a', label: '因為寫死比較慢' },
          { id: 'b', label: '因為教練資料會變動，透過 API 可以取得最新資料' },
          { id: 'c', label: '因為 API 比較便宜' },
        ],
        correctOptionId: 'b',
        explanation: '教練可能會新增、離職、改資料，透過 API 從資料庫取得，才能確保資料是最新的。',
      },
      {
        id: 'q5',
        prompt: 'API 的全名是什麼？',
        options: [
          { id: 'a', label: 'Application Programming Interface（應用程式介面）' },
          { id: 'b', label: 'Advanced Program Integration' },
          { id: 'c', label: 'Auto Page Import' },
        ],
        correctOptionId: 'a',
        explanation: 'API 是 Application Programming Interface 的縮寫，意思是「應用程式介面」。',
      },
      {
        id: 'q6',
        prompt: '當使用者在網站上購買課程，後端需要做什麼？',
        options: [
          { id: 'a', label: '直接把錢存到公司帳戶' },
          { id: 'b', label: '呼叫金流 API，讓第三方服務處理付款' },
          { id: 'c', label: '自己寫程式處理信用卡資訊' },
        ],
        correctOptionId: 'b',
        explanation: '後端工程師透過呼叫金流 API（如綠界、藍新）來處理付款，不需要自己處理敏感的信用卡資訊。',
      },
      {
        id: 'q7',
        prompt: '後端工程師的工作主要是什麼？',
        options: [
          { id: 'a', label: '只負責連接自己的資料庫' },
          { id: 'b', label: '開發 API 並整合各種第三方服務' },
          { id: 'c', label: '設計網頁的畫面' },
        ],
        correctOptionId: 'b',
        explanation: '後端工程師除了連接自己的資料庫，更多工作是整合金流、登入、通知等第三方服務的 API。',
      },
      {
        id: 'q8',
        prompt: '以下哪些是常見的第三方服務？',
        options: [
          { id: 'a', label: '金流、第三方登入、雲端儲存' },
          { id: 'b', label: 'HTML、CSS、JavaScript' },
          { id: 'c', label: '滑鼠、鍵盤、螢幕' },
        ],
        correctOptionId: 'a',
        explanation: '金流（綠界、LINE Pay）、第三方登入（Google、Facebook）、雲端儲存（AWS S3）都是常見的第三方服務。',
      },
      {
        id: 'q9',
        prompt: '在完整的資料流中，順序是什麼？',
        options: [
          { id: 'a', label: '資料庫 → 前端 → 後端 → 使用者' },
          { id: 'b', label: '前端 → 後端 → 資料庫 → 後端 → 前端' },
          { id: 'c', label: '使用者 → 資料庫 → 前端 → 後端' },
        ],
        correctOptionId: 'b',
        explanation: '正確順序：前端發請求 → 後端處理 → 資料庫查詢 → 後端回傳 → 前端顯示。',
      },
      {
        id: 'q10',
        prompt: 'JSON 資料格式的特色是什麼？',
        options: [
          { id: 'a', label: '只有人類看得懂' },
          { id: 'b', label: '用大括號 {} 和鍵值對 key: value 組成，程式可以輕鬆讀取' },
          { id: 'c', label: '只能存數字' },
        ],
        correctOptionId: 'b',
        explanation: 'JSON 使用 {} 和 key: value 格式，是程式之間交換資料的標準格式，易於讀取和解析。',
      },
      {
        id: 'q11',
        prompt: '為什麼要使用第三方金流服務，而不是自己處理付款？',
        options: [
          { id: 'a', label: '因為自己寫比較慢' },
          { id: 'b', label: '因為信用卡資訊很敏感，需要專業的安全認證和法規遵循' },
          { id: 'c', label: '因為第三方服務比較便宜' },
        ],
        correctOptionId: 'b',
        explanation: '處理信用卡需要 PCI DSS 安全認證，自己做成本高且風險大，交給專業的金流服務更安全可靠。',
      },
      {
        id: 'q12',
        prompt: 'LiveFit 有超過 30 個 API，以下哪個不是 API 的常見功能？',
        options: [
          { id: 'a', label: '使用者註冊、登入、登出' },
          { id: 'b', label: '設計網頁按鈕的顏色' },
          { id: 'c', label: '取得教練列表、預約課程' },
        ],
        correctOptionId: 'b',
        explanation: 'API 處理資料的存取和操作，網頁按鈕顏色是前端 CSS 的工作，不是 API 的功能。',
      },
      {
        id: 'q13',
        prompt: '當前端要顯示教練資料時，正確的做法是？',
        options: [
          { id: 'a', label: '直接把教練資料寫死在 HTML 裡' },
          { id: 'b', label: '前端直接連資料庫查詢' },
          { id: 'c', label: '前端呼叫後端 API，API 從資料庫取得資料後回傳' },
        ],
        correctOptionId: 'c',
        explanation: '前端不能直接連資料庫（會暴露帳密），要透過後端 API 取得資料，這樣更安全也更好維護。',
      },
      {
        id: 'q14',
        prompt: '以下哪個是 Google 第三方登入的優點？',
        options: [
          { id: 'a', label: '使用者不需要記新密碼，可以用 Google 帳號直接登入' },
          { id: 'b', label: '可以看到使用者的 Google 密碼' },
          { id: 'c', label: '登入速度會變慢' },
        ],
        correctOptionId: 'a',
        explanation: '第三方登入讓使用者用現有帳號登入，不用記新密碼，提升使用體驗。我們只會拿到授權資訊，不會拿到密碼。',
      },
      {
        id: 'q15',
        prompt: '後端工程師被稱為「中央調度站」的原因是？',
        options: [
          { id: 'a', label: '因為後端工程師薪水最高' },
          { id: 'b', label: '因為後端要整合前端、資料庫、和各種第三方服務' },
          { id: 'c', label: '因為後端工程師負責管理公司' },
        ],
        correctOptionId: 'b',
        explanation: '後端就像中央調度站，負責接收前端請求、處理商業邏輯、存取資料庫、串接第三方服務，再把結果回傳給前端。',
      },
    ],
  },

  // ===== 測驗完成後的對話 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(滿意地點頭) 太棒了！你已經掌握 API 的基本觀念了。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '記住，API 就是網路請求，只是回傳 JSON 資料給程式用。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '學會 API 之後，你就能自己串接各種網路服務了！',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '謝謝海克絲！我現在對 API 有更清楚的認識了。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '好，今天就到這裡，明天我們來學習更多！',
    scene: 'normal',
    coachExpression: 'praise',
  },

  // ===== 慶祝完成 =====
  {
    type: 'celebration',
    chapterTitle: '第五天：學會 API，各種服務自己接！',
    scene: 'normal',
    coachExpression: 'praise',
  },
]

export const chapter5: ChapterConfig = {
  id: 5,
  title: '第五天：學會 API，各種服務自己接！',
  nodes,
}
