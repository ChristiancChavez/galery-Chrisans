import React from 'react';

type SubTitleTypes = {
  text: string,
  testId: string
}
const SubTitle = ({ text = '', testId }:SubTitleTypes ) => (
  <h3 
    style={{marginTop:'10px'}}
    aria-label={text} 
    data-testid={testId}
  >
    {text}
  </h3>
);

export default SubTitle;
