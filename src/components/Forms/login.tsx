import React from "react";
import Link from "next/link";
import { Button, Form, Input, Checkbox, message } from "antd";
import { EyeInvisibleOutlined, UserOutlined } from "@ant-design/icons";
import { login } from "@/api/auth"; // Import the login API
import { useRouter } from "next/navigation";

interface LoginValues {
  email: string;
  password: string;
}

function LoginForm() {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage(); // Ant Design message context
  const router = useRouter();
  const handleLogin = async (values: LoginValues) => {
    try {
      // Call the login API
      const { status, data } = await login(values);
      if (status === 200) {
        messageApi.success(data.message); // Show success message
        // Redirect to dashboard or desired page
        // window.location.href = "/dashboard";
        router.push("/dashboard");
      } else {
        throw new Error(data.message || "Login failed");
      }
    } catch (error: any) {
      messageApi.error(error.message || "An error occurred during login"); // Show error message
    }
  };

  const onFinish = (values: LoginValues) => {
    handleLogin(values);
  };

  return (
    <>
      {contextHolder}
      <Form
        form={form}
        onFinish={onFinish}
        style={{
          borderRadius: "0.35rem",
        }}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email",
            },
            {
              type: "email",
              message: "Please enter a valid email address",
            },
          ]}
        >
          <Input
            suffix={<UserOutlined />}
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

        <div className="flex items-center justify-between m-2">
          <Form.Item className="m-0" name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Link href="/">Forgot Password?</Link>
        </div>

        <Button
          className="w-full h-[44px] rounded-[10px] font-roboto font-normal text-lg"
          type="primary"
          htmlType="submit"
        >
          Login
        </Button>
      </Form>
    </>
  );
}

export default LoginForm;
