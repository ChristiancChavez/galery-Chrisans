import React from "react";
import Calendar  from "../components/atoms/Calendar";
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
  title: 'Components/Dropdown/Dropdown',
  component: Calendar,
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => <Calendar {...args} />;

export const picturesDropdown = Template.bind({})
picturesDropdown.args = {
  label: 'Calendario para asignar cuotas',
  testId: 'Cuadros'
};



