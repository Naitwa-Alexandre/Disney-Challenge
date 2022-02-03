import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchBar = () => {
  return <Box
        className='form-wrapper'
        component="form"
        noValidate
        autoComplete="off">
      <TextField
        className="input"
        type="text"
        label="e.g Pato Donald"
      />
      <Button
        className="btn"
        type="button"
        variant="outlined"
      >
        Buscar
      </Button>
  </Box>;
};

export default SearchBar;
