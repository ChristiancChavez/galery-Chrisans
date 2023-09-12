import React from 'react';
import ActionsButton from 'src/components/molecules/ActionsButton';
import { render, screen } from '@testing-library/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // Import the correct type for IconProp
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Example FontAwesome icon

describe('test ActionsButton component', () => {
  const buttonsData = [
    { id: '1', label: "Nuevo Cliente", testId: 'newClient', icon: <FontAwesomeIcon icon={faUser} /> as unknown as IconProp },
    // ... Other button data ...
  ];

  test('test existed new client button', () => {
    render(<ActionsButton buttons={buttonsData} />);
    const newClientIcon = screen.getByTestId('newClient');
    expect(newClientIcon).toBeInTheDocument();
  });
});
