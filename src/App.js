import "./App.css";
import Dictionary from "./Dictionary";
import lupa from "./images/lupa.jpeg";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={lupa} className="App-lupa" alt="lupa" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>Coded by Liliana Blattner</small>
      </footer>
    </div>
  </div>
  );
}


