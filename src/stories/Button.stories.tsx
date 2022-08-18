import React from "react";
import Button from "components/atoms/Button";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
  title: 'Components/ButtonIcon/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const labelClients = Template.bind({})
labelClients.args = {
  children: <PersonAddAltIcon />,
  testId: 'addClient'
};

export const labelSearchClient = Template.bind({})
labelSearchClient.args = {
  children: <PersonSearchIcon />,
  testId: 'searchClient'
};

export const labelCallClient = Template.bind({})
labelCallClient.args = {
  children: <PhoneInTalkIcon />,
  testId: 'ClientToCall'
};

export const labelGoodClient = Template.bind({})
labelGoodClient.args = {
  children: <PlaylistAddCheckIcon />,
  testId: 'goodClients'
};

export const labelBadClient = Template.bind({})
labelBadClient.args = {
  children: <PlaylistRemoveIcon />,
  testId: 'badClients'
};
