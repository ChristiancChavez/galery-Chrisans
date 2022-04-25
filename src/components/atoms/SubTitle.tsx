import React from 'react';

type subTitleTypes = {
  text: string,
  testId: string
}
const SubTitle = ({text = '', testId}:subTitleTypes) => {
  return (
    <h3 aria-label={text} data-testid={testId}>
      {text}
    </h3>
  );
};

export default SubTitle;
