import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Logo from "../components/Logo";
import Main from "../components/Main";
import styled from "styled-components";
import NavBar from "../components/NavBar";

const AppContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: auto;
  grid-template-rows: 10vh 1fr;
`;

export default function AppLayout() {
  return (
    <AppContainer>
      <Header>
        <Logo />
        <NavBar />
      </Header>
      <Main>
        <Outlet />
      </Main>
    </AppContainer>
  );
}
