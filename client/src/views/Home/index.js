import { Button, Col, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import Hero from "../../assets/hero.jpg";
import DoctorView from "./DoctorView";
import PatientsView from "./PatientView";

const HomeView = ({ user }) => {
  return (
    <Row>
      {user?.role == "doctor" ? (
        <DoctorView user={user} />
      ) : (
        <PatientsView user={user} />
      )}

      <Col span={user?.role == "doctor" ? 11 : 13}>
        <img src={Hero} />
      </Col>
    </Row>
  );
};

export default HomeView;
