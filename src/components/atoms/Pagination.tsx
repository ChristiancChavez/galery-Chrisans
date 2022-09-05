import React from 'react';
import Pagination from '@mui/material/Pagination';
import { TestIdType } from '../../Types/types';


interface ClientsPaginationTypes extends TestIdType {
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
