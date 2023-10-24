import React from "react";
import Notification  from "../../components/atoms/Notification";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Notification/Notification',
  component: Notification,
};

const Template = (args) => <Notification {...args} />;

export const errorNotification = Template.bind({})
errorNotification.args = {
  status: 'error',

};

export const warningNotification = Template.bind({})
warningNotification.args = {
  status: 'warning',
};

export const infoNotification = Template.bind({})
infoNotification.args = {
  status: 'info',
};

export const successNotification = Template.bind({})
successNotification.args = {
  status: 'success',
};
