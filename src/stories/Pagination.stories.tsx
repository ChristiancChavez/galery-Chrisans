import React from "react";
import Pagination  from "src/components/atoms/Pagination";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Pagination/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const pagination = Template.bind({})
pagination.args = {
  testId: 'pagination_clients',
  pages: 10
};
