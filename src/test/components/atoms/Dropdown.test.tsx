import React from 'react';
import Dropdown from 'src/components/atoms/Dropdown';
import { render, screen, cleanup } from '@testing-library/react';


const items = [
  {value: 'Sagrado corazón', id: '5', name: 'Sagrado corazón', testId:'sagradoCorazón'},
  {value: 'misericordioso', id: '3', name: 'misericordioso', testId:'misericordioso'},
  {value: 'Sagrada familia', id: '4', name: 'Sagrada familia', testId:'sagradaFamilia'},
  {value: 'Guadalupe', id: '8', name: 'Guadalupe', testId:'guadalupe'}
];
describe('test Dropdown', () => {
  afterEach(()=> {
    cleanup()
  })

  beforeEach(()=> {
    render(<Dropdown label='Cuadros' id='dropdownPictures' testId='cuadros' items={items} />);
  })
    test('inputLabel exist', async() => {
      const inputLabel = screen.getByTestId('select_label');
      expect(inputLabel).toBeInTheDocument();
    });

    test('select exist', () => {
      const select = screen.getByTestId('cuadros');
      expect(select).toBeInTheDocument();
    });
})
