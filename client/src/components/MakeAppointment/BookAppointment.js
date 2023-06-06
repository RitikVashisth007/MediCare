import {
  Card,
  Modal,
  Button,
  Divider,
  Typography,
  notification,
  Row,
  Col,
  Select,
  Form as AntForm,
} from "antd";
import React, { useEffect } from "react";
import { Formik, Field, Form as FormikForm } from "formik";
import * as Yup from "yup";
import { useMutation, useQuery } from "@apollo/client";
import HandleError from "../HandleError";
import _ from "lodash";
import FloaterInput from "../FloaterInput";
import { GET_ALL_DOCS } from "../../graphql/Query/Doctor/getAllDoctors";
import styles from "./styles.module.css";
import { CREATE_APPOINTMENT } from "../../graphql/Mutation/Appointment/createAppointment";

const { Text } = Typography;

const validationSchema = Yup.object().shape({
  full_name: Yup.string().max(50).required("Please enter your full name"),
  dob: Yup.string().required("Please enter your date of birth"),
  gender: Yup.string().required("Please select your gender"),
  address: Yup.string().required("Please enter your address"),
  allergies: Yup.string().max(200).required("Please enter your allergies"),
  concern: Yup.string().required("Please enter your concern"),
  doctor: Yup.string().required("Please select your doctor"),
});

const MakeAppointment = ({ isVisible, setVisible }) => {
  const [docList, setDocList] = React.useState([]);
  const [createAppointMent, { data, loading }] = useMutation(
    CREATE_APPOINTMENT,
    {
      onError: (error) => HandleError(error),
      onCompleted: (data) => {
        setVisible(false);
        notification["success"]({
          message: "Appointment Booked  ",
          descritpion: "Appointment Booked ",
        });
      },
      // refetchQueries: [GET_RESTAURANT],
    }
  );

  useQuery(GET_ALL_DOCS, {
    fetchPolicy: "cache-and-network",
    onCompleted: ({ getAllDoctors }) => {
      setDocList(getAllDoctors);
    },
  });

  const handleSubmit = (value) => {
    createAppointMent({
      variables: {
        input: { ...value },
      },
    });
  };
  const initialValues = {
    full_name: "",
    dob: "",
    gender: "",
    address: "",
    preExistingConditions: "",
    surgeries: "",
    allergies: "",
    medications: "",
    symptomsDescription: "",
    symptomsDuration: "",
    symptomsSeverity: "",
    concern: "",
    doctor: null,
  };

  return (
    <Modal
      visible={isVisible}
      onCancel={() => setVisible(false)}
      footer={null}
      width={800}
      maskStyle={{ background: "rgba(0,0,0,0.7)" }}
    >
      <Typography.Text
        style={{ fontSize: 24, color: "rgb(79, 79, 79)", fontWeight: "500" }}
      >
        Please enter details
      </Typography.Text>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        {({ submitCount, handleSubmit, values, setFieldValue, errors }) => {
          return (
            <FormikForm onSubmit={handleSubmit}>
              <div className="mb-2">
                <Text> Personal Information </Text>
                <Row className="mt-4">
                  <Col span={11}>
                    <Field
                      component={FloaterInput}
                      name="full_name"
                      label="Full Name"
                      placeholder="Full Name"
                      submitCount={submitCount}
                      hasFeedback
                      required={true}
                      size="large"
                    />

                    <Field
                      component={FloaterInput}
                      name="dob"
                      label="Date of Birth"
                      placeholder="Date of Birth"
                      submitCount={submitCount}
                      hasFeedback
                      required={true}
                      size="large"
                    />
                  </Col>

                  <Col span={11} offset={2}>
                    <Field
                      component={FloaterInput}
                      name="gender"
                      label="Gender"
                      placeholder="Gender"
                      submitCount={submitCount}
                      hasFeedback
                      required={true}
                      size="large"
                    />
                    <Field
                      component={FloaterInput}
                      name="address"
                      label="Address"
                      placeholder="Address"
                      submitCount={submitCount}
                      hasFeedback
                      required={true}
                      size="large"
                    />
                  </Col>
                </Row>
                <Text>Medical History</Text>
                <Row className="mt-4">
                  <Col span={11}>
                    <Field
                      component={FloaterInput}
                      name="preExistingConditions"
                      label="Pre-existing Med Cond"
                      submitCount={submitCount}
                      hasFeedback
                      required={true}
                      size="large"
                    />

                    <Field
                      component={FloaterInput}
                      name="surgeries"
                      label="Previous Surgeries"
                      placeholder="Previous Surgeries"
                      submitCount={submitCount}
                      hasFeedback
                      required={true}
                      size="large"
                    />
                  </Col>

                  <Col span={11} offset={2}>
                    <Field
                      component={FloaterInput}
                      name="allergies"
                      label="Allergies"
                      placeholder="Allergies"
                      submitCount={submitCount}
                      hasFeedback
                      required={true}
                      size="large"
                    />
                    <Field
                      component={FloaterInput}
                      name="medications"
                      label="Current Medications"
                      placeholder="Current Medications"
                      submitCount={submitCount}
                      hasFeedback
                      required={true}
                      size="large"
                    />
                  </Col>
                </Row>
                <Text>Symptoms</Text>
                <Row className="mt-4">
                  <Col span={11}>
                    <Field
                      component={FloaterInput}
                      name="concern"
                      label="Concern"
                      placeholder="Concern"
                      submitCount={submitCount}
                      hasFeedback
                      required={true}
                      size="large"
                    />
                    <Field
                      component={FloaterInput}
                      name="symptomsDescription"
                      label="Description of Symptoms"
                      placeholder="Description of Symptoms"
                      submitCount={submitCount}
                      hasFeedback
                      required={true}
                      size="large"
                    />
                  </Col>

                  <Col span={11} offset={2}>
                    <Field
                      component={FloaterInput}
                      name="symptomsDuration"
                      label="Duration of Symptoms"
                      placeholder="Duration of Symptoms"
                      submitCount={submitCount}
                      hasFeedback
                      required={true}
                      size="large"
                    />

                    <Field
                      component={FloaterInput}
                      name="symptomsSeverity"
                      label="Severity of Symptoms"
                      placeholder="Severity of Symptoms"
                      submitCount={submitCount}
                      hasFeedback
                      required={true}
                      size="large"
                    />
                  </Col>
                </Row>
                <Row>
                  <div className="flex flex-col ">
                    <Text className="mr-4">Please Select the Doctor</Text>
                    <Select
                      style={{ width: 344, marginTop: 14 }}
                      size="large"
                      value={values?.doctor}
                      onChange={(v, i) => setFieldValue("doctor", i.key)}
                      options={_.map(docList, (item) => {
                        return {
                          key: item._id,
                          value: `${item.full_name}(${item.specialization})  `,
                        };
                      })}
                      placeholder="Please Select the Doctor"
                    />

                    {errors?.doctor && (
                      <Text style={{ color: "red" }}>
                        Please select a doctor{" "}
                      </Text>
                    )}
                  </div>
                </Row>
              </div>
              <div className="flex flex-col mt-4 px-10 ">
                <Button
                  className={`w-full my-4 ml-1 outline-none border-none ${styles.blackNextButton}`}
                  type="primary"
                  size="large"
                  key="submit"
                  onClick={handleSubmit}
                  style={{ borderRadius: 8 }}
                >
                  Add Now
                </Button>
              </div>
            </FormikForm>
          );
        }}
      </Formik>
    </Modal>
  );
};

export default MakeAppointment;
