import React from 'react';
import Dropdown from '../../../components/atoms/Dropdown';
import { render, screen, cleanup } from '@testing-library/react';


const items = [{value: 'Sagrado corazón', itemId: 5, name: 'Sagrado corazón'},{value: 'misericordioso', itemId: 3, name: 'misericordioso'},
{value: 'Sagrada familia', itemId: 4, name: 'Sagrada familia'},{value: 'Guadalupe', itemId: 8, name: 'Guadalupe'}];
describe('test Dropdown', () => {
  afterEach(()=> {
    cleanup()
  })

  beforeEach(()=> {
    render(<Dropdown label='Cuadros' id={3} testId='cuadros' items={items} />);
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

