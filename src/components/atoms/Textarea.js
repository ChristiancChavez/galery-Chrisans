import React from 'react';
import { TextareaAutosize } from '@mui/base';
import { TestIdType } from '../../Types/types';

const Textarea = ({ placeholder, testId }) => (
    <TextareaAutosize 
      aria-label="Textarea para mensajes complementarios"
      minRows={3}
      placeholder={placeholder}
      style={{ width: 200 }} 
      data-testid={testId}
    />
  );

export default Textarea;
