import React from "react";
import { useContext } from "react";
import { ShopContext } from "./shopcontext";

const cartitems = (props) => {
  const { id, name, image, price, brand } = props.data;
  const {
    viewProductDetails,
    addToCart,
    cartItems,
    removeToCart,
    updateCartItemCount,
  } = useContext(ShopContext);
  return (
    <>
      <tbody key={id}>
        <tr>
          <td>
            <div className="p-2">
              <img src={image} alt="" className="img-fluid" />
            </div>
          </td>
          <td>
            <p>Product Brand: {brand}</p>
            <p>Product Name: {name}</p>
            <p>Product Price: {price}</p>
          </td>
          <td>
            <button
              className="add-btn"
              onClick={() => {
                addToCart(id);
              }}
            >
              +
            </button>
            <input
              type="text"
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button
              className="add-btn"
              onClick={() => {
                removeToCart(id);
              }}
            >
              -
            </button>
          </td>
          <td>
            <div className="input-group mr-3">
              <input
                type="text"
                className="form-control"
                placeholder="Apply coupon code.."
                aria-label="Apply coupon code"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text" id="basic-addon2">
                Search
              </span>
            </div>
          </td>
        </tr>
        <div className="mb-3"></div>
      </tbody>
    </>
  );
};

export default cartitems;
