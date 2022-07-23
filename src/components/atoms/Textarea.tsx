import React from 'react';
import { TextareaAutosize } from '@mui/base';

type TextareaTypes = {
  placeholder: string,
  testId: string
}

const Textarea = ({placeholder, testId}: TextareaTypes) => {
  return (
    <TextareaAutosize 
      aria-label="Textarea para mensajes complementarios"
      minRows={3}
      placeholder={placeholder}
      style={{ width: 200 }} 
      data-testid={testId}
    />
  );
}

export default Textarea;