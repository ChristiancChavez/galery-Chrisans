import React from 'react';
import ButtonIcon from 'src/components/atoms/IconButton';
import Icon from 'src/components/atoms/Icon';
import { Stack, Divider } from '@mui/material';

type ActionsButtonTypes = {
  buttons: { id: string, label: string, testId: string, icon: any }[]
}
const ActionsButton = ({ buttons }:ActionsButtonTypes ) => {
  return (
    <Stack
      direction="column"
      divider={<Divider orientation="horizontal" flexItem />}
      spacing={2}
    >
      {buttons.map(button => (
        <ButtonIcon 
          key={button.id} 
          label={button.label} 
          testId={button.testId}
        >
          <Icon iconName={button.icon} />
        </ButtonIcon> 
        ))
      }
    </Stack>
  );
};

export default ActionsButton;
