import React from 'react';
import { Input } from '@mui/material';

type InputTypes = {
  placeholder: string,
  type: string
}

function InputForm({placeholder, type}:InputTypes) {
  return (
    <Input placeholder={placeholder} type={type} required />
  );
}

export default InputForm;