import React from "react";

const shop = () => {
  return (
    <>
      <section className="repair">
        <div className="container-xxl">
          <div className="row">
            <div className="repair-details text-center d-flex flex-column align-items-center p-3">
              <span className="text-white mt-5">Repair Services</span>
              <h2 className="text-white">
                On{" "}
                <span className="text-info">
                  <b>70%</b>
                </span>{" "}
                off on All Products And Accessories
              </h2>
              <div className="mt-3">
                <button className="button-repair">Explore Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default shop;
