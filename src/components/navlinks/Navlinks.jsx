import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import links from "../../utils/links";

const Navlinks = () => {
  const { toggleSidebar } = useGlobalContext();

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { id, text, path, icon } = link;
        return (
          <NavLink
            to={path}
            className={({ isActive }) => {
              return isActive ? "nav-link active" : "nav-link";
            }}
            key={id}
            onClick={toggleSidebar}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navlinks;
