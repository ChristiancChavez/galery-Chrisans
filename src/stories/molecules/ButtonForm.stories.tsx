import React from "react";
import ButtonForm from "components/molecules/ButtonForm";
import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
  title: 'Components/ButtonIcon/Button',
  component: ButtonForm,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof ButtonForm>;

const Template: ComponentStory<typeof ButtonForm> = (args) => <ButtonForm {...args} />;

export const buttonFormAddClient = Template.bind({})
buttonFormAddClient.args = {
  testId: 'addClientForm',
  text: 'Crear Cliente',
  label: 'Crear Cliente'
};

