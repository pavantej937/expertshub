import React from "react";

import "./testimonialSlide.scss";
import Img1 from "../../Images/Rectangle1.png";
import Img2 from "../../Images/Rectangle2.png";
import Img3 from "../../Images/Rectangle18909.png";

const TestimonialSlider = () => {
  return (
    <div className="slider">
      <div className="img prev-img">
        <img src={Img3} alt="" />
      </div>

      <div className="img active-img">
        <div className="border border-top"></div>
        <div className="border border-left"></div>
        <div className="border border-bottom"></div>
        <div className="border border-right"></div>

        <img src={Img2} alt="" />
      </div>

      <div className="img next-img">
        <img src={Img1} alt="" />
      </div>
    </div>
  );
};

export default TestimonialSlider;
