import logo from "./ZA Logo (1).png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultkeyword="anime" />
        </main>
        <footer className="App-footer">Coded by Zeinab Abu</footer>
      </div>
    </div>
  );
}

export default App;
