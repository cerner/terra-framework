import React from 'react';
import Extension from '../../../src/extensions/_Extension';

describe('Extension', () => {
  it('should render with required prop data', () => {
    const shallowComponent = shallow(
      <Extension
        icon={<span>my icon</span>}
        text="my text"
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = shallow(
      <Extension
        icon={<span>my icon</span>}
        notificationCount={1}
        text="my text"
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with function callbacks', () => {
    const shallowComponent = shallow(
      <Extension
        icon={<span>my icon</span>}
        text="my text"
        onRequestClose={jest.fn()}
        refCallback={jest.fn()}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with selection callback', () => {
    const mockCallBack = jest.fn();
    const mockCallBack2 = jest.fn();

    const shallowComponent = shallow(
      <Extension
        icon={<span>my icon</span>}
        text="my text"
        onSelect={mockCallBack}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
    shallowComponent.find('.extension').simulate('click');
    shallowComponent.find('.extension').simulate('keydown', { nativeEvent: { keyCode: 13 }, preventDefault: mockCallBack2 });
    shallowComponent.find('.extension').simulate('keydown', { nativeEvent: { keyCode: 32 }, preventDefault: mockCallBack2 });
    expect(mockCallBack.mock.calls.length).toEqual(3);
    expect(mockCallBack2.mock.calls.length).toEqual(2);
  });
});
