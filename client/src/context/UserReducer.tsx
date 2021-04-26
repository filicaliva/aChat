import { State, Action } from "./UserType";
import { LocalStorage } from "../services/LocalStorage";

export default function userReducer(state: State, action: Action) {
  const locstore = new LocalStorage();

  switch (action.type) {
    case "change_color": {
      const result: string = action.payload.toString();
      locstore.setColor(result);

      return { ...state, color: result };
    }
    case "change_theme": {
      const result: string = action.payload.toString();
      locstore.setTheme(result);

      return { ...state, theme: result };
    }

    case "change_description": {
      const result: string = action.payload.toString();
      locstore.setDescribe(result);

      return { ...state, describe: result };
    }

    case "change_gender_find_access": {
      const result: boolean = action.payload === true;
      locstore.setOption("findGenderLocal", result);

      if (result) {
        locstore.setOption("findGenderLocal", result);
      }

      return { ...state, findGenderLocal: result };
    }

    case "change_old_find_access": {
      const result: boolean = action.payload === true;
      locstore.setOption("findOldLocal", result);

      if (result) {
        locstore.setOption("findOldLocal", result);
      }

      return { ...state, findOldLocal: result };
    }

    case "change_gender_personal": {
      const result: number = +action.payload;
      locstore.setOption("personalGender", result);
      return { ...state, personalGender: result };
    }

    case "change_gender_find": {
      const result: any = action.payload;
      locstore.setOption("findGender", result);

      return { ...state, findGender: result };
    }

    case "change_old_personal": {
      const result: number = +action.payload;
      locstore.setOption("personalOld", result);
      return { ...state, personalOld: result };
    }

    case "change_old_find": {
      const result: any = action.payload;
      locstore.setOption("findOld", result);

      return { ...state, findOld: result };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
