import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context/context";
import Navlinks from "../navlinks/Navlinks";
import { Wrapper } from "./styles";

const MobileMenu = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebat-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <h3 className="logo">
              MOV<span className="logo-dot">.</span>
            </h3>
            <div className="nav-links">
              <Navlinks toggleSidebar={toggleSidebar} />
            </div>
          </header>
        </div>
      </div>
    </Wrapper>
  );
};

export default MobileMenu;
