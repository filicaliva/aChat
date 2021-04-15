import {State, Action} from './UserType'


export default function userReducer(state: State, action: Action) {
    switch (action.type) {
      case "change_theme": {
        return {theme: action.payload};
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
    }
  }