import { TextField } from "@mui/material";
import CustomButton from "./Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
type Props = { variant: "outlined" | "text" | "contained" };

function SearchBar(props: Props) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>("");

  function handleSearch() {
    navigate(`/search/${searchTerm}`);
  }
  return (
    <>
      <TextField
        label="Search"
        variant="outlined"
        sx={{ borderRadius: "20px" }}
        fullWidth
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <CustomButton
        content="Search"
        variant={props.variant}
        sx={{
          borderRadius: "16px",
          height: "43px",
          width: "137px",
          boxShadow: "none",
        }}
        onClick={() => {
          handleSearch();
        }}
      >
        {" "}
      </CustomButton>
    </>
  );
}

export default SearchBar;
