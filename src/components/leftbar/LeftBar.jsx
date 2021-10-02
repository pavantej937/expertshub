import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./leftbar.scss";
import Logo from "../../Icons/Logo.svg";
import homeImg from "../../Icons/Home.svg";
import imgProfile from "../../Images/Rectangle18909.png";

const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <div className="icons">
        <div className="icon">
          <img src={Logo} alt="" />
          <h3>Home</h3>
        </div>

        <div className="icon">
          <img src={Logo} alt="" />
          <h3>About US</h3>
        </div>

        <div className="icon">
          <img src={Logo} alt="" />
          <h3>Teaching</h3>
        </div>

        <div className="icon">
          <img src={Logo} alt="" />
          <h3>Carrer</h3>
        </div>
      </div>

      <div className="profile">
        <img src={imgProfile} alt="" />

        <div className="profile_text">
          <h2>John</h2>
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
