import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {
  const [menuState, setMenuState] = useState(false);

  const onHamburgerClick = () => {
    setMenuState(!menuState);
  };

  useEffect(() => {
    if (menuState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuState]);

  return (
    <header>
      <nav>
        <div className="logo__container">
          <Logo />
        </div>

        <ul id="menu">
          <li className="nav__item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav__item">
            <Link to="/Careers">Careers</Link>
          </li>
          {/* <li className="nav__item">
            <Link to="/Advertise">Advertise</Link>
          </li> */}
          <li className="nav__item">
            <Link to="/Pricing">Pricing</Link>
          </li>
          <li className="nav__item">
            <Link to="/Screenshots">Screenshots</Link>
          </li>
           <li className="nav__item">
            <Link to="/Gallery">Gallery</Link>
          </li>
           <li className="nav__item">
            <Link to="/Features">Features</Link>
          </li>
           <li className="nav__item">
            <Link to="/Teams">Teams</Link>
          </li>
            <li className="nav__item">
            <Link to="/Pages">Pages</Link>
          </li>
          <li className="nav__item">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>

        <div
          id="hamburger"
          onClick={onHamburgerClick}
          className={menuState ? "active" : ""}
        >
          <div className="line" id="one"></div>
          <div className="line" id="two"></div>
          <div className="line" id="three"></div>
          <div className="line" id="four"></div>
          <div className="line" id="five"></div>
          <div className="line" id="six"></div>
        </div>
      </nav>

      <div className={menuState ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-menu__items">
          <li className="nav__item" onClick={() => onHamburgerClick()}>
            <Link to="/">Home</Link>
          </li>
          <li className="nav__item" onClick={() => onHamburgerClick()}>
            <Link to="/Careers">Careers</Link>
          </li>
          {/* <li className="nav__item" onClick={() => onHamburgerClick()}>
            <Link to="/Advertise">Advertise</Link>
          </li> */}

            <li className="nav__item" onClick={() => onHamburgerClick()}>
            <Link to="/Pricing">Pricing</Link>
          </li>
          
           <li className="nav__item" onClick={() => onHamburgerClick()}>
            <Link to="/Screenshots">Screenshots</Link>
          </li>
           <li className="nav__item" onClick={() => onHamburgerClick()}>
            <Link to="/Features">Features</Link>
          </li>
           <li className="nav__item" onClick={() => onHamburgerClick()}>
            <Link to="/Gallery">Gallery</Link>
          </li>
          <li className="nav__item" onClick={() => onHamburgerClick()}>
            <Link to="/Teams">Teams</Link>
          </li>
           <li className="nav__item" onClick={() => onHamburgerClick()}>
            <Link to="/Pages">Pages</Link>
          </li>
          <li className="nav__item" onClick={() => onHamburgerClick()}>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
