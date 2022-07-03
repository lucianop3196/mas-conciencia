import { Box } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

export default function PhotoCarousel({ imagesURL, matches }) {
  return (
    <Box component="div">
      <Carousel sx={{ width:`${matches ? 350 : 100}`, ml: 4 }}>
        {matches
          ? imagesURL?.map((url, i) => (
              <img
                key={i}
                src={url}
                alt="carousel pic"
                width={450}
                height={250}
              />
              //   <Img url={url} />
            ))
          : imagesURL?.map((url, i) => (
              <img
                key={i}
                src={url}
                alt="carousel pic"
                width={100}
                height={100}
              />
              //   <Img url={url} />
            ))}
      </Carousel>
    </Box>
  );
}

// function Img(props) {
//   return <img src={props.url} alt="carousel pic" />;
// }
