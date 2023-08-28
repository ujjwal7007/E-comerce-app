import React from "react";
import blog1 from "../assets/images/blog/blog-1.jpg";
import blog2 from "../assets/images/blog/blog-2.jpg";
import blog3 from "../assets/images/blog/blog-3.jpg";
import blog4 from "../assets/images/blog/blog-4.jpg";

const blogs = () => {
  return (
    <>
      <div className="col-3">
        <div className="card">
          <img src={blog1} alt="" className="card-img-top img-fluid mb-3 p-3" />
          <div className="card-body">
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              magni dicta iste id vero. Ipsa minus, a omnis repudiandae.
            </p>
            <button className="button-blog">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default blogs;
