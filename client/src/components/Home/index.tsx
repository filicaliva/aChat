import ContainerHome from "./ContainerHome";
import Theme from "./Themes";
import Description from "./Description";
import Search from "../Search";
import { UserProvider } from "../../context/User";

import { HomeContainer } from "../../style/Home";
import Gender from "./Gender";
import OldYear from "./Old";

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

        <Gender />

        <OldYear/>
        
        <Search />
      </HomeContainer>
    </UserProvider>
  );
}
