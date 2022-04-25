import React from 'react';
import Input from '../../../components/atoms/Input';
import { render, screen } from '@testing-library/react';

describe('test Input component', () => {
  it('render Input component', () => {
    render(<Input placeholder='cuotas' type='number' />);
    const input = screen.getByPlaceholderText('cuotas');
    expect(input).toBeInTheDocument();
  })
})
