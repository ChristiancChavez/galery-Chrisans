import React from 'react';

type subTitleTypes = {
  title: string,
  testId: string
}
const SubTitle = ({title, testId}:subTitleTypes) => {
  return (
    <h3 aria-label={title} data-testId={testId}>
      {title}
    </h3>
  );
};

export default SubTitle;
