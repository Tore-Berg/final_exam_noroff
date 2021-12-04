import React from "react";
import Heading from "../../components/layout/headings/Heading";
import LoginForm from "./LoginForm";
import { Helmet } from "react-helmet";

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Holidaze | Login</title>
        <meta
          name="description"
          content="This page is for you to be able to access the admin page at Holidaze, so you can add new accommodation, handle mail or enquiries. You need to be logged in to view the content."
        />
      </Helmet>
      <Heading title="Login" />
      <LoginForm />
    </>
  );
}
