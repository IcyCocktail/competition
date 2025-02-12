import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/styles.css"; // Import styles
import goldLogo from "../assets/stock/الشعار باللون الذهبي.png";
import greenLogo from "../assets/stock/الشعار باللون الأخضر.png";
import goldLogoS from "../assets/stock/الشعار باللون الذهبي مصغر.png";

function Navbar() {
  const location = useLocation(); // Get current page URL
  const isHomePage = location.pathname === "/";

  return (
    isHomePage ? (
      <nav className="special">
        <ul>
          <li className="sign-in"><Link to="/signIn">تسجيل الدخول</Link></li>
          <li>
            <a href="#nominating">الترشيح</a> {/* Scroll to section */}
          </li>
          <li><Link to="/about">عن المسابقة</Link></li>
          <li><Link to="/">الرئيسة</Link></li>
        </ul>

        <div className="logo-wrapper">
          <Link to='/'><img className="logo" src={goldLogo} alt="Logo" /></Link>
          <Link to='/'><img className="logoSmall" src={goldLogoS} alt="Logo" /></Link>
          <p>تحت إشراف المركز الوطني لتنمية القطاع غير الربحي</p>
        </div>
      </nav>
    ) : (
      <nav className="default">
        <ul>
          <li className="sign-in"><Link to="/signIn">تسجيل الدخول</Link></li>
          <li><Link to="/#nominating">الترشيح</Link></li> {/* Link to section */}
          <li><Link to="/about">عن المسابقة</Link></li>
          <li><Link to="/">الرئيسة</Link></li>
        </ul>

        <div className="logo-wrapper">
          <Link to='/'><img className="logo" src={goldLogo} alt="Logo" /></Link>
          <Link to='/'><img className="logoSmall" src={goldLogoS} alt="Logo" /></Link>
          <p>تحت إشراف المركز الوطني لتنمية القطاع غير الربحي</p>
        </div>
      </nav>
    )
  );
}

export default Navbar;
