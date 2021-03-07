// Dependencies
import React from "react";
import { Link, NavLink } from "react-router-dom";

// Styled components
import * as NAVBAR from "./styles";
/**
 * @author
 * @function Footer
 **/

const Navbar = (props) => {
  return (
    <NAVBAR.Nav>
      <div>
        <Link to="/">
          <img src="/logo512.png" />
          <h1>WavyStyle</h1>
        </Link>
      </div>
      <ul>
        <li>
          <NavLink to="/development">Development</NavLink>
        </li>
        <li>
          <NavLink to="/design">Design</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </NAVBAR.Nav>
  );
};

export default Navbar;
