import React from "react";
import NavBar from "./NavBar";

function Layout(props) {
  return (
    <div>
      <NavBar />
      <div className="container">{props.children}</div>
    </div>
  );
}

export default Layout;
