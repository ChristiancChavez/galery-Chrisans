import { render } from '@testing-library/react';
import React from 'react';
import { ButtonIcon } from '../components/atoms/IconButton';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

describe('test ButtonIcon component', () => {
  test('render ButtonIcon', () => {
    const  { getByTestId } = render(<ButtonIcon><PlaylistAddCheckIcon /></ButtonIcon>);
    const button = getByTestId("button");
    expect(button).toBeTruthy();
  })
}); 