import React from "react";
import Search from "./Search";

export default function Header(props) {
  return (
    <div className="navbar">
      <h1 className="header">WEATHER APP</h1>
      <Search direction="row" />
    </div>
  );
}
