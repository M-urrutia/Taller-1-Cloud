import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const STUDENT_NAME = "Maximiliano Urrutia y Vicente inserte_algo_aca";
const SUBJECT = "Cloud Computing";
const CURRENT_YEAR = new Date().getFullYear();

function App() {
  return (
    <div className="app-shell">
      <main className="center-message">
        <p>Funciona?</p>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <span>{STUDENT_NAME}</span>
          <span>{CURRENT_YEAR}</span>
          <span>{SUBJECT}</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
