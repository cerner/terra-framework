import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mockIntl } from 'terra-enzyme-intl';
import ExtensionRollup from '../../../src/extensions/_ExtensionRollup';

describe('ExtensionRollup', () => {
  it('should render default element', () => {
    const shallowComponent = shallow(
      <ExtensionRollup.WrappedComponent intl={mockIntl} />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = shallow(
      <ExtensionRollup.WrappedComponent
        intl={mockIntl}
        hasChildNotifications
        isPulsed
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with ref', () => {
    const shallowComponent = shallow(
      <ExtensionRollup.WrappedComponent
        intl={mockIntl}
        extensionRef={React.createRef()}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with selection callback', () => {
    const mockCallBack = jest.fn();
    const mockCallBack2 = jest.fn();

    const shallowComponent = shallow(
      <ExtensionRollup.WrappedComponent
        intl={mockIntl}
        onSelect={mockCallBack}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
    shallowComponent.find('.extension-rollup').simulate('click');
    shallowComponent.find('.extension-rollup').simulate('keydown', { nativeEvent: { keyCode: 13 }, preventDefault: mockCallBack2 });
    shallowComponent.find('.extension-rollup').simulate('keydown', { nativeEvent: { keyCode: 32 }, preventDefault: mockCallBack2 });
    expect(mockCallBack.mock.calls.length).toEqual(3);
    expect(mockCallBack2.mock.calls.length).toEqual(2);
  });
});
