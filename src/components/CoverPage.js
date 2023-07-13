import React from "react";
import { Link } from "react-router-dom";
import { easeOut, motion as m } from "framer-motion";
import Lottie from "lottie-react";
import balloon from "../assets/flags-garland.json";

const CoverPage = () => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: easeOut }}
      exit={{ opacity: 0 }}
      className="cover-page"
    >
      <Lottie className="balloon" animationData={balloon} size={5} />
      <h1 className="heading">Happy Birthday Kalpana!!</h1>

      <Link
        className="link"
        to={"/card"}
        style={{ color: "white", textDecoration: "none" }}
      >
        <p className="cover-footer">Open Card</p>
      </Link>
    </m.div>
  );
};

export default CoverPage;
