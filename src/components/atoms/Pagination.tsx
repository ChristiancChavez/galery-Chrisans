import React from 'react';
import Pagination from '@mui/material/Pagination';


type clientsPaginationTypes = {
  testId: string,
  pages: number
}

const ClientsPagination = ( {testId, pages }: clientsPaginationTypes) => <Pagination data-testid={testId} count={pages} />

export default ClientsPagination;
