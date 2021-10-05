import React from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./leftbar.scss";
import Logo from "../../Icons/Logo.svg";
import homeImg from "../../Icons/Home.svg";
import imgProfile from "../../Images/Rectangle18909.png";

const LeftBar = () => {
  return (
    <div className="leftbar">
      <Link to="/" className="link">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
      </Link>

      <div className="icons">
        <Link to="/">
          <div className="icon">
            <img src={Logo} alt="" />
            <h3>Home</h3>
          </div>
        </Link>

        <Link to="/education">
          <div className="icon">
            <img src={Logo} alt="" />
            <h3>Teaching</h3>
          </div>
        </Link>

        <div className="icon">
          <img src={Logo} alt="" />
          <h3>Carrer</h3>
        </div>
        <Link to="/testimonials">
          <div className="icon">
            <img src={Logo} alt="" />
            <h3>About US</h3>
          </div>
        </Link>
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
