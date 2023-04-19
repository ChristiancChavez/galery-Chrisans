import React from "react";
import Dropdown  from "../../components/atoms/Dropdown";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Dropdown/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const picturesDropdown = Template.bind({})
picturesDropdown.args = {
  label: 'Cuadros',
  id: '1',
  testId: 'select_pictures',
  items: [{value: 'Sagrado corazón', id: '5', name: 'Sagrado corazón'},{value: 'misericordioso', id: '3', name: 'misericordioso'},
  {value: 'Sagrada familia', id: '4', name: 'Sagrada familia'},{value: 'Guadalupe', id: '8', name: 'Guadalupe'}]
};



