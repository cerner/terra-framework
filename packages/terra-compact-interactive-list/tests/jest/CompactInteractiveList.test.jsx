import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl } from 'terra-enzyme-intl';
import CompactInteractiveList from '../../src/CompactInteractiveList';
import rows from './rowsData';
import { DefaultListValues } from '../../src/utils/constants';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation();
  jest.spyOn(console, 'warn').mockImplementation();
});

afterAll(() => {
  console.error.mockRestore(); // eslint-disable-line no-console
  console.warn.mockRestore(); // eslint-disable-line no-console
});

describe('Compact Interactive List', () => {
  describe('fixed width list', () => {
    const cols = [
      {
        id: 'Column-0',
        displayName: 'Col_1',
        width: 40,
      },
      {
        id: 'Column-1',
        displayName: 'Col_2',
        width: 200,
      },
      {
        id: 'Column-2',
        displayName: 'Col_3',
        width: 40,
      },
    ];

    it('should apply default minimunWidth correctly', () => {
      const wrapper = mountWithIntl(
        <CompactInteractiveList
          id="compact-interactive-list-id"
          rows={rows}
          columns={cols}
        />,
      );
      const list = wrapper.find('.compact-interactive-list');
      expect(list.props().style.minWidth).toEqual('500px');
    });

    it('should apply minimunWidth correctly', () => {
      const wrapper = mountWithIntl(
        <CompactInteractiveList
          id="compact-interactive-list-id"
          rows={rows}
          columns={cols}
          minimumWidth={3}
          widthUnit="em"
        />,
      );
      const list = wrapper.find('.compact-interactive-list');
      expect(list.props().style.minWidth).toEqual('3em');
    });

    it('should apply columnMaximumWidth and ColumnMinimumWidth props correctly', () => {
      const numberOfColumns = 2;
      const wrapper = mountWithIntl(
        <CompactInteractiveList
          id="compact-interactive-list-id"
          rows={rows}
          columns={cols}
          numberOfColumns={numberOfColumns}
          columnMinimumWidth={20}
          columnMaximumWidth={200}
        />,
      );
      const list = wrapper.find('.compact-interactive-list');
      // columnMinimumWidth and columnMaximumWidth should NOT be applied to fixed width lists
      expect(list.props().style.minWidth).toEqual('500px');
      expect(list.props().style.maxWidth).toBeFalsy();
      // the width should be equal to the sum of all columns width multiplied by numberOfColumns
      // the width units in this example should default to 'px'
      const getColWidthSum = (total, col) => col.width + total;
      const expectedWidth = `${cols.reduce(getColWidthSum, 0) * numberOfColumns}px`;
      expect(list.props().style.width).toEqual(expectedWidth);
    });

    it('should apply widthUnit prop correctly', () => {
      const numberOfColumns = 3;
      const wrapper = mountWithIntl(
        <CompactInteractiveList
          id="compact-interactive-list-id"
          rows={rows}
          columns={cols}
          numberOfColumns={numberOfColumns}
          widthUnit="em"
        />,
      );
      const list = wrapper.find('.compact-interactive-list');
      // the width should be equal to the sum of all columns width multiplied by numberOfColumns
      // the width units in this example should default to 'em'
      const getColWidthSum = (total, col) => col.width + total;
      const expectedWidth = `${cols.reduce(getColWidthSum, 0) * numberOfColumns}em`;
      expect(list.props().style.width).toEqual(expectedWidth);
    });
  });

  describe('responsive columns', () => {
    const respCols = [
      {
        id: 'Column-0',
        displayName: 'Col_1',
        width: 60,
      },
      {
        id: 'Column-1',
        displayName: 'Col_2',
        width: 200,
        flexGrow: true,
      },
      {
        id: 'Column-2',
        displayName: 'Col_3',
        width: 60,
      },
    ];

    it('should calculate list minWidth based on default columnMinWidth and apply default if default is bigger', () => {
      const numberOfColumns = 2;
      const wrapper = mountWithIntl(
        <CompactInteractiveList
          id="compact-interactive-list-id"
          rows={rows}
          columns={respCols}
          numberOfColumns={numberOfColumns}
        />,
      );
      const list = wrapper.find('.compact-interactive-list');
      // minWidth should be calculated based on default columnMinimumWidth
      const rowMinWidth = respCols[0].width + DefaultListValues.columnMinimumWidth.px + respCols[2].width;
      // compare to default and choose the bigger one
      const expectedMinWidth = Math.max(DefaultListValues.minimumWidth.px, rowMinWidth * numberOfColumns);
      const expectedMinWidthString = `${expectedMinWidth}px`;
      expect(list.props().style.minWidth).toEqual(expectedMinWidthString);
      // width has to be 100%
    });

    it('should calculate list minWidth based on column level minimumWidth, compare to default and apply the bigger one', () => {
      const respCols1 = [
        {
          id: 'Column-0',
          displayName: 'Col_1',
          width: 6,
        },
        {
          id: 'Column-1',
          displayName: 'Col_2',
          width: 20,
          flexGrow: true,
          minimumWidth: 10,
          maximumWidth: 30,
        },
        {
          id: 'Column-2',
          displayName: 'Col_3',
          width: 6,
        },
      ];
      const numberOfColumns = 2;
      const widthUnit = 'em';
      const wrapper = mountWithIntl(
        <CompactInteractiveList
          id="compact-interactive-list-id"
          rows={rows}
          columns={respCols1}
          numberOfColumns={numberOfColumns}
          widthUnit={widthUnit}
        />,
      );
      const list = wrapper.find('.compact-interactive-list');
      // minWidth should be calculated based on minimumWidth set on column level
      const rowMinWidth = respCols1[0].width + respCols1[1].minimumWidth + respCols1[2].width;
      // compare to default and choose the bigger one
      const expectedMinWidth = Math.max(DefaultListValues.minimumWidth.em, rowMinWidth * numberOfColumns);
      const expectedMinWidthString = `${expectedMinWidth}${widthUnit}`;
      expect(list.props().style.minWidth).toEqual(expectedMinWidthString);
      // maxWidth should be calculated based on maximumWidth set on column level
      const rowMaxWidth = respCols1[0].width + respCols1[1].maximumWidth + respCols1[2].width;
      const expectedMaxWidth = `${rowMaxWidth * numberOfColumns}${widthUnit}`;
      expect(list.props().style.maxWidth).toEqual(expectedMaxWidth);
    });

    it('should flow rows vertically by default', () => {
      const numberOfColumns = 4;
      const wrapper = mountWithIntl(
        <CompactInteractiveList
          id="compact-interactive-list-id"
          rows={rows}
          columns={respCols}
          numberOfColumns={numberOfColumns}
        />,
      );
      const rowElements = wrapper.find('.row');
      expect(rowElements.length).toEqual(8);
      expect(rowElements.at(0).props().id).toEqual(rows[0].id);
      expect(rowElements.at(1).props().id).toEqual(rows[2].id);
      expect(rowElements.at(2).props().id).toEqual(rows[3].id);
      expect(rowElements.at(3).props().id).toEqual(rows[4].id);
      expect(rowElements.at(4).props().id).toEqual(rows[1].id);
      expect(rowElements.at(5).props().id).toEqual(`placeholder-row-${5}`);
      expect(rowElements.at(6).props().id).toEqual(`placeholder-row-${6}`);
      expect(rowElements.at(7).props().id).toEqual(`placeholder-row-${7}`);
    });

    it('should flow horizontally if flowHorizontally prop is set', () => {
      const numberOfColumns = 4;
      const wrapper = mountWithIntl(
        <CompactInteractiveList
          id="compact-interactive-list-id"
          rows={rows}
          columns={respCols}
          numberOfColumns={numberOfColumns}
          flowHorizontally
        />,
      );
      const rowElements = wrapper.find('.row');
      expect(rowElements.at(0).props().id).toEqual(rows[0].id);
      expect(rowElements.at(1).props().id).toEqual(rows[2].id);
      expect(rowElements.at(2).props().id).toEqual(rows[3].id);
      expect(rowElements.at(3).props().id).toEqual(rows[4].id);
      expect(rowElements.at(4).props().id).toEqual(rows[1].id);
      expect(rowElements.at(5).props().id).toEqual(`placeholder-row-${5}`);
      expect(rowElements.at(6).props().id).toEqual(`placeholder-row-${6}`);
      expect(rowElements.at(7).props().id).toEqual(`placeholder-row-${7}`);
    });
  });
});
