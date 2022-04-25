import React from 'react';
import Dropdown from '../../../components/atoms/Dropdown';
import { mount } from 'enzyme';
import { render, screen } from '@testing-library/react';

const items = [{value: 'Sagrado corazón', itemId: 5, name: 'Sagrado corazón'},{value: 'misericordioso', itemId: 3, name: 'misericordioso'},
{value: 'Sagrada familia', itemId: 4, name: 'Sagrada familia'},{value: 'Guadalupe', itemId: 8, name: 'Guadalupe'}];
describe('test Dropdown', () => {
  const mockFunc = jest.fn();
  test('inputLabel exist', () => {
    const  wrapper = mount(<Dropdown label='Cuadros' id={3} testId='cuadros' onChange={mockFunc} items={items}></Dropdown>);
    const inputLabel = wrapper.find('label');
    expect(inputLabel).toBeTruthy();
  });

  test('select exist', () => {
    const  wrapper = mount(<Dropdown label='Cuadros' id={3} testId='cuadros' onChange={mockFunc} items={items}></Dropdown>);
    const select = wrapper.find('select');
    expect(select).toBeTruthy();
  });

  //como puedo testear el número de options dependiendo el array items que le paso?
  test('numbers of options', () => {
    render(<Dropdown label='Cuadros' id={3} testId='cuadros' onChange={mockFunc} items={items}></Dropdown>);
    const menuItem = screen.getAllByTagName('menuitem');
    console.log(menuItem)
  });
})

