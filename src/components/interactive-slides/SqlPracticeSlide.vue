<script setup lang="ts">
/**
 * SQL 練習互動簡報
 * 透過點擊拼湊 SQL 語法，學習 INSERT / UPDATE / DELETE
 *
 * 情境來自 LivefitDatabaseSlide：
 * - 新增堂數方案
 * - 新增技能
 * - 新增會員
 * - 升級教練
 * - 刪除資料
 */
import { ref, computed, watch, onMounted } from 'vue'

defineProps<{
  isMobile?: boolean
}>()

const emit = defineEmits<{
  (e: 'complete'): void
}>()

// === 題目定義 ===
type SqlToken = {
  id: string
  text: string
  type: 'keyword' | 'table' | 'column' | 'value' | 'operator' | 'punctuation'
}

type Question = {
  id: number
  type: 'INSERT' | 'UPDATE' | 'DELETE'
  scenario: string        // 情境描述
  instruction: string     // 題目指示
  expectedResult: string  // 預期結果說明
  hint?: string           // 提示
  syntaxHint?: string     // SQL 語法結構提示
  tokens: SqlToken[]      // 可選擇的 SQL 片段
  correctOrder: string[]  // 正確的 token id 順序
  table: 'CREDIT_PACKAGE' | 'SKILL' | 'USER'
  tableData: {
    columns: string[]
    rows: string[][]
  }
  resultRow?: string[]    // INSERT 後新增的列
  updateCell?: { row: number, col: number, oldValue: string, newValue: string }  // UPDATE 變更
  deleteRow?: number      // DELETE 要刪除的列 index
}

const QUESTIONS: Question[] = [
  // ==========================================
  // 📦 CREDIT_PACKAGE 堂數方案表 (5 題)
  // ==========================================

  // === 第 1 題：新增堂數方案 ===
  {
    id: 1,
    type: 'INSERT',
    scenario: '👨‍💼 老闆：「我想再加一個 28 堂方案 6,000 元！」',
    instruction: '新增方案到 CREDIT_PACKAGE（堂數方案表）',
    expectedResult: '成功新增「28 堂組合包」方案',
    hint: 'INSERT INTO → 表名 → VALUES → (值)',
    tokens: [
      { id: 'insert', text: 'INSERT INTO', type: 'keyword' },
      { id: 'table', text: 'CREDIT_PACKAGE', type: 'table' },
      { id: 'values', text: 'VALUES', type: 'keyword' },
      { id: 'vals', text: "('28 堂組合包', 28, 6000)", type: 'value' },
    ],
    correctOrder: ['insert', 'table', 'values', 'vals'],
    table: 'CREDIT_PACKAGE',
    tableData: {
      columns: ['id', 'name', 'credit_amount', 'price'],
      rows: [
        ['1', '7 堂組合包', '7', '1,400'],
        ['2', '14 堂組合包', '14', '2,520'],
        ['3', '21 堂組合包', '21', '4,800'],
      ]
    },
    resultRow: ['4', '28 堂組合包', '28', '6,000'],
  },

  // === 第 2 題：修改方案價格 ===
  {
    id: 2,
    type: 'UPDATE',
    scenario: '💰 老闆：「14 堂組合包促銷！價格改成 2,000 元」',
    instruction: '修改 id=2 的方案價格為 2000',
    expectedResult: '14 堂組合包價格更新為 2,000 元',
    hint: 'UPDATE → 表名 → SET → 新值 → WHERE → 條件',
    tokens: [
      { id: 'update', text: 'UPDATE', type: 'keyword' },
      { id: 'table', text: 'CREDIT_PACKAGE', type: 'table' },
      { id: 'set', text: 'SET', type: 'keyword' },
      { id: 'assign', text: 'price = 2000', type: 'value' },
      { id: 'where', text: 'WHERE', type: 'keyword' },
      { id: 'condition', text: 'id = 2', type: 'operator' },
    ],
    correctOrder: ['update', 'table', 'set', 'assign', 'where', 'condition'],
    table: 'CREDIT_PACKAGE',
    tableData: {
      columns: ['id', 'name', 'credit_amount', 'price'],
      rows: [
        ['1', '7 堂組合包', '7', '1,400'],
        ['2', '14 堂組合包', '14', '2,520'],
        ['3', '21 堂組合包', '21', '4,800'],
      ]
    },
    updateCell: { row: 1, col: 3, oldValue: '2,520', newValue: '2,000' },
  },

  // === 第 3 題：修改方案名稱 ===
  {
    id: 3,
    type: 'UPDATE',
    scenario: '✏️ 行銷：「7 堂組合包改名叫『新手體驗包』比較吸引人！」',
    instruction: '修改 id=1 的方案名稱',
    expectedResult: '方案名稱更新為「新手體驗包」',
    hint: 'UPDATE → 表名 → SET → 新值 → WHERE → 條件',
    tokens: [
      { id: 'update', text: 'UPDATE', type: 'keyword' },
      { id: 'table', text: 'CREDIT_PACKAGE', type: 'table' },
      { id: 'set', text: 'SET', type: 'keyword' },
      { id: 'assign', text: "name = '新手體驗包'", type: 'value' },
      { id: 'where', text: 'WHERE', type: 'keyword' },
      { id: 'condition', text: 'id = 1', type: 'operator' },
    ],
    correctOrder: ['update', 'table', 'set', 'assign', 'where', 'condition'],
    table: 'CREDIT_PACKAGE',
    tableData: {
      columns: ['id', 'name', 'credit_amount', 'price'],
      rows: [
        ['1', '7 堂組合包', '7', '1,400'],
        ['2', '14 堂組合包', '14', '2,520'],
        ['3', '21 堂組合包', '21', '4,800'],
      ]
    },
    updateCell: { row: 0, col: 1, oldValue: '7 堂組合包', newValue: '新手體驗包' },
  },

  // === 第 4 題：刪除堂數方案 ===
  {
    id: 4,
    type: 'DELETE',
    scenario: '📢 老闆：「21 堂組合包賣得不好，先下架吧！」',
    instruction: '刪除 id=3 的堂數方案',
    expectedResult: '成功刪除「21 堂組合包」',
    hint: 'DELETE FROM → 表名 → WHERE → 條件',
    tokens: [
      { id: 'delete', text: 'DELETE FROM', type: 'keyword' },
      { id: 'table', text: 'CREDIT_PACKAGE', type: 'table' },
      { id: 'where', text: 'WHERE', type: 'keyword' },
      { id: 'condition', text: 'id = 3', type: 'operator' },
    ],
    correctOrder: ['delete', 'table', 'where', 'condition'],
    table: 'CREDIT_PACKAGE',
    tableData: {
      columns: ['id', 'name', 'credit_amount', 'price'],
      rows: [
        ['1', '7 堂組合包', '7', '1,400'],
        ['2', '14 堂組合包', '14', '2,520'],
        ['3', '21 堂組合包', '21', '4,800'],
      ]
    },
    deleteRow: 2,
  },

  // === 第 5 題：新增限時方案 ===
  {
    id: 5,
    type: 'INSERT',
    scenario: '🎊 行銷：「雙 11 限定！推出 50 堂超值包 9,999 元」',
    instruction: '新增限時方案到 CREDIT_PACKAGE',
    expectedResult: '成功新增「雙 11 限定包」',
    hint: 'INSERT INTO → 表名 → VALUES → (值)',
    tokens: [
      { id: 'insert', text: 'INSERT INTO', type: 'keyword' },
      { id: 'table', text: 'CREDIT_PACKAGE', type: 'table' },
      { id: 'values', text: 'VALUES', type: 'keyword' },
      { id: 'vals', text: "('雙 11 限定包', 50, 9999)", type: 'value' },
    ],
    correctOrder: ['insert', 'table', 'values', 'vals'],
    table: 'CREDIT_PACKAGE',
    tableData: {
      columns: ['id', 'name', 'credit_amount', 'price'],
      rows: [
        ['1', '7 堂組合包', '7', '1,400'],
        ['2', '14 堂組合包', '14', '2,520'],
        ['3', '21 堂組合包', '21', '4,800'],
      ]
    },
    resultRow: ['4', '雙 11 限定包', '50', '9,999'],
  },

  // ==========================================
  // 🏋️ SKILL 技能表 (5 題)
  // ==========================================

  // === 第 6 題：新增技能 ===
  {
    id: 6,
    type: 'INSERT',
    scenario: '👨‍💼 老闆：「我們要新增一個課程：拳擊！」',
    instruction: '新增技能到 SKILL（技能表）',
    expectedResult: '成功新增「拳擊」技能',
    hint: 'INSERT INTO → 表名 → VALUES → (值)',
    tokens: [
      { id: 'insert', text: 'INSERT INTO', type: 'keyword' },
      { id: 'table', text: 'SKILL', type: 'table' },
      { id: 'values', text: 'VALUES', type: 'keyword' },
      { id: 'vals', text: "('拳擊')", type: 'value' },
    ],
    correctOrder: ['insert', 'table', 'values', 'vals'],
    table: 'SKILL',
    tableData: {
      columns: ['id', 'name'],
      rows: [
        ['1', '重訓'],
        ['2', '瑜伽'],
        ['3', '有氧運動'],
      ]
    },
    resultRow: ['4', '拳擊'],
  },

  // === 第 7 題：新增游泳技能 ===
  {
    id: 7,
    type: 'INSERT',
    scenario: '🏊 老闆：「健身房新增泳池了！加一個游泳課程」',
    instruction: '新增「游泳」技能到 SKILL 表',
    expectedResult: '成功新增「游泳」技能',
    hint: 'INSERT INTO → 表名 → VALUES → (值)',
    tokens: [
      { id: 'insert', text: 'INSERT INTO', type: 'keyword' },
      { id: 'table', text: 'SKILL', type: 'table' },
      { id: 'values', text: 'VALUES', type: 'keyword' },
      { id: 'vals', text: "('游泳')", type: 'value' },
    ],
    correctOrder: ['insert', 'table', 'values', 'vals'],
    table: 'SKILL',
    tableData: {
      columns: ['id', 'name'],
      rows: [
        ['1', '重訓'],
        ['2', '瑜伽'],
        ['3', '有氧運動'],
        ['4', '拳擊'],
      ]
    },
    resultRow: ['5', '游泳'],
  },

  // === 第 8 題：修改技能名稱 ===
  {
    id: 8,
    type: 'UPDATE',
    scenario: '✏️ 教練：「『有氧運動』改叫『飛輪有氧』比較潮！」',
    instruction: '修改 id=3 的技能名稱',
    expectedResult: '技能名稱更新為「飛輪有氧」',
    hint: 'UPDATE → 表名 → SET → 新值 → WHERE → 條件',
    tokens: [
      { id: 'update', text: 'UPDATE', type: 'keyword' },
      { id: 'table', text: 'SKILL', type: 'table' },
      { id: 'set', text: 'SET', type: 'keyword' },
      { id: 'assign', text: "name = '飛輪有氧'", type: 'value' },
      { id: 'where', text: 'WHERE', type: 'keyword' },
      { id: 'condition', text: 'id = 3', type: 'operator' },
    ],
    correctOrder: ['update', 'table', 'set', 'assign', 'where', 'condition'],
    table: 'SKILL',
    tableData: {
      columns: ['id', 'name'],
      rows: [
        ['1', '重訓'],
        ['2', '瑜伽'],
        ['3', '有氧運動'],
      ]
    },
    updateCell: { row: 2, col: 1, oldValue: '有氧運動', newValue: '飛輪有氧' },
  },

  // === 第 9 題：刪除技能 ===
  {
    id: 9,
    type: 'DELETE',
    scenario: '📢 公告：「瑜伽」課程因教練離職暫時停開！',
    instruction: '從 SKILL 表刪除「瑜伽」',
    expectedResult: '成功刪除「瑜伽」技能',
    hint: 'DELETE FROM → 表名 → WHERE → 條件',
    tokens: [
      { id: 'delete', text: 'DELETE FROM', type: 'keyword' },
      { id: 'table', text: 'SKILL', type: 'table' },
      { id: 'where', text: 'WHERE', type: 'keyword' },
      { id: 'condition', text: 'id = 2', type: 'operator' },
    ],
    correctOrder: ['delete', 'table', 'where', 'condition'],
    table: 'SKILL',
    tableData: {
      columns: ['id', 'name'],
      rows: [
        ['1', '重訓'],
        ['2', '瑜伽'],
        ['3', '有氧運動'],
      ]
    },
    deleteRow: 1,
  },

  // === 第 10 題：新增皮拉提斯 ===
  {
    id: 10,
    type: 'INSERT',
    scenario: '🧘 行銷：「皮拉提斯很夯！趕快加進去」',
    instruction: '新增「皮拉提斯」技能',
    expectedResult: '成功新增「皮拉提斯」',
    hint: 'INSERT INTO → 表名 → VALUES → (值)',
    tokens: [
      { id: 'insert', text: 'INSERT INTO', type: 'keyword' },
      { id: 'table', text: 'SKILL', type: 'table' },
      { id: 'values', text: 'VALUES', type: 'keyword' },
      { id: 'vals', text: "('皮拉提斯')", type: 'value' },
    ],
    correctOrder: ['insert', 'table', 'values', 'vals'],
    table: 'SKILL',
    tableData: {
      columns: ['id', 'name'],
      rows: [
        ['1', '重訓'],
        ['2', '瑜伽'],
        ['3', '有氧運動'],
      ]
    },
    resultRow: ['4', '皮拉提斯'],
  },

  // ==========================================
  // 👤 USER 會員表 (10 題)
  // ==========================================

  // === 第 11 題：新增會員 ===
  {
    id: 11,
    type: 'INSERT',
    scenario: '🎉 有新會員「陳大文」要加入 LiveFit！',
    instruction: '新增會員到 USER（會員表）',
    expectedResult: '成功新增會員「陳大文」',
    hint: 'INSERT INTO → 表名 → VALUES → (值)',
    tokens: [
      { id: 'insert', text: 'INSERT INTO', type: 'keyword' },
      { id: 'table', text: 'USER', type: 'table' },
      { id: 'values', text: 'VALUES', type: 'keyword' },
      { id: 'vals', text: "('陳大文', 'chen@email.com', 'user', '密碼')", type: 'value' },
    ],
    correctOrder: ['insert', 'table', 'values', 'vals'],
    table: 'USER',
    tableData: {
      columns: ['id', 'name', 'email', 'role', 'password'],
      rows: [
        ['1', '王小明', 'ming@email.com', 'user', '******'],
        ['2', '李燕容', 'yan@email.com', 'user', '******'],
        ['3', '小美', 'mei@email.com', 'user', '******'],
      ]
    },
    resultRow: ['4', '陳大文', 'chen@email.com', 'user', '******'],
  },

  // === 第 12 題：李燕容升級教練 ===
  {
    id: 12,
    type: 'UPDATE',
    scenario: '🎉 李燕容通過教練認證！要從「學員」升級成「教練」',
    instruction: '修改李燕容的 role 為 coach',
    expectedResult: '李燕容成功升級為教練',
    hint: 'UPDATE → 表名 → SET → 新值 → WHERE → 條件',
    tokens: [
      { id: 'update', text: 'UPDATE', type: 'keyword' },
      { id: 'table', text: 'USER', type: 'table' },
      { id: 'set', text: 'SET', type: 'keyword' },
      { id: 'assign', text: "role = 'coach'", type: 'value' },
      { id: 'where', text: 'WHERE', type: 'keyword' },
      { id: 'condition', text: 'id = 2', type: 'operator' },
    ],
    correctOrder: ['update', 'table', 'set', 'assign', 'where', 'condition'],
    table: 'USER',
    tableData: {
      columns: ['id', 'name', 'email', 'role', 'password'],
      rows: [
        ['1', '王小明', 'ming@email.com', 'user', '******'],
        ['2', '李燕容', 'yan@email.com', 'user', '******'],
        ['3', '小美', 'mei@email.com', 'user', '******'],
      ]
    },
    updateCell: { row: 1, col: 3, oldValue: 'user', newValue: 'coach' },
  },

  // === 第 13 題：修改會員 email ===
  {
    id: 13,
    type: 'UPDATE',
    scenario: '📧 王小明：「我換信箱了！請幫我更新」',
    instruction: '修改 id=1 的會員 email',
    expectedResult: '王小明的信箱更新成功',
    hint: 'UPDATE → 表名 → SET → 新值 → WHERE → 條件',
    tokens: [
      { id: 'update', text: 'UPDATE', type: 'keyword' },
      { id: 'table', text: 'USER', type: 'table' },
      { id: 'set', text: 'SET', type: 'keyword' },
      { id: 'assign', text: "email = 'newming@email.com'", type: 'value' },
      { id: 'where', text: 'WHERE', type: 'keyword' },
      { id: 'condition', text: 'id = 1', type: 'operator' },
    ],
    correctOrder: ['update', 'table', 'set', 'assign', 'where', 'condition'],
    table: 'USER',
    tableData: {
      columns: ['id', 'name', 'email', 'role', 'password'],
      rows: [
        ['1', '王小明', 'ming@email.com', 'user', '******'],
        ['2', '李燕容', 'yan@email.com', 'user', '******'],
        ['3', '小美', 'mei@email.com', 'user', '******'],
      ]
    },
    updateCell: { row: 0, col: 2, oldValue: 'ming@email.com', newValue: 'newming@email.com' },
  },

  // === 第 14 題：刪除會員 ===
  {
    id: 14,
    type: 'DELETE',
    scenario: '😢 小美：「我要退出會員，請刪除我的帳號」',
    instruction: '從 USER 表刪除小美的資料',
    expectedResult: '成功刪除會員「小美」',
    hint: 'DELETE FROM → 表名 → WHERE → 條件',
    tokens: [
      { id: 'delete', text: 'DELETE FROM', type: 'keyword' },
      { id: 'table', text: 'USER', type: 'table' },
      { id: 'where', text: 'WHERE', type: 'keyword' },
      { id: 'condition', text: 'id = 3', type: 'operator' },
    ],
    correctOrder: ['delete', 'table', 'where', 'condition'],
    table: 'USER',
    tableData: {
      columns: ['id', 'name', 'email', 'role', 'password'],
      rows: [
        ['1', '王小明', 'ming@email.com', 'user', '******'],
        ['2', '李燕容', 'yan@email.com', 'user', '******'],
        ['3', '小美', 'mei@email.com', 'user', '******'],
      ]
    },
    deleteRow: 2,
  },

  // === 第 15 題：新增教練帳號 ===
  {
    id: 15,
    type: 'INSERT',
    scenario: '💪 新教練「張健身」加入團隊！',
    instruction: '新增教練帳號（role 為 coach）',
    expectedResult: '成功新增教練「張健身」',
    hint: 'INSERT INTO → 表名 → VALUES → (值)',
    tokens: [
      { id: 'insert', text: 'INSERT INTO', type: 'keyword' },
      { id: 'table', text: 'USER', type: 'table' },
      { id: 'values', text: 'VALUES', type: 'keyword' },
      { id: 'vals', text: "('張健身', 'coach@email.com', 'coach', '密碼')", type: 'value' },
    ],
    correctOrder: ['insert', 'table', 'values', 'vals'],
    table: 'USER',
    tableData: {
      columns: ['id', 'name', 'email', 'role', 'password'],
      rows: [
        ['1', '王小明', 'ming@email.com', 'user', '******'],
        ['2', '李燕容', 'yan@email.com', 'coach', '******'],
        ['3', '小美', 'mei@email.com', 'user', '******'],
      ]
    },
    resultRow: ['4', '張健身', 'coach@email.com', 'coach', '******'],
  },

  // === 第 16 題：教練降級為學員 ===
  {
    id: 16,
    type: 'UPDATE',
    scenario: '📉 李燕容因故暫停教練工作，改回一般學員',
    instruction: '將李燕容的 role 改回 user',
    expectedResult: '李燕容已改回一般學員',
    hint: 'UPDATE → 表名 → SET → 新值 → WHERE → 條件',
    tokens: [
      { id: 'update', text: 'UPDATE', type: 'keyword' },
      { id: 'table', text: 'USER', type: 'table' },
      { id: 'set', text: 'SET', type: 'keyword' },
      { id: 'assign', text: "role = 'user'", type: 'value' },
      { id: 'where', text: 'WHERE', type: 'keyword' },
      { id: 'condition', text: 'id = 2', type: 'operator' },
    ],
    correctOrder: ['update', 'table', 'set', 'assign', 'where', 'condition'],
    table: 'USER',
    tableData: {
      columns: ['id', 'name', 'email', 'role', 'password'],
      rows: [
        ['1', '王小明', 'ming@email.com', 'user', '******'],
        ['2', '李燕容', 'yan@email.com', 'coach', '******'],
        ['3', '小美', 'mei@email.com', 'user', '******'],
      ]
    },
    updateCell: { row: 1, col: 3, oldValue: 'coach', newValue: 'user' },
  },

  // === 第 17 題：修改會員姓名 ===
  {
    id: 17,
    type: 'UPDATE',
    scenario: '✏️ 王小明：「我改名叫『王大明』了，請更新！」',
    instruction: '修改 id=1 的會員名稱',
    expectedResult: '會員名稱更新為「王大明」',
    hint: 'UPDATE → 表名 → SET → 新值 → WHERE → 條件',
    tokens: [
      { id: 'update', text: 'UPDATE', type: 'keyword' },
      { id: 'table', text: 'USER', type: 'table' },
      { id: 'set', text: 'SET', type: 'keyword' },
      { id: 'assign', text: "name = '王大明'", type: 'value' },
      { id: 'where', text: 'WHERE', type: 'keyword' },
      { id: 'condition', text: 'id = 1', type: 'operator' },
    ],
    correctOrder: ['update', 'table', 'set', 'assign', 'where', 'condition'],
    table: 'USER',
    tableData: {
      columns: ['id', 'name', 'email', 'role', 'password'],
      rows: [
        ['1', '王小明', 'ming@email.com', 'user', '******'],
        ['2', '李燕容', 'yan@email.com', 'user', '******'],
        ['3', '小美', 'mei@email.com', 'user', '******'],
      ]
    },
    updateCell: { row: 0, col: 1, oldValue: '王小明', newValue: '王大明' },
  },

  // === 第 18 題：新增管理員 ===
  {
    id: 18,
    type: 'INSERT',
    scenario: '👑 新增系統管理員「林管理」',
    instruction: '新增管理員帳號（role 為 admin）',
    expectedResult: '成功新增管理員「林管理」',
    hint: 'INSERT INTO → 表名 → VALUES → (值)',
    tokens: [
      { id: 'insert', text: 'INSERT INTO', type: 'keyword' },
      { id: 'table', text: 'USER', type: 'table' },
      { id: 'values', text: 'VALUES', type: 'keyword' },
      { id: 'vals', text: "('林管理', 'admin@email.com', 'admin', '密碼')", type: 'value' },
    ],
    correctOrder: ['insert', 'table', 'values', 'vals'],
    table: 'USER',
    tableData: {
      columns: ['id', 'name', 'email', 'role', 'password'],
      rows: [
        ['1', '王小明', 'ming@email.com', 'user', '******'],
        ['2', '李燕容', 'yan@email.com', 'user', '******'],
        ['3', '小美', 'mei@email.com', 'user', '******'],
      ]
    },
    resultRow: ['4', '林管理', 'admin@email.com', 'admin', '******'],
  },

  // === 第 19 題：刪除離職教練 ===
  {
    id: 19,
    type: 'DELETE',
    scenario: '👋 教練「李燕容」離職了，需要刪除帳號',
    instruction: '從 USER 表刪除 id=2 的資料',
    expectedResult: '成功刪除教練「李燕容」',
    hint: 'DELETE FROM → 表名 → WHERE → 條件',
    tokens: [
      { id: 'delete', text: 'DELETE FROM', type: 'keyword' },
      { id: 'table', text: 'USER', type: 'table' },
      { id: 'where', text: 'WHERE', type: 'keyword' },
      { id: 'condition', text: 'id = 2', type: 'operator' },
    ],
    correctOrder: ['delete', 'table', 'where', 'condition'],
    table: 'USER',
    tableData: {
      columns: ['id', 'name', 'email', 'role', 'password'],
      rows: [
        ['1', '王小明', 'ming@email.com', 'user', '******'],
        ['2', '李燕容', 'yan@email.com', 'coach', '******'],
        ['3', '小美', 'mei@email.com', 'user', '******'],
      ]
    },
    deleteRow: 1,
  },

  // === 第 20 題：新增企業會員 ===
  {
    id: 20,
    type: 'INSERT',
    scenario: '🏢 企業合作！「台積電健身社」團體加入',
    instruction: '新增企業會員帳號',
    expectedResult: '成功新增企業會員',
    hint: 'INSERT INTO → 表名 → VALUES → (值)',
    tokens: [
      { id: 'insert', text: 'INSERT INTO', type: 'keyword' },
      { id: 'table', text: 'USER', type: 'table' },
      { id: 'values', text: 'VALUES', type: 'keyword' },
      { id: 'vals', text: "('台積電健身社', 'tsmc@email.com', 'user', '密碼')", type: 'value' },
    ],
    correctOrder: ['insert', 'table', 'values', 'vals'],
    table: 'USER',
    tableData: {
      columns: ['id', 'name', 'email', 'role', 'password'],
      rows: [
        ['1', '王小明', 'ming@email.com', 'user', '******'],
        ['2', '李燕容', 'yan@email.com', 'coach', '******'],
        ['3', '小美', 'mei@email.com', 'user', '******'],
      ]
    },
    resultRow: ['4', '台積電健身社', 'tsmc@email.com', 'user', '******'],
  },
]

// === 狀態管理 ===
const currentQuestionIndex = ref(0)
const selectedTokens = ref<string[]>([])  // 已選擇的 token ids
const isCorrect = ref<boolean | null>(null)
const showResult = ref(false)
const animateTable = ref(false)
const isExecuting = ref(false)  // 執行中動畫狀態
const showExecutionArrow = ref(false)  // 顯示執行箭頭動畫

const currentQuestion = computed(() => QUESTIONS[currentQuestionIndex.value])
const totalQuestions = computed(() => QUESTIONS.length)

// 可用的 tokens（還沒被選的）
const availableTokens = computed(() => {
  return currentQuestion.value.tokens.filter(t => !selectedTokens.value.includes(t.id))
})

// 已選擇的 tokens（按順序）
const selectedTokenObjects = computed(() => {
  return selectedTokens.value.map(id =>
    currentQuestion.value.tokens.find(t => t.id === id)!
  )
})

// 組合出來的 SQL 語法
const assembledSql = computed(() => {
  return selectedTokenObjects.value.map(t => t.text).join(' ')
})

// === 方法 ===
function selectToken(tokenId: string) {
  if (showResult.value) return
  selectedTokens.value.push(tokenId)
}

function removeToken(index: number) {
  if (showResult.value) return
  selectedTokens.value.splice(index, 1)
}

function clearSelection() {
  selectedTokens.value = []
  isCorrect.value = null
  showResult.value = false
  animateTable.value = false
  isExecuting.value = false
  showExecutionArrow.value = false
}

function checkAnswer() {
  const correct = currentQuestion.value.correctOrder
  const selected = selectedTokens.value

  // 檢查長度和順序
  if (selected.length !== correct.length) {
    isCorrect.value = false
    showResult.value = true
    return
  }

  for (let i = 0; i < correct.length; i++) {
    if (selected[i] !== correct[i]) {
      isCorrect.value = false
      showResult.value = true
      return
    }
  }

  // 答對了！開始執行動畫序列
  isCorrect.value = true
  isExecuting.value = true  // Step 1: SQL 區域發光

  // Step 2: 顯示執行箭頭（500ms 後）
  setTimeout(() => {
    showExecutionArrow.value = true
  }, 500)

  // Step 3: 顯示結果訊息（1000ms 後）
  setTimeout(() => {
    showResult.value = true
  }, 1000)

  // Step 4: 表格更新動畫（1500ms 後）
  setTimeout(() => {
    isExecuting.value = false
    showExecutionArrow.value = false
    animateTable.value = true
  }, 1500)
}

function nextQuestion() {
  if (currentQuestionIndex.value < QUESTIONS.length - 1) {
    currentQuestionIndex.value++
    clearSelection()
  }
}

function prevQuestion() {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--
    clearSelection()
  }
}

function handleComplete() {
  emit('complete')
}

// Token 顏色樣式
function getTokenClass(type: SqlToken['type']) {
  switch (type) {
    case 'keyword': return 'bg-purple-500/20 text-purple-400 border-purple-500/50'
    case 'table': return 'bg-blue-500/20 text-blue-400 border-blue-500/50'
    case 'column': return 'bg-amber-500/20 text-amber-400 border-amber-500/50'
    case 'value': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
    case 'operator': return 'bg-rose-500/20 text-rose-400 border-rose-500/50'
    case 'punctuation': return 'bg-slate-500/20 text-slate-400 border-slate-500/50'
  }
}

// SQL 類型顏色
function getTypeColor(type: Question['type']) {
  switch (type) {
    case 'INSERT': return 'bg-emerald-500/20 text-emerald-400'
    case 'UPDATE': return 'bg-amber-500/20 text-amber-400'
    case 'DELETE': return 'bg-rose-500/20 text-rose-400'
  }
}

// 初始化
onMounted(() => {
  clearSelection()
})

watch(currentQuestionIndex, () => {
  clearSelection()
})
</script>

<template>
  <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-slate-900">
      <!-- 背景 -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div class="animate-float-slow absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div class="animate-float-slower absolute right-[15%] top-[40%] h-48 w-48 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div class="relative z-10 flex flex-1 flex-col gap-4 p-4 md:p-6">
        <!-- 進度與題型 -->
        <div class="flex items-center justify-between">
          <span class="rounded-full px-3 py-1 text-sm font-bold" :class="getTypeColor(currentQuestion.type)">
            {{ currentQuestion.type }}
          </span>
          <span class="text-sm font-bold text-slate-400">
            第 {{ currentQuestionIndex + 1 }} / {{ totalQuestions }} 題
          </span>
        </div>

        <!-- 情境描述 -->
        <div class="rounded-xl border border-slate-700 bg-slate-800 p-4">
          <p class="text-lg font-bold text-white">{{ currentQuestion.scenario }}</p>
          <p class="mt-2 text-sm text-slate-400">{{ currentQuestion.instruction }}</p>
        </div>

        <!-- 提示 -->
        <div v-if="currentQuestion.hint" class="rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-2">
          <span class="text-sm text-blue-300">💡 提示：{{ currentQuestion.hint }}</span>
        </div>

        <!-- SQL 組合區域 -->
        <div
          class="rounded-xl border-2 border-dashed bg-slate-800/50 p-4 transition-all duration-300"
          :class="[
            isExecuting ? 'border-emerald-500 sql-executing' : 'border-slate-600',
          ]"
        >
          <div class="mb-2 flex items-center gap-2">
            <span class="text-xs text-slate-500">你的 SQL 語法：</span>
            <span v-if="isExecuting" class="text-xs text-emerald-400 animate-pulse">⚡ 執行中...</span>
          </div>

          <!-- 已選擇的 tokens -->
          <div class="min-h-[60px] flex flex-wrap gap-2 items-start">
            <TransitionGroup name="token">
              <button
                v-for="(token, index) in selectedTokenObjects"
                :key="token.id"
                class="rounded-lg border-2 px-3 py-2 font-mono text-sm transition-all hover:scale-105 hover:opacity-80"
                :class="getTokenClass(token.type)"
                @click="removeToken(index)"
              >
                {{ token.text }}
                <span class="ml-1 text-xs opacity-60">×</span>
              </button>
            </TransitionGroup>

            <div v-if="selectedTokens.length === 0" class="text-slate-500 text-sm">
              點擊下方按鈕來組合 SQL...
            </div>
          </div>

          <!-- 組合後的完整語法預覽 -->
          <div v-if="selectedTokens.length > 0" class="mt-3 rounded-lg bg-slate-900 p-3 font-mono text-sm">
            <code class="text-slate-300">{{ assembledSql }}</code>
          </div>
        </div>

        <!-- 執行箭頭動畫 -->
        <Transition name="arrow">
          <div v-if="showExecutionArrow" class="flex flex-col items-center gap-1 py-2">
            <div class="text-2xl text-emerald-400 animate-bounce">⬇</div>
            <div class="text-xs text-emerald-400 font-medium">傳送到資料庫</div>
          </div>
        </Transition>

        <!-- 可選擇的 SQL 片段 -->
        <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-4">
          <div class="mb-3 text-xs text-slate-500">點擊選擇 SQL 片段：</div>
          <div class="flex flex-wrap gap-2">
            <TransitionGroup name="token">
              <button
                v-for="token in availableTokens"
                :key="token.id"
                class="rounded-lg border-2 px-3 py-2 font-mono text-sm transition-all hover:scale-105"
                :class="[
                  getTokenClass(token.type),
                  showResult ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg',
                  !showResult && selectedTokens.length === 0 ? 'clickable-token' : ''
                ]"
                :disabled="showResult"
                @click="selectToken(token.id)"
              >
                {{ token.text }}
              </button>
            </TransitionGroup>
          </div>
        </div>

        <!-- 操作按鈕 -->
        <div class="flex gap-3">
          <button
            class="rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-600"
            @click="clearSelection"
          >
            清除重來
          </button>
          <button
            v-if="!showResult"
            class="flex-1 rounded-lg bg-purple-500 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="selectedTokens.length === 0"
            @click="checkAnswer"
          >
            執行 SQL ▶
          </button>
          <button
            v-else-if="isCorrect && currentQuestionIndex < QUESTIONS.length - 1"
            class="flex-1 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-emerald-600"
            @click="nextQuestion"
          >
            下一題 →
          </button>
          <button
            v-else-if="isCorrect && currentQuestionIndex === QUESTIONS.length - 1"
            class="flex-1 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-emerald-600"
            @click="handleComplete"
          >
            完成練習 🎉
          </button>
        </div>

        <!-- 結果顯示 -->
        <Transition name="fade">
          <div v-if="showResult" class="rounded-xl p-4" :class="isCorrect ? 'border border-emerald-500/30 bg-emerald-500/10' : 'border border-rose-500/30 bg-rose-500/10'">
            <div class="flex items-center gap-2">
              <span class="text-2xl">{{ isCorrect ? '🎉' : '😅' }}</span>
              <span class="font-bold" :class="isCorrect ? 'text-emerald-400' : 'text-rose-400'">
                {{ isCorrect ? '答對了！' : '再試試看！' }}
              </span>
            </div>
            <p v-if="!isCorrect" class="mt-2 text-sm text-rose-300">
              提示：{{ currentQuestion.hint }}
            </p>
          </div>
        </Transition>

        <!-- 資料表預覽 (DBeaver 風格) -->
        <div
          class="rounded-xl border bg-slate-800/50 overflow-hidden transition-all duration-500"
          :class="[
            animateTable ? 'border-emerald-500 table-updated' : 'border-slate-700',
            showExecutionArrow ? 'table-receiving' : ''
          ]"
        >
          <div
            class="flex items-center gap-2 border-b bg-slate-800 px-3 py-2 transition-all duration-300"
            :class="[
              animateTable ? 'border-emerald-500/50 bg-emerald-500/10' : 'border-slate-700',
              showExecutionArrow ? 'bg-emerald-500/5' : ''
            ]"
          >
            <!-- 視窗控制點 -->
            <div class="flex gap-1.5">
              <div class="h-3 w-3 rounded-full bg-red-500/60"></div>
              <div class="h-3 w-3 rounded-full bg-yellow-500/60"></div>
              <div class="h-3 w-3 rounded-full bg-green-500/60"></div>
            </div>
            <span class="ml-2 text-xs text-slate-500">DBeaver</span>
            <span class="text-slate-600">|</span>
            <span class="font-mono text-sm font-bold text-blue-400">{{ currentQuestion.table }}</span>
            <span class="text-xs text-slate-500">- LiveFit 資料庫</span>
            <!-- 接收中提示 -->
            <span v-if="showExecutionArrow" class="ml-auto text-xs text-emerald-400 animate-pulse">📥 接收指令...</span>
            <!-- 執行完成提示 -->
            <span v-else-if="animateTable" class="ml-auto text-xs text-emerald-400">✅ 執行成功</span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead class="bg-slate-800/50">
                <tr>
                  <th
                    v-for="col in currentQuestion.tableData.columns"
                    :key="col"
                    class="px-3 py-2 text-left font-mono text-purple-400"
                  >
                    {{ col }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <!-- 現有資料列 -->
                <tr
                  v-for="(row, rowIndex) in currentQuestion.tableData.rows"
                  :key="rowIndex"
                  class="border-t border-slate-700 transition-all duration-500"
                  :class="{
                    'bg-rose-500/20 opacity-50 line-through': animateTable && currentQuestion.deleteRow === rowIndex,
                  }"
                >
                  <td
                    v-for="(cell, colIndex) in row"
                    :key="colIndex"
                    class="px-3 py-2 transition-all duration-500"
                    :class="{
                      'bg-amber-500/20 text-amber-400 font-bold': animateTable && currentQuestion.updateCell && currentQuestion.updateCell.row === rowIndex && currentQuestion.updateCell.col === colIndex,
                      'text-slate-400': colIndex === 0,
                      'text-white': colIndex !== 0,
                    }"
                  >
                    <!-- UPDATE 動畫：顯示新值 -->
                    <template v-if="animateTable && currentQuestion.updateCell && currentQuestion.updateCell.row === rowIndex && currentQuestion.updateCell.col === colIndex">
                      <span class="line-through text-slate-500 mr-2">{{ currentQuestion.updateCell.oldValue }}</span>
                      <span class="text-amber-400">{{ currentQuestion.updateCell.newValue }}</span>
                    </template>
                    <template v-else>
                      {{ cell }}
                    </template>
                  </td>
                </tr>

                <!-- INSERT 動畫：新增的列 -->
                <Transition name="row">
                  <tr
                    v-if="animateTable && currentQuestion.resultRow"
                    class="border-t border-emerald-500/50 bg-emerald-500/20"
                  >
                    <td
                      v-for="(cell, colIndex) in currentQuestion.resultRow"
                      :key="colIndex"
                      class="px-3 py-2 font-bold"
                      :class="colIndex === 0 ? 'text-slate-400' : 'text-emerald-400'"
                    >
                      {{ cell }} {{ colIndex === 1 ? '✨' : '' }}
                    </td>
                  </tr>
                </Transition>
              </tbody>
            </table>
          </div>
        </div>

      </div>
  </div>
</template>

<style scoped>
/* Token 動畫 */
.token-enter-active,
.token-leave-active {
  transition: all 0.3s ease;
}

.token-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.token-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.token-move {
  transition: transform 0.3s ease;
}

/* 結果淡入 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* 列新增動畫 */
.row-enter-active {
  transition: all 0.5s ease;
}

.row-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

/* 可點擊提示動畫 */
@keyframes token-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.4);
  }
  50% {
    box-shadow: 0 0 0 6px rgba(168, 85, 247, 0);
  }
}

@keyframes subtle-glow {
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.15);
  }
}

.clickable-token {
  animation: token-pulse 2s ease-in-out infinite, subtle-glow 2s ease-in-out infinite;
  position: relative;
}

.clickable-token::after {
  content: '👆';
  position: absolute;
  bottom: -18px;
  right: -6px;
  font-size: 12px;
  animation: finger-bounce 1s ease-in-out infinite;
}

@keyframes finger-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

/* === SQL 執行動畫 === */

/* SQL 區域執行時發光 */
@keyframes sql-glow {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
  }
  50% {
    box-shadow: 0 0 20px 4px rgba(16, 185, 129, 0.3);
  }
}

.sql-executing {
  animation: sql-glow 0.8s ease-in-out infinite;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, transparent 100%);
}

/* 表格接收指令時的閃爍 */
@keyframes table-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.3);
  }
  50% {
    box-shadow: 0 0 15px 2px rgba(16, 185, 129, 0.2);
  }
}

.table-receiving {
  animation: table-pulse 0.6s ease-in-out infinite;
}

/* 表格更新完成時的效果 */
.table-updated {
  box-shadow: 0 0 20px 4px rgba(16, 185, 129, 0.2);
}

/* 箭頭動畫 */
.arrow-enter-active {
  transition: all 0.4s ease-out;
}

.arrow-leave-active {
  transition: all 0.3s ease-in;
}

.arrow-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.arrow-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
