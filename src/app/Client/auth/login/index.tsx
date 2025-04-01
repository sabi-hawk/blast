import { Button, Col, Row } from "antd";
import LoginForm from "components/Forms/login";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

type LoginProps = {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
  providerId: string;
};

function Login({ setIsLogin, providerId }: LoginProps) {
  const navigate = useNavigate();

  return (
    <Row className="h-screen">
      
      <Col
        className="h-full bg-[#fafcfe] flex justify-center shadow-[0px_1px_3px_rgba(0,0,0,0.25)]"
        span={12}
      >
        <img
          className="h-full object-contain bg-cover"
          src="/assets/images/login.png"
          alt="Landing Page"
          width={650}
          height={433.2}
        />
      </Col>
    </Row>
  );
}

export default Login;
