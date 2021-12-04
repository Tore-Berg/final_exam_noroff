import React from "react";
import { StyledList, StyledLink, StyledListItem } from "./Placeslist.styled";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LoaderIndicator from "../../../components/common/LoaderIndicator";
import { BASE_URL, ACCOMMODATION_PATH } from "../../../constants/api";

const PlacesList = () => {
  const [places, setPlaces] = useState(null);
  const [loading, setLoading] = useState(false);
  const [edited, setEdited] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPlaces = async () => {
      setLoading(true);
      try {
        const res = await axios.get(BASE_URL + "/" + ACCOMMODATION_PATH);
        setPlaces(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    getPlaces();
  }, []);

  if (loading) {
    return <LoaderIndicator />;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {places && (
        <StyledList>
          {places.map((place) => (
            <StyledListItem key={place.id}>
              <StyledLink to={`edit/${place.id}`}>{place.title}</StyledLink>
            </StyledListItem>
          ))}
        </StyledList>
      )}
    </>
  );
};

export default PlacesList;
