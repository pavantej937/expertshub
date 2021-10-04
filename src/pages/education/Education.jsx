import React from "react";

import "./education.scss";
import LeftBar from "../../components/leftbar/LeftBar";
import BlendedEducation from "../../components/blendedEducation/BlendedEducation";
import BlenderCarousel from "../../components/blenderCarousel/BlenderCarousel";

const Education = () => {
  return (
    <div className="education">
      <LeftBar />
      <BlendedEducation />
      <BlenderCarousel />
    </div>
  );
};

export default Education;
