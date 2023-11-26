import * as Yup from "yup";

const WorkExperienceSchema = Yup.object().shape({
  jobTitle: Yup.string().required("Job Title is required"),
  company: Yup.string().required("Company is required"),
  startDate: Yup.date().required("Start Date is required"),
  endDate: Yup.date().required("End Date is required"),
  description: Yup.string().required("Description is required"),
});

export default WorkExperienceSchema;
