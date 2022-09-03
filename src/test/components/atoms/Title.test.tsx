import React from 'react';
import Title from 'src/components/atoms/Title';
import { render, screen, cleanup } from '@testing-library/react';

describe('test title component', () => {
  afterAll(() => {
    cleanup();
  }); 

  beforeAll(() => {
    render(<Title testId='Clients' text='Clientes' />);
  }) 

  test('test existed Title', () => {
    const heading = screen.queryByText('Clientes');
    expect(heading).toBeInTheDocument();
  });

  test('test not existed Title', () => {
    const heading = screen.queryByText('Cliente');
    expect(heading).not.toBeInTheDocument();
  });
})