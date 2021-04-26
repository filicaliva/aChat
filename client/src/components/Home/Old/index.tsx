import React, { useEffect, useState } from "react";
import { UserChange } from "../../../context/User";
import { OldButton } from "../../../style/Home/Old";

import { setClassType, VariableType } from "./types";

import { old as variables } from "../variables";
import { GridContainer } from "../../../style/shared/Wrapper";
import ContainerHome from "../ContainerHome";

function setClass({ bool, cssClass }: setClassType) {
  return bool ? `${cssClass} active` : cssClass;
}

export default function OldYear() {
  const { state, dispatch } = UserChange();

  const [gender, setGender] = useState(() => initGender(variables, true));
  const [genderFind, setGenderFind] = useState(() =>
    initGender(variables, false)
  );

  function initGender(arr: Array<VariableType>, personal: boolean) {
    let result = arr;

    if (personal) {
      const lstore = state.personalGender;

      result = result.map((item) => {
        if (item.id === +lstore) {
          return { ...item, isActive: true };
        }
        return item;
      });
    }

    if (!personal) {
      const lstore = state.findGender;

      result = result.map((item) => {
        if (lstore.some((id) => item.id === +id)) {
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
      dispatchAccess = false;

    result = gender.map((item) => {
      if (item.id === id) {
        return { ...item, isActive: !item.isActive };
      }
      return { ...item, isActive: false };
    });

    if (isAllItemsNotActive(result) || result[0].isActive === true) {
      result[0].isActive = true;
      dispatchVal = 0;
      dispatchAccess = true;
      findChangeActive(0);
    }
    dispatch({ type: "change_old_personal", payload: dispatchVal });
    dispatch({ type: "change_old_find_access", payload: dispatchAccess });

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

    dispatch({ type: "change_old_find", payload: dispatchVal });
    setGenderFind(result);
  }

  function isAllItemsNotActive(arr: Array<VariableType>) {
    return arr.every((item: VariableType) => item.isActive === false);
  }

  useEffect(() => {
    if (!state.findGenderLocal) {
      personalChangeActive(0);
    }

    // eslint-disable-next-line
  }, [state.findGenderLocal]);

  return (
    <GridContainer
      onClick={(e: React.ChangeEvent<HTMLButtonElement>) =>
        e !== undefined ? handleChangeActive(e.target) : null
      }
    >
      <ContainerHome title={"Ваш возраст:"}>
        {gender.map((item, key) => {
          return (
            <OldButton
              key={key}
              className={setClass({
                bool: item.isActive,
                cssClass: state.color,
              })}
              value={item.id}
              data-personal={true}
              disabled={state.findGenderLocal}
            >
              {item.title}
            </OldButton>
          );
        })}
      </ContainerHome>

      <ContainerHome title={"Возраст собеседника:"}>
        {genderFind.map((item, key) => {
          return (
            <OldButton
              key={key}
              className={setClass({
                bool: item.isActive,
                cssClass: state.color,
              })}
              value={item.id}
              disabled={state.findGenderLocal || state.findOldLocal}
              data-personal={false}
            >
              {item.title}
            </OldButton>
          );
        })}
      </ContainerHome>
    </GridContainer>
  );
}
