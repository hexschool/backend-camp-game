/**
 * 混淆密碼工具
 * 用於 Day 7 隱藏道具的密碼
 *
 * 編碼流程：原文 → 加前後綴 → 反轉 → Base64 → 加分隔符
 */

const PREFIX = 'HEX_'
const SUFFIX = '_2025'
const SEPARATOR = '-'

/**
 * 將 Base64 字串加上分隔符，每 4 個字元一組
 */
function addSeparators(str: string): string {
  return str.match(/.{1,4}/g)?.join(SEPARATOR) || str
}

/**
 * 移除分隔符
 */
function removeSeparators(str: string): string {
  return str.split(SEPARATOR).join('')
}

/**
 * 反轉字串
 */
function reverseString(str: string): string {
  return str.split('').reverse().join('')
}

/**
 * Base64 編碼（支援 Unicode）
 */
function toBase64(text: string): string {
  const bytes = new TextEncoder().encode(text)
  const binary = String.fromCharCode(...bytes)
  return btoa(binary)
}

/**
 * Base64 解碼（支援 Unicode）
 */
function fromBase64(encoded: string): string {
  try {
    const binary = atob(encoded)
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0))
    return new TextDecoder().decode(bytes)
  } catch {
    return ''
  }
}

/**
 * 編碼密碼
 * 流程：加前後綴 → 反轉 → Base64 → 加分隔符
 */
function encode(text: string): string {
  const withFixes = PREFIX + text + SUFFIX
  const reversed = reverseString(withFixes)
  const base64 = toBase64(reversed)
  return addSeparators(base64)
}

/**
 * 解碼密碼
 * 流程：移除分隔符 → Base64 解碼 → 反轉 → 移除前後綴
 */
function decode(encoded: string): string {
  try {
    const noSeparators = removeSeparators(encoded)
    const base64Decoded = fromBase64(noSeparators)
    const reversed = reverseString(base64Decoded)

    // 檢查並移除前後綴
    if (reversed.startsWith(PREFIX) && reversed.endsWith(SUFFIX)) {
      return reversed.slice(PREFIX.length, -SUFFIX.length)
    }
    return ''
  } catch {
    return ''
  }
}

/**
 * 驗證密碼是否正確
 * @param inputPassword 玩家輸入的密碼
 * @param playerName 玩家名字
 * @returns 是否驗證通過
 */
export function verifyPassword(inputPassword: string, playerName: string): boolean {
  const decoded = decode(inputPassword)
  return decoded === playerName
}

/**
 * 生成玩家的專屬密碼
 * @param playerName 玩家名字
 * @returns 混淆後的密碼
 */
export function generatePassword(playerName: string): string {
  return encode(playerName)
}
