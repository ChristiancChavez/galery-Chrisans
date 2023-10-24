import React from 'react';

const Title = ({ text, testId }) => (
    <h1 
      aria-label={`title ${text}`} 
      data-testid={testId}
    >
      {text}
    </h1>
  );

export default Title;
