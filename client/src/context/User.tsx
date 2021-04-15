import * as React from "react";
import userReducer from './UserReducer'
import {UserProvideProps, State, Dispatch} from './UserType'


const UserStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);


function UserProvider({ children }: UserProvideProps) {
  const [state, dispatch] = React.useReducer(userReducer, { theme: "default" });

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
