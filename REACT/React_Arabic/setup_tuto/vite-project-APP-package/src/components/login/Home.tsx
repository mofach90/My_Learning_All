import { Box, Grid } from '@mui/material';
import type { FC, ReactNode } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from './login-provider.js';


export interface HomeProps {
  appName?: string;
  barProps?: Partial<any>;
  children?: ReactNode;
  company?: string;
  isLoading?: boolean;
  links?: {
    contact?: string;
    privacyPolicy?: string;
  };
  showRegisterBtn?: boolean;
}

const Home: FC<HomeProps> = ({
  appName,
  barProps,
  children,
  company,
  links,
  showRegisterBtn,
}) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useLogin();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home');
    }
  }, [isLoggedIn, navigate]);

  return (
    <Grid
      alignItems='center'
      sx={{ minHeight: '100%', backgroundColor:"green" }}
      container
      direction='column'
      justifyContent='space-between'
    >
      <Grid item xs={12} container>
        <Box>hi</Box>
      </Grid>
      <Grid item xs={12} container>
        {children}
      </Grid>
      <Box>hi</Box>
    </Grid>
  );
};

export { Home as default };