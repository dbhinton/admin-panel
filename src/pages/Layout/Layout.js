import React from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "../../components/MenuBar/MenuBar";
import SideBar from "../../components/SideBar/SideBar";

const Layout = () => {
  return (
      <>
    <MenuBar />
    <div className='container'>
      <SideBar/>
      <Outlet />
    </div>
    </>
  );
};

export default Layout;
