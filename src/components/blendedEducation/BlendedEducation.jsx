import React, { useState } from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

import "./blendedEducation.scss";

const BlendedEducation = () => {
  const [id, setId] = useState(1);

  const handleActiveId = (id) => {
    setId(id);
  };

  return (
    <div className="blendedEducation">
      <div className="content">
        <h1
          className={id === 1 ? "active" : ""}
          onClick={() => handleActiveId(1)}
        >
          <DoubleArrowIcon />
          <span>blended Education</span>
        </h1>

        <h1
          className={id === 2 ? "active" : ""}
          onClick={() => handleActiveId(2)}
        >
          <DoubleArrowIcon className="icon" />
          <span>industry vetted experiental programs</span>
        </h1>

        <h1
          className={id === 3 ? "active" : ""}
          onClick={() => handleActiveId(3)}
        >
          <DoubleArrowIcon className="icon" />
          <span>project based learning</span>
        </h1>

        <h1
          className={id === 4 ? "active" : ""}
          onClick={() => handleActiveId(4)}
        >
          <DoubleArrowIcon className="icon" />
          <span>training by experience industry professionals</span>
        </h1>

        <h1
          className={id === 5 ? "active" : ""}
          onClick={() => handleActiveId(5)}
        >
          <DoubleArrowIcon className="icon" />
          <span>student to professional transition</span>
        </h1>

        <h1
          className={id === 6 ? "active" : ""}
          onClick={() => handleActiveId(6)}
        >
          <DoubleArrowIcon className="icon" />
          <span>life skills training</span>
        </h1>

        <h1
          className={id === 7 ? "active" : ""}
          onClick={() => handleActiveId(7)}
        >
          <DoubleArrowIcon className="icon" />
          <span>industry recognised certificate</span>
        </h1>
      </div>
    </div>
  );
};

export default BlendedEducation;
