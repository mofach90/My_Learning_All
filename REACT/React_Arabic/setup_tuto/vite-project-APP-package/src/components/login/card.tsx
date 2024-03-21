/* Copyright (c) 2022 CLOUDPILOTS Software & Consulting GmbH */

import { Logo } from '@cpl/components';
import { Button, Grid, Typography, useTheme } from '@mui/material';
import type { ElementType, FC } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLogin } from './login-provider.js';
import { Box, Card, CardProps, LinearProgress, styled } from '@mui/material';
import clsx from 'clsx';
import type { ReactNode } from 'react';

export const LOGIN_CARD_ID = 'cpl-login-card';

export interface LoadingCardProps extends CardProps {
  loading?: boolean;
  skeleton?: ReactNode;
  onClick?: () => void;
}

const LOGIN_CARD_LOADING_ID = `${LOGIN_CARD_ID}-loading`;

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: "red",
  borderRadius: theme.spacing(1),
  textAlign: 'center',
  animationDelay: '0.4',
  animationDuration: '0.4',
  cursor: 'pointer',
  [`&.${LOGIN_CARD_LOADING_ID}`]: {
    borderTop: `${16}px solid ${theme.palette.primary.dark}`,
  },
}));

const LoadingCard: FC<LoadingCardProps> = ({
  children,
  className,
  loading,
  skeleton,
  ...props
}) => (
  <StyledCard
    className={clsx(!loading && `${LOGIN_CARD_LOADING_ID}`, className)}
    {...props}
  >
    {loading && <LinearProgress sx={{ height: 6 }} />}
    {loading && skeleton}
    {!loading && <Box p={3}>{children}</Box>}
  </StyledCard>
);


export interface LoginCardProps {
  message?: string;
  CustomLogo?: ElementType<any>;
}

const DefaultLogo: FC = () => {
  const theme = useTheme();

  return (
    <Logo
      style={{
        display: 'inline-block',
        height: 50,
        width: 50,
        margin: `${theme.spacing(0.5)} 0 0 0`,
        animationDelay: '0.4',
        animationDuration: '0.4',
      }}
      fill={theme.palette.primary.contrastText}
    />
  );
};

const LoginCard: FC<LoginCardProps> = ({
  message,
  CustomLogo = DefaultLogo,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, login, loginButton } = useLogin();

  const from = useMemo(
    () => location.state?.from?.pathname || '/',
    [location.state?.from?.pathname],
  );

  const onLogin = async () => {
    setIsLoading(true);
    login();
    navigate(from, { replace: true });
  };

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(false);
      navigate(from, { replace: true });
    }
  }, [from, isLoading, isLoggedIn, navigate]);

  return (
    <LoadingCard
      raised
      id={LOGIN_CARD_ID}
      variant='elevation'
      elevation={1}
      loading={isLoading}
      role='button'
    >
      <Grid
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        spacing={1}
        sx={{ backgroundColor: 'yellow' }}
      >
        <Grid item>
          <CustomLogo />
        </Grid>

        <Grid item>
          <Typography variant='h6' color='inherit'>
            {!loginButton && (
              <Button onClick={onLogin} color='primary' variant='contained'>
                Login
              </Button>
            )}
            {loginButton}
          </Typography>
          <Typography variant='caption' color='inherit'>
            {message}
          </Typography>
        </Grid>
      </Grid>
    </LoadingCard>
  );
};

export { LoginCard as default };
