import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ images, featured_media }) => {
  return (
    <>
      <Carousel infiniteLoop autoPlay showThumbs={false}>
        {images.map((image) => (
          <img key={image.id} src={image.formats.large.url} alt={image.name} />
        ))}
        <div>
          <img
            src={featured_media.formats.large.url}
            alt={featured_media.name}
          />
        </div>
      </Carousel>
    </>
  );
};

export default ImageSlider;
