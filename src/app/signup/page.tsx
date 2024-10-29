"use client";
import { Col, Row } from "antd";
import Image from "next/image";
import mainPicture from "../../assets/images/LoginPage/mainPicture.jpg";
import SignUpForm from "@/components/Forms/signUp";

function SignUpPage() {
  return (
    <Row className="h-screen">
      <Col
        className=" bg-[#ededed] h-full flex items-center justify-end w-1/2"
        span={8}
      >
        <Image
          className="h-[475px] w-[400px] bg-[#ededed]"
          src={mainPicture}
          alt="Main Picture"
        />
      </Col>
      <Col className="flex justify-center items-center" span={16}>
        <div className="p-6 rounded-lg shadow-lg">
          <span className="flex justify-center">
            <h1 className="font-ubuntu text-[30px] font-semibold text-[#545455]">
              BLAST
            </h1>
          </span>
          <SignUpForm />
        </div>
      </Col>
    </Row>
  );
}

export default SignUpPage;
