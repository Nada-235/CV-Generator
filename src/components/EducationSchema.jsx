import * as Yup from "yup";

const EducationSchema = Yup.object().shape({
  degree: Yup.string().required("Degree is required"),
  school: Yup.string().required("School is required"),
  city: Yup.string().required("City is required"),
  startDate: Yup.date().required("Start Date is required"),
  endDate: Yup.date().required("End Date is required"),
  description: Yup.string().required("Description is required"),
});

export default EducationSchema;