import { render } from '@testing-library/react';
import React from 'react';
import { ButtonIcon } from '../components/atoms/IconButton'

describe('test ButtonIcon component', () => {
  test('render ButtonIcon', () => {
    render(<ButtonIcon />)
  })
})