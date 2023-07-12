/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable no-console
import React from 'react';
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import ColumnResizeHandle from '../../src/ColumnResizeHandle';

describe('ColumnResizeHandle', () => {
  it('render a default column resize handle', () => {
    const mockResizeMouseDown = jest.fn();

    const wrapper = mountWithIntl(
      <ColumnResizeHandle
        columnIndex={0}
        columnText="Vitals"
        columnWidth={200}
        height="500px"
        minimumWidth={60}
        maximumWidth={300}
        onResizeMouseDown={mockResizeMouseDown}
      />,
    );

    const resizeHandle = wrapper.find('.resize-handle:not(.active)');
    expect(resizeHandle).toHaveLength(1);
    expect(resizeHandle.props()['aria-valuetext']).toBe('200 pixels column width');
    expect(resizeHandle.props()['aria-label']).toBe('Vitals');
    expect(resizeHandle.props()['aria-valuenow']).toBe(200);
    expect(resizeHandle.props()['aria-valuemin']).toBe(60);
    expect(resizeHandle.props()['aria-valuemax']).toBe(300);
    expect(resizeHandle.props().onClick).toBeDefined();
    expect(resizeHandle.props().style.height).toBe('500px');

    resizeHandle.invoke('onMouseDown')(
      {
        stopPropagation: () => {},
        preventDefault: () => {},
      },
      9000,
    );

    expect(mockResizeMouseDown).toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('render an active column resize handle', () => {
    const mockResizeMouseDown = jest.fn();

    const wrapper = shallowWithIntl(
      <ColumnResizeHandle
        active
        columnIndex={0}
        columnText="Vitals"
        columnWidth={200}
        height="500px"
        minimumWidth={60}
        maximumWidth={300}
        onResizeMouseDown={mockResizeMouseDown}
      />,
    ).dive();

    const resizeHandle = wrapper.find('.resize-handle.active');
    expect(resizeHandle).toHaveLength(1);
    expect(resizeHandle.props()['aria-valuetext']).toBe('200 pixels column width');
    expect(resizeHandle.props()['aria-label']).toBe('Vitals');
    expect(resizeHandle.props()['aria-valuenow']).toBe(200);
    expect(resizeHandle.props()['aria-valuemin']).toBe(60);
    expect(resizeHandle.props()['aria-valuemax']).toBe(300);
    expect(resizeHandle.props().onClick).toBeDefined();
    expect(resizeHandle.props().style.height).toBe('500px');

    expect(wrapper).toMatchSnapshot();
  });
});
