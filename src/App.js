import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <main>
        <Dictionary defaultKeyword="bloom" />
      </main>
      <footer className="App-footer">
         <div className="App-footer">
                 Coded by Liliana Torres
                   <a href="https://github.com/lyl-torres/dictionary-project" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   , open-sourced on Github 
                   </a> and <a href="https://app.netlify.com/sites/relaxed-bassi-e4c948/overview" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   hosted on Netlify</a>
                </div>
      </footer>
    </div>
  </div>
  );
}


