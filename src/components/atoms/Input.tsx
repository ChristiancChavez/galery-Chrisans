import React from 'react';
import { Input } from '@mui/material';

type InputTypes = {
  placeholder: string,
  type: string
}

const InputForm = ({ placeholder, type }:InputTypes ) => (
  <Input 
    placeholder={placeholder} 
    type={type} 
    required 
  />
);

export default InputForm;
