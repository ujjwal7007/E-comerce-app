import React, { useContext } from "react";
import { PRODUCTS, PRODUCTS1 } from "../components/products";
import Cartitems from "../components/cartitems";
import { ShopContext } from "../components/shopcontext";

const cart = () => {
  const { getTotalCartAmount, addToCart, cartItems } = useContext(ShopContext);
  const TotalAmount = getTotalCartAmount();
  return (
    <>
      <section className="card-item p-5">
        <div className="container-xxl">
          <div className="row">
            <table>
              <thead className="my-2">
                <th className="col-3">Product Image</th>
                <th className="col-3">Product Details</th>
                <th className="col-3">Edit</th>
                <th className="col-2">Coupons</th>
              </thead>
              {[...PRODUCTS, ...PRODUCTS1].map((product) => {
                if (cartItems[product.id] !== 0) {
                  return <Cartitems Key={product.id} data={product} />;
                }
              })}
            </table>
          </div>
        </div>
        <hr />

        <div className=" mt-4 p-3 cart-total d-flex justify-content-between">
          <div>
            <button>Continue Shopping</button>
          </div>
          <div>
            <h3>Total</h3>
            <p className="price mb-4">$ {TotalAmount}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default cart;
