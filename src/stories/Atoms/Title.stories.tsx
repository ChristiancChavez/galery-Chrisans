import React from "react";
import Title from "../../components/atoms/Title";
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
  title: 'Components/Title/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const titleAddTitle = Template.bind({})
titleAddTitle.args = {
  text: ' Agregar Cliente',
  testId: 'title'
};
 