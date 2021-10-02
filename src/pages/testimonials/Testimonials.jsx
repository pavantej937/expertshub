import React from "react";

import "./testimonials.scss";
import LeftBar from "../../components/leftbar/LeftBar";
import Comma from "../../Icons/comma.svg";
import TestimonialSlider from "../../components/testimonialSlider/TestimonialSlider";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <LeftBar />

      <div className="content">
        <h1>our students felt</h1>
        <img src={Comma} alt="" />
        <h2>Kashif Khavas</h2>
        <h4>Dr.Ambedkar insititute of Technology, Banglore</h4>
        <p>
          It does makes you industry ready...if you feel 8 days is a small
          window to cover all nope. The program is well structured and will
          cover all the necessary things always ready to help organisers &
          trainers... diverse crowd of students expertshub is a place where |
          found the true meaning of “fun at learning"... 8 days seemed less only
          because It was really interesting and in the end it was hard to leave
          the place, workshops, friends the trainers and organisers are real
          friendly they create a positive environment still missing the days it
          can never get boring :)
        </p>
      </div>

      <TestimonialSlider />
    </div>
  );
};

export default Testimonials;
