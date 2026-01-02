import type { ChapterConfig, ChapterNode } from './types'

const nodes: ChapterNode[] = [
  // ===== 開場對話 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '早安，歡迎加入 LiveFit。我是海克絲，這間健身房的老闆。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '別那麼拘謹，先把這部厚重的筆電放下吧。來，肩膀放鬆，我們聊聊天。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '我、我已經準備好要寫 Code 了！請問我現在該做什麼？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(遞過一杯溫水) 聽著，你的黑眼圈都快掉到下巴了。我請你來，是為了寫長久能跑的系統，不是要你的肝。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(示意你喝水) 電腦先別開，我們談談這份工作的由來吧。',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 輸入名字 =====
  {
    type: 'inputName',
    prompt: '對了，我該怎麼稱呼你呢？',
    scene: 'normal',
    coachExpression: 'praise',
  },

  // ===== 介紹 LiveFit =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '目前五間實體店已經穩定了，但我希望能讓更多人隨時運動，所以要開發「LiveFit」。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '這是一個線上直播小班制平台。會員買堂數、預約課程，時間到了就進場上課。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '買堂數... 預約... 好的！這聽起來是典型的 CRUD 加上金流控制...',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '(內心：天啊，萬一我把金流寫錯，老闆會不會叫我捲舖蓋走人？)',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(輕拍你的肩膀) 別急，前任留下的程式碼有點亂，像是一盤沒收好的槓鈴。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '這個月的目標很簡單：在你的電腦裡，把這些商業邏輯理清楚就好。',
    scene: 'normal',
    coachExpression: 'praise',
  },

  // ===== 介紹使用者故事 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(從抽屜拿出文件) 這些是當初開發平台前的「使用者故事」跟「線稿圖」。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '那個... 海姐，不好意思。妳說的「使用者故事」還有「線稿圖」是什麼意思？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '別緊張，我解釋給你聽。使用者故事（User Story）其實就是從使用者的角度出發，描述他們「想做什麼」以及「為什麼要做」的清單。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '我們通常會用一個簡單的公式來寫：「身為 [某種角色]，我想要 [做某件事]，以便於 [得到什麼好處]」。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '這樣做是為了讓我們在開發前，先確認這項功能真的對使用者有價值。',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 使用者故事範例 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(將一份文件推到你面前) 來看這份 LiveFit 的初稿，裡面分成了幾種角色。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '訪客：「我想瀏覽教練列表，以便於了解有哪些專長的教練適合我。」\n會員：「我想購買堂數方案，以便於取得點數來報名喜歡的課程。」\n教練：「我想建立課程，以便於讓學員可以預約我的直播時段。」\n管理員：「我想把一般使用者升級為教練，以便於擴張平台的教學師資。」',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 介紹線稿圖與泳道圖 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '看到這裡面的邏輯了嗎？每個功能背後有一個清楚的目標。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '至於線稿圖（Wireframe），就像設計草圖，告訴我們按鈕放哪、按下去會跳到哪。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(指著螢幕) 把它們當作是健身前的「目標設定」跟「動作圖解」就好，沒那麼複雜。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '原來如此... 不過海姐，我感覺這個平台上，教練跟學生的互動好像很頻繁？整體的互動流程輪廓大概長什麼樣子呢？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '問得好！你已經開始思考系統的全貌了。剛好我最近畫了一張「履約流程」的泳道圖，這張圖能讓你更清楚看到不同角色在同一個流程裡分別做了什麼。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '這就是我們所謂的「泳道圖」。你看，每一條跑道代表一個角色（學生、教練、系統），這樣誰該在什麼時候做什麼事，就一清二楚了。',
    scene: 'normal',
    coachExpression: 'normal',
    image: '/images/content/swimlane.png',
  },

  // ===== 任務指派 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(收起笑容，語氣變得嚴肅但專注) 好了，先別急著開電腦。你今天一整天的工作只有一個。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '就是把這份文件徹底讀熟：LiveFit 規格書。請點擊此連結：https://hackmd.io/tGMiTeEJSVamCd46KaMrew?view',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '針對我們剛剛提到的泳道圖、線稿圖以及使用者故事，去更深入瞭解這個平台的商業邏輯。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '你要記住，如果太快開始寫程式，反倒會寫出很多 Bug 的。開發之前，一定要問清楚才能進行開發。',
    scene: 'normal',
    coachExpression: 'sigh',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(眼神變得銳利) 看完之後，就來接受我的考試吧。',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 20 道測驗題 =====
  {
    type: 'quiz',
    title: '海克絲的入職測驗',
    scene: 'normal',
    coachExpression: 'praise',
    questions: [
      // Part 1: 開發觀念篇
      {
        id: 'q1',
        prompt: '海克絲提到「使用者故事 (User Story)」的標準公式是什麼？',
        options: [
          { id: 'a', label: '身為 [某種角色]，我想要 [做某件事]，以便於 [得到什麼好處]' },
          { id: 'b', label: '在 [什麼時間]，系統應該 [執行什麼功能]，並且 [顯示什麼結果]' },
          { id: 'c', label: '如果 [發生錯誤]，系統需要 [跳出警告]，以便於 [通知管理員]' },
        ],
        correctOptionId: 'a',
        explanation: '使用者故事的標準公式是：「身為 [某種角色]，我想要 [做某件事]，以便於 [得到什麼好處]」，這樣可以清楚描述功能的目標與價值。',
      },
      {
        id: 'q2',
        prompt: '海克絲用什麼比喻來形容「線稿圖 (Wireframe)」？',
        options: [
          { id: 'a', label: '它是用來檢查程式碼錯誤的除錯工具' },
          { id: 'b', label: '它是健身前的「目標設定」跟「動作圖解」，用來確認按鈕放哪、按下去會跳到哪' },
          { id: 'c', label: '它是最後的裝潢，決定系統好不好看' },
        ],
        correctOptionId: 'b',
        explanation: '海克絲說線稿圖就像健身前的「目標設定」跟「動作圖解」，讓我們在開發前有個共識。',
      },
      {
        id: 'q3',
        prompt: '為什麼海克絲建議在寫程式之前要先畫「線稿圖」？',
        options: [
          { id: 'a', label: '為了讓介面看起來很漂亮，吸引投資人' },
          { id: 'b', label: '為了測試程式碼的效能是否足夠' },
          { id: 'c', label: '為了在開發前與團隊有共識，確保大家想的畫面是一樣的' },
        ],
        correctOptionId: 'c',
        explanation: '線稿圖是為了在開發前與團隊對齊認知，確保大家想的畫面是一樣的，避免做白工。',
      },
      {
        id: 'q4',
        prompt: '「泳道圖 (Swimlane Diagram)」最主要的功能是什麼？',
        options: [
          { id: 'a', label: '用來計算教練游泳的速度與距離' },
          { id: 'b', label: '展示系統資料庫的關聯架構 (ER Model)' },
          { id: 'c', label: '釐清不同角色（如學生、教練、系統）在同一個流程中分別做了什麼' },
        ],
        correctOptionId: 'c',
        explanation: '泳道圖的每一條跑道代表一個角色，可以清楚看到誰該在什麼時候做什麼事。',
      },
      {
        id: 'q5',
        prompt: '海克絲認為如果不先釐清商業邏輯就太快開始寫程式，會發生什麼事？',
        options: [
          { id: 'a', label: '會提早完成工作，可以準時下班' },
          { id: 'b', label: '會寫出很多 Bug，甚至做白工' },
          { id: 'c', label: '電腦會因為運算過度而過熱' },
        ],
        correctOptionId: 'b',
        explanation: '海克絲警告：如果太快開始寫程式，反倒會寫出很多 Bug。開發之前，一定要問清楚才能進行開發。',
      },
      {
        id: 'q6',
        prompt: '線稿圖通常不包含下列哪項元素？',
        options: [
          { id: 'a', label: '頁面佈局與按鈕位置' },
          { id: 'b', label: '完整的視覺設計與高解析度圖片' },
          { id: 'c', label: '基本的操作流程與連結' },
        ],
        correctOptionId: 'b',
        explanation: '線稿圖是用簡單的線條跟框框畫出介面，不包含完整的視覺設計與高解析度圖片。',
      },
      {
        id: 'q7',
        prompt: '在閱讀泳道圖時，每一條「跑道」通常代表什麼？',
        options: [
          { id: 'a', label: '不同的時間點' },
          { id: 'b', label: '不同的參與角色或系統' },
          { id: 'c', label: '不同的資料庫欄位' },
        ],
        correctOptionId: 'b',
        explanation: '泳道圖的每一條跑道代表一個參與角色（如學生、教練、系統）。',
      },

      // Part 2: LiveFit 商業邏輯篇
      {
        id: 'q8',
        prompt: '根據 LiveFit 的角色權限設計，一位普通的「使用者 (User)」要如何才能變成「教練 (Coach)」並開始開課？',
        options: [
          { id: 'a', label: '在註冊頁面直接勾選「我是教練」即可' },
          { id: 'b', label: '必須付費購買「教練資格方案」' },
          { id: 'c', label: '需要由「管理員 (Admin)」在後台將其升級為教練' },
        ],
        correctOptionId: 'c',
        explanation: '根據使用者故事，管理員負責「把一般使用者升級為教練」。',
      },
      {
        id: 'q9',
        prompt: '在 LiveFit 平台中，會員想要「報名課程」，必須透過什麼方式？',
        options: [
          { id: 'a', label: '直接刷信用卡支付單堂費用' },
          { id: 'b', label: '使用已購買的「堂數」來進行報名' },
          { id: 'c', label: '現場付現金給教練' },
        ],
        correctOptionId: 'b',
        explanation: '會員需要先購買堂數方案，再使用堂數來報名課程。',
      },
      {
        id: 'q10',
        prompt: '關於「教練 (Coach)」的功能需求，下列哪一項敘述是正確的？',
        options: [
          { id: 'a', label: '教練可以隨意刪除學員的帳號' },
          { id: 'b', label: '教練可以查看月營收統計，了解指定月份的營收與學員參與概況' },
          { id: 'c', label: '教練不能修改自己開設課程的時間或人數上限' },
        ],
        correctOptionId: 'b',
        explanation: '根據教練的使用者故事，教練可以查看月營收統計。',
      },
      {
        id: 'q11',
        prompt: '根據使用者故事，未登入的「訪客」無法執行下列哪項動作？',
        options: [
          { id: 'a', label: '瀏覽目前可參加的課程' },
          { id: 'b', label: '查看教練的詳細介紹與專長' },
          { id: 'c', label: '報名課程' },
        ],
        correctOptionId: 'c',
        explanation: '訪客可以瀏覽課程和教練資訊，但必須登入成為會員才能報名課程。',
      },
      {
        id: 'q12',
        prompt: '「管理員 (Admin)」在系統中扮演維護營運的角色，下列哪項是他們的主要工作？',
        options: [
          { id: 'a', label: '幫會員修改密碼與個人頭像' },
          { id: 'b', label: '管理技能清單與堂數方案的設定' },
          { id: 'c', label: '代替教練進行直播授課' },
        ],
        correctOptionId: 'b',
        explanation: '管理員負責管理技能清單與堂數方案的設定，以及將使用者升級為教練。',
      },
      {
        id: 'q13',
        prompt: '會員在 LiveFit 平台想要「修改個人資料」，目前支援修改哪些欄位？',
        options: [
          { id: 'a', label: '只能修改姓名' },
          { id: 'b', label: '可以修改姓名與 Email' },
          { id: 'c', label: '可以修改姓名、Email 與已購買的堂數' },
        ],
        correctOptionId: 'a',
        explanation: '根據使用者故事，會員修改個人資料只有提到「更新自己的姓名」。',
      },
      {
        id: 'q14',
        prompt: '如果教練想要讓學員更容易找到自己，他可以使用什麼功能？',
        options: [
          { id: 'a', label: '購買首頁廣告' },
          { id: 'b', label: '設定自己的專長技能' },
          { id: 'c', label: '寄送垃圾郵件給所有會員' },
        ],
        correctOptionId: 'b',
        explanation: '教練可以設定自己的專長技能，讓學員在搜尋時更容易找到。',
      },
      {
        id: 'q15',
        prompt: '當會員想要調整行程時，關於「取消課程」的敘述何者正確？',
        options: [
          { id: 'a', label: '只要取消就能退回現金' },
          { id: 'b', label: '取消課程後會釋出名額，並應退還/調整堂數（依照詳細規則）' },
          { id: 'c', label: '報名後絕對無法取消' },
        ],
        correctOptionId: 'b',
        explanation: '取消課程後會釋出名額，堂數會依照規則退還或調整。',
      },
      {
        id: 'q16',
        prompt: '教練在「編輯課程」時，可以調整哪些資訊？',
        options: [
          { id: 'a', label: '只能調整課程名稱' },
          { id: 'b', label: '課程內容、時間、人數上限、會議連結' },
          { id: 'c', label: '學員的個人資料' },
        ],
        correctOptionId: 'b',
        explanation: '教練可以編輯課程的內容、時間、人數上限、會議連結等資訊。',
      },
      {
        id: 'q17',
        prompt: 'LiveFit 平台的核心營運模式是什麼？',
        options: [
          { id: 'a', label: '線下健身房的門禁管理系統' },
          { id: 'b', label: '線上直播小班制健身平台' },
          { id: 'c', label: '預錄影片的隨選視訊服務' },
        ],
        correctOptionId: 'b',
        explanation: 'LiveFit 是一個線上直播小班制平台，會員買堂數、預約課程，時間到了就進場上課。',
      },
      {
        id: 'q18',
        prompt: '根據使用者故事，會員如果想了解自己過去買了哪些方案與購買時間，可以使用什麼功能？',
        options: [
          { id: 'a', label: '查看教練詳情' },
          { id: 'b', label: '查看我的堂數購買紀錄' },
          { id: 'c', label: '修改個人資料' },
        ],
        correctOptionId: 'b',
        explanation: '會員可以透過「查看我的堂數購買紀錄」來了解過去的購買資訊。',
      },
      {
        id: 'q19',
        prompt: '當教練想要掌握自己開設的課程目前的狀態（如：是否已滿額、報名人數），他應該查看什麼？',
        options: [
          { id: 'a', label: '我的課程列表' },
          { id: 'b', label: '月營收統計' },
          { id: 'c', label: '技能清單' },
        ],
        correctOptionId: 'a',
        explanation: '教練透過「我的課程列表」可以查看課程狀態與報名人數。',
      },
      {
        id: 'q20',
        prompt: '若平台決定推出全新的「夏季特惠堂數方案」，在系統中應該由誰來負責新增這個方案？',
        options: [
          { id: 'a', label: '資深教練' },
          { id: 'b', label: '系統管理員 (Admin)' },
          { id: 'c', label: '任何註冊會員' },
        ],
        correctOptionId: 'b',
        explanation: '管理員負責管理堂數方案，包括新增、修改方案設定。',
      },
    ],
  },

  // ===== 測驗完成後的對話 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '很好，看來你對 LiveFit 的商業邏輯已經有基本的了解了。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '記住，寫程式之前先搞懂需求，這是最重要的事。明天我們再繼續。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '今天就先到這裡吧。回家好好休息，別熬夜。',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 慶祝完成 =====
  {
    type: 'celebration',
    chapterTitle: '第一天：報到日',
    scene: 'normal',
    coachExpression: 'normal',
  },
]

export const chapter1: ChapterConfig = {
  id: 1,
  title: '第一天：報到日',
  nodes,
}
