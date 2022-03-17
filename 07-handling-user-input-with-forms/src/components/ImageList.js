import "./ImageList.css";
import React from "react";

const ImageList = function (props) {
  const images = props.images.map(({ description, id, urls }) => {
    //Assign key to the root of element only
    return <img alt={description} key={id} src={urls.regular} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
