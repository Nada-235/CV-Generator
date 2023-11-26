import React from "react";
import { Form, Input, Button, DatePicker, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  setWorkExperience,
  toggleAdditionalFields,
  selectUi,
} from "../features/cvSlice";
import { useFormik } from "formik";
import WorkExperienceSchema from "./WorkExperienceSchema";

const WorkExperienceForm = () => {
  const dispatch = useDispatch();
  const { showAdditionalFields } = useSelector(selectUi);

  const formik = useFormik({
    initialValues: {
      jobTitle: "",
      company: "",
      startDate: null,
      endDate: null,
      description: "",
      additionalJobTitle: "",
      additionalCompany: "",
      additionalStartDate: null,
      additionalEndDate: null,
      additionalDescription: "",
    },
    validationSchema: WorkExperienceSchema,
    onSubmit: (values) => {
      dispatch(setWorkExperience(values));
    },
  });

  const handleFormValuesChange = (changedValues, allValues) => {
    dispatch(setWorkExperience(allValues));
  };

  const toggleAdditionalFieldsHandler = (checked) => {
    dispatch(toggleAdditionalFields(checked));
  };

  return (
    <Form
      layout="vertical"
      onValuesChange={handleFormValuesChange}
      onFinish={formik.handleSubmit}
    >
      <Form.Item
        label="Job Title"
        name="jobTitle"
        validateStatus={formik.errors.jobTitle && "error"}
        help={formik.touched.jobTitle && formik.errors.jobTitle}
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
        label="Company"
        name="company"
        validateStatus={formik.errors.company && "error"}
        help={formik.touched.company && formik.errors.company}
        rules={[{ required: true }]}
      >
        <Input
          name="company"
          value={formik.values.company}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="Start Date"
        name="startDate"
        validateStatus={formik.errors.startDate && "error"}
        help={formik.touched.startDate && formik.errors.startDate}
        rules={[{ required: true }]}
      >
        <DatePicker
          name="startDate"
          value={formik.values.startDate}
          onChange={(date) => formik.setFieldValue("startDate", date)}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="End Date"
        name="endDate"
        validateStatus={formik.errors.endDate && "error"}
        help={formik.touched.endDate && formik.errors.endDate}
        rules={[{ required: true }]}
      >
        <DatePicker
          name="endDate"
          value={formik.values.endDate}
          onChange={(date) => formik.setFieldValue("endDate", date)}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        validateStatus={formik.errors.description && "error"}
        help={formik.touched.description && formik.errors.description}
        rules={[{ required: true }]}
      >
        <Input.TextArea
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      {showAdditionalFields && (
        <>
          <Form.Item
            label="Job Title - 2"
            name="additionalJobTitle"
            validateStatus={formik.errors.additionalJobTitle && "error"}
            help={
              formik.touched.additionalJobTitle &&
              formik.errors.additionalJobTitle
            }
          >
            <Input
              name="additionalJobTitle"
              value={formik.values.additionalJobTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>

          <Form.Item
            label="Company - 2"
            name="additionalCompany"
            validateStatus={formik.errors.additionalCompany && "error"}
            help={
              formik.touched.additionalCompany &&
              formik.errors.additionalCompany
            }
          >
            <Input
              name="additionalCompany"
              value={formik.values.additionalCompany}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>

          <Form.Item
            label="Start Date - 2"
            name="additionalStartDate"
            validateStatus={formik.errors.additionalStartDate && "error"}
            help={
              formik.touched.additionalStartDate &&
              formik.errors.additionalStartDate
            }
          >
            <DatePicker
              name="additionalStartDate"
              value={formik.values.additionalStartDate}
              onChange={(date) =>
                formik.setFieldValue("additionalStartDate", date)
              }
              onBlur={formik.handleBlur}
            />
          </Form.Item>

          <Form.Item
            label="End Date - 2"
            name="additionalEndDate"
            validateStatus={formik.errors.additionalEndDate && "error"}
            help={
              formik.touched.additionalEndDate &&
              formik.errors.additionalEndDate
            }
          >
            <DatePicker
              name="additionalEndDate"
              value={formik.values.additionalEndDate}
              onChange={(date) =>
                formik.setFieldValue("additionalEndDate", date)
              }
              onBlur={formik.handleBlur}
            />
          </Form.Item>

          <Form.Item
            label="Description - 2"
            name="additionalDescription"
            validateStatus={formik.errors.additionalDescription && "error"}
            help={
              formik.touched.additionalDescription &&
              formik.errors.additionalDescription
            }
          >
            <Input.TextArea
              name="additionalDescription"
              value={formik.values.additionalDescription}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>
        </>
      )}

      <Form.Item
        label={
          showAdditionalFields
            ? "Hide Additional Fields"
            : "Show Additional Fields"
        }
        style={{ display: "inline-block", marginLeft: "10px" }}
      >
        <Switch
          checked={showAdditionalFields}
          onChange={toggleAdditionalFieldsHandler}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save Work Experience
        </Button>
      </Form.Item>
    </Form>
  );
};

export default WorkExperienceForm;
