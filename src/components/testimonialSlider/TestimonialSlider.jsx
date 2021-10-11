import React, { useRef, useState } from "react";

import "./testimonialSlide.scss";
import Img1 from "../../Images/Rectangle1.png";
import Img2 from "../../Images/Rectangle2.png";
import Img3 from "../../Images/Rectangle18909.png";

const TestimonialSlider = ({ getId }) => {
  const prevImgRef = useRef();
  const activeImgRef = useRef();
  const nextImgRef = useRef();
  const img4Ref = useRef();

  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(true);
  const [img3, setImg3] = useState(false);
  const [img4, setImg4] = useState(false);
  const [img5, setImg5] = useState(false);

  const handleImg1 = () => {
    setImg1(true);
    setImg2(false);
    setImg3(false);
    setImg4(false);
    setImg5(false);

    getId(1);
  };
  const handleImg2 = () => {
    setImg1(false);
    setImg3(false);
    setImg4(false);
    getId(2);
  };
  const handleImg3 = () => {
    setImg3(true);
    setImg1(false);
    setImg2(false);
    setImg4(false);
    setImg5(false);
    getId(3);
  };
  const handleImg4 = () => {
    setImg4(true);
    setImg1(false);
    setImg2(false);
    setImg3(false);
    setImg5(false);
    getId(4);
  };
  const handleImg5 = () => {
    setImg5(true);
    setImg1(false);
    setImg2(false);
    setImg3(false);
    setImg4(false);
    getId(5);
  };

  return (
    <div className="slider">
      <div
        className={
          img5
            ? "prev-img"
            : img4
            ? "prev-img"
            : img1
            ? "img active-img"
            : "img prev-img"
        }
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
          img5
            ? "prev-img"
            : img4
            ? "prev-img"
            : img3
            ? "img prev-img"
            : img1
            ? "img next-img"
            : "img active-img"
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
          img5
            ? "prev-img"
            : img4
            ? "prev-img"
            : img3
            ? "img active-img"
            : img1
            ? "img after-next-img"
            : "img next-img"
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

      <div
        ref={img4Ref}
        className={
          img5
            ? "prev-img"
            : img4
            ? "active-img"
            : img3
            ? "next-img"
            : "after-next-img"
        }
        onClick={handleImg4}
      >
        {img4 && (
          <>
            <div className="border border-top"></div>
            <div className="border border-left"></div>
            <div className="border border-bottom"></div>
            <div className="border border-right"></div>
          </>
        )}
        <img src={"https://source.unsplash.com/1600x1800/?nature,water"} alt="" />
      </div>
      <div
        className={img5 ? "active-img" : img4 ? "next-img" : "after-next-img"}
        onClick={handleImg5}
      >
        {img5 && (
          <>
            <div className="border border-top"></div>
            <div className="border border-left"></div>
            <div className="border border-bottom"></div>
            <div className="border border-right"></div>
          </>
        )}
        <img src="https://source.unsplash.com/1600x1800/?nature,water" alt="" />
      </div>
    </div>
  );
};

export default TestimonialSlider;
