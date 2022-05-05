import { Pagination, PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';

export default function PaginationBase({
  totalPages,
  currentPage,
  paginate,
  query,
}) {
  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={(_, num) => paginate(num)}
      sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}
      renderItem={item => (
        <PaginationItem
          component={Link}
          to={
            query
              ? `?page=${currentPage}&name=${query}`
              : `/characters?page=${item.page}`
          }
          {...item}
        />
      )}
    />
  );
}
