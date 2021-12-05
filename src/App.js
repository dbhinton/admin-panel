import React from "react";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import UserDetail from './pages/UserDetail/UserDetail'
import "./index.css";
import { Route, Routes } from "react-router-dom";
import NewUser from "./pages/NewUser/NewUser";
import Products from './pages/Products/Products'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import NewProduct from "./pages/NewProduct/NewProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
            <React.Fragment className="container">

            <Route index element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/user/:userId" element={<UserDetail />} />
            <Route path='/newUser' element={<NewUser/>} />
            <Route path='/products' element={<Products />}/>
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path='/newProduct' element={<NewProduct/>} />
            </React.Fragment>
    

        </Route>
      </Routes>
    </>
  );
}

export default App;
