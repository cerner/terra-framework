import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import FlowsheetDataGrid from '../../src/FlowsheetDataGrid';

// Source data for tests
const dataFile = {
  cols: [
    { id: 'Column-0', displayName: 'Vitals', isResizable: true },
    { id: 'Column-1', displayName: 'March 16' },
    { id: 'Column-2', displayName: 'March 17', isResizable: true },
  ],
  rows: [
    {
      id: '1',
      cells: [
        { content: 'Heart Rate Monitored (bpm)' },
        { content: '65' },
        { content: '66' },
      ],
    },
    {
      id: '2',
      cells: [
        { content: 'Temperature Oral (degC)' },
        { content: '36.7' },
        { content: '36.9' },
      ],
    },
    {
      id: '3',
      cells: [
        { content: 'Cardiac Index (L/min/m2)' },
        { content: '2.25' },
        { content: '2.28' },
      ],
    },
    {
      id: '4',
      cells: [
        { content: 'Oxygen Flow Rate (L/min)' },
        { content: '63' },
        { content: '47' },
      ],
    },
  ],
};

describe('FlowsheetDataGrid', () => {
  it('renders the row header column as pinned and remaining columns as overflow and all columns as not resizable', () => {
    const wrapper = shallowWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
        ariaLabel="Test Flowsheet Data Grid"
      />,
    ).shallow();

    const expectedPinnedColumns = [
      {
        displayName: 'Vitals',
        id: 'Column-0',
        isResizable: false,
      },
    ];

    const expectedOverflowColumns = [
      {
        displayName: 'March 16',
        id: 'Column-1',
        isResizable: false,
      },
      {
        displayName: 'March 17',
        id: 'Column-2',
        isResizable: false,
      },
    ];

    const expectedRows = [
      {
        id: '1',
        cells: [
          { content: 'Heart Rate Monitored (bpm)' },
          { content: '65' },
          { content: '66' },
        ],
      },
      {
        id: '2',
        cells: [
          { content: 'Temperature Oral (degC)' },
          { content: '36.7' },
          { content: '36.9' },
        ],
      },
      {
        id: '3',
        cells: [
          { content: 'Cardiac Index (L/min/m2)' },
          { content: '2.25' },
          { content: '2.28' },
        ],
      },
      {
        id: '4',
        cells: [
          { content: 'Oxygen Flow Rate (L/min)' },
          { content: '63' },
          { content: '47' },
        ],
      },
    ];

    const dataGrid = wrapper.find('#test-terra-flowsheet-data-grid');
    expect(dataGrid.prop('id')).toEqual('test-terra-flowsheet-data-grid');
    expect(dataGrid.prop('ariaLabel')).toEqual('Test Flowsheet Data Grid');
    expect(dataGrid.prop('ariaLabelledBy')).toBeUndefined();
    expect(dataGrid.prop('rows')).toEqual(expectedRows);
    expect(dataGrid.prop('rowHeaderIndex')).toEqual(0);
    expect(dataGrid.prop('pinnedColumns')).toEqual(expectedPinnedColumns);
    expect(dataGrid.prop('overflowColumns')).toEqual(expectedOverflowColumns);
    expect(dataGrid.prop('defaultColumnWidth')).toEqual(200);
    expect(dataGrid.prop('columnHeaderHeight')).toEqual('2.5rem');
    expect(dataGrid.prop('rowHeight')).toEqual('2.5rem');

    expect(wrapper).toMatchSnapshot();
  });

  it('replaces non-header blank, null, or undefined cell contents with a "No results" visual indicator and hidden text', () => {
    const updatedDataFile = {
      ...dataFile,
      rows: [
        {
          id: '1',
          cells: [
            { content: 'Heart Rate Monitored (bpm)' },
            { content: '' },
            { content: '66' },
          ],
        },
        {
          id: '2',
          cells: [
            { content: 'Temperature Oral (degC)' },
            { content: '36.7' },
            { content: null },
          ],
        },
        {
          id: '3',
          cells: [
            { content: 'Cardiac Index (L/min/m2)' },
            { content: '' },
            { content: '2.28' },
          ],
        },
        {
          id: '4',
          cells: [
            { content: '' },
            { content: null },
            { content: '--' },
          ],
        },
      ],
    };

    const expectedRows = [
      {
        id: '1',
        cells: [
          { content: 'Heart Rate Monitored (bpm)' },
          {
            content: (
              <>
                <span aria-hidden>Terra.flowsheetDataGrid.no-result-display</span>
                <VisuallyHiddenText text="Terra.flowsheetDataGrid.no-result" />
              </>
            ),
          },
          { content: '66' },
        ],
      },
      {
        id: '2',
        cells: [
          { content: 'Temperature Oral (degC)' },
          { content: '36.7' },
          {
            content: (
              <>
                <span aria-hidden>Terra.flowsheetDataGrid.no-result-display</span>
                <VisuallyHiddenText text="Terra.flowsheetDataGrid.no-result" />
              </>
            ),
          },
        ],
      },
      {
        id: '3',
        cells: [
          { content: 'Cardiac Index (L/min/m2)' },
          {
            content: (
              <>
                <span aria-hidden>Terra.flowsheetDataGrid.no-result-display</span>
                <VisuallyHiddenText text="Terra.flowsheetDataGrid.no-result" />
              </>
            ),
          },
          { content: '2.28' },
        ],
      },
      {
        id: '4',
        cells: [
          { content: '' },
          {
            content: (
              <>
                <span aria-hidden>Terra.flowsheetDataGrid.no-result-display</span>
                <VisuallyHiddenText text="Terra.flowsheetDataGrid.no-result" />
              </>
            ),
          },
          {
            content: (
              <>
                <span aria-hidden>Terra.flowsheetDataGrid.no-result-display</span>
                <VisuallyHiddenText text="Terra.flowsheetDataGrid.no-result" />
              </>
            ),
          },
        ],
      },
    ];

    const wrapper = shallowWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={updatedDataFile.cols}
        rows={updatedDataFile.rows}
        ariaLabel="Test Flowsheet Data Grid"
      />,
    ).shallow();

    const dataGrid = wrapper.find('#test-terra-flowsheet-data-grid');
    expect(dataGrid.prop('rows')).toEqual(expectedRows);

    expect(wrapper).toMatchSnapshot();
  });
});
