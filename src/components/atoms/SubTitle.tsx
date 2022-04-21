import React from 'react';

type subTitleProps = {
  title: string,
  testId: string
}
export const SubTitle = ({title, testId}:subTitleProps) => {
  return (
    <h3 aria-label='subtitle' data-testid={testId}>
      {title}
    </h3>
  );
};
