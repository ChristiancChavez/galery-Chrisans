import React from "react";
import ActionsButton from "src/components/molecules/ActionsButton";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // Import the correct type for IconProp
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Example FontAwesome icon

export default {
  title: 'Components/molecules/ActionsButton',
  component: ActionsButton,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof ActionsButton>;

const Template: ComponentStory<typeof ActionsButton> = (args) => <ActionsButton {...args} />;

// Map icon strings to actual icons
const iconMap: { [key: string]: IconProp } = {
  PersonAddAltIcon: <FontAwesomeIcon icon={faUser} /> as unknown as IconProp,
  // ... Map other icons similarly ...
};

const buttonsData = [
  { id: '1', label: "Nuevo Cliente", testId: 'newClient', icon: 'PersonAddAltIcon' },
  // ... Other button data ...
];

export const actionsButtonClient = Template.bind({})
actionsButtonClient.args = {
  buttons: buttonsData.map(button => ({
    ...button,
    icon: iconMap[button.icon], // Map the icon string to the actual icon
  })),
};
