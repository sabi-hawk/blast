import { Button, Col, Row } from "antd";
import LoginForm from "components/Forms/login";

function Login() {
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
