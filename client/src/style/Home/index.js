import styled from "styled-components";

const HomeContainer = styled.div`
  padding: 30px;
  @media (max-width: 440px) {
    padding: 20px;
  }
`;

const Title = styled.h2`
  font-size: 1em;
  color: #1a181c;
  font-weight: 500;
  margin-bottom: 1em
`;

const TitleContainer = styled.div`
  margin-bottom: 1em;
`

export { HomeContainer, Title, TitleContainer };
