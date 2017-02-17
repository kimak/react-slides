import React from "react";
import {
  Appear,
  Heading,
  Image
} from "spectacle";

const ImageSlide = ({ title, subtitle, imageSrc, imageHeight, padding = "0px" }) => (
  <div>
    <Heading size={6} textColor="white">
        {title}
    </Heading>
    <div style={{ border: "solid 5px #FFE163", display: "inline-block", background: "#FFF" }}>
        <Image bgColor="white" src={imageSrc} padding={padding} height={imageHeight}/>
    </div>
    <Heading size={6} textColor="white">
        {subtitle}
    </Heading>
 </div>
);

export default ImageSlide;
