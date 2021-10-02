import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import "./blenderCarousel.scss";

const BlenderCarousel = () => {
  return (
    <div className="blenderCarousel">
      <h1>expertshub stands out</h1>

      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div className="border-top"></div>
          <div className="border-left"></div>
          <div className="border-bottom"></div>
          <div className="border-right"></div>
          <div className="swiper-slide active">
            <LanguageIcon className="icon" />
            <p>
              We use Intelligent, Interactive and Responsive LMS(Learning
              Management System), Gamified Classroom, Live Video Sessions,
              Assessment Engine, and Performance monitoring features. These
              features will enhance the learning
            </p>
          </div>
          <div class="swiper-slide">
            <LanguageIcon className="icon" />
            <p>
              We continuously work with industry experts to develop a
              cutting-edge training curriculum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlenderCarousel;
