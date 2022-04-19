import React from "react";
import Dropdown  from "../components/atoms/Dropdown";
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
  title: 'Components/Dropdown/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const picturesDropdown = Template.bind({})
picturesDropdown.args = {
  label: 'Cuadros',
  items: [{value: 5, itemId: 5, name: 'Sagrado corazón'},{value: 5, itemId: 3, name: 'misericordioso'},
  {value: 5, itemId: 4, name: 'Sagrada familia'},{value: 5, itemId: 8, name: 'Sagrado corazón'}]
};



