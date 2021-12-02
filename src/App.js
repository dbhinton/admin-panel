import React from "react";
import MenuBar from "./components/MenuBar/MenuBar.js";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/Home/Home"
import "./index.css";

function App() {
  return (
    <div>
      <MenuBar />
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
