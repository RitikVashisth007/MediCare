import * as yup from "yup";

export const validationLoginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("This field is required")
    .email("This is not a valid email"),
  password: yup.string().required("This field is required"),
});

export const validationRegisterSchema = yup.object().shape({
  name: yup.string().trim().required("This field is required"),
  email: yup
    .string()
    .trim()
    .required("This field is required")
    .email("This is not a valid email"),
  password: yup
    .string()
    .required("This field is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must contain 8 characters, one uppercase, one lowercase, one number and one special case character"
    ),
  confirmPassword: yup
    .string()
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
});
