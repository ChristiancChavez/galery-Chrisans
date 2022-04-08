import React from 'react';
import { Select } from '@mui/material';

type selectType = {
  label: string,
  id: string,
  testId: string,
  onChange: (() => void)
}

const Dropdown = ({label, id, testId, onChange}: selectType) => {
  return (
    <Select
      labelId={`${label}-${id}`}
      data-testid={testId}
      id={testId}
      value=''
      label={label}
      onChange={onChange}
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  );
};

export default Dropdown;