import { setClassType, VariableType, findChangeActiveType } from "./types";

function setClass({ bool, cssClass }: setClassType) {
  return bool ? `${cssClass} active` : cssClass;
}

function isAllItemsNotActive(arr: Array<VariableType>) {
  return arr.every((item: VariableType) => item.isActive === false);
}

function initGender(
  arr: Array<VariableType>,
  personal: boolean,
  storagePersonal: number,
  storageFind: Array<number>
) {
  let result = arr;

  if (personal) {
    const localStore = storagePersonal;

    result = result.map((item) => {
      if (item.id === +localStore) {
        return { ...item, isActive: true };
      }
      return item;
    });
  }

  if (!personal) {
    const localStore = storageFind;

    result = result.map((item) => {
      if (localStore.some((id) => item.id === +id)) {
        return { ...item, isActive: true };
      }
      return item;
    });
  }
  return result;
}

function storageFind(
  id: number,
  storageFind: Array<VariableType>,
  setFind: (result: Array<VariableType>) => void,
  storageTitleFind: string,
  dispatch: ({ type, payload }: findChangeActiveType) => void
) {
  let result,
    dispatchVal: Array<number> = [];

  result = storageFind.map((item) => {
    if (item.id === id) {
      return { ...item, isActive: !item.isActive };
    }

    if ((item.id === 0 && id !== 0) || (item.id !== 0 && id === 0)) {
      return { ...item, isActive: false };
    }
    return item;
  });

  if (isAllItemsNotActive(result)) {
    result[0].isActive = true;
  }

  for (let i = 0; i < result.length; i++) {
    const item = result[i];
    if (item.isActive) {
      dispatchVal.push(item.id);
    }
  }

  if (dispatchVal.length === 0) dispatchVal.push(0);

  dispatch({
    type: "change_option",
    payload: {
      value: dispatchVal,
      localStorage: storageTitleFind,
    },
  });

  setFind(result);
}
// TODO: 
//dispatcher
// initGender
// storageFind
// personalChangeActive

// logic
// setClass
// isAllItemsNotActive
// handleChangeActive

export { setClass, isAllItemsNotActive, initGender, storageFind };
