import React from 'react';

type titleTypes = {
  title: string,
  testId: string
}
const Title = ({title, testId}:titleTypes) => {
  return (
    <h1 aria-label={`title ${title}`} data-testid={testId}>
      {title}
    </h1>
  );
};

export default Title;