import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl } from 'terra-enzyme-intl';
import CompactInteractiveList from '../../src/CompactInteractiveList';
import rows from './rowsData';

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
        width: '40px',
        minimunWidth: '20px',
      },
      {
        id: 'Column-1',
        displayName: 'Col_2',
        width: '200px',
        maximumWidth: '300px',
      },
      {
        id: 'Column-2',
        displayName: 'Col_3',
        width: '40px',
      },
    ];

    it('should match a snapshot', () => {
      const wrapper = mountWithIntl(
        <CompactInteractiveList
          id="compact-interactive-list-fixed-width"
          rows={rows}
          columns={cols}
        />,
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('should not apply minimumWidth and maximumWidth to cells and the list', () => {
      const wrapper = mountWithIntl(
        <CompactInteractiveList
          id="compact-interactive-list-fixed-width"
          rows={rows}
          columns={cols}
        />,
      );
      const list = wrapper.find('.compact-interactive-list');
      expect(list.props().style.minWidth).toBeUndefined();

      const cellElements = wrapper.find('.cell');
      expect(cellElements.at(0).props().style.width).toEqual('40px');
      expect(cellElements.at(0).props().style.minWidth).toBeUndefined();
      expect(cellElements.at(0).props().style.maxWidth).toBeUndefined();

      expect(cellElements.at(1).props().style.width).toEqual('200px');
      expect(cellElements.at(1).props().style.minWidth).toBeUndefined();
      expect(cellElements.at(1).props().style.maxWidth).toBeUndefined();
    });

    it('should not apply default minimumWidth to fixed width list', () => {
      const wrapper = mountWithIntl(
        <CompactInteractiveList
          id="compact-interactive-list-fixed-width"
          rows={rows}
          columns={cols}
        />,
      );
      const list = wrapper.find('.compact-interactive-list');
      expect(list.props().style.minWidth).toBeUndefined();
    });

    it('should not apply columnMaximumWidth and columnMinimumWidth props to fixed columns width', () => {
      const numberOfColumns = 2;
      const wrapper = mountWithIntl(
        <CompactInteractiveList
          id="compact-interactive-list"
          rows={rows}
          columns={cols}
          numberOfColumns={numberOfColumns}
          columnMinimumWidth="20px"
          columnMaximumWidth="500px"
        />,
      );
      const list = wrapper.find('.compact-interactive-list');
      // columnMinimumWidth and columnMaximumWidth should NOT be applied to fixed width lists
      expect(list.props().style.minWidth).toBeUndefined();
      expect(list.props().style.maxWidth).toBeUndefined();
      // the width should be equal to the sum of all columns width multiplied by numberOfColumns
      expect(list.props().style.width).toEqual('560px');

      // cells should have width, but no maximumWidth or minimumWidth properties.
      const cellElements = wrapper.find('.cell');
      expect(cellElements.at(0).props().style.width).toEqual('40px');
      expect(cellElements.at(0).props().style.minWidth).toBeUndefined();
      expect(cellElements.at(0).props().style.maxWidth).toBeUndefined();

      expect(cellElements.at(1).props().style.width).toEqual('200px');
      expect(cellElements.at(1).props().style.minWidth).toBeUndefined();
      expect(cellElements.at(1).props().style.maxWidth).toBeUndefined();
    });
  });

  describe('responsive columns', () => {
    it('should match a snapshot', () => {
      const respCols1 = [
        {
          id: 'Column-0',
          displayName: 'Col_1',
          width: '20px',
        },
        {
          id: 'Column-1',
          displayName: 'Col_2',
          width: '200px',
          flexGrow: true,
        },
        {
          id: 'Column-2',
          displayName: 'Col_3',
          width: '20px',
        },
      ];
      const wrapper = mountWithIntl(
        <CompactInteractiveList
          id="compact-interactive-list-minWidth-calculation"
          rows={rows}
          columns={respCols1}
          numberOfColumns={2}
        />,
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('should calculate list minWidth based on default columnMinWidth and apply default minListWIdth if it is bigger', () => {
      const respCols1 = [
        {
          id: 'Column-0',
          displayName: 'Col_1',
          width: '20px',
        },
        {
          id: 'Column-1',
          displayName: 'Col_2',
          width: '200px',
          flexGrow: true,
        },
        {
          id: 'Column-2',
          displayName: 'Col_3',
          width: '20px',
        },
      ];
      const numberOfColumns = 2;
      const wrapper = mountWithIntl(
        <CompactInteractiveList
          id="compact-interactive-list-minWidth-calculation"
          rows={rows}
          columns={respCols1}
          numberOfColumns={numberOfColumns}
        />,
      );
      const list = wrapper.find('.compact-interactive-list');
      expect(list.props().style.minWidth).toEqual('500px');

      // responsive cells should have default minimumWidth properties.
      const cellElements = wrapper.find('.cell');
      expect(cellElements.at(1).props().style.width).toBeUndefined();
      expect(cellElements.at(1).props().style.minWidth).toEqual('60px'); // Default value in px
      expect(cellElements.at(1).props().style.maxWidth).toBeUndefined();
    });

    it('should calculate list min and max width based on columnMinimumWidth and columnMaximumWidth props', () => {
      const respCols1 = [
        {
          id: 'Column-0',
          displayName: 'Col_1',
          width: '50px',
        },
        {
          id: 'Column-1',
          displayName: 'Col_2',
        },
        {
          id: 'Column-2',
          displayName: 'Col_3',
          width: '50px',
        },
      ];
      const numberOfColumns = 2;
      const wrapper = mountWithIntl(
        <CompactInteractiveList
          id="compact-interactive-list-compare-min-width"
          rows={rows}
          columns={respCols1}
          numberOfColumns={numberOfColumns}
          columnMinimumWidth="500px"
          columnMaximumWidth="900px"
        />,
      );
      const list = wrapper.find('.compact-interactive-list');
      expect(list.props().style.minWidth).toEqual('1200px');
      expect(list.props().style.maxWidth).toEqual('2000px');

      // responsive cells should have minimumWidth and maximumWidth properties set correctly.
      const cellElements = wrapper.find('.cell');
      expect(cellElements.at(1).props().style.width).toBeUndefined();
      expect(cellElements.at(1).props().style.minWidth).toEqual('500px');
      expect(cellElements.at(1).props().style.maxWidth).toEqual('900px');
    });

    it('should calculate list minWidth based on column level minimumWidth, compare to default and apply the bigger one', () => {
      const respCols1 = [
        {
          id: 'Column-0',
          displayName: 'Col_1',
          width: '6em',
        },
        {
          id: 'Column-1',
          displayName: 'Col_2',
          width: '20em',
          flexGrow: true,
          minimumWidth: '10em',
          maximumWidth: '30em',
        },
        {
          id: 'Column-2',
          displayName: 'Col_3',
          width: '7em',
        },
      ];
      const numberOfColumns = 2;
      const wrapper = mountWithIntl(
        <CompactInteractiveList
          id="compact-interactive-list-compare-min-width"
          rows={rows}
          columns={respCols1}
          numberOfColumns={numberOfColumns}
        />,
      );
      const list = wrapper.find('.compact-interactive-list');
      // compare to default value of 10em and choose 46em as it's bigger
      expect(list.props().style.minWidth).toEqual('46em');
      // maxWidth should be calculated based on maximumWidth set on column level
      expect(list.props().style.maxWidth).toEqual('86em');

      // responsive cells should have minimumWidth and maximumWidth properties set correctly.
      const cellElements = wrapper.find('.cell');
      expect(cellElements.at(1).props().style.width).toBeUndefined();
      expect(cellElements.at(1).props().style.minWidth).toEqual('10em');
      expect(cellElements.at(1).props().style.maxWidth).toEqual('30em');
    });

    it('column minimumWidth prop should take precedence over columnMinimumWidth prop', () => {
      const respCols1 = [
        {
          id: 'Column-0',
          displayName: 'Col_1',
          width: '50px',
        },
        {
          id: 'Column-1',
          displayName: 'Col_2',
          minimumWidth: '500px',
          maximumWidth: '900px',
        },
        {
          id: 'Column-2',
          displayName: 'Col_3',
        },
      ];
      const wrapper = mountWithIntl(
        <CompactInteractiveList
          id="compact-interactive-list-compare-min-width"
          rows={rows}
          columns={respCols1}
          numberOfColumns={1}
          columnMinimumWidth="400px"
          columnMaximumWidth="800px"
        />,
      );
      const list = wrapper.find('.compact-interactive-list');
      expect(list.props().style.minWidth).toEqual('950px');
      expect(list.props().style.maxWidth).toEqual('1750px');

      // responsive cells should have minimumWidth and maximumWidth properties set correctly.
      const cellElements = wrapper.find('.cell');
      expect(cellElements.at(1).props().style.width).toBeUndefined();
      expect(cellElements.at(1).props().style.minWidth).toEqual('500px');
      expect(cellElements.at(1).props().style.maxWidth).toEqual('900px');

      expect(cellElements.at(2).props().style.width).toBeUndefined();
      expect(cellElements.at(2).props().style.minWidth).toEqual('400px');
      expect(cellElements.at(2).props().style.maxWidth).toEqual('800px');
    });

    it('should flow rows vertically by default', () => {
      const respCols = [
        {
          id: 'Column-0',
          displayName: 'Col_1',
          width: '60px',
        },
        {
          id: 'Column-1',
          displayName: 'Col_2',
          width: '200px',
          flexGrow: true,
        },
        {
          id: 'Column-2',
          displayName: 'Col_3',
          width: '60px',
        },
      ];
      const numberOfColumns = 4;
      const wrapper = mountWithIntl(
        <CompactInteractiveList
          id="compact-interactive-list-vertical-flow"
          rows={rows}
          columns={respCols}
          numberOfColumns={numberOfColumns}
        />,
      );
      const rowElements = wrapper.find('.row');
      expect(rowElements.length).toEqual(8);
      expect(rowElements.at(0).props().id).toEqual(rows[0].id);
      expect(rowElements.at(0).props().role).toEqual('row');
      expect(rowElements.at(0).props()['aria-hidden']).toBeNull();

      expect(rowElements.at(1).props().id).toEqual(rows[1].id);
      expect(rowElements.at(2).props().id).toEqual(rows[2].id);

      expect(rowElements.at(3).props().id).toEqual(`placeholder-row-${1}`);
      expect(rowElements.at(3).props().role).toBeUndefined();
      expect(rowElements.at(3).props()['aria-hidden']).toEqual(true);

      expect(rowElements.at(4).props().id).toEqual(rows[3].id);
      expect(rowElements.at(5).props().id).toEqual(`placeholder-row-${2}`);
      expect(rowElements.at(6).props().id).toEqual(rows[4].id);
      expect(rowElements.at(7).props().id).toEqual(`placeholder-row-${3}`);
    });

    it('should flow horizontally if flowHorizontally prop is set', () => {
      const respCols = [
        {
          id: 'Column-0',
          displayName: 'Col_1',
          width: '60px',
        },
        {
          id: 'Column-1',
          displayName: 'Col_2',
          width: '200px',
          flexGrow: true,
        },
        {
          id: 'Column-2',
          displayName: 'Col_3',
          width: '60px',
        },
      ];
      const numberOfColumns = 4;
      const wrapper = mountWithIntl(
        <CompactInteractiveList
          id="compact-interactive-list-horisontal-flow"
          rows={rows}
          columns={respCols}
          numberOfColumns={numberOfColumns}
          flowHorizontally
        />,
      );
      const rowElements = wrapper.find('.row');
      expect(rowElements.at(0).props().id).toEqual(rows[0].id);
      expect(rowElements.at(0).props().role).toEqual('row');
      expect(rowElements.at(0).props()['aria-hidden']).toBeNull();

      expect(rowElements.at(1).props().id).toEqual(rows[1].id);
      expect(rowElements.at(2).props().id).toEqual(rows[2].id);
      expect(rowElements.at(3).props().id).toEqual(rows[3].id);
      expect(rowElements.at(4).props().id).toEqual(rows[4].id);
      expect(rowElements.at(5).props().id).toEqual(`placeholder-row-${1}`);
      expect(rowElements.at(6).props().id).toEqual(`placeholder-row-${2}`);

      expect(rowElements.at(7).props().id).toEqual(`placeholder-row-${3}`);
      expect(rowElements.at(7).props().role).toBeUndefined();
      expect(rowElements.at(7).props()['aria-hidden']).toEqual(true);
    });
  });

  describe('width unit type consistency', () => {
    it('column width, minimumWidth and maximumWidth props should be disregarded if their unit type is not consistent', () => {
      const cols = [
        {
          id: 'Column-0',
          displayName: 'Col_1',
          width: '60px',
        },
        {
          id: 'Column-1',
          displayName: 'Col_2',
          width: '200em',
          minimumWidth: '10em',
          maximumWidth: '200px',
        },
        {
          id: 'Column-2',
          displayName: 'Col_3',
          width: '3em',
          minimumWidth: '40px',
          maximumWidth: '200em',
        },
      ];

      const wrapper = mountWithIntl(
        <CompactInteractiveList
          id="compact-interactive-list-width-unitType"
          rows={rows}
          columns={cols}
          numberOfColumns={2}
        />,
      );
      const cellElements = wrapper.find('.cell');
      expect(cellElements.at(0).props().style.width).toEqual('60px');
      // PX will be considered unitType as first column width is in PX.
      // Second semantic column width will be removed per EM inconsistent with PX unit type.
      // That will make it responsive column with minWidth and maxWidth having effect.
      expect(cellElements.at(1).props().style.width).toBeUndefined();
      // Second semantic column maxWidth will be used as its unitType is PM.
      expect(cellElements.at(1).props().style.maxWidth).toEqual('200px');
      // Second semantic column minWidth will be disregarded per EM inconsistent with PX unit type, the default px walue used instead.
      expect(cellElements.at(1).props().style.minWidth).toEqual('60px');

      // Third semantic column width will be removed per EM inconsistent with PX unit type.
      // That will make it responsive column with minWidth and maxWidth having effect.
      expect(cellElements.at(2).props().style.width).toBeUndefined();
      // Second semantic column maxWidth will be disregarded as it's in EM.
      expect(cellElements.at(2).props().style.maxWidth).toBeUndefined();
      // Second semantic column minWidth will be applied as it's in PX.
      expect(cellElements.at(2).props().style.minWidth).toEqual('40px');
    });

    it('should disregard columnMinimumWidth and columnMaximumWidth props with inconsistent unitType', () => {
      const cols = [
        {
          id: 'Column-0',
          displayName: 'Col_1',
          width: '60px',
        },
        {
          id: 'Column-1',
          displayName: 'Col_2',
        },
        {
          id: 'Column-2',
          displayName: 'Col_3',
          width: '60px',
        },
      ];

      const wrapper = mountWithIntl(
        <CompactInteractiveList
          id="compact-interactive-list-width-unitType-2"
          rows={rows}
          columns={cols}
          numberOfColumns={2}
          columnMaximumWidth="30em"
          columnMinimumWidth="10em"
        />,
      );
      const list = wrapper.find('.compact-interactive-list');
      expect(list.props().style.minWidth).toEqual('500px'); // default minWidth
      expect(list.props().style.maxWidth).toBeUndefined();

      const cellElements = wrapper.find('.cell');
      // PX will be considered unitType as first column width is PX.
      expect(cellElements.at(1).props().style.maxWidth).toBeUndefined();
      expect(cellElements.at(1).props().style.minWidth).toEqual('60px'); // default px value
    });
  });
});
