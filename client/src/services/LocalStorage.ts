import { ILocalStorage } from "./LocalStorageType";
import {
  STORAGE_THEME,
  STORAGE_COLOR,
  STORAGE_DESCRIBE,
  STORAGE_GENDER_FIND,
  STORAGE_OLD_PERSONAL,
  STORAGE_GENDER_PERSONAL,
  STORAGE_OLD_FIND
} from "./variables";

class LocalStorage implements ILocalStorage {
  theme = "sp";
  color = "blue";
  genderLocal = true;
  personal = 0;
  find = [0];
  describe = "";

  setOption(text: string, value: any) {
    localStorage.setItem(text, JSON.stringify(value));
    return value;
  }

  getLocalAccess(text: string) {
    let result: boolean;
    const isExistLS = localStorage.getItem(text);

    if (isExistLS !== null) {
      result = isExistLS === "true";
    } else {
      result = this.genderLocal;
    }

    return result;
  }

  getState(name: string) {
    let result;
    const localStoreItem = localStorage.getItem(name);

    if (localStoreItem !== null) {
      result = JSON.parse(localStoreItem);
      return result;
    }

    switch (name) {
      case STORAGE_GENDER_PERSONAL:
      case STORAGE_OLD_PERSONAL:
        return this.personal;

      case STORAGE_GENDER_FIND:
      case STORAGE_OLD_FIND:
        return this.find;

      case STORAGE_THEME:
        return this.theme

      case STORAGE_COLOR:
        return this.color

      case STORAGE_DESCRIBE:
        return this.describe

      default:
        throw new Error("getState: error with type");
    }

  }
}

export { LocalStorage };
