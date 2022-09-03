import React from "react";
import Textarea  from "../components/atoms/Textarea";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Textarea/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const textareaShare = Template.bind({})
textareaShare.args = {
  placeholder: 'Escribe mensajes complementarios',
  testId: 'mensaje de cuota'
};

export const textareMessage = Template.bind({})
textareMessage.args = {
  placeholder: 'Escribe mensajes complementarios',
  testId: 'mensaje de recado'
};
