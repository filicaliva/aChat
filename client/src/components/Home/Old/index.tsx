import React, { useEffect, useState } from "react";
import { UserChange } from "../../../context/User/User";
import { OldButton } from "../../../style/Home/Old";

import { setClassType, VariableType } from "./types";

import { old as variables } from "../variables";
import { GridContainer } from "../../../style/shared/Wrapper";
import ContainerHome from "../ContainerHome";
import { STORAGE_OLD, STORAGE_OLD_FIND, STORAGE_OLD_PERSONAL } from "../../../services/variables";

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
      localStorage: STORAGE_OLD_PERSONAL
    } });
    dispatch({
      type: "change_access",
      payload: {
        isAccess: isDispatchAccess,
        localStorage: STORAGE_OLD,
      },
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
      localStorage: STORAGE_OLD_FIND
    } });
    setGenderFind(result);
  }

  function isAllItemsNotActive(arr: Array<VariableType>) {
    return arr.every((item: VariableType) => item.isActive === false);
  }

  useEffect(() => {
    if (!state.STORAGE_GENDER) {
      personalChangeActive(0);
    }

    // eslint-disable-next-line
  }, [state.STORAGE_GENDER]);

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
                cssClass: state.STORAGE_COLOR,
              })}
              value={item.id}
              data-personal={true}
              disabled={state.STORAGE_GENDER}
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
                cssClass: state.STORAGE_COLOR,
              })}
              value={item.id}
              disabled={state.STORAGE_GENDER || state.STORAGE_OLD}
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
