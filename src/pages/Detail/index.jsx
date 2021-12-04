import { useParams } from "react-router-dom";
import { BASE_URL, ACCOMMODATION_PATH } from "../../constants/api";
import useFetch from "../../hooks/useFetch";
import Enquiry from "../Enquiry";
import { useState } from "react";
import DetailsCard from "./DetailsCard";
import { Button } from "../../styles/Button";
import { DetailsWrapper } from "./Details.styles";
import GoBack from "../../components/common/GoBack";
import LoaderIndicator from "../../components/common/LoaderIndicator";
import { Helmet } from "react-helmet";

const Detail = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { id } = useParams();

  const {
    data: place,
    loading,
    error,
  } = useFetch(`${BASE_URL}/${ACCOMMODATION_PATH}/${id}`);
  return (
    <>
      <Helmet>
        <title>Holidaze | Details</title>
        <meta
          name="description"
          content="We at Holidaze will make sure you find hotels, guesthouses and BnB accommodations in just a few clicks. Here you can see all of the details."
        />
      </Helmet>
      <DetailsWrapper>
        {loading && <LoaderIndicator />}
        {error && <div className="error">{error}</div>}
        {place && <DetailsCard {...place} />}
        {place && <Button onClick={() => setIsOpen(true)}>Send Enquiry</Button>}
        {place && (
          <Enquiry
            open={isOpen}
            onClose={() => setIsOpen(false)}
            title={place.title}
            category={place.category}
            image={place.featured_media.formats.small.url}
          />
        )}
      </DetailsWrapper>
      <GoBack />
    </>
  );
};
export default Detail;
