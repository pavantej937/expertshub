import React, { useState } from "react";

import "./testimonials.scss";
import LeftBar from "../../components/leftbar/LeftBar";
import Comma from "../../Icons/comma.svg";
import TestimonialSlider from "../../components/testimonialSlider/TestimonialSlider";

const Testimonials = () => {
  const [idImage, setidImage] = useState(2);
  return (
    <div className="testimonials">
      <LeftBar />
      {idImage === 1 && (
        <div className="content">
          <h1>our students felt</h1>
          <img src={Comma} alt="" />
          <h2>Shankey</h2>
          <h4>AKTU, Banglore</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.)
          </p>
        </div>
      )}
      {idImage === 2 && (
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
            found the true meaning of “fun at learning"... 8 days seemed less
            only because It was really interesting and in the end it was hard to
            leave the place, workshops, friends the trainers and organisers are
            real friendly they create a positive environment still missing the
            days it can never get boring :)
          </p>
        </div>
      )}
      {idImage === 3 && (
        <div className="content">
          <h1>our students felt</h1>
          <img src={Comma} alt="" />
          <h2>Vansh</h2>
          <h4>College, Mumbai</h4>
          <p>
            cover all the necessary things always ready to help organisers &
            trainers... diverse crowd of students expertshub is a place where |
            found the true meaning of “fun at learning"... 8 days seemed less
            only because It was really interesting and in the end it was he
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or
            non-characteristic words etc.)
          </p>
        </div>
      )}
      {idImage === 4 && (
        <div className="content">
          <h1>our students felt</h1>
          <img src={Comma} alt="" />
          <h2>Lorem ipsum</h2>
          <h4>College, Mumbai</h4>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to nternet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or
            non-characteristic words etc.)
          </p>
        </div>
      )}
      {idImage === 5 && (
        <div className="content">
          <h1>our students felt</h1>
          <img src={Comma} alt="" />
          <h2>5th image</h2>
          <h4>College, Mumbai</h4>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to nternet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or
            non-characteristic words etc.)
          </p>
        </div>
      )}

      <TestimonialSlider
        getId={(id) => {
          setidImage(id);
        }}
      />
    </div>
  );
};

export default Testimonials;
