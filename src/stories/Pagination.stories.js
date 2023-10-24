import React from "react";
import Pagination  from "../components/atoms/Pagination";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Pagination/Pagination',
  component: Pagination,
};

const Template = (args) => <Pagination {...args} />;

export const pagination = Template.bind({})
pagination.args = {
  testId: 'pagination_clients',
  pages: 10
};
