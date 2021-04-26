import styled from "styled-components";
import { green, themeColor, transition } from "./variables";

const Button = styled.button`
  font-size: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  padding: 5px 9px;
  outline: none;
  border: none;
  color: white;
  ${transition}
  ${themeColor}
  &:hover {
    cursor: pointer;
    background-color: ${green};
  }
  &.active {
    background-color: ${green};
  }
  &:disabled {
    background-color: grey;
    &:hover {
      cursor: default;
    }
  }
  @media (max-width: 440px) {
    width: 80%;
    display: block;
    margin: 10px auto;
  }
`;

export { Button };
