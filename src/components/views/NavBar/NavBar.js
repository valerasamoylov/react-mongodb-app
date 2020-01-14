import React from "react";

import "./NavBar.css";

function NavBar() {
  return (
    <nav
      className="menu"
      style={{ position: "fixed", zIndex: 1, width: "100%" }}
    >
      <div className="menu__logo">
        <a href="/">MovieDB</a>
      </div>
    </nav>
  );
}

export default NavBar;
