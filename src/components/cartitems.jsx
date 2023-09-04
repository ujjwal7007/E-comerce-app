import React from "react";
import { useContext } from "react";
import { ShopContext } from "./shopcontext";

const cartitems = (props) => {
  const { id, name, image, price, brand } = props.data;
  const {
    viewProductDetails,
    addToCart,
    cartItems,
    removeTocart,
    updateCartItemCount,
  } = useContext(ShopContext);
  return (
    <>
      <section className="card-item p-5">
        <div className="container-xxl">
          <div key={id} className="row">
            <table>
              <thead>
                <th>Product Image</th>
                <th>Product Details</th>
                <th>Edit</th>
                <th>Coupons</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="col-3">
                      <img src={image} alt="" className="img-fluid" />
                    </div>
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
                        event.target.classList.toggle("text-success");
                      }}
                    >
                      +
                    </button>
                    <input
                      type="text"
                      value={cartItems[id]}
                      onChange={(e) =>
                        updateCartItemCount(Number(e.target.value), id)
                      }
                    />
                    <button
                      className="add-btn"
                      onClick={() => {
                        removeTocart(id);
                        event.target.classList.toggle("text-success");
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
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <span className="input-group-text" id="basic-addon2">
                        Search
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default cartitems;
