import React from "react";
import Paragraph  from "src/components/atoms/Paragraph";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Paragraph/Paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;

export const paragraph = Template.bind({})
paragraph.args = {
  testId: 'paragraph',
  text: 'epsilom jdfh nvfhuhe wlja ahuhggaugqaiurg wrghughgiuhpogiuh pwoirhgoigh  aorighaoigh aiohrg a aairhgighoig  ehiugpoghg '
};
