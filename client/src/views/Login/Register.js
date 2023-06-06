import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import {
  Button,
  Divider,
  Radio,
  Typography,
  Form as AntForm,
  Select,
} from "antd";
import _ from "lodash";
import { validationRegisterSchema } from "./validationSchema";
import FloaterInput from "../../components/FloaterInput";

import styles from "./styles.module.css";
import { REGISTER } from "../../graphql/Mutation/Register";
import { useMutation } from "@apollo/client";
import Cookies from "js-cookie";
import Logo from "../../assets/logo.png";
import HandleError from "../../components/HandleError";

const { Text, Title } = Typography;

const initialFormValues = {
  email: "",
  password: "",
  confirmPassword: "",
  role: "patient",
  specialization: "Cardiology",
};

const Register = ({ setView }) => {
  const [emailSet, setEmailSet] = useState(null);

  const form = React.useRef();

  const [register, { loading }] = useMutation(REGISTER, {
    onError: (error) => {
      HandleError(error);
    },
    onCompleted: ({ register }) => {
      const { token } = register;

      Cookies.set("token", token, { expires: 40 }); // expires 7 days from now

      window.location.href = "/";
    },
    notifyOnNetworkStatusChange: true,
  });

  const onRegister = (values) => {
    const { email, password, name, role, specialization } = values;
    const payload = {
      email: email,
      password,
      full_name: name,
      role,
    };

    if (role == "doctor") {
      payload.specialization = specialization;
    }

    register({
      variables: {
        input: {
          ...payload,
        },
      },
    });
  };

  const FirstStep = ({ submitCount, values, errors }) => {
    const handleEmailNext = () => {
      const hasError = errors["email"];

      if (_.isEmpty(hasError) && !_.isEmpty(values?.email)) {
        setEmailSet(values?.email);
      }
    };
    return (
      <>
        <Field
          component={FloaterInput}
          name="email"
          label="Work or SSO email"
          placeholder="Work or SSO email"
          submitCount={submitCount}
          hasFeedback
          required={true}
          size="large"
        />
        <Button
          className={`w-full my-4 ml-1 outline-none border-none ${styles.blackNextButton}`}
          type="primary"
          size="large"
          onClick={handleEmailNext}
        >
          Next
        </Button>
      </>
    );
  };

  const NameAndPasswordStep = ({ submitCount, values, setValues }) => {
    return (
      <>
        <Field
          component={FloaterInput}
          name="name"
          label="Full Name"
          placeholder="Your full name here"
          submitCount={submitCount}
          hasFeedback
          required={true}
          size="large"
        />
        <Field
          component={FloaterInput}
          name="password"
          label="Password"
          placeholder="Your secret password"
          submitCount={submitCount}
          hasFeedback
          required={true}
          size="large"
          inputType="password"
        />
        <Field
          component={FloaterInput}
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm password"
          submitCount={submitCount}
          hasFeedback
          required={true}
          size="large"
          inputType="password"
        />
        <div>
          <AntForm.Item label="Select the role">
            <Radio.Group
              onChange={(v) => setValues("role", v.target.value)}
              value={values?.role}
            >
              <Radio value={"datient"}>Patient</Radio>
              <Radio value={"doctor"}>Doctor</Radio>
            </Radio.Group>
          </AntForm.Item>
        </div>

        {values?.role == "doctor" && (
          <div>
            <AntForm.Item label="Select the specialization">
              <Select
                value={values?.specialization}
                onChange={(v) => setValues("specialization", v)}
                options={[
                  { value: "Cardiology", key: "Cardiology" },
                  { value: "Dermatology", key: "Dermatology" },
                  { value: "Gastroenterology", key: "Gastroenterology" },
                  { value: "Neurology", key: "Neurology" },
                  { value: "Oncology", key: "Oncology" },
                  { value: "Orthopedic Surgery", key: "Orthopedic Surgery" },
                  { value: "Pediatrics", key: "Pediatrics" },
                  { value: "Psychiatry", key: "Psychiatry" },
                  { value: "Radiology", key: "Radiology" },
                  { value: "Urology", key: "Urology" },
                  { value: "Other", key: "Other" },
                ]}
              />
            </AntForm.Item>
          </div>
        )}

        <Button
          onClick={() => {
            form.current.submitForm();
          }}
          className={`w-full my-4 ml-1 outline-none border-none ${styles.blackNextButton}`}
          type="primary"
          size="large"
          loading={loading}
        >
          Sign Up
        </Button>
      </>
    );
  };

  return (
    <div
      className="px-12 text-center w-3/4 m-auto flex flex-col justify-between"
      style={{ marginTop: "20%", maxWidth: 500, height: "80vh" }}
    >
      <div>
        {_.isEmpty(emailSet) ? (
          <div className="mb-6">
            <div className="flex items-baseline justify-center">
              <div className="flex items-center w-full justify-center">
                <img src={Logo} style={{ width: 70 }} alt="Logo" />
                <Text
                  className="text-3xl ml-2"
                  style={{ color: "rgb(68 172 153)" }}
                  strong
                >
                  Medicare
                </Text>
              </div>
            </div>
            <Text className="text-base my-4">
              Create your free account and save lives with <br /> Medicare
              today!
            </Text>
          </div>
        ) : (
          <div className="mb-6">
            <div className="flex items-baseline justify-center">
              <Title level={2} className="ml-2">
                Welcome to Medicare!
              </Title>
            </div>
            <Text className="text-base my-2">
              You're signing up as {emailSet}
              <Text
                className="ml-1 cursor-pointer"
                onClick={() => setEmailSet(null)}
                style={{ color: "#F5A623" }}
              >
                Change
              </Text>
            </Text>
          </div>
        )}
        <Formik
          initialValues={initialFormValues}
          validationSchema={validationRegisterSchema}
          onSubmit={onRegister}
          innerRef={form}
        >
          {({
            submitCount,
            handleSubmit,
            setValues,
            values,
            errors,
            setFieldValue,
          }) => {
            return (
              <Form onSubmit={handleSubmit} className="text-left">
                {_.isEmpty(emailSet) ? (
                  <FirstStep
                    submitCount={submitCount}
                    values={values}
                    errors={errors}
                  />
                ) : (
                  <NameAndPasswordStep
                    values={values}
                    setValues={setFieldValue}
                    submitCount={submitCount}
                  />
                )}

                <Divider>
                  <Text style={{ color: "#64748B" }}>OR</Text>
                </Divider>

                <div className="flex text-center items-center justify-center my-10">
                  <Text>Already using Medicare?</Text>
                  <Button
                    type="text"
                    className="p-0 m-0 ml-1.5"
                    onClick={() => setView("login")}
                  >
                    <Text style={{ color: "#F5A623" }} className="underline">
                      Login here
                    </Text>
                  </Button>
                </div>
                <div className="my-4 text-center">
                  <Text>
                    By signing up, I agree to Medicare's
                    <a rel="noreferrer" href="google.com" target="_blank">
                      &nbsp;
                      <Text className="text-black underline">
                        Privacy Policy
                      </Text>
                      &nbsp;
                    </a>
                    and
                    <br />
                    <a rel="noreferrer" href="google.com" target="_blank">
                      &nbsp;
                      <Text className="text-black underline">
                        Terms of Service
                      </Text>
                      &nbsp;
                    </a>
                  </Text>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
      <div className="text-center">
        <Text>Copyright © Medicare 2023 | All rights reserved</Text>
      </div>
    </div>
  );
};

export default Register;
