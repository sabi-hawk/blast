import AppFooter from "@/components/LandingPage/AppFooter";
import AppHeader from "@/components/LandingPage/Appheader";
import MainBody from "@/components/LandingPage/MainBody";
import { Row } from "antd";
import "./index.scss";

export default function Home() {
  return (
    <Row className="landing-page-container">
      <AppHeader />
      <MainBody />
      <AppFooter />
    </Row>
  );
}
