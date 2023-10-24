import React from 'react';
import { Input } from '@mui/material';
import { TestIdType } from '../../Types/types';

const InputForm = ({ placeholder, type, testId }) => (
  <Input 
    aria-label={`Este es un input para ${placeholder}`}
    placeholder={placeholder} 
    type={type} 
    required
    data-testid={testId}
  />
)

export default InputForm;
