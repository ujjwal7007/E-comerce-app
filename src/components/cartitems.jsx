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
            <img src={image} alt="" className="img-fluid" />
          </td>
          <td>
            <p>{brand}</p>
            <p>{name}</p>
            <p>{price}</p>
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
            <div className="input-group mb-3">
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
      </tbody>
    </>
  );
};

export default cartitems;
