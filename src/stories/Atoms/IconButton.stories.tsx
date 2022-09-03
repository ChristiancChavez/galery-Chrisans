import React from "react";
import ButtonIcon from "src/components/atoms/IconButton";
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
  children: <PhoneInTalkIcon />,
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
