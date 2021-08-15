import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  // console.log(context);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <NavLink to="/contacts" className="mr-3" activeClassName="active ">
          contacts
        </NavLink>
        <NavLink to="/addContact" className="mr-3" activeClassName="active">
          addContact
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
