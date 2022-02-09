import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useGlobalContext } from "../context";

const SearchBar = () => {
  const { query, setQuery, handleClick } = useGlobalContext();

  return (
    <Box
      className="form-wrapper"
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField
        value={query}
        className="input"
        type="text"
        label="e.g Pato Donald"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        className="btn"
        type="button"
        variant="outlined"
        onClick={handleClick}
      >
        Buscar
      </Button>
    </Box>
  );
};

export default SearchBar;
