import React from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./includes/navbar"; // Import the Navbar
import Home from "./pages/home";
import About from "./pages/about";
import SignIn from "./pages/signIn";
import "./assets/styles.css";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {isHomePage && <div className="cover">
        <Navbar />
        <div class="title">
          <h1>مسابقة <span>تعلَّم</span></h1>
          <h1>لحفظ القرآن الكريم</h1>
        </div>
      </div>}
      {!isHomePage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;