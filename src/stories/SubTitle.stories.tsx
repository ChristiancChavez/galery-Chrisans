import React from "react";
import SubTitle from '../components/atoms/SubTitle';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'IconButton',
  component: SubTitle,
} as ComponentMeta<typeof SubTitle>;

const Template: ComponentStory<typeof SubTitle> = (args) => <SubTitle {...args} />;

export const subTitleClients = Template.bind({})
subTitleClients.args = {
  title: 'Clients'
}
export const subTitleSearchClients = () => <SubTitle title='Buscar'></SubTitle>;
export const subTitleCallClients = () => <SubTitle title='Cobranza'></SubTitle>;
export const subTitleGoodClients = () => <SubTitle title='Buenos'></SubTitle>;
export const subTitleMalosClients = () => <SubTitle title='Malos'></SubTitle>;
