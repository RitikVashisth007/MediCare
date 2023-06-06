import React from "react";
import { Typography, Row, Col } from "antd";
import AboutImg from "../../assets/about.png";

const { Title, Text } = Typography;

const About = () => {
  return (
    <div>
      <Row>
        <Col offset={2} span={10}>
          <img src={AboutImg} />
        </Col>
        <Col span={12} style={{ padding: "50px" }}>
          <div>
            <Title level={2}>About Medicare</Title>
            <Text>
              Medicare is a platform that enables patients to make appointments
              with doctors and receive personalized care. Our mission is to
              connect healthcare providers and patients, fostering seamless
              communication and improving healthcare outcomes.
            </Text>
            <Text>
              With Medicare, patients can easily schedule appointments with
              their preferred doctors, eliminating the hassle of traditional
              appointment booking. Our platform ensures that patients receive
              timely and efficient healthcare services.
            </Text>
            <Text>
              Our doctors use Medicare to provide high-quality care to their
              patients. After each appointment, doctors can write prescriptions
              based on the patient's medical reports and concerns. This ensures
              accurate and personalized treatment plans for every individual.
            </Text>
            <Text>
              We strive to create a better future by bridging the gap between
              health and care. Join Medicare today and experience the benefits
              of seamless healthcare communication and personalized care.
            </Text>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
