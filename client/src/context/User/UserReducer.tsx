import { State, Action } from "./UserType";
import { LocalStorage } from "../../services/LocalStorage";

import {
  STORAGE_COLOR,
  STORAGE_DESCRIBE,
  STORAGE_GENDER,
  STORAGE_GENDER_FIND,
  STORAGE_GENDER_PERSONAL,
  STORAGE_OLD,
  STORAGE_OLD_FIND,
  STORAGE_OLD_PERSONAL,
  STORAGE_THEME,
} from "../../services/variables";

export default function userReducer(state: State, action: Action) {
  const localStore = new LocalStorage();

  switch (action.type) {

    case "change_access": {
      const result: boolean = action.payload.isAccess === true;
      const storageName: string = action.payload.localStorage;

      localStore.setOption(storageName, result);

      if (result) {
        localStore.setOption(storageName, result);
      }

      switch (storageName) {
        case STORAGE_GENDER:
          return { ...state, STORAGE_GENDER: result };
        case STORAGE_OLD:
          return { ...state, STORAGE_OLD: result };
        default:
          throw new Error("change_access: error with type");
      }
    }

    case "change_option": {
      const result: any = action.payload.value;
      const storageName: string = action.payload.localStorage;

      localStore.setOption(storageName, result);

      switch (storageName) {
        case STORAGE_GENDER_PERSONAL:
          return { ...state, STORAGE_GENDER_PERSONAL: result };

        case STORAGE_GENDER_FIND:
          return { ...state, STORAGE_GENDER_FIND: result };

        case STORAGE_OLD_PERSONAL:
          return { ...state, STORAGE_OLD_PERSONAL: result };

        case STORAGE_OLD_FIND:
          return { ...state, STORAGE_OLD_FIND: result };

        case STORAGE_THEME:
          return { ...state, STORAGE_THEME: result };

        case STORAGE_COLOR:
          return { ...state, STORAGE_COLOR: result };

        case STORAGE_DESCRIBE:
          return { ...state, STORAGE_DESCRIBE: result };

        default:
          throw new Error("change_option: error with type");
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
