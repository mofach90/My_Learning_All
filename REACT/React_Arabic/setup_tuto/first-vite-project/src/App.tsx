import { App as AppCpl, RouteEntry, Home } from '@cpl/app';
import { styled, useTheme } from '@mui/material';

import { Children, useMemo, useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import Header from './components/Header';
import Homepage from './components/Home';
import viteLogo from '/vite.svg';
import  Login  from "./components/login/login";

// function List() {
//   return (
//     <>
//       <div> Hello List </div>
//       <Header text='Taraji ya dawla' subtext='Bonjour' />
//     </>
//   );
// }

function IndexPage() {
  return <h1>INDEX PAGE</h1>;
}

function LoginPage() {
  return <h1>Loading Page</h1>;
}

const routes: RouteEntry[] = [
  {
    id: 'home',
    element: <Homepage />,
    path: '/',
    index: true,
  },
  {
    id: 'login',
    element: <Login />,
    path: '/login',
  },
];

export const Logo = () => (
  <img src='vite.svg' style={{ width: '30%' }} />
);

export const LogoProfile = () => {
  const theme = useTheme();
  const src = useMemo(
    () =>
      theme.palette.mode === 'dark'
        ? '/images/logo-epa-images-white.svg'
        : '/images/logo-epa-images-black-text.svg',
    [theme.palette.mode],
  );

  return <img src={src}  />;
};

function App() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  const version = '2.0.2';

  // useEffect () => {
  //   console.log("hello in useeffect")
  // }
  // function increment(counter: any) {
  //   setCounter(counter + 1);
  // }
  // console.log('hello');
  // let logik = true;

  return (
    <AppCpl appName='Test' routes={routes}           noMenu
    appBarProps={{
      Logo: Logo,
      profileMenuProps: {
        links: {
          about: {
            to: 'https://epaimages.com/misc.pp?code=about-us',
            target: '_blank',
          },
          support: {
            to: 'https://epaimages.com/misc.pp?code=contact_us',
            target: '_blank',
          },
          privacyPolicy: {
            // TODO: Swap this out for the real privacy policy
            to: 'https://epaimages.com/misc.pp?code=privacy-policy',
          },
          impressum: {
            to: 'https://epaimages.com/misc.pp?code=imprint',
          },
        },
        logo: LogoProfile,
      },
    }}
    noAppRoutes
    version={version}>
      {/* <Header text='my text' />
      {logik && <List />}
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((e) => e + 1)}>count is {count}</button>
        <h1>count = {count}</h1>
      </div>
      <h1>My new counter</h1>
      <h1>counter = {counter}</h1>
      <button onClick={() => increment(counter)}>counter is {counter}</button>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p> */}
    </AppCpl>
  );
}

export default App;
