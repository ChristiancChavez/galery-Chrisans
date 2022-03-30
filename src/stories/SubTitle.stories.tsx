import React from "react";
import SubTitle from '../components/atoms/SubTitle';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/SubTitle/SubTitle',
  component: SubTitle,
} as ComponentMeta<typeof SubTitle>;

const Template: ComponentStory<typeof SubTitle> = (args) => <SubTitle {...args} />;

export const subTitleClients = Template.bind({})
subTitleClients.args = {
  title: 'Clients'
}

export const subTitleSearchClients = Template.bind({})
subTitleSearchClients.args = {
  title: 'Buscar'
}

export const subTitleCallClients = Template.bind({})
subTitleCallClients.args = {
  title: 'Cobranza'
}

export const subTitleGoodClients = Template.bind({})
subTitleGoodClients.args = {
  title: 'Buenos'
}

export const subTitleMalosClients = Template.bind({})
subTitleMalosClients.args = {
  title: 'Malos'
}

