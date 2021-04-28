import * as React from "react";
import optionReducer from "./OptionReducer";
import { ProvideProps, State, Dispatch } from "./OptionType";

const initialValue = {
  find_active_class: 0,
};

const UserStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function OptionProvider({ children }: ProvideProps) {
  const [state, dispatch] = React.useReducer(optionReducer, initialValue);

  const value = { state, dispatch };
  return (
    <UserStateContext.Provider value={value}>
      {children}
    </UserStateContext.Provider>
  );
}

function OptionChange() {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("OptionProvider must be used within a UserProvider");
  }
  return context;
}

export { OptionProvider, OptionChange };
