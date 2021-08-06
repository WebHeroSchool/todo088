
import logo from './logo.svg';
import './App.css';
import count from './number.js';
import {length} from './number.js';

const name = 'Привет';
const nuber = 26;
const log = false;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p style= {{
          color: 'blue'
        }}>
        {name}
        , Ментор!
        </p>

        <p style= {{
          color: 'yellow'
        }}>
        count *length = 
        {count + length}
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
