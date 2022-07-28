import React from 'react';
import Pagination from '@mui/material/Pagination';


type ClientsPaginationTypes = {
  testId: string,
  pages: number
}

const ClientsPagination = ( { testId, pages }:ClientsPaginationTypes ) => (
  <Pagination 
    data-testid={testId} 
    count={pages}
    aria-label={`Ésta paginación posee ${pages} páginas`}
  />
)

export default ClientsPagination;
