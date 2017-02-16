import React from 'react';
import {
  Appear,
  Heading,
  Image,
} from "spectacle";

const ImageSlide = ({title, imageSrc, imageHeight, padding = "0px"}) => (
  <div>
    <Heading size={6} textColor="white" style={{marginBottom:"20px"}}>
        {title}
    </Heading>
    <div style={{border:"solid 5px #FFE163", display:"inline-block", background:"#FFF"}}>
        <Image  bgColor="white" src={imageSrc} padding={padding} height={imageHeight}/>
    </div>
 </div>
);

export default ImageSlide;