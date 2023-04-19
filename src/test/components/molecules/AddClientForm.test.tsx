import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddClientForm from 'src/components/molecules/AddClientForm';

describe('AddClientForm component', () => {
  test('should render all input fields and dropdowns', () => {
    render(<AddClientForm />);
    
    // Test all input fields
    expect(screen.getByPlaceholderText('Nombre-Apellido')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('# Pedido')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Dirección')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Barrio')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Celular')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Referencia')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Contacto')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Fecha Cuota')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('# Cuotas')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Valor')).toBeInTheDocument();
    
    // Test all dropdowns
    expect(screen.getByLabelText('Artículo')).toBeInTheDocument();
    expect(screen.getByLabelText('Imágen')).toBeInTheDocument();
  });

  test('should display dropdown items when clicked', () => {
    render(<AddClientForm />);
    
    // Click on the "Artículo" dropdown
    userEvent.click(screen.getByLabelText('Artículo'));
    
    // Check that all items are displayed
    expect(screen.getByTestId('CuadroPequeño')).toBeInTheDocument();
    expect(screen.getByTestId('cuadroGrande')).toBeInTheDocument();
    expect(screen.getByTestId('marmolina')).toBeInTheDocument();
    expect(screen.getByTestId('cena')).toBeInTheDocument();
    
    // Click on the "Imágen" dropdown
    userEvent.click(screen.getByLabelText('Imágen'));
    
    // Check that all items are displayed
    expect(screen.getByTestId('milagrosa')).toBeInTheDocument();
    expect(screen.getByTestId('corazonJesus')).toBeInTheDocument();
    expect(screen.getByTestId('Guadalupe')).toBeInTheDocument();
    expect(screen.getByTestId('pastorOvejas')).toBeInTheDocument();
    expect(screen.getByTestId('ultimaCena')).toBeInTheDocument();
    expect(screen.getByTestId('JesúsNiños')).toBeInTheDocument();
    expect(screen.getByTestId('Misericordioso')).toBeInTheDocument();
    expect(screen.getByTestId('corazónMaría')).toBeInTheDocument();
    expect(screen.getByTestId('miguel')).toBeInTheDocument();
    expect(screen.getByTestId('familia')).toBeInTheDocument();
    expect(screen.getByTestId('rostro')).toBeInTheDocument();
    expect(screen.getByTestId('sanRafael')).toBeInTheDocument();
    expect(screen.getByTestId('sanGabriel')).toBeInTheDocument();
    expect(screen.getByTestId('sanJose')).toBeInTheDocument();
  });
});
