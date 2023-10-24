import React from "react";
import Table  from "../components/atoms/Table";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Table/Table',
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const table = Template.bind({})
table.args = {
  testId: 'paragraph',
};
