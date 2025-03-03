import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/styles.css"; // Import styles
import goldLogo from "../assets/stock/الشعار باللون الذهبي.png";
import greenLogo from "../assets/stock/الشعار باللون الأخضر.png";
import goldLogoS from "../assets/stock/الشعار باللون الذهبي مصغر.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();
  const location = useLocation(); // Get current page URL
  const isHomePage = location.pathname === "/";
  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    isHomePage ? (
      <header>

        <button className="nav-btn" onClick={showNav}>
          <FaBars />
        </button>

        <nav className="special" ref={navRef}>

          <ul>
            
            <button className="nav-btn nav-close-btn" onClick={showNav}>
              <FaTimes />
            </button>

            <li className="sign-in">
              <Link to="/signIn">تسجيل الدخول</Link>
            </li>
            <li>
              <a href="#nominating" onClick={showNav}>الترشيح</a> {/* Scroll to section */}
            </li>
            <li><Link to="/about">عن المسابقة</Link></li>
            <li><Link to="/">الرئيسة</Link></li>

          </ul>

        </nav>

        <div className="logo-wrapper">
          <Link to='/'><img className="logo" src={goldLogo} alt="Logo" /></Link>
          <Link to='/'><img className="logoSmall" src={goldLogoS} alt="Logo" /></Link>
          <p>تحت إشراف المركز الوطني لتنمية القطاع غير الربحي</p>
        </div>

      </header>

    ) : (
      <header className="default" >

        <button className="nav-btn" onClick={showNav}>
          <FaBars />
        </button>

        <nav ref={navRef}>

          <ul>

          <button className="nav-btn nav-close-btn" onClick={showNav}>
            <FaTimes />
          </button>

            <li className="sign-in"><Link to="/signIn">تسجيل الدخول</Link></li>
            <li><a href="/#nominating" onClick={showNav}>الترشيح</a></li> {/* Link to section */}
            <li><Link to="/about">عن المسابقة</Link></li>
            <li><Link to="/">الرئيسة</Link></li>
          </ul>

        </nav>

        <div className="logo-wrapper">
          <Link to='/'><img className="logo" src={goldLogo} alt="Logo" /></Link>
          <Link to='/'><img className="logoSmall" src={goldLogoS} alt="Logo" /></Link>
          <p>تحت إشراف المركز الوطني لتنمية القطاع غير الربحي</p>
        </div>

      </header>
    )
  );
}

export default Navbar;
