import React from 'react';

type titleProps = {
  title: string,
  testId: string
}
const Title = ({title, testId}:titleProps) => {
  return (
    <h1 aria-label={`title ${title}`} data-testid={testId}>
      {title}
    </h1>
  );
};

export default Title;