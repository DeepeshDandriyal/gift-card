import React, { useContext } from "react";
import { FriendContext } from "../context/YearContext";

import { Link } from "react-router-dom";
const Description = () => {
  const { description } = useContext(FriendContext);
  return (
    <div className="description-container">
      <p>{description}</p>
      <Link
        className="link"
        to={"/"}
        style={{ color: "white", textDecoration: "none" }}
      >
        <p>Cover Page</p>
      </Link>
    </div>
  );
};

export default Description;
