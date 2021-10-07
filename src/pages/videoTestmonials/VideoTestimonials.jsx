import React from "react";

import "./videoTestimonials.scss";

import LeftBar from "../../components/leftbar/LeftBar";
import Img1 from "../../Images/Rectangle1.png";
import Img2 from "../../Images/Rectangle2.png";
import Img3 from "../../Images/Rectangle18909.png";

const VideoTestimonials = () => {
  return (
    <div className="videoTestimonials">
      <LeftBar />
      <div className="video">
        <iframe
          src="https://www.youtube.com/embed/3PwoGsWaro8"
          width="100%"
          height="100%"
          frameborder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="testimonials">
        <h1>TESTIMONIALS</h1>

        <div className="images">
          <div className="img-1">
            <img src={Img1} alt="" />
          </div>
          <div className="img-2">
            <img src={Img2} alt="" />
          </div>
          <div className="img-3">
            <img src={Img3} alt="" />
          </div>
          <div className="img-4">
            <img src={Img1} alt="" />
          </div>
          <div className="img-5">
            <div className="border border-top"></div>
            <div className="border border-left"></div>
            <div className="border border-bottom"></div>
            <div className="border border-right"></div>
            <img src={Img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonials;
