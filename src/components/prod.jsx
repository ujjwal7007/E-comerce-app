import React, { useContext } from "react";
import { ShopContext } from "./shopcontext";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const prod = (props) => {
  const { id, name, image, price, brand } = props.data;
  const { viewProductDetails, addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];
  return (
    <>
      <div key={id} className="col-3">
        <div className="card">
          <img src={image} alt="" className="img-fluid card-img-top" />
          <div className="card-details p-3">
            <span>{brand}</span>
            <h5 className="my-3">{name}</h5>
            <ReactStars
              count={5}
              edit={false}
              value={4}
              size={24}
              activeColor="#cca27e"
            />
            <p className="price mb-3">
              {price}{" "}
              <span className="text-danger">
                &nbsp;<strike>{price * 2}</strike>
              </span>
            </p>
            <div className=" mb-2">
              <div className="col-6 d-flex align-items-center justify-content-around">
                <Link
                  className="view-button"
                  onClick={() => viewProductDetails(id)}
                >
                  View Details
                </Link>
              </div>
              <div className="col-6 align-items-center">
                <button className="add-btn" onClick={() => addToCart(id)}>
                  Add to Cart {cartItemCount > 0 && `(${cartItemCount})`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default prod;