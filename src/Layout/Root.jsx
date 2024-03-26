import { Outlet } from "react-router-dom";
import Nav from "../pages/Shared/Navbar/Nav";

function Root() {
  return (
    <div className="container mx-auto px-24">
      <Nav />
      <Outlet />
    </div>
  );
}

export default Root;
