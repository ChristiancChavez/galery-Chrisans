import React from 'react';
import { Input } from '@mui/material';

type InputTypes = {
  placeholder: string,
  type: string
}

const InputForm = ({ placeholder, type }:InputTypes ) => (
  <Input 
    aria-label={`Este es un input para ${placeholder}`}
    placeholder={placeholder} 
    type={type} 
    required 
  />
);

export default InputForm;
