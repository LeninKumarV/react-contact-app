import React from "react";
import "./Style/Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ setInput }) {
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }} className="link">
        <h2 style={{ color: "white" }}>
          <i class="fa-solid fa-bars"></i>
        </h2>
        <h1 style={{ color: "white" }}>
          <i className="fa-solid fa-user" style={{ color: "skyblue" }}></i>
          Contacts
        </h1>
      </Link>
      <input
        type="text"
        name="search"
        className="search"
        placeholder="Search"
        onChange={ (e) => setInput(e.target.value)}
/>
    </div>
  );
}

export default Navbar;
