import React from 'react';
import { Select, MenuItem } from '@mui/material';

type selectTypes = {
  label: string,
  id: string,
  testId: string,
  onChange: (() => void),
  items: [{value: number, itemId: number, name: string}]
}

const Dropdown = ({label, id, testId, onChange, items}: selectTypes) => {
  return (
    <Select
      labelId={`${label}-${id}`}
      data-testid={testId}
      id={testId}
      value=''
      label={label}
      onChange={onChange}
      aria-label={`Selecciona ${label}`}
    >
      {
        items.map(item => <MenuItem value={item.value} data-testId={item.itemId} key={item.itemId} aria-label={item.name}>{item.name}</MenuItem>)
      }
    </Select>
  );
};

export default Dropdown;