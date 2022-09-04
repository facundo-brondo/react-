import React from "react";
import CardWidget from "../CardWidget";
import { NavLink } from "react-router-dom"

 export const NavBar = () => {
  return (
    <div className="container">
      <nav className="nav">
        <div className="nav__brand">
          <NavLink className="nav__link" to='/' >MiMarca</NavLink>
        </div>
        <ul className="nav__List">
          <li>
            <NavLink className="nav__link" to='/categoria/games'>Games</NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to='/categoria/DLC'>Secuelas</NavLink>
          </li>
          <li>
            <NavLink className="nav__link" to='/cart'>
              <CardWidget />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;

