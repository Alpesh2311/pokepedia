import React from "react";
import "./Navbar.css";

function Navbar({ more }) {
  return (
    <nav className={`navbar ${more ? "blur" : ""}`}>
      <h1>Pokepedia</h1>
      <img src="https://e7.pngegg.com/pngimages/173/464/png-clipart-pokemon-ball-pokeball-area-wiki-thumbnail.png" alt="" />
    </nav>
  );
}

export default Navbar;
