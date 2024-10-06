import React from "react";
import { Button, Row } from "antd";
import Link from "next/link";
import logo from "../../assets/images/logo.png";
import Image from "next/image";

function AppHeader() {
  return (
    <Row className="header">
      <div className="logo-container">
        <Image src={logo} alt="MainPicture " height={50} width={50} />
        <h1>BLAST </h1>
      </div>
      <nav>
        <ul className="nav-links">
          <p>
            <a href="#about">About</a>
          </p>
          <p>
            <a href="#features">Features</a>
          </p>
          <p>
            <a href="#contact">Contact Us</a>
          </p>
        </ul>
      </nav>
      <div className="btn-wrap">
        <Link href="/signup">
          <Button>Create Account</Button>
        </Link>
        <Link href="/login">
          <Button type="primary">Login</Button>
        </Link>
      </div>
    </Row>
  );
}

export default AppHeader;
