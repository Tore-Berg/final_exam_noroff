import React from "react";
import { BASE_URL, ACCOMMODATION_PATH } from "../../constants/api";
import useFetch from "../../hooks/useFetch";
import Heading from "../../components/layout/headings/Heading";
import GoBack from "../../components/common/GoBack";
import LoaderIndicator from "../../components/common/LoaderIndicator";
import ResultsList from "./ResultsList";
import { Helmet } from "react-helmet";

const Results = () => {
  const {
    data: places,
    loading,
    error,
  } = useFetch(`${BASE_URL}/${ACCOMMODATION_PATH}`);

  return (
    <>
      <Helmet>
        <title>Holidaze | View All</title>
        <meta
          name="description"
          content="We at Holidaze will make sure you find hotels, guesthouses and BnB accommodations in just a few clicks. On this page you will find every accommodation we have listed."
        />
      </Helmet>
      <Heading title="Our places" />
      {loading && <LoaderIndicator />}
      {error && <div className="error">{error}</div>}
      {places &&
        places.map((place) => <ResultsList {...place} key={place.id} />)}
      <GoBack />
    </>
  );
};

export default Results;
