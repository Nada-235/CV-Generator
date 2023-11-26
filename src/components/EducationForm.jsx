import React from "react";
import { Form, Input, Button, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setEducation, selectEducation } from "../features/cvSlice";
import { useFormik } from "formik";
import EducationSchema from "./EducationSchema";

const EducationForm = () => {
  const dispatch = useDispatch();
  const education = useSelector(selectEducation);

  const formik = useFormik({
    initialValues: {
      degree: "",
      school: "",
      city: "",
      startDate: null,
      endDate: null,
      description: "",
    },
    validationSchema: EducationSchema,
    onSubmit: (values) => {
      dispatch(setEducation([...education, values]));
    },
  });

  const handleFormValuesChange = (changedValues, allValues) => {
    dispatch(setEducation(allValues));
  };



  return (
    <Form
      layout="vertical"
      onValuesChange={handleFormValuesChange}
      onFinish={formik.handleSubmit}
    >
      <Form.Item
        label="Degree"
        name="degree"
        help={formik.errors?.degree}
        validateStatus={
          formik.touched?.degree && formik.errors?.degree ? "error" : ""
        }
        rules={[{ required: true }]}
      >
        <Input
          name="degree"
          value={formik.values?.degree}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="School"
        name="school"
        help={formik.errors?.school}
        validateStatus={
          formik.touched?.school && formik.errors?.school ? "error" : ""
        }
        rules={[{ required: true }]}
      >
        <Input
          name="school"
          value={formik.values?.school}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="City"
        name="city"
        help={formik.errors?.city}
        validateStatus={
          formik.touched?.city && formik.errors?.city ? "error" : ""
        }
        rules={[{ required: true }]}
      >
        <Input
          name="city"
          value={formik.values?.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="Start Date"
        name="startDate"
        help={formik.errors?.startDate}
        validateStatus={
          formik.touched?.startDate && formik.errors?.startDate ? "error" : ""
        }
        rules={[{ required: true }]}
      >
        <DatePicker
          name="startDate"
          value={formik.values?.startDate}
          onChange={(date) => formik.setFieldValue("startDate", date)}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="End Date"
        name="endDate"
        help={formik.errors?.endDate}
        validateStatus={
          formik.touched?.endDate && formik.errors?.endDate ? "error" : ""
        }
        rules={[{ required: true }]}
      >
        <DatePicker
          name="endDate"
          value={formik.values?.endDate}
          onChange={(date) => formik.setFieldValue("endDate", date)}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        help={formik.errors?.description}
        validateStatus={
          formik.touched?.description && formik.errors?.description
            ? "error"
            : ""
        }
        rules={[{ required: true }]}
      >
        <Input.TextArea
          name="description"
          value={formik.values?.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Save Education
      </Button>
    </Form>
  );
};

export default EducationForm;
