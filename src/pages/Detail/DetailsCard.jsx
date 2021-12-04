import React from "react";
import { Description } from "./Details.styles";
import Heading from "../../components/layout/headings/Heading";
import ImageSlider from "./ImageSlider";

const DetailsCard = ({ ...place }) => {
  const {
    id,
    title,
    description,
    featured_media,
    beds,
    rooms,
    keyless,
    persons,
    bathrooms,
    price,
    categories,
    media,
  } = place;
  return (
    <div>
      <Heading title={title} />
      <ImageSlider featured_media={featured_media} images={media} />
      <Description>
        <div className="features">
          {categories.map((category) => (
            <span key={id}>This is one of our {category.name} </span>
          ))}
          <span>and includes</span>
          <br></br>
          <span>{keyless ? "Keyless entry | " : " "}</span>
          {beds && <span>{`${beds} Beds | `}</span>}
          <span>{`${persons} Persons | `}</span>
          <span>{`${bathrooms} Bathrooms | `}</span>
          <span>{`${rooms} Rooms | `}</span>
        </div>
        <h5>${price}</h5>
        <p>{description}</p>
      </Description>
    </div>
  );
};

export default DetailsCard;
