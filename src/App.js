import logo from "./logo.svg";
import "./App.css";
import Plausible from "plausible-tracker";

const { trackEvent } = Plausible();

function App() {
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
        <button
          onClick={() => {
            trackEvent(
              "signup",
              {
                callback: () => console.log("donmme"),
                props: {
                  variation: "button A",
                },
              },
              { trackLocalhost: true }
            );
          }}
        >
          HI
        </button>
      </header>
    </div>
  );
}

export default App;
