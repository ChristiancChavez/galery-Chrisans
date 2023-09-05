import React, { useState } from 'react';
import { Select, MenuItem, InputLabel } from '@mui/material';

const Dropdown2 = ({ label, id, testId, items }) => {
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
        onChange={handleChange}
        aria-label={`Selecciona ${label}`}
      >
        {items.map((item) => (
          <MenuItem
            className="menuItem"
            value={item.value}
            data-testid={item.testId}
            key={item.id}
            aria-label={item.name}
          >
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

Dropdown2.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    testId: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        testId: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default Dropdown2;
