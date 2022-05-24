import './App.css';
import { InputForm } from './InputForm';
import {createTheme, ThemeProvider} from "@mui/material"

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    },
});

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <InputForm></InputForm>
          <a href="https://github.com/advmczvk/daftacademy-react-101"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub logo" /></a>
        </header> 
      </div>
    </ThemeProvider>
  );
}

export default App;
