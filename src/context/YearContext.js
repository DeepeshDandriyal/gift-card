import { createContext, useState } from "react";

export const FriendContext = createContext({
  image: "",
  description: "",
  setImage: () => null,
  setDescription: () => null,
});

export const FriendProvider = ({ children }) => {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const value = { image, description, setImage, setDescription };

  return (
    <FriendContext.Provider value={value}>{children}</FriendContext.Provider>
  );
};
