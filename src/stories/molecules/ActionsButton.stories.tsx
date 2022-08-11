import React from "react";
import ActionsButton from "src/components/molecules/ActionsButton";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
  title: 'Components/molecules/ActionsButton',
  component: ActionsButton,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof ActionsButton>;

const Template: ComponentStory<typeof ActionsButton> = (args) => <ActionsButton {...args} />;

const buttonsData = [
  { id: '1', label: "Nuevo Cliente", testId: '1', icon: <PersonAddAltIcon /> },
  { id: '2', label: "Buscar Cliente", testId: '2', icon: <PersonSearchIcon /> },
  { id: '3', label: "Llamar Cliente", testId: '3', icon: <PhoneInTalkIcon /> },
  { id: '4', label: "Buenos Cliente", testId: '4', icon: <PlaylistAddCheckIcon /> },
  { id: '5', label: "Malos Cliente", testId: '5', icon: <PlaylistRemoveIcon /> },
];

export const actionsButtonClient = Template.bind({})
actionsButtonClient.args = {
  buttons: buttonsData
};
