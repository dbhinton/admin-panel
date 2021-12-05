import React from "react";
import "./ProductDetailStyles.css";
import { Link } from "react-router-dom";
import Chart from "../../components/Chart/Chart";
import {productData} from '../../dummyData'
import { Publish } from "@material-ui/icons";

export default function ProductDetail() {
  return (
    <div className="productDetail">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product Detail Page</h1>
        <Link to="/newProduct">
          <button className="addNewProductButton">Add Product</button>
        </Link>
      </div>

      <div className="productContainer">
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title='Sales Performance'/>
          </div>
          <div className="productTopRight">
              <div className='productInfoTop'>
                  <img className='productImageInfo' src="https://i.imgur.com/PJfIjH9.jpg" alt="productimage" />
                  <span className="productName">Canon 5D Mark IV</span>
              </div>
              <div className="productInfoBottom">
                  <div className='productInfoItem'>
                      <span className="productInfoKey">id:</span>
                      <span className="productValue">125</span>
                  </div>
                  <div className='productInfoItem'>
                      <span className="productInfoKey">Sales:</span>
                      <span className="productValue">125</span>
                  </div>
                  <div className='productInfoItem'>
                      <span className="productInfoKey">Active: </span>
                      <span className="productValue">no</span>
                  </div>
                  <div className='productInfoItem'>
                      <span className="productInfoKey">Quantity: </span>
                      <span className="productValue">12</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className='productFormLeft'>
                  <label>Product Name</label>
                  <input type="text" placeholder="Canon 5D Mark IV"/>
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes" key="">Yes</option>
                      <option value="no" key="">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://i.imgur.com/PJfIjH9.jpg" alt="" className="productUploadImage"/>
                      <label htmlFor='file'>
                          <Publish />
                      </label>
                      <input type="file" id="file" style={{display:'none'}}/>
                     
                      
                  </div>
                  <button className="productButton">Updated</button>
              </div>
          </form>
      </div>
      </div>
    </div>
  );
}
