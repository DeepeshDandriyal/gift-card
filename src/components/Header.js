import { MenuItem, Select } from "@mui/material";
import React, { useContext, useState } from "react";
import { YearContext } from "../context/YearContext";
const Header = () => {
  const { setDescription, setImage } = useContext(YearContext);
  const [year, setYear] = useState("2014");

  switch (year) {
    case "2014":
      setDescription("hello guyss");
      setImage("../Images/neom-oBFN1y3d13Y-unsplash.jpg");
      break;
    case "2015":
      setDescription("guyss its 2015");
      setImage("../Images/frida-flowers-xtradry-QhSiwysiB78-unsplash.jpg");
      break;
    default:
      setDescription("");
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
        value={year}
        onChange={(e) => {
          setYear(e.target.value);
        }}
      >
        <MenuItem value={"2014"}>2014</MenuItem>
        <MenuItem value={"2015"}>2015</MenuItem>
        <MenuItem value={"2016"}>2016</MenuItem>
        <MenuItem value={"2017"}>2017</MenuItem>
        <MenuItem value={"2018"}>2018</MenuItem>
        <MenuItem value={"2019"}>2019</MenuItem>
        <MenuItem value={"2020"}>2020</MenuItem>
        <MenuItem value={"2021"}>2021</MenuItem>
        <MenuItem value={"2022"}>2022</MenuItem>
        <MenuItem value={"2023"}>2023</MenuItem>
      </Select>
    </div>
  );
};
export default Header;
