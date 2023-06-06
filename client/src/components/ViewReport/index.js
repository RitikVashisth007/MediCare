import { Modal, Typography, Row, Col, Input, Button, notification } from "antd";
import React from "react";
import _ from "lodash";
import styles from "./styles.module.css";
import { WRITE_PRESCRIPTION } from "../../graphql/Mutation/WritePrescription";
import { GET_APPOINTMENTS } from "../../graphql/Query/Appointments/getAppointment";
import HandleError from "../HandleError";
import { useMutation } from "@apollo/client";

const { Text } = Typography;

const ViewReport = ({ isVisible, setVisible, user, data }) => {
  const [prescriptionData, setPrescriptionData] = React.useState("");
  const renderField = (label, value) => {
    if (_.isEmpty(value)) {
      return null;
    }

    return (
      <Col style={{ marginTop: 24 }}>
        <Text strong>{label}:</Text>
        <div style={{ wordWrap: "break-word" }}>
          <Text>{value}</Text>
        </div>
      </Col>
    );
  };

  React.useEffect(() => {
    if (data?.prescription) {
      setPrescriptionData(data?.prescription);
    }
  }, [data]);

  const renderDataRows = () => {
    const fields = [
      { label: "Full Name", value: data.full_name },
      { label: "Date of Birth", value: data.dob },
      { label: "Gender", value: data.gender },
      { label: "Address", value: data.address },
      {
        label: "Pre-existing Medical Conditions",
        value: data.preExistingConditions,
      },
      { label: "Previous Surgeries or Procedures", value: data.surgeries },
      { label: "Allergies", value: data.allergies },
      { label: "Current Medications", value: data.medications },
      { label: "Description of Symptoms", value: data.symptomsDescription },
      { label: "Duration of Symptoms", value: data.symptomsDuration },
      { label: "Severity of Symptoms", value: data.symptomsSeverity },
      { label: "Concern", value: data.concern },
    ];

    const rows = [];

    for (let i = 0; i < fields.length; i += 3) {
      const rowData = fields.slice(i, i + 3);

      const row = (
        <Row gutter={16} key={`row-${i}`}>
          {rowData.map(({ label, value }, index) => (
            <Col span={8} key={`col-${i}-${index}`}>
              {renderField(label, value)}
            </Col>
          ))}
        </Row>
      );

      rows.push(row);
    }

    return rows;
  };

  const [writePrescription, { loading }] = useMutation(WRITE_PRESCRIPTION, {
    onError: (error) => HandleError(error),
    onCompleted: (data) => {
      setVisible(false);
      notification["success"]({
        message: "Prescription written  ",
        descritpion: "Done",
      });
    },
    refetchQueries: [GET_APPOINTMENTS],
  });

  const handleSubmit = () => {
    writePrescription({
      variables: {
        input: { appointmentId: data._id, prescription: prescriptionData },
      },
    });
  };

  return (
    <Modal
      visible={isVisible}
      onCancel={() => setVisible(false)}
      footer={null}
      width={1000}
      maskStyle={{ background: "rgba(0, 0, 0, 0.7)" }}
    >
      <div style={{ padding: "20px" }}>{renderDataRows()}</div>
      {user?.role == "doctor" ? (
        <div className="m-auto" style={{ width: "90%" }}>
          <Input.TextArea
            placeholder="write you prescription here based on report"
            value={prescriptionData}
            onChange={(v) => setPrescriptionData(v.target?.value)}
          />
          <Button
            className={`w-full my-4 ml-1 outline-none border-none ${styles.blackNextButton}`}
            type="primary"
            size="large"
            key="submit"
            style={{ borderRadius: 8 }}
            onClick={handleSubmit}
            loading={loading}
          >
            Submit
          </Button>
        </div>
      ) : prescriptionData ? (
        <div
          className="m-auto p-4 rounded bg-slate-200"
          style={{ width: "90%" }}
        >
          <Text className="text-base">{prescriptionData}</Text>
        </div>
      ) : (
        <Text className="mt-6 ml-4" strong>
          {" "}
          Please Wait Doctor haven't checked the report yet, Thank You
        </Text>
      )}
    </Modal>
  );
};

export default ViewReport;
