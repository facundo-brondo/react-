import React from "react";
import CardWidget from "../CardWidget";

const NavBar = () => {
    return(
        <div className="container">
          <nav className="nav">
            <div className="nav__brand">
              <a className="nav__link" href="#">MiMarca</a>
            </div>
            <ul className="nav__List">
              <li>
                <a className="nav__link" href="#">Categoria 1</a>
              </li>
              <li>
                <a className="nav__link" href="#">Categoria 2</a>
              </li>
              <li>
                <a className="nav__link" href="#">
                  <CardWidget/>
                </a>
              </li>
            </ul>

          </nav>
     
        
        </div>
    );
};

export default NavBar;