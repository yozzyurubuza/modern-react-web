import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = function (props) {
  const images = props.images.map((image) => {
    //Assign key to the root of element only
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
