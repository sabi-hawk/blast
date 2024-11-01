import React from "react";
import Link from "next/link";
import { Button, Form, Input, Checkbox } from "antd";
import { EyeInvisibleOutlined, UserOutlined } from "@ant-design/icons";
interface LoginValues {
  username: string;
  password: string;
}

function LoginForm() {
  const [form] = Form.useForm();

  const handleLogin = async (values: LoginValues) => {
    console.log(values);
  };

  const onFinish = (values: LoginValues) => {
    handleLogin(values);
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

      <div className="flex items-center justify-between m-2">
        <Form.Item className="m-0" name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link href="/">Forgot Password?</Link>
      </div>
      <Link href="/dashboard">
        <Button
          className="w-full h-[44px] rounded-[10px] font-roboto font-normal text-lg"
          type="primary"
        >
          Login
        </Button>
      </Link>
    </Form>
  );
}

export default LoginForm;
