import { OptionChange } from "../../../context/Option/Option";
import ContainerOption from "./container";

export default function Option() {
  const { state } = OptionChange();  
  return (
    <>
    <ContainerOption
      find_title="Пол собеседника:"
      personal_title="Ваш пол:"
      isGender={true}
      personalState={state.gender_state}
      findState={state.gender_find_state}
    />

    <ContainerOption
      find_title="Ваш возраст:"
      personal_title="Возраст собеседника:"
      isGender={false}
      personalState={state.old_state}
      findState={state.old_find_state}
    />
    </>
  );
}
