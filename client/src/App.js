
import logo from './logo.svg';
import './App.css';
import socketClient  from "socket.io-client";
const SERVER = "http://localhost:7007";

function App() {
  const socket = socketClient(SERVER);
  socket.on('connection', () => {
    console.log('Backend connection established');
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
