import * as yup from "yup";

const EnquirySchema = yup.object().shape({
  name: yup.string().required("Please enter your full name"),
  enquiry: yup.string().required("Please tell us what we can do for you"),
  email: yup
    .string()
    .required("Please enter your email address.")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email"
    ),
});

export default EnquirySchema;
