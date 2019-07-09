import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mockIntl } from 'terra-enzyme-intl';

import TabRollup from '../../../src/tabs/_TabRollup';

describe('TabRollup', () => {
  it('should render default element', () => {
    const shallowComponent = shallow(
      <TabRollup.WrappedComponent intl={mockIntl} />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = shallow(
      <TabRollup.WrappedComponent
        text="test text"
        isIconOnly
        hasChildNotifications
        isPulsed
        isSelected
        hasCount
        intl={mockIntl}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with function callbacks', () => {
    const shallowComponent = shallow(
      <TabRollup.WrappedComponent
        tabRef={React.createRef()}
        intl={mockIntl}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with selection callback', () => {
    const mockCallBack = jest.fn();
    const mockCallBack2 = jest.fn();

    const shallowComponent = shallow(
      <TabRollup.WrappedComponent
        onTabSelect={mockCallBack}
        intl={mockIntl}
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
