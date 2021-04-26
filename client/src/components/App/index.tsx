import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Chat from "../Chat";
import Search from "../Search";
import Home from "../Home";

import { Container, Wrapper } from "../../style/shared/Wrapper";
import Logo from "./Logo";

function App() {
  return (
    <Container>
    <Logo/>
      <Router>
        <Wrapper>
          <Switch>
            <Route path="/chat">
              <Chat />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </Container>
  );
}

export default App;
