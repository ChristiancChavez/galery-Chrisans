import React, { ChangeEvent, FocusEvent } from 'react';
import { Input } from '@mui/material';
import { TestIdType } from '../../Types/types';

interface InputFormProps extends TestIdType {
  placeholder: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<any>) => void;
  onBlur: (e: FocusEvent<any>) => void; // Change the type annotation here
  error: boolean | undefined;
}

const InputForm = ({ placeholder, type, testId, name, value, onChange, onBlur, error }: InputFormProps) => {
  return (
    <div>
      <Input 
        aria-label={`Este es un input para ${placeholder}`}
        placeholder={placeholder} 
        type={type} 
        required
        data-testid={testId}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
      />
    </div>
  )
};

export default InputForm;
