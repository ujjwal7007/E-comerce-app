import React from "react";
import Shopitems from "../components/shopitems";

const shop = () => {
  return (
    <>
      <section className="shop-banner p-2">
        <div className="container-xxl">
          <div className="row justify align-items-center">
            <div className="repair-details text-center p-5">
              <div>
                <h1 className="text-white">
                  <span className="text-info">
                    <b>#100%</b>
                  </span>{" "}
                  off on All Products
                </h1>
              </div>
              <div>
                <p className="text-white">Moke your orders we will deliver..</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-products">
        <div className="container-xxl">
          <div className="row">
            <Shopitems/>
          </div>
        </div>
      </section>
    </>
  );
};

export default shop;
