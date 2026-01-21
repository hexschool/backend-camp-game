import type { ChapterConfig, ChapterNode } from './types'

const nodes: ChapterNode[] = [
  // ===== 開場 =====
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '📋 今日任務文件：https://hackmd.io/jgEjtsDLTaulGdegVNFeHQ',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(一臉嚴肅地走過來) 我偷偷跑去問你培訓班的教練了，他是我前同事。',
    scene: 'normal',
    coachExpression: 'angry',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '(心裡一沉) 問...問什麼？',
    scene: 'normal',
    coachExpression: 'angry',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(叉著腰) 他偷爆料說你的資料庫學得很差！',
    scene: 'normal',
    coachExpression: 'angry',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '呃...那個...',
    scene: 'normal',
    coachExpression: 'angry',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(打開電腦) 沒關係！今天要來惡補一下！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '昨天你學會看資料表了，今天來學怎麼「跟資料庫說話」！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '跟資料庫說話？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '對！資料庫聽不懂中文，但它聽得懂 SQL。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: 'SQL 就是跟資料庫溝通的語言，學會這幾個關鍵字，你就能查資料、新增資料、修改資料、刪除資料！',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '聽起來很厲害欸！但是...我還以為都是用後端程式來操控資料庫欸？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(搖搖頭) 這是很多新手的迷思！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '其實操作資料庫不只能用程式碼，還可以用圖形化工具！像是 DBeaver，讓你用滑鼠點點就能操作資料庫。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '真的假的？那不是很方便！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '對啊！開發的時候用 DBeaver 查資料超方便，不用每次都寫程式。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '今天要把這些通通補起來！先讓我用簡報解釋給你看。',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 第一個互動簡報：資料庫操作方式 =====
  {
    type: 'interactiveSlide',
    slideId: 'database-access',
    title: '資料庫操作方式',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 簡報後對話：銜接 SQL 語法 =====
  {
    type: 'dialogue',
    speaker: '你',
    text: '原來如此！後端程式用於正式環境自動化操作，DBeaver 用於開發除錯！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(點頭) 完全正確！兩種方式是互補的。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '不管用哪種方式，背後都是在執行 SQL。接下來就讓我教你 SQL 的基本語法！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '好！我準備好了！',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 第二個互動簡報：SQL 語法基礎 =====
  {
    type: 'interactiveSlide',
    slideId: 'sql-basics',
    title: 'SQL 語法基礎',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 簡報後對話：銜接練習場 =====
  {
    type: 'dialogue',
    speaker: '你',
    text: '哇！原來 SQL 有「查詢三兄弟」跟「操作三劍客」！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(笑) 你記得很清楚嘛！',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: 'SELECT + FROM + WHERE 用來查資料，INSERT、UPDATE、DELETE 用來操作資料！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '而且 UPDATE 和 DELETE 一定要加 WHERE，不然會影響全部資料！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(滿意地點頭) 這個超級重要！忘記加 WHERE 是新手最常犯的錯誤。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '好，概念你都懂了，接下來要實際練習了！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '(緊張) 練...練習？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '別緊張！我準備了 12 題 SQL 拼湊練習，涵蓋 CREDIT_PACKAGE、SKILL、USER 三張表。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(認真) 這是今天最重要的部分，你的表現會影響後面的挑戰喔！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(壓低聲音) 偷偷告訴你，每題都一次就答對的話，會有隱藏道具喔！',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '(深呼吸) 好！我來挑戰！',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 第三個互動簡報：SQL 練習場（作為評分條件）=====
  {
    type: 'interactiveSlide',
    slideId: 'sql-practice',
    title: 'SQL 練習場',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 練習完成後的對話 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(鼓掌) 你完成了！SQL 練習場的成績我記下來了。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: 'SQL 是後端工程師的必備技能，學會這六個關鍵字，你就能跟資料庫對話了！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '我懂了！SELECT、FROM、WHERE 查資料，INSERT、UPDATE、DELETE 操作資料！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '還有最重要的一點是？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: 'UPDATE 和 DELETE 一定要加 WHERE，不然會影響全部資料！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(露出欣慰的笑容) 太好了！你已經從昨天的資料庫小白進步了不少。',
    scene: 'normal',
    coachExpression: 'praise',
  },

  // ===== 100% 完美時的隱藏對話 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(突然想起什麼) 對了！剛剛給你的那組神秘序號...',
    scene: 'normal',
    coachExpression: 'normal',
    condition: 'sqlPerfect',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '那組序號是做什麼用的？',
    scene: 'normal',
    coachExpression: 'normal',
    condition: 'sqlPerfect',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(抓抓頭) 呃...我忘了。',
    scene: 'normal',
    coachExpression: 'normal',
    condition: 'sqlPerfect',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '...蛤？',
    scene: 'normal',
    coachExpression: 'normal',
    condition: 'sqlPerfect',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(尷尬) 總之先記好！說不定之後會用到！',
    scene: 'normal',
    coachExpression: 'praise',
    condition: 'sqlPerfect',
  },

  // ===== 結尾對話 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '好，今天就到這裡。DBeaver 是開發時的好夥伴，可以讓你直接看到資料庫裡面有什麼，除錯的時候超好用！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '謝謝海克絲！我現在對 SQL 有基本概念了！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '回去好好複習，明天見！',
    scene: 'normal',
    coachExpression: 'praise',
  },

  // ===== 慶祝完成 =====
  {
    type: 'celebration',
    chapterTitle: '第七天：SQL 語法入門',
    scene: 'normal',
    coachExpression: 'praise',
  },
]

export const chapter7: ChapterConfig = {
  id: 7,
  title: '第七天：SQL 語法入門',
  nodes,
}
