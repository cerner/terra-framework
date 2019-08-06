import React from 'react';
import DrawerMenuFooterButton from '../../../src/drawer-menu/_DrawerMenuFooterButton';

describe('DrawerMenuFooterButton', () => {
  it('should render default element', () => {
    const shallowComponent = shallow(
      <DrawerMenuFooterButton />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with data props', () => {
    const shallowComponent = shallow(
      <DrawerMenuFooterButton
        text="test-text"
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with click callback', () => {
    const mockCallBack = jest.fn();

    const shallowComponent = shallow(
      <DrawerMenuFooterButton
        onClick={mockCallBack}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
    shallowComponent.find('.drawer-menu-footer-button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
