import React, { useEffect, useState } from "react";
import { UserChange } from "../../../context/User/User";
import { Button } from "../../../style/shared/Buttons";

import { GridContainer } from "../../../style/shared/Wrapper";
import ContainerHome from "../ContainerHome";

import {
  setClass,
  initState,
  handleChangeActive,
  getStateStorage,
} from "./logic";

import { OptionChange } from "../../../context/Option/Option";
import { ContainerOptionType } from "./types";

export default function ContainerOption({
  personal_title,
  find_title,
  isGender,
  personalState,
  findState,
}: ContainerOptionType) {
  const { state, dispatch } = UserChange();
  const dispatchOption = OptionChange().dispatch;

  const initPersonal = {
    state,
    isGender,
    personal: true,
  };
  const initFind = {
    state,
    isGender,
    personal: false,
  };

  let [personal, setPersonal] = useState(
    initState(personalState, true, getStateStorage(initPersonal))
  );

  let [find, setFind] = useState(
    initState(findState, false, getStateStorage(initFind))
  );

  useEffect(() => {
    setPersonal(initState(personalState, true, getStateStorage(initPersonal)));
    setFind(initState(findState, false, getStateStorage(initFind)));

    // eslint-disable-next-line 
  }, [state]);

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
              disabled={!isGender ? state.STORAGE_GENDER : null}
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
              disabled={
                isGender
                  ? state.STORAGE_GENDER
                  : state.STORAGE_GENDER || state.STORAGE_OLD
              }
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
