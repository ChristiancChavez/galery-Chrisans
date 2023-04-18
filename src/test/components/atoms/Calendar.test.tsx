import React from 'react';
import Calendar from 'src/components/atoms/Calendar';
import { render, screen, cleanup } from '@testing-library/react';

describe('test Calendar component', () => {
  
  afterEach(()=> {
    cleanup();
  })

  beforeEach(()=> {
    render(<Calendar testId='cuotas' label='escoge tu fecha' />);
  })
  test('test existed Calendar', () => {
    const calendarElement = screen.getByLabelText('escoge tu fecha');
    expect(calendarElement).toBeInTheDocument();
  });
})