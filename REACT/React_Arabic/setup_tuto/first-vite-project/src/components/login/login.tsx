/* Copyright (c) 2022 CLOUDPILOTS Software & Consulting GmbH */

import { Grid } from '@mui/material';
import type { ElementType, FC } from 'react';
import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import type { BarProps } from '../home/bar.js';
// import { HomeProps } from '../home/home.js';
import Home from './Home.js';
import Card from './card.js';
import { useLogin } from './login-provider.js';

export interface LoginProps {
  appName?: string;
  message?: string;
  CustomLogo?: ElementType<any>;
  barProps?: any;
}

const Login: FC<LoginProps & any> = ({
  appName = '',
  message = 'Sign in with Google.',
  CustomLogo,
  barProps,
  ...props
}) => {
  const { isLoggedIn } = useLogin();
  const navigate = useNavigate();
  const location = useLocation();

  const from = useMemo(
    () => location.state?.from?.pathname || '/',
    [location.state?.from?.pathname],
  );

  useEffect(() => {
    if (isLoggedIn) {
      navigate(from, { replace: true });
    }
  }, [from, isLoggedIn, navigate]);

  return (
    <Home
      appName={appName}
      barProps={barProps}
      {...props}
      sx={{ backgroundColor: 'red' }}
    >
      <Grid item xs={12} sx={{ backgroundColor: 'red' }}>
        <Grid alignItems='center' container justifyContent='center' sx={{ backgroundColor: 'yellow' }}>
          <Grid item sx={{ backgroundColor: 'yellow' }}>
            <Card message={message} CustomLogo={CustomLogo} />
          </Grid>
        </Grid>
      </Grid>
    </Home>
  );
};

export default Login;
