import { render } from '@testing-library/react';
import React from 'react';
import { SubTitle } from '../../../components/atoms/SubTitle';

describe('test ButtonIcon component', () => {
  test('render SubTitle', () => {
    const  { getByTestId } = render(<SubTitle title='' testId='subtitle' />);
    const subtitle = getByTestId("subtitle");
    expect(subtitle).toBeTruthy();
  });

  test('render SubTitle with empty string', () => {
    const  { getByTestId } = render(<SubTitle title='' testId='subtitle' />);
    const subtitle = getByTestId("subtitle");
    expect(subtitle.innerHTML).toBe('');
  });

  test('render SubTitle with string', () => {
    const  { getByTestId } = render(<SubTitle title='Clients' testId='subtitle' />);
    const subtitle = getByTestId("subtitle");
    expect(subtitle.innerHTML).toBe('Clients');
  })
}); 