import * as React from 'react';
import { useGlobalContext } from '../context';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationOutlined() {
  const { handleChange } = useGlobalContext();

  return (
    <footer>
      <Stack spacing={2}>
        <Pagination
          onChange={ handleChange }
          count={5}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </footer>
  );
}