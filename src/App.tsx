import { About } from './components/About/About';
import { Contacts } from './components/Contacts';
import { Expertise } from './components/Expertise/Expertise';
import { Greeting } from './components/Greeting';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from './common/themes/portfolioTheme';


function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Header />
      <Greeting />
      <About />
      <Expertise />
      <Projects />
      <Contacts />
    </ThemeProvider>
  )
}

export default App;
