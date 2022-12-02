import React from 'react';
import ActionsButton from 'src/components/molecules/ActionsButton';
import { render, screen } from '@testing-library/react';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';

describe('test ActionsButton component', () => {

  const buttonsData = [
    { id: '1', label: "Nuevo Cliente", testId: 'newClient', icon: PersonAddAltIcon },
    { id: '2', label: "Buscar Cliente", testId: 'searchClient', icon: PersonSearchIcon},
    { id: '3', label: "Llamar Clientes", testId: 'callClient', icon: PhoneForwardedIcon},
    { id: '4', label: "Buenos Clientes", testId: 'goodClient', icon: PlaylistAddCheckIcon},
    { id: '5', label: "Malos Clientes", testId: 'badClient', icon: PlaylistRemoveIcon},
  ];

  test('test existed new client button', () => {
    render(<ActionsButton buttons={buttonsData} />);
    const newClientIcon = screen.getByTestId('newClient');
    expect(newClientIcon).toBeInTheDocument();
  });

})