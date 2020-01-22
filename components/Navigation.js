import React from "react";
import Link from "next/link";

let Navigation = () => (
  <>
    <div className="navbar text-align-right">
      <Link to="/about"> ABOUT </Link>
      <Link to="/"> PROJECT </Link>
      <Link to="/Art"> ART </Link>
      <Link to="/Blog"> BLOG </Link>
    </div>

    <style jsx>{`
      .navbar {
        position: fixed;
        background-color: rgba(180, 90, 100, 0.2);
        width: 100%;
        height: 1.5rem;
        line-height: 1.5rem;
      }

      .navbar a {
        padding-right: 1.5rem;
        padding-bottom: 0;
        font-weight: 400;
        font-size: 0.95rem;
        text-decoration: none;
        text-shadow: 0 0 9px rgb(180, 90, 100);

        color: rgb(255, 210, 200);
      }
    `}</style>
  </>
);

export default Navigation;
