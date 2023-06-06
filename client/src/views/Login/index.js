import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Button, Col, Layout, Row, Typography } from "antd";
import OnboardingSvg from "../../assets/login.svg";
import Login from "./Login";
import Register from "./Register";

const LoginPage = () => {
  const [view, setView] = useState("login");
  useEffect(() => {
    const token = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;
    if (token) {
      localStorage.removeItem("userInfo");
    }
  }, []);

  const OnBoardingView = () => {
    if (view == "login") return <Login setView={setView} />;
    if (view == "register") return <Register setView={setView} />;
  };

  return (
    <div>
      <Layout className="flex justify-center min-h-screen">
        <Row style={{ height: "100vh" }} className="bg-white">
          <Col xs={24} sm={24} md={12} className="bg-white flex">
            <OnBoardingView />
          </Col>
          <Col xs={0} sm={0} md={12} className="m-auto p-5">
            <div className=" rounded-xl" style={{ height: "92vh" }}>
              <img
                src={OnboardingSvg}
                style={{ minHeight: "80vh" }}
                className="p-5"
              />
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default LoginPage;
