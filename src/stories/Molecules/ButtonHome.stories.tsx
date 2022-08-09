import React from "react";
import ButtonHome  from "src/components/molecules/ButtonHome";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

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



