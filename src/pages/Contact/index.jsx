import React from "react";
import Heading from "../../components/layout/headings/Heading";
import ContactForm from "./ContactForm";
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Holidaze | Contact</title>
        <meta
          name="description"
          content="Contact us at Holidaze if you need any assistance in finding your next getaway accommodation for your self or the whole family."
        />
      </Helmet>
      <Heading title="Contact" />
      <ContactForm />
    </>
  );
}
