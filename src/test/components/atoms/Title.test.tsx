import React from 'react';
import Title from '../../../components/atoms/Title';
import { render, screen, cleanup } from '@testing-library/react';

describe('test Calendar component', () => {
  afterAll(() => {
    cleanup();
  }); 

  beforeAll(() => {
    render(<Title testId='Clients' title='Clientes' />);
  }) 

  test('test existed Title', () => {
    const heading = screen.getByText('Clientes');
    expect(heading).toBeInTheDocument();
  });

  test('test not existed Title', () => {
    const heading = screen.queryByText('Cliente');
    expect(heading).not.toBeInTheDocument();
  });
})