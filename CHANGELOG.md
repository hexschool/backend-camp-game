# Changelog

此專案的所有重要變更都會記錄在這個檔案中。

格式基於 [Keep a Changelog](https://keepachangelog.com/zh-TW/1.0.0/)。

---

## [1.1.0] - 2025-01-12

### 新增
- **Git 互動實驗室**：第二關新增 Git 版本控制互動教學，玩家可實際體驗 git add、git commit 的運作方式
- **存檔點發光動畫**：當教學提示玩家點擊存檔點時，commit 卡片會有呼吸燈效果引導點擊
- **Public/Private 劇情**：新增「前任後端把專案設成 Public」的驚訝劇情，增加故事張力

### 變更
- **第二關測驗題調整**：更新為 7 題，移除 Fork 相關內容，新增 Public/Private 觀念題
- **每日任務更新**：day02.md 配合遊戲內容調整，簡化為 Clone 專案任務
- **遊戲流程優化**：移除遊戲內的 Clone 操作指示（已移至每日任務說明）

### 修復
- 修正教練表情 (coachExpression) 在各對話節點的顯示
- 修正互動簡報圖片路徑

---

## [1.0.0] - 2025-01-11

### 新增
- **第一關：報到日** - 認識 LiveFit 與需求分析
  - 使用者故事 (User Story) 教學
  - 線稿圖 (Wireframe) 與泳道圖 (Swimlane) 介紹
  - 20 題入職測驗
- **第二關：把程式碼拿到手** - Git 與 GitHub 入門
  - Git 版本控制基礎概念
  - GitHub 平台介紹
  - Clone 操作說明
- **遊戲核心系統**
  - 對話系統 (dialogue)
  - 測驗系統 (quiz)
  - 互動簡報系統 (interactiveSlide)
  - 章節完成慶祝畫面 (celebration)
- **教練角色「海克絲」**
  - 多種表情狀態：normal、praise、shocked、sigh、angry
  - 動態表情切換
