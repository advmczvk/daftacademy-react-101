import './App.css';
import {createTheme, ThemeProvider} from "@mui/material"
import {Link, Routes, Route} from 'react-router-dom'

import { InputForm } from './InputForm';
import { Home } from './Home';
import { Header } from './Header';

export const paths = {
  home: 'home',
  about: 'about',
  contact: 'contact',
  login: 'login'
}

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    },
});

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <div>
          Logo
        </div>
        <div>
          
        </div>
        <Routes>
          <Route path={`/${paths.home}`} element={<Home />}/>
          <Route path={`/${paths.about}`} element={<div>About</div>}/>
          <Route path={`/${paths.contact}`} element={<div>Contact</div>}/>
          <Route path={`/${paths.login}`} element={<InputForm />}/>

          <Route path='*' element={<div>404</div>}/>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
