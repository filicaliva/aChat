import { State, Action } from "./OptionType";

export default function optionReducer(state: State, action: Action) {
  switch (action.type) {
    case "change_active_class": {
      const result: number = action.payload.value;
      const storageName: string = action.payload.localStorage;

      switch (storageName) {
        case "find_active_class":
          return { ...state, find_active_class: result };
        default:
          throw new Error("change_access: error with type");
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
