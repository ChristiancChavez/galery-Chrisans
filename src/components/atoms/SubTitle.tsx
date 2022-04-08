import React from 'react';

type subTitleProps = {
  title: string
}
const SubTitle = ({title}:subTitleProps) => {
  return (
    <h3 aria-label='subtitle'>
      {title}
    </h3>
  );
};

export default SubTitle;
