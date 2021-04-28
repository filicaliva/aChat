import * as React from "react";
import userReducer from "./UserReducer";
import { LocalStorage } from "../../services/LocalStorage";
import { UserProvideProps, State, Dispatch } from "./UserType";

import {
  STORAGE_GENDER,
  STORAGE_GENDER_FIND,
  STORAGE_GENDER_PERSONAL,
  STORAGE_OLD,
  STORAGE_OLD_FIND,
  STORAGE_OLD_PERSONAL,
  STORAGE_THEME,
  STORAGE_COLOR,
  STORAGE_DESCRIBE,
} from "../../services/variables";

const localStore = new LocalStorage();

const initialValue = {
  STORAGE_THEME          : localStore.getState(STORAGE_THEME),
  STORAGE_COLOR          : localStore.getState(STORAGE_COLOR),
  STORAGE_DESCRIBE       : localStore.getState(STORAGE_DESCRIBE),
  STORAGE_OLD            : localStore.getLocalAccess(STORAGE_OLD),
  STORAGE_OLD_FIND       : localStore.getState(STORAGE_OLD_FIND),
  STORAGE_OLD_PERSONAL   : localStore.getState(STORAGE_OLD_PERSONAL),
  STORAGE_GENDER         : localStore.getLocalAccess(STORAGE_GENDER),
  STORAGE_GENDER_FIND    : localStore.getState(STORAGE_GENDER_FIND),
  STORAGE_GENDER_PERSONAL: localStore.getState(STORAGE_GENDER_PERSONAL),
};

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
