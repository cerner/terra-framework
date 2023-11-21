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
      },
      {
        id: 'Column-1',
        displayName: 'Col_2',
        width: '200px',
      },
      {
        id: 'Column-2',
        displayName: 'Col_3',
        width: '40px',
      },
    ];

    it('should not apply default minimumWidth to fixed width list', () => {
      const wrapper = mountWithIntl(
        <CompactInteractiveList
          id="compact-interactive-list-fixed-width"
          rows={rows}
          columns={cols}
        />,
      );
      const list = wrapper.find('.compact-interactive-list');
      expect(list.props().style.minWidth).toBeFalsy();
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
          columnMaximumWidth="200px"
        />,
      );
      const list = wrapper.find('.compact-interactive-list');
      // columnMinimumWidth and columnMaximumWidth should NOT be applied to fixed width lists
      expect(list.props().style.minWidth).toBeFalsy();
      expect(list.props().style.maxWidth).toBeFalsy();
      // the width should be equal to the sum of all columns width multiplied by numberOfColumns
      expect(list.props().style.width).toEqual('560px');
    });
  });

  describe('responsive columns', () => {
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
      expect(rowElements.at(0).props()['aria-hidden']).toBeFalsy();

      expect(rowElements.at(1).props().id).toEqual(rows[1].id);
      expect(rowElements.at(2).props().id).toEqual(rows[2].id);

      expect(rowElements.at(3).props().id).toEqual(`placeholder-row-${1}`);
      expect(rowElements.at(3).props().role).toBeFalsy();
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
      expect(rowElements.at(0).props()['aria-hidden']).toBeFalsy();

      expect(rowElements.at(1).props().id).toEqual(rows[1].id);
      expect(rowElements.at(2).props().id).toEqual(rows[2].id);
      expect(rowElements.at(3).props().id).toEqual(rows[3].id);
      expect(rowElements.at(4).props().id).toEqual(rows[4].id);
      expect(rowElements.at(5).props().id).toEqual(`placeholder-row-${1}`);
      expect(rowElements.at(6).props().id).toEqual(`placeholder-row-${2}`);

      expect(rowElements.at(7).props().id).toEqual(`placeholder-row-${3}`);
      expect(rowElements.at(7).props().role).toBeFalsy();
      expect(rowElements.at(7).props()['aria-hidden']).toEqual(true);
    });
  });
});
