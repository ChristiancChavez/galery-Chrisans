import React from 'react';
import ButtonIcon from 'src/components/atoms/IconButton';
import { Stack, Divider } from '@mui/material';

type ActionsButtonTypes = {
  buttons: { id: string, label: string, testId: string, icon: React.ReactChild }[]
}
const ActionsButton = ({ buttons }:ActionsButtonTypes ) => {
  return (
    <Stack
      direction="column"
      divider={<Divider orientation="horizontal" flexItem />}
      spacing={2}
    >
      {buttons.map(button => <ButtonIcon key={button.id} label={button.label} testId={button.testId}>{button.icon}</ButtonIcon> )}
    </Stack>
  );
};

export default ActionsButton;
