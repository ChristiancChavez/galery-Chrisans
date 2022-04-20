import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent  } from '@mui/material';

type selectTypes = {
  label: string,
  id: number,
  testId: string,
  onChange: (() => void),
  items: {value: string, itemId: number, name: string}[]
}

const Dropdown = ({label, id, testId, onChange, items}: selectTypes) => {

  const [valueSelect, setValueSelect] = React.useState('');

  const handleChange = (event: SelectChangeEvent ) => {
    setValueSelect(event.target.value as string);
  };
  return (
    <FormControl fullWidth>
        <InputLabel data-testid="-select_label">{label}</InputLabel>
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
          items.map(item => <MenuItem value={item.value} data-testId={item.itemId} key={item.itemId} aria-label={item.name}>{item.name}</MenuItem>)
        }
      </Select>
    </FormControl>
  );
};

export default Dropdown;