import { createContext, useContext, useState } from "react";
import { AuthProps, AuthType, UserProps } from "../types/auth";
import { Children } from "../types/global";
import {
  getAuthType,
  getUserCooke,
  isAuthenticated,
  removeAuthCookie,
  setAuthCookie,
} from "../utils/cookies";

const AuthContext = createContext<AuthProps>({
  isLogin: false,
  user: null,
  authType: null,
  setAuthType: () => void 0,
  onAuthLogin: () => null,
  onLogout: () => void 0,
});

//eslint-disable-next-line react-refresh/only-export-components
export function useAuth(): AuthProps {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }: { children: Children }) {
  const [user, setUser] = useState<UserProps>(getUserCooke());
  const [authType, setAuthType] = useState<AuthType>(getAuthType());
  const [isLogin, setIsLogin] = useState<boolean>(isAuthenticated());

  const onAuthLogin = (authType: AuthType, user: UserProps): UserProps => {
    setAuthCookie(authType, user);
    setUser(user);
    setAuthType(authType);
    setIsLogin(true);
    return user;
  };

  const onLogout = () => {
    removeAuthCookie();
    setUser(null);
    setAuthType(null);
    setIsLogin(false);
    return null;
  };

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        authType,
        user,
        setAuthType,
        onAuthLogin,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
