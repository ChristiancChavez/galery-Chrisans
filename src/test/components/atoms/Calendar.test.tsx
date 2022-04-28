import React from 'react';
import Calendar from '../../../components/atoms/Calendar';
import { render, screen } from '@testing-library/react';

describe('test Calendar component', () => {

  test('test existed Calendar', () => {
    render(<Calendar testId='cuotas' label='Calendar para asignar cuotas' />);
    const calendarTexts = screen.getAllByText('Calendar para asignar cuotas');
    expect(calendarTexts.length).toBe(2);
  });
})