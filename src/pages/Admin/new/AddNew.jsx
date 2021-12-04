import React from "react";
import { Wrapper } from "./AddNew.styles";
import FileUpload from "./FileUpload";
import Heading from "../../../components/layout/headings/Heading";
import { Helmet } from "react-helmet";
import GoBack from "../../../components/common/GoBack";

const AddNew = () => {
  return (
    <>
      <Helmet>
        <title>Holidaze | Add New</title>
      </Helmet>
      <Wrapper>
        <Heading title={"Add New place"} />
        <FileUpload />
          <GoBack />
      </Wrapper>
    </>
  );
};

export default AddNew;
