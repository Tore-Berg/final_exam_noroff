import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL, ACCOMMODATION_PATH } from "../../constants/api";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Heading from "../../components/layout/headings/Heading";
import SubHeading from "../../components/layout/headings/SubHeading";
import LoaderIndicator from "../../components/common/LoaderIndicator";
import { Helmet } from "react-helmet";
import {
  HeroSection,
  FeaturedBg,
  FeaturedCard,
  FeaturedGrid,
} from "./Home.styles";

const Home = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPlaces = async () => {
      try {
        const response = await axios.get(BASE_URL + "/" + ACCOMMODATION_PATH);
        setPlaces(response.data);
        console.log(response.data);
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
      <Helmet>
        <title>Holidaze | Home</title>
        <meta
          name="description"
          content="We at Holidaze will make sure you find hotels, guesthouses and BnB accommodations in just a few clicks. Find the one you like, send us an enquiry or contact us if you need help."
        />
      </Helmet>
      <HeroSection>
        <Heading title="Where do you wanna go?" />
        <SearchBar placeholder="Search places" data={places} />
      </HeroSection>
      <SubHeading title="Our top picks" />
      <FeaturedGrid>
        {places.map((place) => {
          const { id, featured, title, featured_media } = place;
          if (featured) {
            return (
              <Link key={id} to={`details/${id}`}>
                <FeaturedCard key={id}>
                  <FeaturedBg
                    style={{
                      backgroundImage: `url(${featured_media.formats.small.url})`,
                    }}
                  ></FeaturedBg>
                  <h3>{title}</h3>
                </FeaturedCard>
              </Link>
            );
          }
        })}
      </FeaturedGrid>
    </>
  );
};

export default Home;
