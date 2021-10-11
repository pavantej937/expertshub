import React, { useState } from "react";

import "./videoTestimonials.scss";

import LeftBar from "../../components/leftbar/LeftBar";
import Img1 from "../../Images/Rectangle1.png";
import Img2 from "../../Images/Rectangle2.png";
import Img3 from "../../Images/Rectangle18909.png";

const VideoTestimonials = () => {
  const [videoLink, setvideoLink] = useState(
    "https://www.youtube.com/embed/3PwoGsWaro8"
  );

  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);
  const [img4, setImg4] = useState(false);
  const [img5, setImg5] = useState(true);

  const handleImg1 = () => {
    setImg1(true);
    setImg2(false);
    setImg3(false);
    setImg4(false);
    setImg5(false);
    setvideoLink("https://www.youtube.com/embed/f-SWflgazeI");
  };

  const handleImg2 = () => {
    setImg2(true);
    setImg1(false);
    setImg3(false);
    setImg4(false);
    setImg5(false);
    setvideoLink("https://www.youtube.com/embed/RntdcaF-eFk");
  };

  const handleImg3 = () => {
    setImg3(true);
    setImg1(false);
    setImg2(false);
    setImg4(false);
    setImg5(false);
    setvideoLink("https://www.youtube.com/embed/H26_Va2qv2I");
  };

  const handleImg4 = () => {
    setImg4(true);
    setImg1(false);
    setImg2(false);
    setImg3(false);
    setImg5(false);
    setvideoLink("https://www.youtube.com/embed/vyQC7KsVXyw");
  };
  const handleImg5 = () => {
    setImg5(true);
    setImg1(false);
    setImg2(false);
    setImg3(false);
    setImg4(false);
    setvideoLink("https://www.youtube.com/embed/3PwoGsWaro8");
  };
  return (
    <div className="videoTestimonials">
      <LeftBar />
      <div className="video">
        <iframe
          src={videoLink}
          width="100%"
          height="100%"
          frameborder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="testimonials">
        <h1>TESTIMONIALS</h1>

        <div className="images">
          <div className="img-1" onClick={handleImg1}>
            {img1 && (
              <>
                <div className="border border-top"></div>
                <div className="border border-left"></div>
                <div className="border border-bottom"></div>
                <div className="border border-right"></div>
              </>
            )}
            <img src={Img1} alt="" />
          </div>
          <div className="img-2" onClick={handleImg2}>
            {img2 && (
              <>
                <div className="border border-top"></div>
                <div className="border border-left"></div>
                <div className="border border-bottom"></div>
                <div className="border border-right"></div>
              </>
            )}
            <img src={Img2} alt="" />
          </div>
          <div className="img-3" onClick={handleImg3}>
            {img3 && (
              <>
                <div className="border border-top"></div>
                <div className="border border-left"></div>
                <div className="border border-bottom"></div>
                <div className="border border-right"></div>
              </>
            )}
            <img src={Img3} alt="" />
          </div>
          <div className="img-4" onClick={handleImg4}>
            {img4 && (
              <>
                <div className="border border-top"></div>
                <div className="border border-left"></div>
                <div className="border border-bottom"></div>
                <div className="border border-right"></div>
              </>
            )}
            <img src={Img1} alt="" />
          </div>
          <div className="img-5" onClick={handleImg5}>
            {img5 && (
              <>
                <div className="border border-top"></div>
                <div className="border border-left"></div>
                <div className="border border-bottom"></div>
                <div className="border border-right"></div>
              </>
            )}
            <img src={Img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonials;
