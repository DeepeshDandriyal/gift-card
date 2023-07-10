import { createContext, useState } from "react";

export const YearContext = createContext({
  image: "",
  description: "",
  setImage: () => null,
  setDescription: () => null,
});

export const YearProvider = ({ children }) => {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const value = { image, description, setImage, setDescription };

  return <YearContext.Provider value={value}>{children}</YearContext.Provider>;
};
