import { setClassType, VariableType, findChangeActiveType } from "./types";

import {
  STORAGE_GENDER,
  STORAGE_GENDER_FIND,
  STORAGE_GENDER_PERSONAL,
  STORAGE_OLD_FIND,
  STORAGE_OLD_PERSONAL,
} from "../../../services/variables";

import { UserChange } from "../../../context/User/User";
import { OptionChange } from "../../../context/Option/Option";
import { CHANGE_PERSONAL, CHANGE_FIND } from "../../../context/Option/constant";
import { Action } from "../../../context/Option/OptionType";

function setClass({ bool, cssClass }: setClassType) {
  return bool ? `${cssClass} active` : cssClass;
}

function isAllItemsNotActive(arr: Array<VariableType>) {
  return arr.every((item: VariableType) => item.isActive === false);
}

function initGender(
  arr: Array<VariableType>,
  personal: boolean,
  localStore: any
) {
  let result = arr;

  const isPersonal = (personal: boolean, ...args: number[]) => {
    if (personal) {
      return args[0] === +localStore;
    }
    return localStore.some((id: number) => args[0] === +id);
  };

  result = result.map((item) =>
    isPersonal(personal, item.id) ? { ...item, isActive: true } : item
  );

  return result;
}

function handleChangeActive(
  target: any,
  isGender: boolean,
  dispatchUser: (action: Action) => void,
  dispatch: (action: Action) => void
) {
  const isPersonal: boolean = target.dataset.personal == "true";  

  if (isPersonal) {
    dispatch({
      type: CHANGE_PERSONAL,
      payload: {
        id: +target.value,
        isGender,
        dispatch: dispatchUser,
      },
    });
    return;
  }
  dispatch({
    type: CHANGE_FIND,
    payload: {
      id: +target.value,
      isGender,
      dispatch: dispatchUser,
    },
  });
}

export { setClass, isAllItemsNotActive, initGender, handleChangeActive };
