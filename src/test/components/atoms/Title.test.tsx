import React from 'react';
import Title from '../../../components/atoms/Title';
import { render, screen } from '@testing-library/react';

describe('test Calendar component', () => {

  test('test existed Title', () => {
    render(<Title testId='Clients' title='Clientes' />);
    const heading = screen.getByText('Clientes');
    expect(heading).toBeInTheDocument();
  });

  test('test not existed Title', () => {
    render(<Title testId='Clients' title='Clientes' />);
    const heading = screen.queryByText('Cliente');
    expect(heading).not.toBeInTheDocument();
  });
})