import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="header">WEATHER APP</h1>
      </Link>
      <Search direction="row" {...props} />
    </div>
  );
}
