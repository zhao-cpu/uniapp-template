import CryptoJS from 'crypto-js';

const CRYPTO_SECRET = '__abc__';

/**
 * 加密数据
 * @param data - 数据
 */
export function encrypt(data: any) {
  const json = JSON.stringify(data);
  return CryptoJS.AES.encrypt(json, CRYPTO_SECRET).toString();
}

/**
 * 解密数据
 * @param cipherText - 密文
 */
export function decrypt(cipherText: string) {
  const bytes = CryptoJS.AES.decrypt(cipherText, CRYPTO_SECRET);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  if (originalText) {
    return JSON.parse(originalText);
  }
  return null;
}
