import React from "react";
import { ButtonIcon }  from "../components/atoms/IconButton";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
  title: 'Components/ButtonIcon/ButtonIcon',
  component: ButtonIcon,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof ButtonIcon>;

const Template: ComponentStory<typeof ButtonIcon> = (args) => <ButtonIcon {...args} />;

export const labelClients = Template.bind({})
labelClients.args = {
  children: <PersonAddAltIcon />
};

export const labelSearchClient = Template.bind({})
labelSearchClient.args = {
  children: <PersonSearchIcon />
};

export const labelCallClient = Template.bind({})
labelCallClient.args = {
  children: <PhoneInTalkIcon />
};

export const labelGoodClient = Template.bind({})
labelGoodClient.args = {
  children: <PlaylistAddCheckIcon />
};

export const labelBadClient = Template.bind({})
labelBadClient.args = {
  children: <PlaylistRemoveIcon />
};
