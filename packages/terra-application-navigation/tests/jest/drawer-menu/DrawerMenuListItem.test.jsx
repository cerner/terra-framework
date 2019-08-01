import React from 'react';
import DrawerMenuListItem from '../../../src/drawer-menu/_DrawerMenuListItem';

describe('DrawerMenuListItem', () => {
  it('should render with required prop data', () => {
    const shallowComponent = shallow(
      <DrawerMenuListItem
        text="my text"
        onSelect={jest.fn()}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = shallow(
      <DrawerMenuListItem
        notificationCount={1}
        text="my text"
        isSelected
        icon={<span>test-icon</span>}
        hasCount
        onSelect={jest.fn()}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with selection callback', () => {
    const mockCallBack = jest.fn();
    const mockCallBack2 = jest.fn();

    const shallowComponent = shallow(
      <DrawerMenuListItem
        text="my text"
        onSelect={mockCallBack}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
    shallowComponent.find('.item').simulate('click');
    shallowComponent.find('.item').simulate('keydown', { nativeEvent: { keyCode: 13 }, preventDefault: mockCallBack2 });
    shallowComponent.find('.item').simulate('keydown', { nativeEvent: { keyCode: 32 }, preventDefault: mockCallBack2 });
    expect(mockCallBack.mock.calls.length).toEqual(3);
    expect(mockCallBack2.mock.calls.length).toEqual(2);
  });
});
