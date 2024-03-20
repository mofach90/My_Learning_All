/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import { Home, Page } from '@cpl/app';
import { Box, Grid, Typography } from '@mui/material';

import { FC, PropsWithChildren } from 'react';

const Row: FC<PropsWithChildren> = ({ children }) => (
  <Grid container spacing={1} justifyContent='center'>
    <Grid item xs={12} md={10} lg={8}>
      {children}
    </Grid>
  </Grid>
);

export const Logo = () => (
    <img src='vite.svg' style={{ width: '30%' }} />
  );

const Homepage: FC = () => (
    <Home
      appName={'| video encoding platform'}
      barProps={{ Logo }}
      links={{
        contact: 'https://epaimages.com/misc.pp?code=contact_us',
        privacyPolicy: 'https://epaimages.com/misc.pp?code=privacy-policy',
      }}
    >
      <Page title='oleole'>
        <Box sx={{ ml: 2 }}>
          <Row>
            <Typography variant='h4' gutterBottom>
              {'EPA Images'}
            </Typography>
            <Typography variant='body1' gutterBottom>
              Video encoding and processing application
            </Typography>
          </Row>
        </Box>
      </Page>
    </Home>
);

export { Homepage as default };
