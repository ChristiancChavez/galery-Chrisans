import React from "react";
import { BasicTypeText } from 'src/Types/types';

const Paragraph = ({ text='', testId }:BasicTypeText ) => (
    <p
      data-testid={testId}
      aria-label={`Se despliega el siguiente texto: ${text}`}
    >
      {text}
    </p>
  );

export default Paragraph;
