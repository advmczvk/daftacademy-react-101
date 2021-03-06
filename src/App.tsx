import './App.css';
import {createTheme, ThemeProvider} from "@mui/material"
import { Routes, Route} from 'react-router-dom'

import { InputForm } from './InputForm';
import { Home } from './Home';
import { Header } from './Header';

export const paths = {
  home: '',
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

        <Routes>
          <Route index element={<Home />}/>
          <Route path={`/${paths.about}`} element={<h3>About</h3>}/>
          <Route path={`/${paths.contact}`} element={<h3>Contact</h3>}/>
          <Route path={`/${paths.login}`} element={<InputForm />}/>

          <Route path='*' element={<div>404</div>}/>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
