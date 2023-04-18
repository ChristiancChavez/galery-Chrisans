import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
export interface CalendarTypes {
  testId: string,
  label: string
}

const Calendar = ({ testId, label }:CalendarTypes ) => {
  const [value, setValue] = useState<unknown>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        label={label}
        aria-label='este es un calendario para asignar fechas'
        data-testid={testId}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default Calendar;
