import React from 'react';
import Input from 'src/components/atoms/Input';
import { render, screen } from '@testing-library/react';

describe('test Input component', () => {
  it('render Input component', () => {
    render(<Input placeholder='cuotas' type='number' testId='inputPayments' />);
    const input = screen.getByPlaceholderText('cuotas');
    expect(input).toBeInTheDocument();
  })
})
