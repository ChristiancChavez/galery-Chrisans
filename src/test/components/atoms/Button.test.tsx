import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import React from 'react';
import ButtonIcon from 'src/components/atoms/Button';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

describe('test IconButton component', () => {

  afterEach(()=> {
    cleanup()
  })

  beforeEach(()=> {
    render(<ButtonIcon label='addClients' testId="addClient"><PlaylistAddCheckIcon /></ButtonIcon>);
  })

  test('button exist', () => {
    
    const button = screen.getByTestId('addClient');
    expect(button).toBeTruthy();
  });

  
  test('tooltip exist', () => {
    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toBeTruthy();
  });

  test('buttons onClick', () => {
    const handleClick = jest.spyOn(console, 'log');
    const button = screen.getByTestId('addClient');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

}); 