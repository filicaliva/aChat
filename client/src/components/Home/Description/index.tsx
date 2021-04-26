import { useState } from "react";
import { UserChange } from "../../../context/User";
import { DescriptionContaner, Input } from "../../../style/Home/Description";

export default function Description() {
  const { state, dispatch } = UserChange();
  const [describe, setDescribe] = useState(state.describe);

  function handlerDescription(text: string) {
    setDescribe(text);
    dispatch({type: "change_description", payload: text})
  }

  return (
    <DescriptionContaner>
      <Input
        type="text"
        className={state.color}
        maxLength="30"
        value={describe}
        placeholder={"Танцую, играю на скрипке."}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlerDescription(e.target.value)}
      />
    </DescriptionContaner>
  );
}
