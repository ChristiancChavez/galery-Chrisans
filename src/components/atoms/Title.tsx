import React from 'react';

type TitleTypes = {
  title: string,
  testId: string
}
const Title = ({ title, testId }:TitleTypes ) => (
    <h1 
      aria-label={`title ${title}`} 
      data-testid={testId}
    >
      {title}
    </h1>
  );

export default Title;
