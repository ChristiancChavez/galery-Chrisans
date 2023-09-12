import React, { useState } from 'react';
import { Select, MenuItem, InputLabel } from '@mui/material';
import PropTypes from 'prop-types';

const Dropdown2 = ({ label, id, testId, items, value, onChange, onBlur, error, helperText }) => {
  return (
    <>
      <InputLabel data-testid="select_label">{label}</InputLabel>
      <Select
        labelId={`${label}-${id}`}
        data-testid={testId}
        id={testId}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error} // Pass the error prop for displaying form validation errors
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
      {helperText && <div>{helperText}</div>} {/* Display the helper text if there's an error */}
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
  value: PropTypes.string.isRequired, // Add value prop for controlling the selected value
  onChange: PropTypes.func.isRequired, // Add onChange prop for handling value changes
  onBlur: PropTypes.func.isRequired, // Add onBlur prop for handling blur events
  error: PropTypes.bool, // Add error prop for displaying form validation errors
  helperText: PropTypes.string, // Add helperText prop for displaying form validation error messages
};

export default Dropdown2;
