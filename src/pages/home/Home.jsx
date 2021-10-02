import React from "react";

import "./home.scss";
import LeftBar from "../../components/leftbar/LeftBar";
import HomeImg from "../../Images/HomeImg.png";

const Home = () => {
  return (
    <div className="home">
      <div className="leftBar">
        <LeftBar />
      </div>
      <div className="content">
        <img src={HomeImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
