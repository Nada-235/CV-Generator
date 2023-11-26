import * as Yup from "yup";

const personalInfoValidationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  jobTitle: Yup.string().required("Job Title is required"),
  phoneNumber: Yup.number().required("Phone Number is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  dateOfBirth: Yup.date().required("Date of Birth is required"),
  gender: Yup.string().required("Gender is required"),
  civilStatus: Yup.string().required("Civil Status is required"),
  nationality: Yup.string(),
  website: Yup.string().url("Invalid URL"),
  linkedin: Yup.string().url("Invalid LinkedIn URL"),
});

export default personalInfoValidationSchema;
