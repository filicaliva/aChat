import React from "react";

import { ThemeContainer, ThemeButton } from "../../../style/Home/Themes";
import { isActiveClassType, ThemesType } from "./types";
import { themes as theme } from "../variables";
import { UserChange } from "../../../context/User";

function setClass({ bool, color }: isActiveClassType) {
  return bool ? ` ${color} ${color}_shadow` : `${color}`;
}

export default function Theme() {
  const {dispatch, state} = UserChange();
  const themes = initThemes(theme);
  
  
  function changeTheme(value: string) {
    if(value===undefined) return;
    
    let color: string = state.color;

    themes.forEach((item) => {
      if (value === item.serverTitle) {
        color = item.color;
      }
    });
    
    dispatch({type: 'change_color', payload: color});
    dispatch({type: 'change_theme', payload: value});

  }

  function initThemes(themesArray: Array<ThemesType>) {
    const defaultTheme: string = state.theme;

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
    <ThemeContainer onClick={(e: React.ChangeEvent<HTMLInputElement>) => changeTheme(e.target.value)}>
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
