import React from 'react';
import Pagination from '@mui/material/Pagination';
import { TestIdType } from '../../Types/types';

const ClientsPagination = ( { testId, pages }) => (
  <Pagination 
    data-testid={testId} 
    count={pages}
    aria-label={`Ésta paginación posee ${pages} páginas`}
  />
)

export default ClientsPagination;
