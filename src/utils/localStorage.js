import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

const getItem = key => {
  return storage.getString(key);
};

const getAllItems = () => {
  return storage.getAllKeys();
};

const setItem = (key, value) => {
  return storage.set(key, value);
};

const removeItem = key => {
  return storage.delete(key);
};

const clearStorage = () => {
  return storage.clearAll();
};

export {storage, getItem, getAllItems, setItem, removeItem, clearStorage};
