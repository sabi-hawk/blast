import React from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import {
  EyeInvisibleOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
interface SignUpValues {
  username: string;
  email: string;
  password: string;
}

function SignUpForm() {
  const [form] = Form.useForm();

  const handleSignUp = async (values: SignUpValues) => {
    console.log(values);
  };

  const onFinish = (values: SignUpValues) => {
    handleSignUp(values);
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      style={{
        borderRadius: "0.35rem",
      }}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please enter your username",
          },
        ]}
      >
        <Input
          suffix={<UserOutlined />}
          type="text"
          placeholder="Username*"
          className="bg-transparent form-control py-2"
        />
      </Form.Item>

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
          suffix={<MailOutlined />}
          type="email"
          placeholder="Email*"
          className="bg-transparent form-control py-2"
        />
      </Form.Item>

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
          suffix={<EyeInvisibleOutlined />}
          placeholder="Password*"
          className="bg-transparent form-control py-2"
        />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "Please enter confirm password",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The confirm password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password
          suffix={<EyeInvisibleOutlined />}
          placeholder="Confirm Password*"
          className="bg-transparent form-control py-2"
        />
      </Form.Item>

      <p className="text-[16px] font-medium mb-2">
        Already registered?
        <a
          href="/login"
          className="text-custom-blue no-underline hover:underline text-[16px] font-medium text-[#1677ff]"
        >
          {" "}
          Login
        </a>
      </p>

      <Link href="/dashboard">
        <Button
          className="w-full h-[44px] rounded-[10px] font-roboto font-normal text-lg"
          type="primary"
        >
          Register
        </Button>
      </Link>
    </Form>
  );
}

export default SignUpForm;
