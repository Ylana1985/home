import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink
          to="/"
          className="logo"
          aria-label="Клининговые услуги — на главную"
        >
          <span className="logo-mark" aria-hidden>
            ✨
          </span>
          Клининговые услуги
        </NavLink>
        <nav aria-label="Главная навигация">
          <ul className="nav-list">
            <li>
              <NavLink to="/pricing">Расценки</NavLink>
            </li>
            <li>
              <NavLink to="/promotions">Акции</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Контакты</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
