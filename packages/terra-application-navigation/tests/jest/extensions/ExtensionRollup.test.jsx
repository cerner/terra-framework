import React from 'react';
import ExtensionRollup from '../../../src/extensions/_ExtensionRollup';

describe('ExtensionRollup', () => {
  it('should render default element', () => {
    const shallowComponent = enzyme.shallow(
      <ExtensionRollup.WrappedComponent intl={enzyme.mockIntl} />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = enzyme.shallow(
      <ExtensionRollup.WrappedComponent
        intl={enzyme.mockIntl}
        hasChildNotifications
        isPulsed
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with ref', () => {
    const shallowComponent = enzyme.shallow(
      <ExtensionRollup.WrappedComponent
        intl={enzyme.mockIntl}
        extensionRef={React.createRef()}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with selection callback', () => {
    const mockCallBack = jest.fn();
    const mockCallBack2 = jest.fn();

    const shallowComponent = enzyme.shallow(
      <ExtensionRollup.WrappedComponent
        intl={enzyme.mockIntl}
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
