import React from 'react';

type subTitleProps = {
  title: string
}
const SubTitle = ({title}:subTitleProps) => {
  return (
    <h3>
      {title}
    </h3>
  );
};

export default SubTitle;
