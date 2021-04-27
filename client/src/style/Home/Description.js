import styled from "styled-components";
import { themeColor, transition } from "../shared/variables";

const DescriptionContainer = styled.div`
  width: 60%;
  @media (max-width: 440px) {
    width: 93%;
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.2em;
  padding: 5px 12px;
  color: white;
  outline: none;
  border: none;
  ${themeColor}
  ${transition}
    &.orange {
    &::placeholder {
      color: #838383;
    }
  }
  &::placeholder {
    color: #d8d8d8;
  }
`;

export { DescriptionContainer, Input };
