import React from "react";
import { Outlet } from "react-router-dom";
import { MobileMenu, Sidebar } from "../components";
import Navbar from "../components/navbar/Navbar";
import { useGlobalContext } from "../context/context";
import { Wrapper } from "./styles/sharedLayout.styles";

const SharedLayout = () => {
  const { isSidebarOpen } = useGlobalContext();

  return (
    <Wrapper>
      <main className="dashboard">
        {isSidebarOpen && <MobileMenu />}
        <Sidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
