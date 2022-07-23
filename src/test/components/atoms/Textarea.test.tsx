import React from 'react';
import Textarea from 'src/components/atoms/Textarea';
import { render, screen } from '@testing-library/react';

describe('test Textarea component', () => {
  it('render Textarea component', () => {
    render(<Textarea placeholder='escribe tu mensajes' testId='mensajes_complementarios' />);
    const textarea = screen.getByPlaceholderText('escribe tu mensajes');
    expect(textarea).toBeTruthy();
  })
})
