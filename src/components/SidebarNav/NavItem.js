import React from "react";

const NavItem = (props) => {
  return (
    <li
      className={`nav__item font-semi-bold ${
        props.active ? "nav__item--active" : ""
      }`}
    >
      <div className="nav__link">
        {props.children}
        <span className="nav-item__text">{props.title}</span>
      </div>
    </li>
  );
};

export default NavItem;
