import React from "react";
import Link from "next/link";
import { Button, Form, Input } from "antd";
import Image from "next/image";
import facebookIcon from "../../assets/images/LoginPage/facebookIcon.png";
import googleIcon from "../../assets/images/LoginPage/googleIcon.png";
import appleIcon from "../../assets/images/LoginPage/appleIcon.png";
import twitterIcon from "../../assets/images/LoginPage/twitterIcon.png";

interface LoginValues {
  email: string;
  password: string;
}

function LoginForm() {
  const [form] = Form.useForm();

  const onFinish = (values: LoginValues) => {
    handleLogin(values);
  };

  const handleLogin = async (values: LoginValues) => {
    console.log(values);
  };
  return (
    <Form
      form={form}
      onFinish={onFinish}
      className="px-4 py-5 px-md-5"
      style={{
        borderRadius: "0.35rem",
      }}
    >
      <div>
        <label className="bold">Username or email</label>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email",
            },
          ]}
        >
          <Input
            type="email"
            placeholder="Enter Email"
            className="bg-transparent form-control py-2"
          />
        </Form.Item>
      </div>
      <div>
        <label className="bold">Password</label>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
          ]}
        >
          <Input.Password
            placeholder="Enter Password"
            className="bg-transparent form-control py-2"
          />
        </Form.Item>
      </div>

      <div className="flex justify-between items-center mb-4 text-sm">
        <a href="#" className="text-custom-blue no-underline hover:underline">
          Forget password?
        </a>
      </div>
      <Link href="/dashboard">
        <Button
          className="w-[396px] h-[44px] rounded-[10px] font-roboto font-normal text-lg"
          type="primary"
        >
          Sign in
        </Button>
      </Link>
      <p>
        Don&apos;t have an account?
        <a
          href="/signUp"
          className="text-custom-blue no-underline hover:underline"
        >
          {" "}
          Sign Up
        </a>
      </p>

      <div className="flex items-center text-center my-4">
        <span className="flex-1 border-b border-gray-300 mr-2"></span>
        or
        <span className="flex-1 border-b border-gray-300 ml-2"></span>
      </div>
      <p className="flex justify-around">Sign in with</p>
      <div className="flex justify-center gap-2.5 mt-2.5">
        <Button className="w-12 h-8">
          <Image src={facebookIcon} alt="Facebook Icon" />
        </Button>
        <Button className="w-12 h-8">
          <Image src={googleIcon} alt="Google Icon" />
        </Button>
        <Button className="w-12 h-8">
          <Image src={appleIcon} alt="Apple Icon" />
        </Button>
        <Button className="w-12 h-8">
          <Image src={twitterIcon} alt="Twitter Icon" />
        </Button>
      </div>
    </Form>
  );
}

export default LoginForm;
