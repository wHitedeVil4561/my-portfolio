import { decryptData, encryptData } from "./crypto.service";

export const setLocalStorage = (key, value) => {
  console.log(key, value, "-----------");
  const encryptedData = encryptData(value);
  console.log(encryptedData);
  localStorage.setItem(key, encryptedData);
};

export const getLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  return decryptData(value);
};
