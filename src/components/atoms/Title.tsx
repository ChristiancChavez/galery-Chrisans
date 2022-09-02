import React from 'react';
import {BasicTypeText} from 'src/Types/types';


const Title = ({ text= '', testId }:BasicTypeText ) => (
    <h1 
      aria-label={`title ${text}`} 
      data-testid={testId}
    >
      {text}
    </h1>
  );

export default Title;
