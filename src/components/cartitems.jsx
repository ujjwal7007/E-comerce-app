import React from "react";

const cartitems = (props) => {
  const { id, name, image, price, brand } = props.data;
  const { viewProductDetails, addToCart, cartItems } = useContext(ShopContext);
  return <>
  
  </>;
};

export default cartitems;
