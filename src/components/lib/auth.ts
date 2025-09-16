import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

const SECRET_KEY = "my-secret-key"; // ganti dengan env

// Encrypt
const encrypt = (data: any) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

// Decrypt
const decrypt = (cipherText: string) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

// Set session
export const setSession = (data: any) => {
  const encrypted = encrypt(data);
  Cookies.set("session", encrypted, { expires: 1 }); // 1 hari
};

// Get session
export const getSession = () => {
  const session = Cookies.get("session");
  if (!session) return null;
  try {
    return decrypt(session);
  } catch (e) {
    return null;
  }
};

// Clear session
export const clearSession = () => {
  Cookies.remove("session");
};
