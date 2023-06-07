import CryptoJS from "crypto-js";
const salt = process.env.REACT_APP_SALT;

export const encryptData = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), salt).toString();
};
export const decryptData = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, salt);
  try {
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (err) {
    return null;
  }
};
