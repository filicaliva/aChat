import ContainerHome from "./ContainerHome";
import Theme from "./Themes";
import Description from "./Description";
import Search from "../Search";
import { UserProvider } from "../../context/User/User";

import { HomeContainer } from "../../style/Home";
import Option from "./Option";

export default function Home() {
  return (
    <UserProvider>
      <HomeContainer>
        <ContainerHome title={"Тема:"}>
          <Theme />
        </ContainerHome>
        <ContainerHome title={"О себе:"}>
          <Description />
        </ContainerHome>

        <Option />

        <Search />
      </HomeContainer>
    </UserProvider>
  );
}
