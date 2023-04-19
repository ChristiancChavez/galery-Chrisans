import React, { useState } from 'react';
import { Select, MenuItem, InputLabel, SelectChangeEvent  } from '@mui/material';
export interface SelectTypes {
  label: string,
  id: string,
  testId: string,
  //onChange: (() => void),
  items: {value: string, id: string, name: string}[]
}

const Dropdown = ({ label, id, testId, items }:SelectTypes ) => {

  const [valueSelect, setValueSelect] = useState('');

  const handleChange = (event: SelectChangeEvent ) => {
    setValueSelect(event.target.value as string);
  };
  return (
    <>
      <InputLabel data-testid="select_label">{label}</InputLabel>
      <Select
        labelId={`${label}-${id}`}
        data-testid={testId}
        id={testId}
        value={valueSelect}
        label={label}
        onChange={handleChange}
        aria-label={`Selecciona ${label}`}
      >
        {
          items.map(item => <MenuItem  className='menuItem' value={item.value} data-testId={'menuItem'} key={item.id} aria-label={item.name}>{item.name}</MenuItem>)
        }
      </Select>
    </>
  );
};

export default Dropdown;
