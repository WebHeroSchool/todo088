import logo from './logo.svg';
import './App.css';

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
        {nuber} + 1 =
        {nuber +1}
        </p>

        <p style= {{
          color: 'red'
        }}>
        {log || 'log is false'}
        </p>
        <p>
        {log ? 'log is false' : 'log is true'}
        {true}
        {null}
        {undefined}
      {false}
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
