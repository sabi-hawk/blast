import React from "react";
import MainPicture from "../../assets/images/MainPicture.jpg";
import Image from "next/image";
import { Button, Row } from "antd";
import "./index.scss";

function MainBody() {
  return (
    <Row className="main-body">
      <div className="col-1">
        <div className="content">
          <h3 className="">
            FINDING IT TOUGH TO LAUNCH YOUR EFFECTIVE EMAIL CAMPAIGNS?
          </h3>
          <h1 className="">Elevate Your Email Strategy With Blast</h1>
          <p className="">
            Discover a seamless way to organize, automate and analyze your email
            marketing efforts with blast, powerful tool designed to make email
            marketing simple and effective
          </p>
          <Button type="primary">Get Started</Button>
        </div>
      </div>
      <div className="col-2">
        <Image src={MainPicture} alt="MainPicture " />
      </div>
    </Row>
  );
}

export default MainBody;
