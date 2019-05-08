import React from 'react';
import ExtensionRollup from '../../../src/extensions/_ExtensionRollup';

describe('ExtensionCount', () => {
  it('should render default element', () => {
    const shallowComponent = shallow(
      <ExtensionRollup />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = shallow(
      <ExtensionRollup
        hasChildNotifications
        isPulsed
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with function callbacks', () => {
    const shallowComponent = shallow(
      <ExtensionRollup
        refCallback={jest.fn()}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with selection callback', () => {
    const mockCallBack = jest.fn();
    const mockCallBack2 = jest.fn();

    const shallowComponent = shallow(
      <ExtensionRollup
        onSelect={mockCallBack}
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
