import { Outlet } from "react-router-dom";

import { RouteWrapper } from "../../routes/RouteWrapper";

import { Main } from "./Main";

export const AuthenticationLayout = () => {
  return (
    <RouteWrapper isAuthenticationPage={true}>
      <Main>
        <Outlet />
      </Main>
    </RouteWrapper>
  );
};
