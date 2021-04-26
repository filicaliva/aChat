import React from "react";

type Action = {
  type: string;
  payload: string | number | boolean | Array<number>;
};

type State = {
  theme: string;
  color: string;
  describe: string;
  findGenderLocal: boolean;
  personalGender: number;
  findGender: Array<number>;
  findOldLocal: boolean;
};

type Dispatch = (action: Action) => void;
type UserProvideProps = { children: React.ReactNode };

export type { Action, State, Dispatch, UserProvideProps };
