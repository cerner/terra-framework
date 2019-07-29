import React from 'react';
import Tab from '../../../src/tabs/_Tab';

describe('Tab', () => {
  it('should render with required prop data', () => {
    const shallowComponent = shallow(
      <Tab
        text="my text"
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = shallow(
      <Tab
        notificationCount={1}
        text="my text"
        isActive
        isPlaceholder
        hasCount
        tabRef={React.createRef()}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with render function block', () => {
    /* eslint-disable */
    const myRender = ({
      text,
      hasCount,
      isActive,
      notificationCount,
    }) => <div>{`text=${text} hasCount=${hasCount} isActive=${isActive} notificationCount=${notificationCount}`}</div>;
    /* eslint-enable */

    const shallowComponent = shallow(
      <Tab
        notificationCount={1}
        text="my text"
        isActive
        isPlaceholder
        hasCount
        render={myRender}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with selection callback', () => {
    const mockCallBack = jest.fn();
    const mockCallBack2 = jest.fn();

    const shallowComponent = shallow(
      <Tab
        text="my text"
        onTabSelect={mockCallBack}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
    shallowComponent.find('.tab').simulate('click');
    shallowComponent.find('.tab').simulate('keydown', { nativeEvent: { keyCode: 13 }, preventDefault: mockCallBack2 });
    shallowComponent.find('.tab').simulate('keydown', { nativeEvent: { keyCode: 32 }, preventDefault: mockCallBack2 });
    expect(mockCallBack.mock.calls.length).toEqual(3);
    expect(mockCallBack2.mock.calls.length).toEqual(2);
  });
});
