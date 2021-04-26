import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background: #ecf7fa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 440px) {
    justify-content: space-between;
  }
`;

const Wrapper = styled.div`
  display: block;
  max-width: 540px;
  max-height: 530px;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 8px;
  @media (max-width: 500px) {
    max-height: 590px;
  }
  @media (max-width: 440px) {
    max-height: 100%;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
`;
export { Wrapper, Container, GridContainer };
