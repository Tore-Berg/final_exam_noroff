import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ContactSchema from "../../schemas/ContactSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL, MESSAGE_PATH } from "../../constants/api";
import FormSuccess from "../../components/common/FormSuccess";
import axios from "axios";
import { StyledForm, StyledFormWrapper } from "../../styles/FormStyle";
import { Button } from "../../styles/Button";

const ContactForm = () => {
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    setSubmitting(true);
    try {
      const response = await axios.post(BASE_URL + "/" + MESSAGE_PATH, data);
      console.log(response);
      setSuccess(
        "Thank you for your message. Taking you back home in 5 seconds.."
      );
    } catch (error) {
      console.log("error", error);
      setError(error.toString());
    } finally {
      setSubmitting(false);
    }
  };
  if (submitting) {
    return <div>Submitting Message...</div>;
  }
  if (error) {
    return (
      <div>
        There was an error while sending message. Please try again later.
      </div>
    );
  }
  if (success) {
    setTimeout(() => {
      history.push("/");
    }, 5000);
    return <FormSuccess message={success} />;
  }

  console.log(errors);

  return (
    <>
      <StyledFormWrapper>
        <StyledForm className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            {...register("name")}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <span style={{ color: "red" }}>{errors.name.message}</span>
          )}
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            {...register("email")}
            placeholder="Your email adress"
          />
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email.message}</span>
          )}
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            {...register("message")}
            placeholder="Let us know what's on your mind?"
          />
          {errors.message && (
            <span style={{ color: "red" }}>{errors.message.message}</span>
          )}
          <Button type="submit">Send</Button>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default ContactForm;
