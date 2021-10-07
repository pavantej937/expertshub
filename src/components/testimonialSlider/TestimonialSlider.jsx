import React, { useRef, useEffect, useState } from "react";

import "./testimonialSlide.scss";
import Img1 from "../../Images/Rectangle1.png";
import Img2 from "../../Images/Rectangle2.png";
import Img3 from "../../Images/Rectangle18909.png";

const TestimonialSlider = () => {
  const prevImgRef = useRef();
  const activeImgRef = useRef();
  const nextImgRef = useRef();

  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(true);
  const [img3, setImg3] = useState(false);

  const handleImg1 = () => {
    setImg1(true);
    setImg3(false);
    setImg2(false);
  };
  const handleImg2 = () => {
    setImg1(false);
    setImg3(false);
  };
  const handleImg3 = () => {
    setImg3(true);
    setImg1(false);
    setImg2(false);
  };

  return (
    <div className="slider">
      <div
        className={img1 ? "img active-img" : "img prev-img"}
        ref={prevImgRef}
        onClick={handleImg1}
      >
        {img1 && (
          <>
            <div className="border border-top"></div>
            <div className="border border-left"></div>
            <div className="border border-bottom"></div>
            <div className="border border-right"></div>
          </>
        )}
        <img src={Img3} alt="" />
      </div>

      <div
        className={
          img3 ? "img prev-img" : img1 ? "img next-img" : "img active-img"
        }
        onClick={handleImg2}
        ref={activeImgRef}
      >
        <div className="border border-top"></div>
        <div className="border border-left"></div>
        <div className="border border-bottom"></div>
        <div className="border border-right"></div>

        <img src={Img2} alt="" />
      </div>

      <div
        className={
          img3 ? "img active-img" : img1 ? "img after-next-img" : "img next-img"
        }
        ref={nextImgRef}
        onClick={handleImg3}
      >
        {img3 && (
          <>
            <div className="border border-top"></div>
            <div className="border border-left"></div>
            <div className="border border-bottom"></div>
            <div className="border border-right"></div>
          </>
        )}
        <img src={Img1} alt="" />
      </div>
    </div>
  );
};

export default TestimonialSlider;
