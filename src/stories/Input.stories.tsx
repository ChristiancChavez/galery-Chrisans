import React from "react";
import InputForm  from "src/components/atoms/Input";
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
  title: 'Components/InputForm/InputForm',
  component: InputForm,
} as ComponentMeta<typeof InputForm>;

const Template: ComponentStory<typeof InputForm> = (args) => <InputForm {...args} />;

export const nameInput = Template.bind({})
nameInput.args = {
  placeholder: 'Name',
  type: 'text'
};

export const pictureInput = Template.bind({})
pictureInput.args = {
  placeholder: 'Artículo',
  type: 'text'
};

export const shareInput = Template.bind({})
shareInput.args = {
  placeholder: 'Cuotas',
  type: 'number'
};



