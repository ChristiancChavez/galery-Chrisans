import React from "react";
import Calendar  from "../../components/atoms/Calendar";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Calendar/Calendar',
  component: Calendar,
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => <Calendar {...args} />;

export const calendar = Template.bind({})
calendar.args = {
  testId: 'Cuadros',
  label: 'cuadros'
};



