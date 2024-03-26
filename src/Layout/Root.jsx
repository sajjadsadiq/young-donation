import React from "react";
import Nav from "../pages/Shared/Nav";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default Root;
