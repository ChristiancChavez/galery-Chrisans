import React from "react";
import SubTitle from '../../components/atoms/SubTitle';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/SubTitle/SubTitle',
  component: SubTitle,
};

const Template = (args) => <SubTitle {...args} />;

export const subTitleClients = Template.bind({})
subTitleClients.args = {
  text: 'Clients'
}

export const subTitleSearchClients = Template.bind({})
subTitleSearchClients.args = {
  text: 'Buscar'
}

export const subTitleCallClients = Template.bind({})
subTitleCallClients.args = {
  text: 'Cobranza'
}

export const subTitleGoodClients = Template.bind({})
subTitleGoodClients.args = {
  text: 'Buenos'
}

export const subTitleMalosClients = Template.bind({})
subTitleMalosClients.args = {
  text: 'Malos'
}

