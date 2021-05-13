import React, { useEffect, useState } from "react";
import { UserChange } from "../../../context/User/User";
import { Button } from "../../../style/shared/Buttons";

import { genders as variables } from "../constant/variables";
import { GridContainer } from "../../../style/shared/Wrapper";
import ContainerHome from "../ContainerHome";

import {
  setClass,
  isAllItemsNotActive,
  initGender,
  // storageFind,
  handleChangeActive,
} from "./logic";

import { CHANGE_PERSONAL, CHANGE_FIND } from "../../../context/Option/constant";

import {
  STORAGE_GENDER,
  STORAGE_GENDER_FIND,
  STORAGE_GENDER_PERSONAL,
} from "../../../services/variables";

import { OptionChange } from "../../../context/Option/Option";
import { VariableType } from "../Gender/types";

type ContainerOptionType = {
  personal_title: string;
  find_title: string;
  isGender: boolean;
  personalState: Array<VariableType>;
  findState: Array<VariableType>;
};

export default function ContainerOption({
  personal_title,
  find_title,
  isGender,
  personalState,
  findState,
}: ContainerOptionType) {
  const { state, dispatch } = UserChange();
  const dispatchOption = OptionChange().dispatch;

  let personal = initGender(personalState, true, state.STORAGE_GENDER_PERSONAL);
  let find = initGender(findState, false, state.STORAGE_GENDER_FIND);

  useEffect(() => {
    find = initGender(findState, false, state.STORAGE_GENDER_FIND);
    personal = initGender(personalState, true, state.STORAGE_GENDER_PERSONAL);
  }, [state.STORAGE_GENDER]);

  return (
    <GridContainer
      onClick={(e: React.ChangeEvent<HTMLButtonElement>) =>
        e !== undefined
          ? handleChangeActive(e.target, isGender, dispatch, dispatchOption)
          : null
      }
    >
      <ContainerHome title={personal_title}>
        {personal.map((item, key) => {
          return (
            <Button
              key={key}
              className={setClass({
                bool: item.isActive,
                cssClass: state.STORAGE_COLOR,
              })}
              value={item.id}
              data-personal={true}
            >
              {item.title}
            </Button>
          );
        })}
      </ContainerHome>

      <ContainerHome title={find_title}>
        {find.map((item, key) => {
          return (
            <Button
              key={key}
              className={setClass({
                bool: item.isActive,
                cssClass: state.STORAGE_COLOR,
              })}
              value={item.id}
              disabled={state.STORAGE_GENDER}
              data-personal={false}
            >
              {item.title}
            </Button>
          );
        })}
      </ContainerHome>
    </GridContainer>
  );
}
