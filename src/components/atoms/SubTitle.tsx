import React from 'react';

type SubTitleTypes = {
  text: string,
  testId: string,
  style: string
}
const SubTitle = ({ text = '', testId, style }:SubTitleTypes ) => (
  <h3 
    className={style}
    aria-label={text} 
    data-testid={testId}
  >
    {text}
  </h3>
);

export default SubTitle;
