import React from "react";

import "./testimonialSlide.scss";
import Img1 from "../../Images/Rectangle1.png";
import Img2 from "../../Images/Rectangle2.png";
import Img3 from "../../Images/Rectangle18909.png";

const TestimonialSlider = () => {
  return (
    <div className="slider">
      <div className="border-top"></div>
      <div className="border-left"></div>
      <div className="border-bottom"></div>
      <div className="border-right"></div>
      <div className="img-1">
        <img src={Img3} alt="" />
      </div>
      <div className="img-2">
        <img src={Img2} alt="" />
      </div>
      <div className="img-3">
        <img src={Img1} alt="" />
      </div>
    </div>
  );
};

export default TestimonialSlider;
