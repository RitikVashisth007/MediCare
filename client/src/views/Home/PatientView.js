import React from "react";
import { useState } from "react/cjs/react.production.min";
import MakeAppointment from "../../components/MakeAppointment/BookAppointment";
import { Button, Col, Row, Typography } from "antd";

const { Title, Text } = Typography;

const PatientsView = ({ user }) => {
  const [appointmentModal, setAppointmentModal] = React.useState(false);
  return (
    <Col span={11}>
      <div className=" flex flex-col justify-center p-14 h-full -mt-9">
        <Title style={{ fontSize: 58 }}>
          Connecting Health and Care for a Better Future
        </Title>
        <Text>
          Bringing together healthcare providers and patients, Medicare fosters
          seamless communication and personalized care for a healthier future.
        </Text>
        <div className="mt-10 w-full">
          <Button
            style={{ borderRadius: 8 }}
            size="large"
            className="rounded"
            type="primary"
            onClick={() => setAppointmentModal(true)}
          >
            Book Appointment
          </Button>
        </div>
      </div>

      {appointmentModal && (
        <MakeAppointment
          isVisible={appointmentModal}
          setVisible={setAppointmentModal}
        />
      )}
    </Col>
  );
};

export default PatientsView;
