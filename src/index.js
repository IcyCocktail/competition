import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles.css"; // Import global styles
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router> {/* Wrap App with Router */}
    <App />
  </Router>
);