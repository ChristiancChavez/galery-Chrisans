import React from "react";
import ActionsButton from "src/components/molecules/ActionsButton";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
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
  { id: '1', label: "Nuevo Cliente", testId: 'newClient', icon: PersonAddAltIcon },
  { id: '2', label: "Buscar Cliente", testId: 'searchClient', icon: PersonSearchIcon},
  { id: '3', label: "Llamar Cliente", testId: 'callClient', icon: PhoneForwardedIcon},
  { id: '4', label: "Buenos Cliente", testId: 'goodClient', icon: PlaylistAddCheckIcon},
  { id: '5', label: "Malos Cliente", testId: 'badClient', icon: PlaylistRemoveIcon},
];

export const actionsButtonClient = Template.bind({})
actionsButtonClient.args = {
  buttons: buttonsData
};
