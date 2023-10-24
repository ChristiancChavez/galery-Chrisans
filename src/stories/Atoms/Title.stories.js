import React from "react";
import Title from "../../components/atoms/Title";
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
  title: 'Components/Title/Title',
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const titleAddTitle = Template.bind({})
titleAddTitle.args = {
  text: ' Agregar Cliente',
  testId: 'title'
};
 