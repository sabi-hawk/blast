"use client";

import { Button } from "antd";
import "./index.scss";
import Image from "next/image";
import facebookIcon from "../../assets/images/LoginPage/facebookIcon.png";
import googleIcon from "../../assets/images/LoginPage/googleIcon.png";
import appleIcon from "../../assets/images/LoginPage/appleIcon.png";
import twitterIcon from "../../assets/images/LoginPage/twitterIcon.png";
import mainPicture from "../../assets/images/LoginPage/mainPicture.jpg";
import emailIcon from "../../assets/images/LoginPage/emailIcon.png";
import hideIcon from "../../assets/images/LoginPage/hideIcon.png";
import eyeIcon from "../../assets/images/LoginPage/eyeIcon.png";

import React, { useState } from "react";
import Link from "next/link";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    //add login logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="main-form">
      <div className="col-1">
        <Image src={mainPicture} alt="Main Picture" />
      </div>
      <div className="col-2">
        <div className="formWrapper">
          <h1 className="LogoFont">BLAST</h1>
          <form onSubmit={handleLogin}>
            <p>Username or email </p>

            <div className="inputGroup">
              <input
                className="inputStyle"
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Image src={emailIcon} alt="Email Icon" className="input-icon" />
            </div>

            <p>Password</p>

            <div className="inputGroup">
              <input
                className="inputStyle"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="icon password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Image
                    src={eyeIcon}
                    alt="Eye Icon"
                    className="input-icon"
                    width={20}
                    height={20}
                  />
                ) : (
                  <Image
                    src={hideIcon}
                    alt="Hide Icon"
                    className="input-icon"
                    width={20}
                    height={20}
                  />
                )}
              </span>
            </div>

            <div className="options">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <a href="#" className="forgot-password">
                Forget password?
              </a>
            </div>
            <Link href="/dashboard">
              <Button className="Sign-in-button" type="primary">
                Sign in
              </Button>
            </Link>
            <p>
              Don't have an account?
              <a href="/signUp" className="sign-up-link">
                Sign Up
              </a>
            </p>

            <div className="divider">or</div>
            <p className="sign-in-options">Sign in with</p>

            <div className="social-sign-in">
              <Button className="facebook">
                <Image src={facebookIcon} alt="Facebook Icon" />
              </Button>
              <Button className="google">
                <Image src={googleIcon} alt="Google Icon" />
              </Button>
              <Button className="apple">
                <Image src={appleIcon} alt="Apple Icon" />
              </Button>
              <Button className="x">
                <Image src={twitterIcon} alt="Twitter Icon" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
