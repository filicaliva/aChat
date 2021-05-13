import { State, Action } from "./OptionType";
import { VariableType } from "../../components/Home/constant/variablesType";
import { UserChange } from "../User/User";

import { CHANGE_FIND, CHANGE_PERSONAL } from "./constant";

import {
  STORAGE_GENDER,
  STORAGE_OLD,
  STORAGE_GENDER_PERSONAL,
  STORAGE_OLD_FIND,
  STORAGE_GENDER_FIND,
} from "../../services/variables";

function isAllItemsNotActive(arr: Array<VariableType>) {
  return arr.every((item: VariableType) => item.isActive === false);
}

export default function optionReducer(state: State, action: Action) {
  switch (action.type) {
    case CHANGE_PERSONAL: {
      const { id, isGender, dispatch } = action.payload;

      let dispatchVal = id,
        isDispatchAccess = false;

      let result = state.gender_state.map((item) => {
        if (item.id === id) {
          console.log("id: ", item.id, !item.isActive);

          return { ...item, isActive: !item.isActive };
        }
        return { ...item, isActive: false };
      });

      let gender_find_state = state.gender_find_state.map((item) => {
        if (item.id === 0) {
          return { ...item, isActive: true };
        }
        return { ...item, isActive: false };
      });

      if (isAllItemsNotActive(result) || result[0].isActive === true) {
        result[0].isActive = true;
        dispatchVal = 0;
        isDispatchAccess = true;
        dispatch({
          type: "change_option",
          payload: {
            value: [0],
            localStorage: STORAGE_GENDER_FIND,
          },
        });
      }

      dispatch({
        type: "change_option",
        payload: {
          value: dispatchVal,
          localStorage: STORAGE_GENDER_PERSONAL,
        },
      });

      dispatch({
        type: "change_access",
        payload: {
          isAccess: isDispatchAccess,
          localStorage: isGender ? STORAGE_GENDER : STORAGE_OLD,
        },
      });
      console.log(id, result);

      if (isGender && isDispatchAccess) {
        return { ...state, gender_state: result, gender_find_state };
      }

      if (isGender) {
        return { ...state, gender_state: result };
      }

      return { ...state, old_state: result };
    }

    case CHANGE_FIND: {
      const { id, isGender, dispatch } = action.payload;

      let result,
        dispatchVal: Array<number> = [];

      const stateMap = isGender
        ? state.gender_find_state
        : state.old_find_state;

      result = stateMap.map((item) => {
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
          localStorage: isGender ? STORAGE_GENDER_FIND : STORAGE_OLD_FIND,
        },
      });

      if (isGender) {
        return { ...state, gender_find_state: result };
      }

      return { ...state, old_find_state: result };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
