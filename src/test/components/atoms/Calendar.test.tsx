import React from 'react';
import Calendar from '../../../components/atoms/Calendar';
import { mount } from 'enzyme';

describe('test Calendar component', () => {

  test('test existed Calendar', () => {
    const wrapper = mount(<Calendar testId='cuotas' label='Calendar para asignar cuotas' />);
    const calendar = wrapper.find('calendar');
    expect(calendar).toBeTruthy();
  });
})