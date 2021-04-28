import React, { useState } from "react";
import { UserChange } from "../../../context/User/User";
import { Button } from "../../../style/shared/Buttons";

import { genders as variables } from "../variables";
import { GridContainer } from "../../../style/shared/Wrapper";
import ContainerHome from "../ContainerHome";

import {
  setClass,
  isAllItemsNotActive,
  initGender,
  storageFind
} from "./logic";

import {
  STORAGE_GENDER,
  STORAGE_GENDER_FIND,
  STORAGE_GENDER_PERSONAL,
} from "../../../services/variables";

export default function ContainerOption() {
  const { state, dispatch } = UserChange();

  const [gender, setGender] = useState(() =>
    initGender(
      variables,
      true,
      state.STORAGE_GENDER_PERSONAL,
      state.STORAGE_GENDER_FIND
    )
  );
  const [genderFind, setGenderFind] = useState(() =>
    initGender(
      variables,
      false,
      state.STORAGE_GENDER_PERSONAL,
      state.STORAGE_GENDER_FIND
    )
  );

  function handleChangeActive(target: any) {
    const type = target.dataset.personal;

    if (type === "true") {
      personalChangeActive(+target.value);
    } else {
      storageFind(
        +target.value,
        genderFind,
        setGenderFind,
        STORAGE_GENDER_FIND,
        dispatch
      );
    }
  }

  function personalChangeActive(id: number) {
    let result,
      dispatchVal = id,
      isDispatchAccess = false;

    result = gender.map((item) => {
      if (item.id === id) {
        return { ...item, isActive: !item.isActive };
      }
      return { ...item, isActive: false };
    });

    if (isAllItemsNotActive(result) || result[0].isActive === true) {
      result[0].isActive = true;
      dispatchVal = 0;
      isDispatchAccess = true;
      storageFind(0, genderFind, setGenderFind, STORAGE_GENDER_FIND, dispatch);
    }
    dispatch({
      type: "change_option",
      payload: {
        value: dispatchVal,
        localStorage: STORAGE_GENDER_PERSONAL,
      },
    });
    dispatch({
      type: "change_access",
      payload: { isAccess: isDispatchAccess, localStorage: STORAGE_GENDER },
    });

    setGender(result);
  }

  return (
    <GridContainer
      onClick={(e: React.ChangeEvent<HTMLButtonElement>) =>
        e !== undefined ? handleChangeActive(e.target) : null
      }
    >
      <ContainerHome title={"Ваш пол:"}>
        {gender.map((item, key) => {
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

      <ContainerHome title={"Пол собеседника:"}>
        {genderFind.map((item, key) => {
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
