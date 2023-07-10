import React, { useContext } from "react";
import { YearContext } from "../context/YearContext";
const Description = () => {
  const { description } = useContext(YearContext);
  return (
    <div className="description-container">
      <p>{description}</p>
    </div>
  );
};

export default Description;
