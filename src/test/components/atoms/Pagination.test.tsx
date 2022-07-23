import React from 'react';
import Pagination from 'src/components/atoms/Pagination';
import { render, cleanup, screen } from '@testing-library/react';


describe('test Pagination component', () => {

  afterEach(()=> {
    cleanup();
  })

  beforeEach(()=> {
    render(<Pagination testId='pagination' pages={10} />);
  })
  test('Should Pagination exist', () => {
    const pagination = screen.getByTestId('pagination');
    expect(pagination).toBeInTheDocument();
  });
})
