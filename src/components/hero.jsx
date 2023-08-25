import React from "react";
import icon1 from "../assets/images/icons/icon1.png"
import icon2 from "../assets/images/icons/icon2.png"
import icon3 from "../assets/images/icons/icon3.png"
import icon4 from "../assets/images/icons/icon4.png"
import icon5 from "../assets/images/icons/icon5.png"
import icon6 from "../assets/images/icons/icon6.png"

const hero = () => {
  return (
    <>
      <section className="hero p-5">
        <div className="container-xxl">
            <div className="row">
                <div className="hero-details d-flex justify-content-around">
                    <div>
                        <img src={icon1} alt=""/>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default hero;
