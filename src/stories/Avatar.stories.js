import React from "react";
import Avatar  from "../components/atoms/Avatar";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Avatar/Avatar',
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const avatarRogelio = Template.bind({})
avatarRogelio.args = {
  user: 'Rogelio',
  testId: 'rogelio'
};

export const avatarStella = Template.bind({})
avatarStella.args = {
  user: 'Stella',
  testId: 'stella'
};

export const avatarEnrique = Template.bind({})
avatarEnrique.args = {
  user: 'Enrique',
  testId: 'enrique'
};
