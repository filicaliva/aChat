import React from "react";

type Action = {
  type: string;
  payload: any;
};

type State = {
  STORAGE_THEME: string;
  STORAGE_COLOR: string;
  STORAGE_DESCRIBE: string;
  STORAGE_GENDER: boolean;
  STORAGE_GENDER_PERSONAL: number;
  STORAGE_GENDER_FIND: Array<number>;
  STORAGE_OLD: boolean;
  STORAGE_OLD_PERSONAL: number;
  STORAGE_OLD_FIND: Array<number>;
};

type Dispatch = (action: Action) => void;
type UserProvideProps = { children: React.ReactNode };

export type { Action, State, Dispatch, UserProvideProps };
