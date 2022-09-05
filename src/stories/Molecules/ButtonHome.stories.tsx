import React from "react";
import ButtonHome from "src/components/molecules/ButtonHome";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';

export default {
  title: 'Components/molecules/ButtonHome',
  component: ButtonHome,
} as ComponentMeta<typeof ButtonHome>;

const Template: ComponentStory<typeof ButtonHome> = (args) => <ButtonHome {...args} />;

export const buttonHomeNewClients = Template.bind({})
buttonHomeNewClients.args = {
  label:'Nuevos Clientes', 
  testIdButton:'newClientBtn', 
  text:'Nuevos Clientes', 
  testIdSubtitle:'newClientSubt', 
  children: <PersonAddAltIcon color="action" fontSize="large" />
};

export const buttonHomeCallClients = Template.bind({})
buttonHomeCallClients.args = {
  label:'Llamar Clientes', 
  testIdButton:'searchClientBtn', 
  text:'Llamar Clientes', 
  testIdSubtitle:'searchClientSubt', 
  children: <PhoneInTalkIcon color="action" fontSize="large" />
};

export const buttonHomeSearchClients = Template.bind({})
buttonHomeSearchClients.args = {
  label:'Buscar Clientes', 
  testIdButton:'searchClientBtn', 
  text:'Buscar Clientes', 
  testIdSubtitle:'searchClientSubt', 
  children: <PersonSearchIcon color="action" fontSize="large" />
};

export const buttonHomeGoodClients = Template.bind({})
buttonHomeGoodClients.args = {
  label:'Buenos Clientes', 
  testIdButton:'goodClientBtn', 
  text:'Buenos Clientes', 
  testIdSubtitle:'goodClientSubt', 
  children: <PlaylistAddCheckIcon color="action" fontSize="large" />
};

export const buttonHomeBadClients = Template.bind({})
buttonHomeBadClients.args = {
  label:'Malos Clientes', 
  testIdButton:'badClientBtn', 
  text:'Malos Clientes', 
  testIdSubtitle:'badClientSubt', 
  children: <PlaylistRemoveIcon color="action" fontSize="large" />
};
