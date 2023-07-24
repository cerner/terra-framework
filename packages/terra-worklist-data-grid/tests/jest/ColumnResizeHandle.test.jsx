/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mountWithIntl } from 'terra-enzyme-intl';
import ColumnResizeHandle from '../../src/subcomponents/ColumnResizeHandle';

describe('ColumnResizeHandle', () => {
  it('renders a default column resize handle', () => {
    const mockResizeMouseDown = jest.fn();

    // Mount component in test to allow event simulation
    const wrapper = mountWithIntl(
      <ColumnResizeHandle
        columnIndex={0}
        columnText="Vitals"
        columnWidth={200}
        minimumWidth={60}
        maximumWidth={300}
        onResizeMouseDown={mockResizeMouseDown}
      />,
    );

    // Validate resize handle component
    const resizeHandle = wrapper.find('.resize-handle');
    expect(resizeHandle).toHaveLength(1);
    expect(resizeHandle.props()['aria-label']).toBe('Terra.worklist-data-grid.resize-handle-template');
    expect(resizeHandle.props()['aria-valuenow']).toBe(200);
    expect(resizeHandle.props()['aria-valuemin']).toBe(60);
    expect(resizeHandle.props()['aria-valuemax']).toBe(300);

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

    expect(wrapper).toMatchSnapshot();
  });
});
