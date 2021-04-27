import React, { useState } from "react";
import { UserChange } from "../../../context/User";
import { Button } from "../../../style/shared/Buttons";

import { setClassType, VariableType } from "./types";

import { genders as variables } from "../variables";
import { GridContainer } from "../../../style/shared/Wrapper";
import ContainerHome from "../ContainerHome";

import { STORAGE_GENDER, STORAGE_GENDER_FIND, STORAGE_GENDER_PERSONAL } from "../../../services/variables";

function setClass({ bool, cssClass }: setClassType) {
  return bool ? `${cssClass} active` : cssClass;
}
export default function Gender() {
  // REFACTOR: gender and oldyear
  const { state, dispatch } = UserChange();

  const [gender, setGender] = useState(() => initGender(variables, true));
  const [genderFind, setGenderFind] = useState(() =>
    initGender(variables, false)
  );

  function initGender(arr: Array<VariableType>, personal: boolean) {
    let result = arr;

    if (personal) {
      const localStore = state.STORAGE_GENDER_PERSONAL;

      result = result.map((item) => {
        if (item.id === +localStore) {
          return { ...item, isActive: true };
        }
        return item;
      });
    }

    if (!personal) {
      const localStore = state.STORAGE_GENDER_FIND;

      result = result.map((item) => {
        if (localStore.some((id) => item.id === +id)) {
          return { ...item, isActive: true };
        }
        return item;
      });
    }
    return result;
  }

  function handleChangeActive(target: any) {
    const type = target.dataset.personal;

    if (type === "true") {
      personalChangeActive(+target.value);
    } else {
      findChangeActive(+target.value);
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
      findChangeActive(0);
    }
    dispatch({ type: "change_option", payload: {
      value: dispatchVal, 
      localStorage: STORAGE_GENDER_PERSONAL
    } });
    dispatch({
      type: "change_access",
      payload: { isAccess: isDispatchAccess, localStorage: STORAGE_GENDER },
    });

    setGender(result);
  }

  function findChangeActive(id: number) {
    let result,
      dispatchVal: Array<number> = [];

    result = genderFind.map((item) => {
      if (item.id === id) {
        return { ...item, isActive: !item.isActive };
      }

      if ((item.id === 0 && id !== 0) || (item.id !== 0 && id === 0)) {
        return { ...item, isActive: false };
      }
      return item;
    });

    if (isAllItemsNotActive(result)) {
      result[0].isActive = true;
    }

    for (let i = 0; i < result.length; i++) {
      const item = result[i];
      if (item.isActive) {
        dispatchVal.push(item.id);
      }
    }

    if (dispatchVal.length === 0) dispatchVal.push(0);

    dispatch({ type: "change_option", payload: {
      value: dispatchVal, 
      localStorage: STORAGE_GENDER_FIND
    } });
    setGenderFind(result);
  }

  function isAllItemsNotActive(arr: Array<VariableType>) {
    return arr.every((item: VariableType) => item.isActive === false);
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
