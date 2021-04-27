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

  // setTheme(theme: string) {
  //   localStorage.setItem("theme", theme);
  //   return theme;
  // }

  // setColor(color: string) {
  //   localStorage.setItem("color", color);
  //   return color;
  // }

  // setDescribe(describe: string) {
  //   localStorage.setItem("describe", describe);
  //   return describe;
  // }

  // setFindGenderLocal(gender: boolean) {
  //   localStorage.setItem("findGenderLocal", gender.toString());
  //   return Boolean(gender);
  // }

  // setPersonalGender(id: number) {
  //   const result = id;
  //   localStorage.setItem("personalGender", JSON.stringify(result.toString()));

  //   return result;
  // }

  // setFindGender(arr: Array<number>) {
  //   let result = arr;
  //   localStorage.setItem("findGender", JSON.stringify(result));

  //   return result;
  // }

  setOption(text: string, value: any) {
    localStorage.setItem(text, JSON.stringify(value));
    return value;
  }


  // getTheme() {
  //   const result: string = localStorage.getItem("theme") || this.theme;
  //   return result;
  // }

  // getColor() {
  //   const result: string = localStorage.getItem("color") || this.color;
  //   return result;
  // }

  // getDescribe() {
  //   const result: string = localStorage.getItem("describe") || "";
  //   return result;
  // }

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
