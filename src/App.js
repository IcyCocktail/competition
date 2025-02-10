import React from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./includes/navbar"; // Import the Navbar
import Home from "./pages/home";
import About from "./pages/about";
import SignIn from "./pages/signIn";
import "./assets/styles.css"; // Import global styles
import { motion } from 'framer-motion'
import { slideUp, containerVariants } from "./assets/animations";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isSignPage = location.pathname === "/signIn";

  return (
    <>
      {isHomePage && <div className="cover">
        <Navbar />
        <div class="title">
          <h1>مسابقة <span>تعلَّم</span></h1>
          <h1>لحفظ القرآن الكريم</h1>
        </div>
      </div>}
      {isSignPage && <div className="cover"><Navbar />
        <section className="sign-box">
          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.form className="form" variants={slideUp}>
              <h3>تـسـجـيـــــل الــــــدخـول</h3>
              <div className="inputGroup">
                <input type="text" required autoComplete="off" id="username" />
                <label className="usenm" htmlFor="username">اسم المستخدم</label>
              </div>
              <div className="inputGroup">
                <input type="password" required autoComplete="off" />
                <label className="pass" htmlFor="username">كلمة المرور</label>
              </div>
              <button type="submit">تسجيل الدخول</button>
            </motion.form>
          </motion.div>
        </section>
      </div>}
      {!(isHomePage || isSignPage) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;