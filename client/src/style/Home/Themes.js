import styled from "styled-components";

import {
  blue_box_shadow,
  orange_box_shadow,
  red_box_shadow,
  themeColor,
  themeColorShadow,
  transition,
} from "../shared/variables";

const ThemeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
`;

const ThemeButton = styled.button`
  display: block;
  font-size: 1.5em;
  padding: 11px 6px;
  border: none;
 ${transition}
  color: white;
  width: 30%;
  outline: none;
  &:hover {
    cursor: pointer;
  }
  ${themeColor}
  ${themeColorShadow}
  &.blue_shadow {
    box-shadow: ${blue_box_shadow};
  }
  &.orange_shadow {
    box-shadow: ${orange_box_shadow};
  }
  &.red_shadow {
    box-shadow: ${red_box_shadow};
  }
  @media (max-width: 440px) {
    width: 100%;
    box-shadow: none !important;
    margin-bottom: 10px;
  }
`;

export { ThemeContainer, ThemeButton };
