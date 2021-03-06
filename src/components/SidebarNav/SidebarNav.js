import React from "react";
import Nav from "./Nav";

const SidebarNav = () => {
  return (
    <section className="sidebar-nav animate__animated animate__fadeInLeft">
      <img className="logo" src="images/logo.svg" alt="logo" />
      <Nav />
      <div className="sidebar__premium-ads animate__animated animate__fadeInLeft animate__delay-1s">
        <img
          className="sidebar-premium__img animate__animated animate__bounceIn animate__delay-2s"
          src="images/premium-ads-2.png"
          alt="illustrated person working with computer"
        />
        <h4 className="sidebar-premium__heading text-lg font-semi-bold">
          Premium subscription
        </h4>
        <p className="sidebar-premium__paragraph text-sm font-normal">
          Buy premium and get access to new courses
        </p>
        <button className="sidebar-premium__btn font-normal">
          More detailed
        </button>
      </div>
    </section>
  );
};

export default SidebarNav;
