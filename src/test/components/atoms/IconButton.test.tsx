import { render, screen } from '@testing-library/react';
import React from 'react';
import { IconButton } from '../../../components/atoms/IconButton';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { mount  } from 'enzyme';

describe('test IconButton component', () => {

  test('button exist', () => {
    const  { getByTestId } = render(<IconButton label='addClients' testId="addClient"><PlaylistAddCheckIcon /></IconButton>);
    const button = getByTestId('addClient');
    expect(button).toBeTruthy();
  });

  
  test('tooltip exist', () => {
    render(<IconButton label='addClients' testId="addClient"><PlaylistAddCheckIcon /></IconButton>);
    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toBeTruthy();
  });

  test('buttons onClick', () => {
    const logSpy = jest.spyOn(console, 'log');
    const wrapper= mount(<IconButton label='addClients' testId="addClient"><PlaylistAddCheckIcon /></IconButton>);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(logSpy).toHaveBeenCalledTimes(1);
  });

}); 