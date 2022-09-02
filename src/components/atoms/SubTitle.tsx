import React from 'react';
import { BasicTypeText } from 'src/Types/types';

const SubTitle = ({ text = '', testId }:BasicTypeText ) => (
  <h3 
    aria-label={text} 
    data-testid={testId}
  >
    {text}
  </h3>
);

export default SubTitle;
