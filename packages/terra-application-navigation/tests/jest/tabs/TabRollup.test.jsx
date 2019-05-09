import React from 'react';
import TabRollup from '../../../src/tabs/_TabRollup';

describe('TabRollup', () => {
  it('should render default element', () => {
    const shallowComponent = shallow(
      <TabRollup />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = shallow(
      <TabRollup
        isIconOnly
        hasChildNotifications
        isPulsed
        isSelected
        hasCount
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with function callbacks', () => {
    const shallowComponent = shallow(
      <TabRollup
        tabRef={React.createRef()}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with selection callback', () => {
    const mockCallBack = jest.fn();
    const mockCallBack2 = jest.fn();

    const shallowComponent = shallow(
      <TabRollup
        onTabSelect={mockCallBack}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
    shallowComponent.find('[data-item-show-focus]').simulate('click');
    shallowComponent.find('[data-item-show-focus]').simulate('keydown', { nativeEvent: { keyCode: 13 }, preventDefault: mockCallBack2 });
    shallowComponent.find('[data-item-show-focus]').simulate('keydown', { nativeEvent: { keyCode: 32 }, preventDefault: mockCallBack2 });
    expect(mockCallBack.mock.calls.length).toEqual(3);
    expect(mockCallBack2.mock.calls.length).toEqual(2);
  });
});
