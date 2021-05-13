import * as React from "react";
import optionReducer from "./OptionReducer";

import { genders, old } from "../../components/Home/constant/variables";
import { Action } from "./OptionType";

const initialValue = {
  gender_state: genders,
  gender_find_state: genders,
  old_state: old,
  old_find_state: old,
};

function OptionChange() {
  const [state, setState] = React.useState(initialValue);
  const dispatch = (action: Action) =>
    setState(optionReducer(state, action));

  return { state, dispatch };
}

export { OptionChange };
