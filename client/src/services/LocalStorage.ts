import { ILocalStorage } from "./LocalStorageType";

class LocalStorage implements ILocalStorage {
  theme = "sp";
  color = "blue";
  genderLocal = true;
  personal = 0;
  find = [0];

  setTheme(theme: string) {
    localStorage.setItem("theme", theme);
    return theme;
  }

  setColor(color: string) {
    localStorage.setItem("color", color);
    return color;
  }

  setDescribe(describe: string) {
    localStorage.setItem("describe", describe);
    return describe;
  }

  setFindGenderLocal(gender: boolean) {
    localStorage.setItem("findGenderLocal", gender.toString());
    return Boolean(gender);
  }

  setPersonalGender(id: number) {
    const result = id;
    localStorage.setItem("personalGender", JSON.stringify(result.toString()));

    return result;
  }

  setFindGender(arr: Array<number>) {
    let result = arr;
    localStorage.setItem("findGender", JSON.stringify(result));

    return result;
  }

  setOption(text: string, value: any) {
    localStorage.setItem(text, JSON.stringify(value));
    return value;
  }


  getTheme() {
    const result: string = localStorage.getItem("theme") || this.theme;
    return result;
  }

  getColor() {
    const result: string = localStorage.getItem("color") || this.color;
    return result;
  }

  getDescribe() {
    const result: string = localStorage.getItem("describe") || "";
    return result;
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

  getGender(name: string) {
    let result;
    const lstoraeItem = localStorage.getItem(name);

    if (lstoraeItem !== null) {
      result = JSON.parse(lstoraeItem);
      return result;
    }

    if (name === "findGender") {
      result = this.find;
    } else {
      result = this.personal;
    }

    return result;
  }

  getOld(name: string) {
    let result;
    const lstoraeItem = localStorage.getItem(name);

    if (lstoraeItem !== null) {
      result = JSON.parse(lstoraeItem);
      return result;
    }

    if (name === "findOld") {
      result = this.find;
    } else {
      result = this.personal;
    }

    return result;
  }
}

export { LocalStorage };
