/* Copyright (c) 2022 CLOUDPILOTS Software & Consulting GmbH */

import type { FC, ReactNode } from 'react';
import { createContext, useContext } from 'react';

export interface GoogleProfile {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  link?: string;
  picture?: string;
  locale: string;
  hd: string;
}

export interface LoginProviderHandler {
  login: () => void;
  logout: () => void;
  isLoggedIn: boolean;
  profile?: GoogleProfile;
  loginButton?: ReactNode;
}

export const LoginContext = createContext<LoginProviderHandler>(
  {} as LoginProviderHandler,
);

export interface LoginProviderProps {
  children: ReactNode;
  loginHandler: LoginProviderHandler;
}

export const LoginProvider: FC<LoginProviderProps> = ({
  children,
  loginHandler,
}) => (
  <LoginContext.Provider value={loginHandler}>{children}</LoginContext.Provider>
);

export const useLogin = (): LoginProviderHandler => useContext(LoginContext);
export const useProfile = (): GoogleProfile | undefined => useLogin().profile;
export const useIsLoggedin = (): boolean => useLogin().isLoggedIn;
