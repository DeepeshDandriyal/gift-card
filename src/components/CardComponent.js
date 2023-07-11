import React from "react";
import Header from "./Header";
import GiftCard from "./GiftCard";
import { easeOut, motion as m } from "framer-motion";

const CardComponent = () => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: easeOut }}
      exit={{ opacity: 0 }}
      className="card-component"
    >
      <Header />
      <GiftCard />
    </m.div>
  );
};

export default CardComponent;
