/* Copyright (c) 2022 CLOUDPILOTS Software & Consulting GmbH */

import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
// import * as google from '../google';
import Card, { LOGIN_CARD_ID } from './card';
import { LoginProvider, LoginProviderHandler } from './login-provider';

describe('@login card renders', () => {
  it('without props', () => {
    render(<Card />, {
      wrapper: BrowserRouter,
    });
    expect(screen.queryAllByText('Login')).toBeInstanceOf(Array);
    expect(screen.queryAllByText('Login').length).toBeGreaterThanOrEqual(1);
    expect(screen.queryAllByText('Login')[0]).toBeInTheDocument();
  });

  it('invokes click', () => {
    // mockPredicate.mockReturnValue(true);
    const loginFn = jest.fn();
    const loginHandler: LoginProviderHandler = {
      isLoggedIn: false,
      login: loginFn,
      logout: jest.fn(),
    };
    const { container } = render(
      <LoginProvider loginHandler={loginHandler}>
        <Card message='jest' />
      </LoginProvider>,
      {
        wrapper: BrowserRouter,
      },
    );
    expect(screen.getByText('jest')).toBeInTheDocument();
    const button = container.querySelector(`#${LOGIN_CARD_ID} button`);
    button && fireEvent.click(button);
    expect(loginFn).toBeCalled();
    expect(loginHandler.login).toBeCalled();
  });
});
