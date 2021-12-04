import * as yup from "yup";

const ContactSchema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your full name")
    .min(3, "At least 3 characters"),
  email: yup
    .string()
    .required("Please enter your email address.")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email"
    ),
  message: yup
    .string()
    .required("Please let us know what we can do for you.")
    .min(10, "Message must be least 10 characters"),
});

export default ContactSchema;
