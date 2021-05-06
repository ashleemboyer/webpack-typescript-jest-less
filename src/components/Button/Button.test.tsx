import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {
  it('has the correct className', () => {
    const wrapper: ShallowWrapper = shallow(
      <Button onClick={jest.fn()}>Click me!</Button>,
    );
    expect(wrapper.find('.Button')).toHaveLength(1);
  });
});
