import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { make_pagination } from '..';

export default function PaginationBlock() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
   make_pagination([value])
    console.log(value)
  };


  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange}  />
    </Stack>
  );
}