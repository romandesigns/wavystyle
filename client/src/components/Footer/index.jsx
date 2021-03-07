// Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Styled components
import { FOOTER } from "./styles";
/**
 * @author
 * @function Footer
 **/

const Footer = (props) => {
  return (
    <FOOTER>
      <span>
        Designed and Developed by <Link to="/contact">Roman</Link>
      </span>
      <span>
        Powered with the{" "}
        <a href="//bloggingcoder.com/blogs/what-is-mern-stack" target="_blank" rel="noopener noreferrer">
          MERN
        </a>{" "}
        stack
      </span>
    </FOOTER>
  );
};

export default Footer;
