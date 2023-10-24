import React, { useState } from 'react';
import { Select, MenuItem, SelectChangeEvent, InputLabel } from '@mui/material';

const Dropdown = ({ label, id, testId, items }) => {

  const [valueSelect, setValueSelect] = useState('');

  const handleChange = (event) => {
    setValueSelect(event.target.value);
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
          items.map(item => 
            <MenuItem  
              className='menuItem' 
              value={item.value} 
              data-testid={item.testId} 
              key={item.id} 
              aria-label={item.name}
              >
                {item.name}
            </MenuItem>)
        }
      </Select>
    </>
  );
};

export default Dropdown;
