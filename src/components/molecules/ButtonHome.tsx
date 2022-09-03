import React from 'react';
import IconButton from 'src/components/atoms/IconButton';
import Subtitle from 'src/components/atoms/SubTitle';
import Stack from '@mui/material/Stack';

type ButtonHomeTypes= {
  label: string,
  testIdButton: string,
  text: string,
  testIdSubtitle: string
  children?: React.ReactChild;
}
const ButtonHome = ({ label, testIdButton, text, testIdSubtitle, children }:ButtonHomeTypes ) => {
  return (
    <Stack
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={0}
    >
      <IconButton label={label} testId={testIdButton}>
        {children}
      </IconButton>
      <Subtitle text={text} testId={testIdSubtitle} />
    </Stack>
  );
};

export default ButtonHome;
