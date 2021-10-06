import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Modal from "react-modal";
import CancelIcon from "@mui/icons-material/Cancel";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

import "./leftbar.scss";
import "./modal.scss";

import Logo from "../../Icons/Logo.svg";

import homeImg from "../../Icons/homeImg.svg";
import Login from "../../Icons/Login.svg";
import imgProfile from "../../Images/Rectangle18909.png";

const customStyles = {
  content: {
    top: "0",
    left: "50%",
    right: "0",
    bottom: "0",
  },
};

Modal.setAppElement("#root");

const LeftBar = () => {
  const loginref = useRef();
  const otpref = useRef();
  const successref = useRef();
  const [phoneNo, setPhoneNo] = useState("");
  const [otp, setotp] = useState("");

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleInput = (e) => {
    setPhoneNo(e.target.value);
  };
  const handleOtp = (e) => {
    setotp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(phoneNo);
    loginref.current.style.display = "none";
    otpref.current.style.display = "block";
    successref.current.style.display = "none";
  };
  const handleSubmitOtp = (e) => {
    e.preventDefault();
    alert(otp);
    loginref.current.style.display = "none";
    otpref.current.style.display = "none";
    successref.current.style.display = "block";
  };

  return (
    <div className="leftbar">
      <Link to="/" className="link">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
      </Link>

      <div className="icons">
        <Link to="/" className="link">
          <div className="icon">
            <img src={Logo} alt="" />
            <h3>Home</h3>
          </div>
        </Link>

        <Link to="/education" className="link">
          <div className="icon">
            <img src={Login} alt="" />
            <h3>Teaching</h3>
          </div>
        </Link>

        <div className="icon">
          <img src={Logo} alt="" />
          <h3>Carrer</h3>
        </div>

        <Link to="/testimonials" className="link">
          <div className="icon">
            <img src={Logo} alt="" />
            <h3>About US</h3>
          </div>
        </Link>
      </div>

      <div className="profile" onClick={() => setIsOpen(true)}>
        <img src={imgProfile} alt="" />

        <div className="profile_text">
          <h2>John</h2>
          <ExpandMoreIcon />
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="yourAppElement "
      >
        <button onClick={closeModal} className="modal-cross">
          <CancelIcon className="cross" />
        </button>
        <div className="login" ref={loginref}>
          <div className="modal-logo">
            <img src={Logo} alt="" />
          </div>
          <h2 className="modal-heading">
            Enter your mobile number to start learning
          </h2>

          <form className="modal-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Phone Number *"
              className="modal-input"
              onChange={handleInput}
              required
            />
            <button
              className={
                !phoneNo ? `modal-submit` : `modal-submit modal-submit-active`
              }
            >
              Continue
            </button>
          </form>

          <div className="modal-subHeading">
            <div className="left-line"></div>
            <h3>or login with</h3>
            <div className="right-line"></div>
          </div>

          <div className="modal-buttons">
            <button className="fb-btn">
              <FacebookIcon className="social-icon" />
              facebook
            </button>
            <button className="go-btn">
              <GoogleIcon className="social-icon" />
              Goggle
            </button>
          </div>
        </div>
        <div className="otp" ref={otpref}>
          <div className="modal-logo">
            <img src={Logo} alt="" />
          </div>
          <h2 className="modal-heading">Enter your OTP</h2>

          <form className="modal-form" onSubmit={handleSubmitOtp}>
            <input
              type="text"
              placeholder="OTP *"
              className="modal-input"
              onChange={handleOtp}
              required
            />
            <button
              className={
                !phoneNo ? `modal-submit` : `modal-submit modal-submit-active`
              }
            >
              Continue
            </button>
          </form>

          <div className="modal-subHeading">
            <div className="left-line"></div>
            <h3>or login with</h3>
            <div className="right-line"></div>
          </div>

          <div className="modal-buttons">
            <button className="fb-btn">
              <FacebookIcon className="social-icon" />
              facebook
            </button>
            <button className="go-btn">
              <GoogleIcon className="social-icon" />
              Goggle
            </button>
          </div>
        </div>

        <div className="success" ref={successref}>
          <h1>Login Successfull</h1>
        </div>
      </Modal>
    </div>
  );
};

export default LeftBar;
