import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { ButtonIcon } from '../../../components/atoms/IconButton';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

describe('test IconButton component', () => {

  test('button exist', () => {
    render(<ButtonIcon label='addClients' testId="addClient"><PlaylistAddCheckIcon /></ButtonIcon>);
    const button = screen.getByTestId('addClient');
    expect(button).toBeTruthy();
  });

  
  test('tooltip exist', () => {
    render(<ButtonIcon label='addClients' testId="addClient"><PlaylistAddCheckIcon /></ButtonIcon>);
    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toBeTruthy();
  });

  test('buttons onClick', () => {
    const handleClick = jest.spyOn(console, 'log');
    render(<ButtonIcon label='addClients' testId="addClient"><PlaylistAddCheckIcon /></ButtonIcon>);
    const button = screen.getByTestId('addClient');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

}); 