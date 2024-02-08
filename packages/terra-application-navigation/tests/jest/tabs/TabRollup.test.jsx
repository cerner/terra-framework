import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */

import TabRollup from '../../../src/tabs/_TabRollup';

describe('TabRollup', () => {
  it('should render default element', () => {
    const shallowComponent = enzyme.shallow(
      <TabRollup.WrappedComponent intl={enzyme.mockIntl} />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = enzyme.shallow(
      <TabRollup.WrappedComponent
        text="test text"
        isIconOnly
        hasChildNotifications
        isPulsed
        isSelected
        hasCount
        intl={enzyme.mockIntl}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with function callbacks', () => {
    const shallowComponent = enzyme.shallow(
      <TabRollup.WrappedComponent
        tabRef={React.createRef()}
        intl={enzyme.mockIntl}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with selection callback', () => {
    const mockCallBack = jest.fn();
    const mockCallBack2 = jest.fn();

    const shallowComponent = enzyme.shallow(
      <TabRollup.WrappedComponent
        onTabSelect={mockCallBack}
        intl={enzyme.mockIntl}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
    shallowComponent.find('.tab-rollup').simulate('click');
    shallowComponent.find('.tab-rollup').simulate('keydown', { nativeEvent: { keyCode: 13 }, preventDefault: mockCallBack2 });
    shallowComponent.find('.tab-rollup').simulate('keydown', { nativeEvent: { keyCode: 32 }, preventDefault: mockCallBack2 });
    expect(mockCallBack.mock.calls.length).toEqual(3);
    expect(mockCallBack2.mock.calls.length).toEqual(2);
  });
});
