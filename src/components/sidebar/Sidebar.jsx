import React from "react";
import Navlinks from "../navlinks/Navlinks";
import { Wrapper } from "./styles";

const Sidebar = () => {

  return (
    <Wrapper>
      <div className="sidebar-container">
        <div className="content">
          <header>
            <h2 className="logo">
              MOV<span className="logo-dot">.</span>
            </h2>
          </header>
          <Navlinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
