import React, { useContext } from "react";
import { FriendContext } from "../context/YearContext";

const ImageContainer = () => {
  const { image } = useContext(FriendContext);
  return (
    <div className="image-container">
      <img src={image} alt="2014" width={200} height={200} />
    </div>
  );
};

export default ImageContainer;
