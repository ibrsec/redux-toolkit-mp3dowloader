import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../features/mp3Slice";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");


  const dispatch = useDispatch();

 
  const handleSubmit = (e) => {
e.preventDefault();
const id = searchValue.slice(searchValue.indexOf("=")+1)
console.log(searchValue);
console.log(id);


dispatch(getData(id))
// setSearchValue("")
  }
  return (
    <>
      <Typography
        variant="h4"
        align="center"
        my={3}
        sx={{ color: "#360a6d", fontWeight: "700" }}
      >
        Youtube Mp3 Dowloader
      </Typography>
      <Box
      component="form"
      onSubmit={handleSubmit}
        display="flex"
        sx={{
          maxWidth: "80%",
          margin: "auto 50px",
        }}
      >
        <TextField
          fullWidth
          label="Link Here"
          id="fullWidth"
          sx={{ backgroundColor: "#6dd8fe", borderRadius: "5px" }}
          value={searchValue}
          onChange={(e)=>setSearchValue(e.target.value)}
        />

        <Button
        type="submit"
          variant="contained"
          sx={{ backgroundColor: "#1d8dc4", color: "#fff" }}
        >
          Convert
        </Button>
      </Box>
    </>
  );
};

export default SearchBar;
