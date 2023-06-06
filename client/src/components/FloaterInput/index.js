import React, { Fragment, useState } from "react";
import { Form, Input } from "antd";

import "./index.css";

const FloaterInput = ({
  field,
  form,
  hasFeedback,
  label,
  selectOptions,
  submitCount,
  inputType,
  checkboxText,
  required,
  placeholder,
  size,
  ...props
}) => {
  const [focus, setFocus] = useState(false);

  if (!placeholder) placeholder = label;

  const isOccupied = focus || (field?.value && field?.value?.length !== 0);

  const labelClass = isOccupied ? "label as-label" : "label as-placeholder";
  const touched = form.touched[field.name];
  const submitted = submitCount > 0;
  const hasError = form.errors[field.name];
  const submittedError = hasError && submitted;
  const touchedError = hasError && touched;
  const onInputChange = ({ target }) => {
    const { value } = target;
    form.setFieldValue(field.name, value);
  };
  const onBlur = () => form.setFieldTouched(field.name, true);

  const requiredMark = required ? <span className="text-danger">*</span> : null;
  return (
    <div>
      <Form.Item
        className="mt-5 mb-2"
        hasFeedback={
          (hasFeedback && submitted) || (hasFeedback && touched) ? true : false
        }
        help={submittedError || touchedError ? hasError : null}
        validateStatus={submittedError || touchedError ? "error" : "success"}
        required={required}
      >
        <div
          className="float-label"
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
        >
          {inputType == "password" ? (
            <Input.Password
              onChange={onInputChange}
              type={inputType}
              defaultValue={field?.value}
              size={size}
              onBlur={onBlur}
              {...field}
              {...props}
            />
          ) : (
            <Input
              onChange={onInputChange}
              type={inputType}
              defaultValue={field?.value}
              size={size}
              onBlur={onBlur}
              {...field}
              {...props}
            />
          )}

          <label className={labelClass}>
            {isOccupied ? label : placeholder} {requiredMark}
          </label>
        </div>
      </Form.Item>
    </div>
  );
};

export default FloaterInput;
