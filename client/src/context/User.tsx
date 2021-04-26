import * as React from "react";
import userReducer from "./UserReducer";
import {LocalStorage} from '../services/LocalStorage'
import { UserProvideProps, State, Dispatch } from "./UserType";

const localstorage = new LocalStorage();

const initialValue = {
  theme: localstorage.getTheme(),
  color: localstorage.getColor(),
  describe: localstorage.getDescribe(),
  findGenderLocal: localstorage.getLocalAccess("findGenderLocal"),
  personalGender: localstorage.getGender("personalGender"),
  findGender: localstorage.getGender("findGender"),
  personalOld: localstorage.getOld("personalOld"),
  findOld: localstorage.getOld("findOld"),
  findOldLocal: localstorage.getLocalAccess("findGenderLocal"),
}

const UserStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function UserProvider({ children }: UserProvideProps) {
  const [state, dispatch] = React.useReducer(userReducer, initialValue);

  const value = { state, dispatch };
  return (
    <UserStateContext.Provider value={value}>
      {children}
    </UserStateContext.Provider>
  );
}

function UserChange() {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("UserChange must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, UserChange };
