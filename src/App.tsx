import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const handleShowAlert = () => {
    alert("Hello react!");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Daftacademy F4B 101
        </p>
        <button className="alert-button" onClick={handleShowAlert}>Hello</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
        <a href="https://github.com/advmczvk/daftacademy-react-101"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub logo" /></a>
      </header>
    </div>
  );
}

export default App;
