/* Copyright (c) 2022 CLOUDPILOTS Software & Consulting GmbH */

import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LOGIN_CARD_ID } from './card.js';
import Login from './login.js';
import { LoginProvider, LoginProviderHandler } from './login-provider.js';

describe('@login login renders', () => {
  const loginFn = jest.fn();
  const loginHandler: LoginProviderHandler = {
    isLoggedIn: false,
    login: loginFn,
    logout: jest.fn(),
  };

  it('with props', () => {
    render(
      <LoginProvider loginHandler={loginHandler}>
        <Login appName='App' />
      </LoginProvider>,
      { wrapper: BrowserRouter },
    );
    expect(screen.getByText('App')).toBeInTheDocument();
  });

  it('invokes click', () => {
    const { container } = render(
      <LoginProvider loginHandler={loginHandler}>
        <Login appName='App' />
      </LoginProvider>,
      {
        wrapper: BrowserRouter,
      },
    );
    expect(screen.getByText('App')).toBeInTheDocument();
    const button = container.querySelector(`#${LOGIN_CARD_ID} button`);
    button && fireEvent.click(button);
    expect(loginFn).toBeCalled();
  });

  it('with bar props', () => {
    render(
      <LoginProvider loginHandler={loginHandler}>
        <Login appName='App' />
      </LoginProvider>,
      { wrapper: BrowserRouter },
    );
    expect(screen.getByText('App')).toBeInTheDocument();
  });
});
