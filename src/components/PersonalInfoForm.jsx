import React from "react";
import { Form, Input, Button, Select, DatePicker, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  setPersonalInfo,
  toggleNationality,
  toggleWebsite,
  toggleLinkedin,
  selectUi,
} from "../features/cvSlice";
import { useFormik } from "formik";
import personalInfoValidationSchema from "./personalInfoValidationSchema";

const { Option } = Select;


const PersonalInfoForm = () => {
    const dispatch = useDispatch();
    
    const { showNationality, showWebsite, showLinkedin } = useSelector(selectUi);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      jobTitle: "",
      phoneNumber: "",
      address: "",
      city: "",
      dateOfBirth: null,
      gender: "",
      civilStatus: "",
      nationality: "",
      website: "",
      linkedin: "",
    },
    validationSchema: personalInfoValidationSchema,
    onSubmit: (values) => {
      dispatch(setPersonalInfo(values));
    },
  });

    const handleFormValuesChange = (changedValues, allValues) => {
      dispatch(setPersonalInfo(allValues));
    };

  const handleToggleNationality = () => {
    dispatch(toggleNationality());
  };

  const handleToggleWebsite = () => {
    dispatch(toggleWebsite());
  };

  const handleToggleLinkedin = () => {
    dispatch(toggleLinkedin());
  };

  return (
    <Form
      layout="vertical"
      onValuesChange={handleFormValuesChange}
      onFinish={formik.handleSubmit}
    >
      <Form.Item
        label="Full Name"
        name="fullName"
        help={formik.errors.fullName}
        validateStatus={
          formik.touched.fullName && formik.errors.fullName ? "error" : ""
        }
        rules={[{ required: true }]}
      >
        <Input
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="Job Title"
        name="jobTitle"
        help={formik.errors.jobTitle}
        validateStatus={
          formik.touched.jobTitle && formik.errors.jobTitle ? "error" : ""
        }
        rules={[{ required: true }]}
      >
        <Input
          name="jobTitle"
          value={formik.values.jobTitle}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        help={formik.errors.phoneNumber}
        validateStatus={
          formik.touched.phoneNumber && formik.errors.phoneNumber ? "error" : ""
        }
        rules={[{ required: true }]}
      >
        <Input
          name="phoneNumber"
          type="tel"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
        help={formik.errors.address}
        validateStatus={
          formik.touched.address && formik.errors.address ? "error" : ""
        }
        rules={[{ required: true }]}
      >
        <Input
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="City"
        name="city"
        help={formik.errors.city}
        validateStatus={
          formik.touched.city && formik.errors.city ? "error" : ""
        }
        rules={[{ required: true }]}
      >
        <Input
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="Date of Birth"
        name="dateOfBirth"
        help={formik.errors.dateOfBirth}
        validateStatus={
          formik.touched.dateOfBirth && formik.errors.dateOfBirth ? "error" : ""
        }
        rules={[{ required: true }]}
      >
        <DatePicker
          name="dateOfBirth"
          value={formik.values.dateOfBirth}
          onChange={(date) => formik.setFieldValue("dateOfBirth", date)}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="Gender"
        name="gender"
        help={formik.errors.gender}
        validateStatus={
          formik.touched.gender && formik.errors.gender ? "error" : ""
        }
        rules={[{ required: true }]}
      >
        <Select
          name="gender"
          value={formik.values.gender}
          onChange={(value) => formik.setFieldValue("gender", value)}
          onBlur={formik.handleBlur}
        >
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Civil Status"
        name="civilStatus"
        help={formik.errors.civilStatus}
        validateStatus={
          formik.touched.civilStatus && formik.errors.civilStatus ? "error" : ""
        }
        rules={[{ required: true }]}
      >
        <Select
          name="civilStatus"
          value={formik.values.civilStatus}
          onChange={(value) => formik.setFieldValue("civilStatus", value)}
          onBlur={formik.handleBlur}
        >
          <Option value="Single">Single</Option>
          <Option value="Married">Married</Option>
          <Option value="Divorced">Divorced</Option>
          <Option value="Widowed">Widowed</Option>
        </Select>
      </Form.Item>

      {showNationality && (
        <Form.Item
          label="Nationality"
          name="nationality"
          help={formik.errors.nationality}
          validateStatus={
            formik.touched.nationality && formik.errors.nationality
              ? "error"
              : ""
          }
        >
          <Input
            name="nationality"
            value={formik.values.nationality}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
      )}

      <Form.Item>
        <Switch checked={showNationality} onChange={handleToggleNationality} />
        <span style={{ marginLeft: "8px" }}>Show Nationality</span>
      </Form.Item>

      {showWebsite && (
        <Form.Item
          label="Website"
          name="website"
          help={formik.errors.website}
          validateStatus={
            formik.touched.website && formik.errors.website ? "error" : ""
          }
        >
          <Input
            name="website"
            value={formik.values.website}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
      )}

      <Form.Item>
        <Switch checked={showWebsite} onChange={handleToggleWebsite} />
        <span style={{ marginLeft: "8px" }}>Show Website</span>
      </Form.Item>

      {showLinkedin && (
        <Form.Item
          label="LinkedIn"
          name="linkedin"
          help={formik.errors.linkedin}
          validateStatus={
            formik.touched.linkedin && formik.errors.linkedin ? "error" : ""
          }
        >
          <Input
            name="linkedin"
            value={formik.values.linkedin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
      )}

      <Form.Item>
        <Switch checked={showLinkedin} onChange={handleToggleLinkedin} />
        <span style={{ marginLeft: "8px" }}>Show LinkedIn</span>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save Information
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PersonalInfoForm;
