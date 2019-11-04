import React from 'react';
import PopupMenuListItem from '../../../src/common/_PopupMenuListItem';

describe('PopupMenuListItem', () => {
  it('should render with required prop data', () => {
    const shallowComponent = shallow(
      <PopupMenuListItem
        text="my text"
        onSelect={jest.fn()}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = shallow(
      <PopupMenuListItem
        icon={<div>test</div>}
        notificationCount={1}
        text="my text"
        onSelect={jest.fn()}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with showSelections', () => {
    const shallowComponent = shallow(
      <PopupMenuListItem
        text="my text"
        onSelect={jest.fn()}
        isSelected
        showSelections
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render without showSelections', () => {
    const shallowComponent = shallow(
      <PopupMenuListItem
        text="my text"
        onSelect={jest.fn()}
        isSelected
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with selection callback', () => {
    const mockCallBack = jest.fn();
    const mockCallBack2 = jest.fn();
    const mockCallBack3 = jest.fn();

    const shallowComponent = shallow(
      <PopupMenuListItem
        text="my text"
        onSelect={mockCallBack}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
    shallowComponent.find('.item').simulate('click');
    shallowComponent.find('.item').simulate('keydown', { nativeEvent: { keyCode: 13 }, preventDefault: mockCallBack2, stopPropagation: mockCallBack3 });
    shallowComponent.find('.item').simulate('keydown', { nativeEvent: { keyCode: 32 }, preventDefault: mockCallBack2, stopPropagation: mockCallBack3 });
    expect(mockCallBack.mock.calls.length).toEqual(3);
    expect(mockCallBack2.mock.calls.length).toEqual(2);
    expect(mockCallBack3.mock.calls.length).toEqual(2);
  });
});
