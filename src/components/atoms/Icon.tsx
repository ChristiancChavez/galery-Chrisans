import React from 'react';
import IconButton from '@mui/material/IconButton';

type IconTypes = {
  IconName: React.FunctionComponent;
}
const Icon = ({ IconName }:IconTypes ) => {
  return (
    <IconButton aria-label="delete">
      <IconName />
    </IconButton>
  );
};

export default Icon;