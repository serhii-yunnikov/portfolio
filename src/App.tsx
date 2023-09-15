
import { createTheme } from '@mui/material';
import { About } from './components/About';
import { Contacts } from './components/Contacts';
import { Expertise } from './components/Expertise';
import { Greeting } from './components/Greeting';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { MuiThemeProvider } from '@material-ui/core';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily:
        'SF Pro',
      },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <Greeting />
      <About />
      <Expertise />
      <Projects />
      <Contacts />
    </MuiThemeProvider>
  )
}

export default App;
