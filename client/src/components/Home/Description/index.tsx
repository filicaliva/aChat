import { useState } from "react";
import { UserChange } from "../../../context/User";
import { STORAGE_COLOR, STORAGE_DESCRIBE } from "../../../services/variables";
import { DescriptionContainer, Input } from "../../../style/Home/Description";

export default function Description() {
  const { state, dispatch } = UserChange();
  const [describe, setDescribe] = useState(state.STORAGE_DESCRIBE);

  function handlerDescription(text: string) {
    setDescribe(text);
    dispatch({type: "change_option", payload: {
      value: text, 
      localStorage: STORAGE_DESCRIBE
    }})
  }

  return (
    <DescriptionContainer>
      <Input
        type="text"
        className={state.STORAGE_COLOR}
        maxLength="30"
        value={describe}
        placeholder={"Танцую, играю на скрипке."}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlerDescription(e.target.value)}
      />
    </DescriptionContainer>
  );
}
