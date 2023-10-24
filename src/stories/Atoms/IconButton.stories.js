import React from "react";
import Button from "components/atoms/Button";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/ButtonIcon/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <Button {...args} />;

export const labelClients = Template.bind({})
labelClients.args = {
  children: <PersonAddAltIcon />,
  testId: 'addClient',
  label:'Nuevo cliente'
};

export const labelSearchClient = Template.bind({})
labelSearchClient.args = {
  children: <PersonSearchIcon />,
  testId: 'searchClient',
  label:'Buscar cliente'
};

export const labelCallClient = Template.bind({})
labelCallClient.args = {
  children: <PhoneForwardedIcon />,
  testId: 'ClientToCall',
  label:'Llamar clientes'
};

export const labelGoodClient = Template.bind({})
labelGoodClient.args = {
  children: <PlaylistAddCheckIcon />,
  testId: 'goodClients',
  label:'Buenos clientes'
};

export const labelBadClient = Template.bind({})
labelBadClient.args = {
  children: <PlaylistRemoveIcon />,
  testId: 'badClients',
  label:'Malos clientes'
};
