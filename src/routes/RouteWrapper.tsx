import { Navigate } from "react-router-dom";

import { useAuthContext } from "../contexts/AuthContext/AuthContext";

interface Props {
  children: React.ReactNode;
  isAuthenticationPage: boolean;
}

export const RouteWrapper = ({ isAuthenticationPage, children }: Props) => {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticationPage && isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (!isAuthenticated && !isAuthenticationPage) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
