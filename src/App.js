import React from "react";
import Layout from "./pages/Layout/Layout";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/Home/Home";
import User from "./pages/Users/Users";
import "./index.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
            <React.Fragment className="container">

            <Route index element={<Home />} />
            <Route path="/users" element={<User />} />
            </React.Fragment>
    

        </Route>
      </Routes>
    </>
  );
}

export default App;
