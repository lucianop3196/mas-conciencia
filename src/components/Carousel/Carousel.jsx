import React from "react";
import Carousel from "react-material-ui-carousel";

export default function PhotoCarousel({ imagesURL }) {
  return (
    <div>
      <Carousel sx={{width: 450, ml:4}}>
        {imagesURL?.map((url, i) => (
          <img key={i} src={url} alt="carousel pic" width={450} height={350} />
          //   <Img url={url} />
        ))}
      </Carousel>
    </div>
  );
}

// function Img(props) {
//   return <img src={props.url} alt="carousel pic" />;
// }
