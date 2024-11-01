"use client";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import LoginImage from "../../assets/images/login.png";
import googleIcon from "../../assets/icons/social-google.png";
import facebookIcon from "../../assets/icons/social-fb.png";
import linkedInIcon from "../../assets/icons/social-linkedin.png";
import twitterIcon from "../../assets/icons/social-twitter.png";
import React from "react";
import LoginForm from "@/components/Forms/login";

function Login() {
  return (
    <Row className="h-screen">
      <Col className="flex flex-col justify-center items-center" span={12}>
        <div className="w-[70%]">
          <div className="mb-3">
            <h2 className="text-[26px] font-bold">Welcome to BLAST</h2>
            <p className="text-[16px] font-medium">
              Need an account?
              <a
                href="/signup"
                className="text-custom-blue no-underline hover:underline text-[16px] font-medium text-[#1677ff]"
              >
                {" "}
                Signup
              </a>
            </p>
          </div>
          <LoginForm />
        </div>

        <div className="flex items-center justify-center w-full text-center my-4">
          <span className="flex-1 border-b w-[50%] border-gray-300 mr-2 ml-[35px]"></span>
          <p className="text-[28px] font-medium p-0 px-5"> OR </p>
          <span className="flex-1 border-b w-[50%] border-gray-300 ml-2 mr-[35px]"></span>
        </div>
        <div className="flex justify-center gap-2.5 mt-2.5">
          <Button className="w-auto h-auto p-0 border-0">
            <Image src={googleIcon} alt="Google Icon" />
          </Button>
          <Button className="w-auto h-auto p-0 border-0">
            <Image src={facebookIcon} alt="Facebook Icon" />
          </Button>
          <Button className="w-auto h-auto p-0 border-0">
            <Image src={linkedInIcon} alt="LinkedIn Icon" />
          </Button>
          <Button className="w-auto h-auto p-0 border-0">
            <Image src={twitterIcon} alt="Twitter Icon" />
          </Button>
        </div>
      </Col>
      <Col
        className="h-full bg-[#fafcfe] flex justify-center shadow-[0px_1px_3px_rgba(0,0,0,0.25)]"
        span={12}
      >
        <Image
          className="h-full object-contain bg-cover"
          src={LoginImage}
          alt="Landing Page"
          width={650}
          height={433.2}
        />
      </Col>
    </Row>
  );
}

export default Login;
