import React from 'react';

type subTitleProps = {
  title: string
}
export const SubTitle = ({title}:subTitleProps) => {
  return (
    <h3 data-testid="subtitle">
      {title}
    </h3>
  );
};
