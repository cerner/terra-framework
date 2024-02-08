import React from 'react';
import ColumnResizeHandle from '../../src/subcomponents/ColumnResizeHandle';
import ColumnContext from '../../src/utils/ColumnContext';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation();
  jest.spyOn(console, 'warn').mockImplementation();
});

afterAll(() => {
  console.error.mockRestore(); // eslint-disable-line no-console
  console.warn.mockRestore(); // eslint-disable-line no-console
});

describe('ColumnResizeHandle', () => {
  it('renders a default column resize handle when isActive is false', () => {
    const mockResizeMouseDown = jest.fn();
    const mockResizeMouseUp = jest.fn();

    // Mount component in test to allow event simulation
    const wrapper = mountWithIntl(
      <ColumnResizeHandle
        columnIndex={0}
        columnText="Vitals"
        columnWidth={200}
        isActive={false}
        height={200}
        minimumWidth={60}
        maximumWidth={300}
        onResizeMouseUp={mockResizeMouseUp}
        onResizeMouseDown={mockResizeMouseDown}
      />,
    );

    // Validate resize handle component
    const resizeHandle = wrapper.find('.resize-handle');
    expect(resizeHandle).toHaveLength(1);
    expect(resizeHandle.props()['aria-label']).toBe(null);
    expect(resizeHandle.props()['aria-valuenow']).toBe(null);
    expect(resizeHandle.props()['aria-valuemin']).toBe(null);
    expect(resizeHandle.props()['aria-valuemax']).toBe(null);
    expect(wrapper.find('.resize-handle').props().role).toBe(null);

    expect(wrapper).toMatchSnapshot();
  });

  it('executes the callback function on MouseDown', () => {
    const mockResizeMouseDown = jest.fn();
    const wrapper = mountWithIntl(
      <ColumnResizeHandle
        onResizeMouseDown={mockResizeMouseDown}
      />,
    );
    const resizeHandle = wrapper.find('.resize-handle');
    // Simulate onMouseDown event
    resizeHandle.invoke('onMouseDown')(
      {
        stopPropagation: () => {},
        preventDefault: () => {},
      },
      9000,
    );

    // Validate mock function was called from simulated onMouseDown event
    expect(mockResizeMouseDown).toHaveBeenCalled();
  });

  it('executes the callback function on MouseUp', () => {
    const mockResizeMouseUp = jest.fn();
    const wrapper = mountWithIntl(
      <ColumnResizeHandle
        onResizeMouseUp={mockResizeMouseUp}
      />,
    );
    const resizeHandle = wrapper.find('.resize-handle');
    // Simulate onMouseDown event
    resizeHandle.invoke('onMouseUp')();

    // Validate mock function was called from simulated onMouseDown event
    expect(mockResizeMouseUp).toHaveBeenCalled();
  });

  it('sets widths if isActive is set to be true', () => {
    const wrapper = mountWithIntl(
      <ColumnResizeHandle
        columnIndex={0}
        columnText="Vitals"
        columnWidth={200}
        isActive
        height={200}
        minimumWidth={60}
        maximumWidth={300}
      />,
    );

    expect(wrapper.find('.resize-handle')).toHaveLength(1);
    expect(wrapper.find('.resize-handle').props()['aria-valuenow']).toBe(200);
    expect(wrapper.find('.resize-handle').props()['aria-valuemin']).toBe(60);
    expect(wrapper.find('.resize-handle').props()['aria-valuemax']).toBe(300);
    expect(wrapper.find('.resize-handle').props()['aria-label']).toBe('Terra.table.resize-handle-template');
  });

  it('sets the appropriate prop values on space keydown', () => {
    const wrapper = mountWithIntl(
      <ColumnContext.Provider value={{ setColumnHeaderAriaLiveMessage: jest.fn() }}>
        <ColumnResizeHandle />
      </ColumnContext.Provider>,
    );

    wrapper.find('.resize-handle').simulate('focus');
    wrapper.find('.resize-handle').simulate('keydown', { keyCode: 32 }); // space

    expect(wrapper.find('.resize-handle').props()['aria-label']).toBe(null);
    expect(wrapper.find('.resize-handle').props()['aria-valuetext']).toBe('Terra.table.resize-handle-value-text');
    expect(wrapper.find('.resize-handle').props().role).toBe('slider');
  });

  it('sets the appropriate prop values on enter keydown', () => {
    const wrapper = mountWithIntl(
      <ColumnContext.Provider value={{ setColumnHeaderAriaLiveMessage: jest.fn() }}>
        <ColumnResizeHandle />
      </ColumnContext.Provider>,
    );

    wrapper.find('.resize-handle').simulate('focus');
    wrapper.find('.resize-handle').simulate('keydown', { keyCode: 13 }); // enter

    expect(wrapper.find('.resize-handle').props()['aria-label']).toBe(null);
    expect(wrapper.find('.resize-handle').props()['aria-valuetext']).toBe('Terra.table.resize-handle-value-text');
    expect(wrapper.find('.resize-handle').props().role).toBe('slider');
  });

  it('sets the appropriate prop values on escape keydown', () => {
    const wrapper = mountWithIntl(
      <ColumnContext.Provider value={{ setColumnHeaderAriaLiveMessage: jest.fn() }}>
        <ColumnResizeHandle />
      </ColumnContext.Provider>,
    );

    wrapper.find('.resize-handle').simulate('keydown', { keyCode: 27 }); // escape

    expect(wrapper.find('.resize-handle').props()['aria-label']).toBe(null);
    expect(wrapper.find('.resize-handle').props()['aria-valuetext']).toBe(null);
    expect(wrapper.find('.resize-handle').props().role).toBe(null);
  });

  it('increases column width with right arrow', () => {
    const mockResizeHandleChange = jest.fn();
    const wrapper = mountWithIntl(
      <ColumnContext.Provider value={{ setColumnHeaderAriaLiveMessage: jest.fn() }}>
        <ColumnResizeHandle
          columnIndex={1}
          columnResizeIncrement={10}
          onResizeHandleChange={mockResizeHandleChange}
        />
      </ColumnContext.Provider>,
    );

    wrapper.find('.resize-handle').simulate('focus');
    wrapper.find('.resize-handle').simulate('keydown', { keyCode: 13 }); // enter
    wrapper.find('.resize-handle').simulate('keydown', { keyCode: 39 }); // arrow right

    expect(mockResizeHandleChange).toHaveBeenCalledWith(1, 10);
  });

  it('increases column width with left arrow', () => {
    const mockResizeHandleChange = jest.fn();
    const wrapper = mountWithIntl(
      <ColumnContext.Provider value={{ setColumnHeaderAriaLiveMessage: jest.fn() }}>
        <ColumnResizeHandle
          columnIndex={1}
          columnResizeIncrement={10}
          onResizeHandleChange={mockResizeHandleChange}
        />
      </ColumnContext.Provider>,
    );

    wrapper.find('.resize-handle').simulate('focus');
    wrapper.find('.resize-handle').simulate('keydown', { keyCode: 13 }); // enter
    wrapper.find('.resize-handle').simulate('keydown', { keyCode: 37 }); // arrow left

    expect(mockResizeHandleChange).toHaveBeenCalledWith(1, -10);
  });
});
