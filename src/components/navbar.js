import React from "react";
// import { Link } from "gatsby"
import DynamicLink from "./dynamic-link";
import NavLinks from "../data/nav-links.json";
import TTBLogoV2 from "../images/graphics/ttb-logoV2.png";

const Nav = () => (
  <nav className="nav">
    <div className="row">
      <div className="col-5">
        <DynamicLink to="/" className="img-fluid logo_link">
          <img className="nav__logo" src={TTBLogoV2} />
        </DynamicLink>
      </div>
      <div className="col-7">
        <ul className="nav__list">
          {NavLinks.map((link, index) => {
            return (
              <li key={`nav-item-${index}`} className="nav__item">
                <DynamicLink className="nav__link" to={link.path}>
                  {link.name}
                </DynamicLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </nav>

  // </div>
);

export default Nav;
