import React from "react";
import "./NewProductStyles.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Product</h1>
      <form className="newProductForm">
      <div className="newProductFormItem">
          <label>Image Upload</label>
          <input type="file" id="file" />
        </div>
        <div className="newProductFormItem">
          <label>Product Name</label>
          <input type="text" placeholder="Enter Product Name" />
        </div>
        <div className="newProductFormItem">
            <label>Price</label>
            <input type="text" placeholder="Enter Price"/>
        </div>
        <div className="newProductFormItem">
            <label>Quantity</label>
            <input type="number" placeholder="Enter Quantity"/>
        </div>
        <button className="newProductButton">Create</button>
      </form>
    </div>
  );
}
