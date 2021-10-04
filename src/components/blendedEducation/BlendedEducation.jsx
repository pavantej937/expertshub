import React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

import "./blendedEducation.scss";

const BlendedEducation = () => {
  return (
    <div className="blendedEducation">
      <div className="content">
        <h1 className="active">
          <DoubleArrowIcon />
          <span>blended Education</span>
        </h1>
        <h1>
          <DoubleArrowIcon />
          <span>industry vetted experiental programs</span>
        </h1>
        <h1>
          <DoubleArrowIcon />
          <span>project based learning</span>
        </h1>
        <h1>
          <DoubleArrowIcon />
          <span>training by experience industry professionals</span>
        </h1>
        <h1>
          <DoubleArrowIcon />
          <span>student to professional transition</span>
        </h1>
        <h1>
          <DoubleArrowIcon />
          <span>life skills training</span>
        </h1>
        <h1>
          <DoubleArrowIcon />
          <span>industry recognised certificate</span>
        </h1>
      </div>
    </div>
  );
};

export default BlendedEducation;
