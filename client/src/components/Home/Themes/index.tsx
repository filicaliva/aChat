import React from "react";

import { ThemeContainer, ThemeButton } from "../../../style/Home/Themes";
import { isActiveClassType, ThemesType } from "./types";
import { themes as theme } from "../variables";
import { UserChange } from "../../../context/User";
import { STORAGE_COLOR, STORAGE_THEME } from "../../../services/variables";

function setClass({ bool, color }: isActiveClassType) {
  return bool ? ` ${color} ${color}_shadow` : `${color}`;
}

export default function Theme() {
  const { dispatch, state } = UserChange();
  const themes = initThemes(theme);

  function changeTheme(value: string) {
    if (value === undefined) return;

    let color: string = state.STORAGE_COLOR;

    themes.forEach((item) => {
      if (value === item.serverTitle) {
        color = item.color;
      }
    });

    dispatch({
      type: "change_option",
      payload: {
        value: color,
        localStorage: STORAGE_COLOR,
      },
    });
    dispatch({
      type: "change_option",
      payload: {
        value: value,
        localStorage: STORAGE_THEME,
      },
    });
  }

  function initThemes(themesArray: Array<ThemesType>) {
    const defaultTheme: string = state.STORAGE_THEME;

    if (defaultTheme !== null) {
      const result = themesArray.map((item) => {
        item.serverTitle === defaultTheme
          ? (item.isActive = true)
          : (item.isActive = false);
        return item;
      });
      return result;
    }
    return themesArray;
  }

  return (
    <ThemeContainer
      onClick={(e: React.ChangeEvent<HTMLInputElement>) =>
        changeTheme(e.target.value)
      }
    >
      {themes.map((item: ThemesType, key: number) => {
        return (
          <ThemeButton
            key={key}
            value={item.serverTitle}
            className={setClass({
              bool: item.isActive,
              color: item.color,
            })}
          >
            {item.title}
          </ThemeButton>
        );
      })}
    </ThemeContainer>
  );
}
