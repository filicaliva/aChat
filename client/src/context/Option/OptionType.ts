import React from "react";

import {VariableType} from '../../components/Home/constant/variablesType'

type Action = {
  type   : string;
  payload: any;
};

type State = {
  gender_state     : Array<VariableType>;
  gender_find_state: Array<VariableType>;
  old_state        : Array<VariableType>;
  old_find_state   : Array<VariableType>;
  
};

type Dispatch = (action: Action) => void;
type ProvideProps = { children: React.ReactNode };

export type { Action, State, Dispatch, ProvideProps };
