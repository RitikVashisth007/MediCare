import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Button, Alert } from "antd";
import { useMutation } from "@apollo/client";
import Cookies from "js-cookie";

import { Typography, Divider } from "antd";
import { Formik, Field, Form } from "formik";

import { validationLoginSchema } from "./validationSchema";

import FloaterInput from "../../components/FloaterInput";
import styles from "./styles.module.css";
import { LOGIN } from "../../graphql/Mutation/Login";
import Logo from "../../assets/logo.png";
import HandleError from "../../components/HandleError";

const { Text, Title } = Typography;

const initialFormValues = {
  email: "",
  password: "",
};
const Login = ({ setView }) => {
  const form = React.useRef();
  const [login, { loading }] = useMutation(LOGIN, {
    onError: (error) => {
      HandleError(error);
    },
    onCompleted: ({ login }) => {
      const { token, user } = login;

      Cookies.set("token", token, { expires: 40 }); // expires 7 days from now

      window.location.href = "/";
    },
  });

  const onSubmit = () => {
    form.current.submitForm();
  };

  const onLogin = (values) => {
    const { email, password } = values;
    login({
      variables: {
        input: {
          email,
          password,
        },
      },
    });
  };

  return (
    <>
      <div
        className="px-12 text-center w-3/4 m-auto flex flex-col justify-between"
        style={{ marginTop: "20%", maxWidth: 500, height: "80vh" }}
      >
        <div>
          <div className="mb-6">
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
            <Text className="text-base -mt-2 ">Login!</Text>
          </div>

          <Formik
            initialValues={initialFormValues}
            validationSchema={validationLoginSchema}
            onSubmit={onLogin}
            innerRef={form}
          >
            {({ submitCount, handleSubmit }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  <div className="text-left">
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
                  </div>

                  <Button
                    size="large"
                    onClick={onSubmit}
                    key="submit"
                    className={`w-full my-4 ml-1 outline-none border-none ${styles.blackNextButton}`}
                    type="primary"
                    // loading={loading}
                  >
                    Login
                  </Button>

                  <Divider>
                    <Text style={{ color: "#64748B" }}>OR</Text>
                  </Divider>

                  <div className="flex text-center items-center justify-center my-10">
                    <Text>New to Medicare? </Text>
                    <Button
                      type="text"
                      className="p-0 m-0 ml-1.5"
                      onClick={() => setView("register")}
                    >
                      <Text className="underline">Register here</Text>
                    </Button>
                  </div>
                  <div className="my-4 text-center">
                    <Text>
                      By Logging in, I agree to
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
          <Text>Copyright Medicare © 2023 | All rights reserved</Text>
        </div>
      </div>
    </>
  );
};

export default Login;
