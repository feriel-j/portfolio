import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="header">
      <Link className="link" to="/">
        <h1>Feriel Jabri </h1>
      </Link>
      <ul className="nav">
        <Link className="link" to="/">
          <span>Home</span>
        </Link>
        <Link className="link" to="/About">
          <span>About</span>
        </Link>
        <Link className="link" to="/Resume">
          <span>Resume</span>
        </Link>
        <Link className="link" to="/Portfolio">
          <span>Portfolio</span>
        </Link>
        <Link className="link" to="Contact">
          <span>Contact</span>
        </Link>
      </ul>
      <div className="phone">
        <img
          src="/images/search.svg"
          alt="search"
          width="35px"
          height="35px"
          className="search"
        />
        <h4>(+216)21122439</h4>
      </div>
    </div>
  );
};

export default Nav;
