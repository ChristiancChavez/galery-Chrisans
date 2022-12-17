import React from 'react';
import { TextareaAutosize } from '@mui/base';
import { TestIdType } from '../../Types/types';

export interface TextareaTypes extends TestIdType {
  placeholder: string,
}

const Textarea = ({ placeholder, testId }:TextareaTypes ) => (
    <TextareaAutosize 
      aria-label="Textarea para mensajes complementarios"
      minRows={3}
      placeholder={placeholder}
      style={{ width: 200 }} 
      data-testid={testId}
    />
  );

export default Textarea;
