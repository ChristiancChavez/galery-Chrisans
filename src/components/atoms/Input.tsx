import React from 'react';
import { Input } from '@mui/material';
import { TestIdType } from '../../Types/types';

export interface InputTypes extends TestIdType {
  placeholder: string,
  type: string,
  value: string
}

const InputForm = ({ placeholder, type, testId, value }:InputTypes ) => {

  return (
    <Input 
      aria-label={`Este es un input para ${placeholder}`}
      placeholder={placeholder} 
      type={type} 
      required
      data-testid={testId}
      value={value}
    />
  )
};

export default InputForm;
