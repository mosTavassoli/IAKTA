import { Outlet } from "react-router-dom";
import { MainContainer } from "../styles/GlobalStyles";

export const Layout = () => {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  );
};
