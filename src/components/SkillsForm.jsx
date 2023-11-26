import React from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSkill, selectSkills } from "../features/cvSlice";
import { useFormik } from "formik";
import * as Yup from "yup";

const SkillsForm = () => {
  const dispatch = useDispatch();
  const skills = useSelector(selectSkills);

  const formik = useFormik({
    initialValues: {
      skills: [""],
    },
    validationSchema: Yup.object({
      skills: Yup.array().of(Yup.string().required("Skill is required")),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(setSkill([...skills, ...values.skills]));
    },
  });

  return (
    <Form onFinish={formik.handleSubmit}>
      {formik.values.skills.map((skill, index) => (
        <Form.Item
          key={index}
          label={`Skill ${index + 1}`}
          name={`skills.${index}`}
          rules={[{ required: true }]}
        >
          <Input {...formik.getFieldProps(`skills.${index}`)} />
        </Form.Item>
      ))}

      <Form.Item>
        <Button
          type="dashed"
          onClick={() =>
            formik.setFieldValue("skills", [...formik.values.skills, ""])
          }
        >
          Add Skill
        </Button>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save Skills
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SkillsForm;
