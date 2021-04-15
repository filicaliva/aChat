import { UserProvider } from "../../context/User";
import { HomeContainer } from "../../style/Home";
import Find from "./Find";

export default function Home() {
  return (
    <UserProvider>
      <HomeContainer>
        <Find />
      </HomeContainer>
    </UserProvider>
  );
}
