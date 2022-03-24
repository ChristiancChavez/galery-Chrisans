import React from "react";
import IconButton  from "../components/atoms/IconButton";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import { ComponentMeta } from '@storybook/react';


export default {
  title: 'IconButton',
  component: IconButton,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof IconButton>;

export const labelClients = () => <IconButton label='Clientes'><PersonAddAltIcon /></IconButton>;
export const labelSearchClient = () => <IconButton label='Buscar'><PersonSearchIcon /></IconButton>;
export const labelCallClient = () => <IconButton label='Cobranza'><PhoneInTalkIcon /></IconButton>;
export const labelGoodClient = () => <IconButton label='Buenos'><PlaylistAddCheckIcon /></IconButton>;
export const labelBadClient = () => <IconButton label='Malos'><PlaylistRemoveIcon /></IconButton>;
