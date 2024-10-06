import React from "react";
import emailIcon from "../../assets/images/tracking.png";
import successIcon from "../../assets/images/success.png";
import deliveryIcon from "../../assets/images/email-delivery.png";
import personalizedIcon from "../../assets/images/personalization.png";
import Image from "next/image";
import { Row } from "antd";

function AppFooter() {
  return (
    <Row className="footer">
      <div className="item">
        <Image src={emailIcon} alt="Email Tracking" width={30} height={30} />
        <span>Real-Time Email Tracking</span>
      </div>
      <div className="item">
        <Image src={successIcon} alt="Success Rate" width={30} height={30} />
        <span>100% Success Rate</span>
      </div>
      <div className="item">
        <Image
          src={deliveryIcon}
          alt="Guaranteed Delivery "
          width={30}
          height={30}
        />
        <span>Guaranteed Email Delivery</span>
      </div>
      <div className="item">
        <Image
          src={personalizedIcon}
          alt="Personalized Emailing "
          width={30}
          height={30}
        />
        <span>Personalized Emailing</span>
      </div>
    </Row>
  );
}

export default AppFooter;
