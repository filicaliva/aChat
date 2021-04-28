import React from "react";

type Action = {
  type   : string;
  payload: any;
};

type State = {
  find_active_class: number;
};

type Dispatch = (action: Action) => void;
type ProvideProps = { children: React.ReactNode };

export type { Action, State, Dispatch, ProvideProps };
