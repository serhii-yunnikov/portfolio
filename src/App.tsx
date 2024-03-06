import React, { Suspense } from 'react';
import TableWarning from './components/TableWarning/TableWarning';
import { useMediaQuery } from '@mui/material';
import { Theme } from '@material-ui/core';

const Header = React.lazy(() => import('./components/Header/Header'));
const Greeting = React.lazy(() => import('./components/Greeting/Greeting'));
const About = React.lazy(() => import('./components/About/About'));
const Expertise = React.lazy(() => import('./components/Expertise/Expertise'));
const Projects = React.lazy(() => import('./components/Projects/Projects'));
const Contacts = React.lazy(() => import('./components/Contacts/Contacts'));

function App() {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isSmallScreen ? <TableWarning /> : (
        <>
          <Header />
          <Greeting />
          <About />
          <Expertise />
          <Projects />
          <Contacts />
        </>
      )}
    </Suspense>
  );
}

export default App;
