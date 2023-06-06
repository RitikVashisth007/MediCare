import { Card, Typography, Button, Divider } from "antd";
import React from "react";
import { Formik, Field, Form as FormikForm } from "formik";
import { AntInput } from "../../components/FormikInput";
import * as yup from "yup";
import { REGISTER_RESTAUANT } from "../../graphql/Mutation/RegisterRestaurant";
import HandleError from "../HandleError";
import { useMutation } from "@apollo/client";

const validationSchema = yup.object().shape({
  name: yup.string().max(255).required("Please enter the name"),
  address: yup.string().max(255).required("Enter full address"),
  cover_pic: yup.string().required("Please enter image link"),
});

const RegisterRestarant = () => {
  const [restaurantMutations, { data, loading: restaurantLoading }] =
    useMutation(REGISTER_RESTAUANT, {
      onError: (error) => HandleError(error),
    });
  const handleRegister = (v) => {
    restaurantMutations({
      variables: {
        input: {
          ...v,
        },
      },
    });
  };
  return (
    <div style={{ width: 500 }}>
      <Card>
        <div className="flex flex-col">
          <Typography.Text style={{ fontSize: 28 }}>
            Restaurant details
          </Typography.Text>
          <Typography.Text>Name, address and image</Typography.Text>
          <Formik
            onSubmit={handleRegister}
            initialValues={{ name: "", address: "", cover_pic: "" }}
            validationSchema={validationSchema}
          >
            {({ submitCount, handleSubmit }) => {
              return (
                <FormikForm onSubmit={handleSubmit}>
                  <Field
                    name="name"
                    component={AntInput}
                    style={{
                      height: 48,
                      borderRadius: "10px",
                      marginTop: 10,
                    }}
                    placeholder="Restaurant Name"
                    type="text"
                    submitCount={submitCount}
                    hasFeedback
                    required={true}
                  />
                  <Field
                    name="address"
                    component={AntInput}
                    style={{
                      height: 48,
                      borderRadius: "10px",
                    }}
                    placeholder="Full address"
                    type="text"
                    submitCount={submitCount}
                    hasFeedback
                    required={true}
                  />
                  <Field
                    name="cover_pic"
                    component={AntInput}
                    style={{
                      height: 48,
                      borderRadius: "10px",
                    }}
                    placeholder="Cover Pic Link"
                    type="text"
                    submitCount={submitCount}
                    hasFeedback
                    required={true}
                  />
                  <div className="flex flex-col mt-4 ">
                    <Button
                      style={{
                        height: 48,
                        borderRadius: "10px",
                        fontSize: 18,
                        background: "border-box rgb(39, 129, 231)",
                        color: "white",
                      }}
                      key="submit"
                      onClick={handleSubmit}
                    >
                      Register Restaurant
                    </Button>
                  </div>
                  <Divider />
                </FormikForm>
              );
            }}
          </Formik>
        </div>
      </Card>
    </div>
  );
};

export default RegisterRestarant;
