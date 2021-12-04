import React from "react";
import { Link } from "react-router-dom";
import { ResultsCard, ImageSection, TextSection } from "./ResultsList.styles";

export default function ResultsList({ ...place }) {
  const {
    id,
    featured_media,
    title,
    keyless,
    beds,
    persons,
    bathrooms,
    rooms,
    categories,
  } = place;

  return (
    <>
      <Link to={`details/${id}`}>
        <ResultsCard id={id} key={id}>
          <ImageSection
            style={{
              backgroundImage: `url(${featured_media.formats.small.url})`,
            }}
          ></ImageSection>
          <TextSection>
            {categories.map((category) => (
              <span key={id}>{category.name}</span>
            ))}
            <h3>{title}</h3>
            <span>{keyless ? "Keyless entry | " : "Key required | "}</span>
            {beds && <span>{`${beds} Beds | `}</span>}
            {persons && <span>{`${persons} Persons | `}</span>}
            {bathrooms && <span>{`${bathrooms} Bathrooms | `}</span>}
            {rooms && <span>{`${rooms} Rooms | `}</span>}
          </TextSection>
        </ResultsCard>
      </Link>
    </>
  );
}
