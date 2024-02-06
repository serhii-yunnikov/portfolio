import React, { Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from './common/themes/portfolioTheme';

const Header = React.lazy(() => import('./components/Header/Header'));
const Greeting = React.lazy(() => import('./components/Greeting/Greeting'));
const About = React.lazy(() => import('./components/About/About'));
const Expertise = React.lazy(() => import('./components/Expertise/Expertise'));
const Projects = React.lazy(() => import('./components/Projects/Projects'));
const Contacts = React.lazy(() => import('./components/Contacts/Contacts'));


function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Greeting />
        <About />
        <Expertise />
        <Projects />
        <Contacts />
      </Suspense>
    </ThemeProvider>
  )
}

export default App;
