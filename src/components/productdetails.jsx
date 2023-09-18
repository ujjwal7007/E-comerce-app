import React, { useContext } from "react";
import {ShopContext} from "../components/shopcontext";
import { PRODUCTS, PRODUCTS1 } from "./products";

const productdetails = (props) => {
  const { id, name, image, price, brand } = props.data; 
  const { selectedProduct, closeProductDetails } = useContext(ShopContext);
  const productId = selectedProduct || 0;
  const product =
    PRODUCTS.find((p) => p.id === productId) ||
    PRODUCTS1.find((p) => p.id === productId);
 
  return <>
  <div className="d-flex align-items-center justify-content-between">
    <div>
      <img src={image} alt=""/>
    </div>
  </div>
  </>
};

export default productdetails;
