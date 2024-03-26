import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-2xl">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold text-xl"
              : "flex items-center hover:text-blue-500 transition-colors text-xl font-bold"
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to={"donations"}
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold text-xl"
              : "flex items-center hover:text-blue-500 transition-colors text-xl font-bold"
          }
        >
          Donations
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to={"statistics"}
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold text-xl"
              : "flex items-center hover:text-blue-500 transition-colors text-xl font-bold"
          }
        >
          Statistics
        </NavLink>
      </Typography>
    </ul>
  );
}

export default NavList;
