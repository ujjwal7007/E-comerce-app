import React from "react";
import { PRODUCTS } from "./products";

const featuredProducts = () => {
  return (
    <>
      <div className="row mt-4">
        {PRODUCTS.slice(2, 6).map((product) => (
          <div className="col-3 p-3">
            <div key={product.id}>
              <div className="card h-100 m-auto p-2">
                <img
                  src={product.image}
                  alt=""
                  className="card-img-top img-fluid m-auto"
                />
                <div className="card-details">
                  <div className="title mb-2">
                    <span>{product.brand}</span>
                    <h6 className="mt-2">{product.name}</h6>
                  </div>
                  <div className="card-footer text-center">
                    <p className="mb-3">{product.status}</p>
                    <p><strike className="text-danger">{product.rate}</strike></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default featuredProducts;
