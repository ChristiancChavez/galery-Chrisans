import { render, screen } from '@testing-library/react';
import React from 'react';
import { ButtonIcon } from '../../../components/atoms/IconButton';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { mount } from 'enzyme';

describe('test IconButton component', () => {

  test('button exist', () => {
    const  { getByTestId } = render(<ButtonIcon label='addClients' testId="addClient"><PlaylistAddCheckIcon /></ButtonIcon>);
    const button = getByTestId('addClient');
    expect(button).toBeTruthy();
  });

  
  test('tooltip exist', () => {
    render(<ButtonIcon label='addClients' testId="addClient"><PlaylistAddCheckIcon /></ButtonIcon>);
    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toBeTruthy();
  });

  test('buttons onClick', () => {
    const logSpy = jest.spyOn(console, 'log');
    const wrapper= mount(<ButtonIcon label='addClients' testId="addClient"><PlaylistAddCheckIcon /></ButtonIcon>);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(logSpy).toHaveBeenCalledTimes(1);
  });

}); 