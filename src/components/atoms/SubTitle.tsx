import React from 'react';

type SubTitleTypes = {
  text: string,
  testId: string,
  marginTop: string
}
const SubTitle = ({ text = '', testId, marginTop }:SubTitleTypes ) => (
  <h3 
    style={{marginTop: `${marginTop}px`}}
    aria-label={text} 
    data-testid={testId}
  >
    {text}
  </h3>
);

export default SubTitle;
