import React from 'react';
import { render } from '@testing-library/react';
import AddClientForm from 'src/components/molecules/AddClientForm';
import { inputsFormAddClient } from 'src/helpers/Data.js';

describe('AddClientForm component', () => {
  test('should render all input fields and dropdowns', () => {
    const { getByTestId, getByPlaceholderText } = render(<AddClientForm />);

    inputsFormAddClient.forEach((value:{ testId: string }) => {
      expect(getByTestId(value.testId)).toBeInTheDocument();
    })
    
    // Test all input fields
    expect(getByPlaceholderText('Nombre-Apellido')).toBeInTheDocument();
    expect(getByPlaceholderText('# Pedido')).toBeInTheDocument();
    expect(getByPlaceholderText('Dirección')).toBeInTheDocument();
    expect(getByPlaceholderText('Barrio')).toBeInTheDocument();
    expect(getByPlaceholderText('Celular')).toBeInTheDocument();
    expect(getByPlaceholderText('Referencia')).toBeInTheDocument();
    expect(getByPlaceholderText('Contacto')).toBeInTheDocument();
    expect(getByPlaceholderText('Fecha Cuota')).toBeInTheDocument();
    expect(getByPlaceholderText('# Cuotas')).toBeInTheDocument();
    expect(getByPlaceholderText('Valor')).toBeInTheDocument();
    
    // Test all dropdowns
    expect(getByTestId('categoriesGalery')).toBeInTheDocument();
    expect(getByTestId('itemsGalery')).toBeInTheDocument();
  });
})
