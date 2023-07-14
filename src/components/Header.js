import { MenuItem, Select } from "@mui/material";
import React, { useContext, useState } from "react";
import { FriendContext } from "../context/YearContext";

const Header = () => {
  const { setDescription, setImage } = useContext(FriendContext);
  const [friend, setFriend] = useState("Select");

  switch (friend) {
    case "Select":
      setDescription(
        "Happy birthday, Beautiful❤️! May your day be filled with joy, laughter, and countless wonderful memories to cherish! Check out the messages and memories shared by your friends from select toggle above😜😜"
      );
      setImage("../Images/Select.jpg");
      break;
    case "Aishwarya":
      setDescription(
        "We might have less pictures together but shared beautiful bond of friendship ,gald to met such a sweet innocent soul,Keep up ur innocence May u manifest all your goals nd desire Happy birthday kalpana❤"
      );
      setImage("../Images/Aishwarya.jpeg");
      break;
    case "Kaprwan":
      setDescription(
        "Happy birthday to Kalpana! As the years unfold, may your dreams come true and may every day be brighter than the last.🥳🥳"
      );
      setImage("../Images/Kaprwan.jpeg");
      break;
    case "Ridhima":
      setDescription(
        "Sending you warmest wishes on your birthday, Kalpana! May this new chapter of your life be filled with exciting adventures, beautiful memories, and the fulfillment of all your heart's desires"
      );
      setImage("../Images/Ridhima.jpeg");
      break;
    case "Shikha":
      setDescription(
        "Happy birthday Kalpu..🤗 May u hv millions of moments laden wid joy n laughter..🧡🥳🤗💞"
      );
      setImage("../Images/Shikha.jpeg");
      break;
    case "Samiksha":
      setDescription(
        "Hy Kalpana wish u a very happy birthday dear 💕.hope all your wishes come true.. See u soon n lots of love ❤"
      );
      setImage("../Images/Samiksha.jpg");
      break;
    case "Rayal":
      setDescription(
        "Happiest birthday Kalpana. Fortunate to find a sister amongst my friends. I pray you get all that you desire and stay happy and chubby."
      );
      setImage("../Images/Rayal.jpeg");
      break;
    case "Akhil":
      setDescription(
        "Hy Kalpana wish u a very happy birthday dear 💕.hope all your wishes come true ❤"
      );
      setImage("../Images/Akhil.jpeg");
      break;
    case "Shubhi":
      setDescription(
        "Happy birthday to my cute friend and the one who always has my back! Thank you for being there through thick and thin. May this year bring you abundant love, health, and prosperity.❤️❤️"
      );
      setImage("../Images/Shubhi.jpeg");
      break;
    case "Kiran":
      setDescription(
        "Happy birthday, Kalpu! Here's to a fantastic year ahead and an extraordinary future filled with love, success, and all the beautiful things life has to offer. Cheers! 🥳🎉"
      );
      setImage("../Images/Kiran (1).jpeg");
      break;
    case "Deepesh":
      setDescription(
        "Happy birthday to someone who brings so much positivity and light into my life❤️❤️ .May your special day be as incredible as you are, and may the future hold boundless opportunities for you🥳🥳"
      );
      setImage("../Images/Deepesh.jpg");
      break;
    case "Ajay":
      setDescription(
        "Sending you warmest wishes on your birthday, Kalpana! May this new chapter of your life be filled with exciting adventures, beautiful memories, and the fulfillment of all your heart's desires"
      );
      setImage("../Images/Ajay.jpg");
      break;
    case "Aadi":
      setDescription(
        "न्मदिंन की हार्दिक शुभकामनाएं🎂🎂💐💐🎉🎉 मैं यह कामना करता हूँ की इस साल का प्रतिफल तुम्हारे द्वारा सोचे गए लक्ष्यों की कल्पना से भी बड़ा हो। अत्यंत प्रेम के साथ पुनः जन्मदिन की शुभकामनाएं।❤️❤️🎉❤"
      );
      setImage("../Images/Aadi.jpeg");
      break;
    default:
      setDescription("Coming soon");
      setImage("");
  }

  return (
    <div className="container">
      <h1 className="title">Happy Birthday Kalpana!!</h1>

      <Select
        className="select"
        variant="outlined"
        style={{
          width: 100,
          height: 40,
          marginRight: 15,
          color: "white",
        }}
        value={friend}
        onChange={(e) => {
          setFriend(e.target.value);
        }}
      >
        <MenuItem value={"Select"}>Select</MenuItem>
        <MenuItem value={"Aishwarya"}>Aishwarya</MenuItem>
        <MenuItem value={"Kiran"}>Kiran</MenuItem>
        <MenuItem value={"Shubhi"}>Shubhi</MenuItem>

        <MenuItem value={"Shikha"}>Shikha</MenuItem>

        <MenuItem value={"Ajay"}>Ajay</MenuItem>
        <MenuItem value={"Samiksha"}>Samiksha</MenuItem>
        <MenuItem value={"Akhil"}>Akhil</MenuItem>
        <MenuItem value={"Ridhima"}>Ridhima</MenuItem>
        <MenuItem value={"Deepesh"}>Deepesh</MenuItem>
        <MenuItem value={"Aadi"}>Aadi</MenuItem>
        <MenuItem value={"Rayal"}>Rayal</MenuItem>
        <MenuItem value={"Kaprwan"}>Kaprwan</MenuItem>
      </Select>
    </div>
  );
};
export default Header;
