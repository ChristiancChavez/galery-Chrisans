import React from "react";
import ButtonHome from "components/molecules/ButtonHome";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/ButtonIcon/Button',
  component: ButtonHome,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <ButtonHome {...args} />;

export const buttonFormAddClient = Template.bind({})
buttonFormAddClient.args = {
  testIdButton: 'addClientForm',
  text: 'Crear Cliente',
  label: 'Crear Cliente'
};

