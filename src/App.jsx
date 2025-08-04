import React, { useState, useEffect } from "react";
import UrlForm from "./components/UrlForm";
import UrlList from "./components/UrlList";
import "./styles/App.css";

function App() {
  const [urls, setUrls] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <header>
        <h1>URL Shortener</h1>
        <button className="toggle-btn" onClick={toggleDarkMode}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>
      <UrlForm setUrls={setUrls} />
      <UrlList urls={urls} />
    </div>
  );
}

export default App;
