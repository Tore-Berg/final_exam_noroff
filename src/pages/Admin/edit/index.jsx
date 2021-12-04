import React from "react";
import GoBack from "../../../components/common/GoBack";
import Heading from "../../../components/layout/headings/Heading";
import PlacesList from "./PlacesList";

export default function Edit() {
  return (
    <>
      <Heading title="Select one to edit" />
      <PlacesList />
      <GoBack />
    </>
  );
}
