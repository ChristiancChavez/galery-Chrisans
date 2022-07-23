import React from 'react';

type SubTitleTypes = {
  text: string,
  testId: string
}
const SubTitle = ({text = '', testId}: SubTitleTypes) => {
  return (
    <h3 aria-label={text} data-testid={testId}>
      {text}
    </h3>
  );
};

export default SubTitle;
