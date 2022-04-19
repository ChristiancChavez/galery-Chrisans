import React from "react";
import Notification  from "../components/atoms/Notification";
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
  title: 'Components/Notification/Notification',
  component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => <Notification {...args} />;

export const errorNotification = Template.bind({})
errorNotification.args = {
  status: 'error',
  buttonClose: true
};

export const warningNotification = Template.bind({})
warningNotification.args = {
  status: 'warning',
  buttonClose: true
};

export const infoNotification = Template.bind({})
infoNotification.args = {
  status: 'info',
  buttonClose: true
};

export const successNotification = Template.bind({})
successNotification.args = {
  status: 'success',
  buttonClose: true
};

export const errorFalseNotification = Template.bind({})
errorFalseNotification.args = {
  status: 'error',
  buttonClose: false
};

export const warningFalseNotification = Template.bind({})
warningFalseNotification.args = {
  status: 'warning',
  buttonClose: false
};

export const infoFalseNotification = Template.bind({})
infoFalseNotification.args = {
  status: 'info',
  buttonClose: false
};

export const successFalseNotification = Template.bind({})
successFalseNotification.args = {
  status: 'success',
  buttonClose: false
};
