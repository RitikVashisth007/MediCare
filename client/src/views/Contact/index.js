import React from "react";
import { Typography, Row, Col, Descriptions } from "antd";
import ContactUsImg from "../../assets/contact.png";

const { Title } = Typography;

const ContactUs = () => {
  return (
    <div>
      <Row>
        <Col offset={2} span={10}>
          <img src={ContactUsImg} alt="Contact Us" />
        </Col>
        <Col span={12} style={{ padding: "50px" }}>
          <div>
            <Title level={2}>Contact Us</Title>
            <Descriptions title="Contact Details" column={1}>
              <Descriptions.Item label="Email">
                contact@medicare.com
              </Descriptions.Item>
              <Descriptions.Item label="Contact Number">
                +1 (123) 456-7890
              </Descriptions.Item>
              <Descriptions.Item label="Fax">
                +1 (123) 456-7891
              </Descriptions.Item>
              <Descriptions.Item label="Address">
                123 Medical Street, Cityville, Country - 12345
              </Descriptions.Item>
            </Descriptions>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
