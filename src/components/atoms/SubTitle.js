import React from 'react';

const SubTitle = ({ text = '', testId }) => (
  <h3 
    aria-label={text} 
    data-testid={testId}
  >
    {text}
  </h3>
);

export default SubTitle;
