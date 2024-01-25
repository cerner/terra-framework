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
        minimumWidth: '20px',
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
      expect(rowElements.at(1).props().role).toEqual('row');
      expect(rowElements.at(1).props()['aria-hidden']).toBeNull();

      expect(rowElements.at(2).props().id).toEqual(rows[2].id);
      expect(rowElements.at(2).props()['aria-hidden']).toBeNull();
      expect(rowElements.at(2).props().role).toEqual('row');

      expect(rowElements.at(3).props().id).toEqual(rows[3].id);
      expect(rowElements.at(3).props()['aria-hidden']).toBeNull();
      expect(rowElements.at(3).props().role).toEqual('row');

      expect(rowElements.at(4).props().id).toEqual(rows[4].id);
      expect(rowElements.at(4).props()['aria-hidden']).toBeNull();
      expect(rowElements.at(4).props().role).toEqual('row');

      expect(rowElements.at(5).props().id).toEqual(`placeholder-row-${1}`);
      expect(rowElements.at(5).props()['aria-hidden']).toBeTruthy();
      expect(rowElements.at(5).props().role).toBeFalsy();

      expect(rowElements.at(6).props().id).toEqual(`placeholder-row-${2}`);
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

  describe('Keyboard navigation, vertical flow', () => {
    const cols = [
      {
        id: 'Column-0',
        displayName: 'Col_1',
        width: '100px',
      },
      {
        id: 'Column-1',
        displayName: 'Col_2',
        width: '200px',
      },
      {
        id: 'Column-2',
        displayName: 'Col_3',
        width: '100px',
      },
    ];

    const testListVerticalFlow = (
      <CompactInteractiveList
        id="compact-interactive-list-key-navigation"
        rows={rows}
        columns={cols}
        numberOfColumns={2}
      />
    );

    const arrowRightProps = {
      key: 'ArrowRight', keyCode: 39, which: 39,
    };
    const arrowLeftProps = {
      key: 'ArrowLeft', keyCode: 37, which: 37,
    };
    const arrowDownProps = {
      key: 'ArrowDown', keyCode: 40, which: 40,
    };
    const arrowUpProps = {
      key: 'ArrowUp', keyCode: 38, which: 38,
    };
    const homeKeyProps = {
      key: 'Home', keyCode: 36, which: 36,
    };
    const endKeyProps = {
      key: 'End', keyCode: 35, which: 35,
    };

    beforeEach(() => {
      document.getElementsByTagName('html')[0].innerHTML = '';
    });

    it('Right/Left Arrows should move through cells and stop at the visual row end/start', () => {
      const wrapper = mountWithIntl(
        testListVerticalFlow, {
          attachTo: document.body,
        },
      );
      const list = wrapper.find('.compact-interactive-list');
      list.instance().focus();
      // Set focus to the first cell
      const cellElements = wrapper.find('.cell');
      expect(document.activeElement).toBe(cellElements.at(0).instance());

      // Testing RIGHT ARROW
      // move one cell to the right, same row
      list.simulate('keyDown', arrowRightProps);
      expect(document.activeElement).toBe(cellElements.at(1).instance());
      // move one cell to the right, same row
      list.simulate('keyDown', arrowRightProps);
      expect(document.activeElement).toBe(cellElements.at(2).instance());
      // move one cell to the right, should enter a new row and a new visual column
      list.simulate('keyDown', arrowRightProps);
      expect(document.activeElement).toBe(cellElements.at(9).instance());
      // move two cells to the right to reach the end of the row
      list.simulate('keyDown', arrowRightProps);
      list.simulate('keyDown', arrowRightProps);
      expect(document.activeElement).toBe(cellElements.at(11).instance());
      // should not move to the right as the row end reached
      list.simulate('keyDown', arrowRightProps);
      expect(document.activeElement).toBe(cellElements.at(11).instance());

      // Move one row down to start testing left arrow
      list.simulate('keyDown', arrowDownProps);
      expect(document.activeElement).toBe(cellElements.at(14).instance());

      // Testing LEFT ARROW
      // move one cell to the left, same row
      list.simulate('keyDown', arrowLeftProps);
      expect(document.activeElement).toBe(cellElements.at(13).instance());
      // move 2 cell to the left to break to the previous visual column
      list.simulate('keyDown', arrowLeftProps);
      list.simulate('keyDown', arrowLeftProps);
      expect(document.activeElement).toBe(cellElements.at(5).instance());
      // move 2 cell to the left to reach the first visual column start
      list.simulate('keyDown', arrowLeftProps);
      list.simulate('keyDown', arrowLeftProps);
      expect(document.activeElement).toBe(cellElements.at(3).instance());
      // should not move anymore as the start of the visual row has been reached
      list.simulate('keyDown', arrowLeftProps);
      expect(document.activeElement).toBe(cellElements.at(3).instance());
    });

    it('Up/Down Arrow should move through semantic column and break to the next/previous visual column once reached its start/end', () => {
      const wrapper = mountWithIntl(
        testListVerticalFlow, {
          attachTo: document.body,
        },
      );
      const list = wrapper.find('.compact-interactive-list');
      list.instance().focus();
      // Set focus to the first cell
      const cellElements = wrapper.find('.cell');
      expect(document.activeElement).toBe(cellElements.at(0).instance());

      // Testing DOWN ARROW
      // move one cell down, same sematic column
      list.simulate('keyDown', arrowDownProps);
      expect(document.activeElement).toBe(cellElements.at(3).instance());
      // move two cells down, should break to the next visual column
      list.simulate('keyDown', arrowDownProps);
      list.simulate('keyDown', arrowDownProps);
      expect(document.activeElement).toBe(cellElements.at(9).instance());
      // move one cells down to reach the end of the visual column and the list
      list.simulate('keyDown', arrowDownProps);
      expect(document.activeElement).toBe(cellElements.at(12).instance());
      // should not move as the end of the list has been reached
      list.simulate('keyDown', arrowDownProps);
      expect(document.activeElement).toBe(cellElements.at(12).instance());

      // Testing UP ARROW
      // move one cell up, same visual column
      list.simulate('keyDown', arrowUpProps);
      expect(document.activeElement).toBe(cellElements.at(9).instance());
      // move one cell up, break to the previous visual column
      list.simulate('keyDown', arrowUpProps);
      expect(document.activeElement).toBe(cellElements.at(6).instance());
      // move 2 cell3 up to reach the first visual row in the list
      list.simulate('keyDown', arrowUpProps);
      list.simulate('keyDown', arrowUpProps);
      expect(document.activeElement).toBe(cellElements.at(0).instance());
      // should not move as the beginning of the list has been reached
      list.simulate('keyDown', arrowUpProps);
      expect(document.activeElement).toBe(cellElements.at(0).instance());
    });

    it('Right/left Arrow Keys + metaKey and Right/left Arrow Keys + ctrl + metaKey should take to the end/start of the visual row/list', () => {
      const wrapper = mountWithIntl(
        testListVerticalFlow, {
          attachTo: document.body,
        },
      );
      const list = wrapper.find('.compact-interactive-list');
      list.instance().focus();
      // Set focus to the first cell
      const cellElements = wrapper.find('.cell');
      expect(document.activeElement).toBe(cellElements.at(0).instance());

      // Testing RIGHT ARROW + META_KEY (CMD on mac or HOME for windows)
      // should focus the last cell in the current visual row
      list.simulate('keyDown', {
        ...arrowRightProps, metaKey: true,
      });
      expect(document.activeElement).toBe(cellElements.at(11).instance());

      // Testing RIGHT ARROW + CTRL + META_KEY (CMD on mac or HOME for windows)
      // should focus the last cell in the last list element
      list.simulate('keyDown', {
        ...arrowRightProps, ctrlKey: true, metaKey: true,
      });
      expect(document.activeElement).toBe(cellElements.at(14).instance());

      // Testing LEFT ARROW + META_KEY (CMD on mac or HOME for windows)
      // should focus the first cell in the current visual row
      list.simulate('keyDown', {
        ...arrowLeftProps, metaKey: true,
      });
      expect(document.activeElement).toBe(cellElements.at(3).instance());

      // Testing LEFT ARROW + CTRL + META_KEY (CMD on mac or HOME for windows)
      // should focus the first cell in the first list element
      list.simulate('keyDown', {
        ...arrowLeftProps, ctrlKey: true, metaKey: true,
      });
      expect(document.activeElement).toBe(cellElements.at(0).instance());
    });

    it('Home/End Keys should take focus to the first/last iten in visual row, with ctrl + metaKey - to the first/last item in the list', () => {
      const wrapper = mountWithIntl(
        testListVerticalFlow, {
          attachTo: document.body,
        },
      );
      const list = wrapper.find('.compact-interactive-list');
      list.instance().focus();
      // Set focus to the first cell
      const cellElements = wrapper.find('.cell');
      expect(document.activeElement).toBe(cellElements.at(0).instance());

      // Testing END_KEY
      // should focus the last cell in the current visual row
      list.simulate('keyDown', endKeyProps);
      expect(document.activeElement).toBe(cellElements.at(11).instance());

      // Testing END_KEY + CTRL + META_KEY
      // should focus the last cell in the last list element
      list.simulate('keyDown', {
        ...endKeyProps, ctrlKey: true, metaKey: true,
      });
      expect(document.activeElement).toBe(cellElements.at(14).instance());

      // Testing HOME_KEY
      // should focus the first cell in the current visual row
      list.simulate('keyDown', homeKeyProps);
      expect(document.activeElement).toBe(cellElements.at(3).instance());

      // Testing HOME_KEY + CTRL + META_KEY
      // should focus the first cell in the first list element
      list.simulate('keyDown', {
        ...homeKeyProps, ctrlKey: true, metaKey: true,
      });
      expect(document.activeElement).toBe(cellElements.at(0).instance());
    });
  });

  describe('Keyboard navigation, horizontal flow', () => {
    const cols = [
      {
        id: 'Column-0',
        displayName: 'Col_1',
        width: '100px',
      },
      {
        id: 'Column-1',
        displayName: 'Col_2',
        width: '200em',
      },
      {
        id: 'Column-2',
        displayName: 'Col_3',
        width: '100px',
      },
    ];

    const testListVerticalFlow = (
      <CompactInteractiveList
        id="compact-interactive-list-key-navigation"
        rows={rows}
        columns={cols}
        numberOfColumns={2}
        flowHorizontally
      />
    );

    const arrowRightProps = {
      key: 'ArrowRight', keyCode: 39, which: 39,
    };
    const arrowLeftProps = {
      key: 'ArrowLeft', keyCode: 37, which: 37,
    };
    const arrowDownProps = {
      key: 'ArrowDown', keyCode: 40, which: 40,
    };
    const arrowUpProps = {
      key: 'ArrowUp', keyCode: 38, which: 38,
    };
    const homeKeyProps = {
      key: 'Home', keyCode: 36, which: 36,
    };
    const endKeyProps = {
      key: 'End', keyCode: 35, which: 35,
    };

    beforeEach(() => {
      document.getElementsByTagName('html')[0].innerHTML = '';
    });

    it('Right/Left Arrows should move through cells and stop at the visual row end/start', () => {
      const wrapper = mountWithIntl(
        testListVerticalFlow, {
          attachTo: document.body,
        },
      );
      const list = wrapper.find('.compact-interactive-list');
      list.instance().focus();
      // Set focus to the first cell
      const cellElements = wrapper.find('.cell');
      expect(document.activeElement).toBe(cellElements.at(0).instance());

      // Testing RIGHT ARROW
      // move one cell to the right, same row
      list.simulate('keyDown', arrowRightProps);
      expect(document.activeElement).toBe(cellElements.at(1).instance());
      // move one cell to the right, same row
      list.simulate('keyDown', arrowRightProps);
      expect(document.activeElement).toBe(cellElements.at(2).instance());
      // move one cell to the right, should enter a new row and a new visual column
      list.simulate('keyDown', arrowRightProps);
      expect(document.activeElement).toBe(cellElements.at(3).instance());
      // move two cells to the right to reach the end of the row
      list.simulate('keyDown', arrowRightProps);
      list.simulate('keyDown', arrowRightProps);
      expect(document.activeElement).toBe(cellElements.at(5).instance());
      // should not move to the right as the row end reached
      list.simulate('keyDown', arrowRightProps);
      expect(document.activeElement).toBe(cellElements.at(5).instance());

      // Move one row down to start testing left arrow
      list.simulate('keyDown', arrowDownProps);
      expect(document.activeElement).toBe(cellElements.at(11).instance());

      // Testing LEFT ARROW
      // move one cell to the left, same row
      list.simulate('keyDown', arrowLeftProps);
      expect(document.activeElement).toBe(cellElements.at(10).instance());
      // move 2 cell to the left to break to the previous visual column
      list.simulate('keyDown', arrowLeftProps);
      list.simulate('keyDown', arrowLeftProps);
      expect(document.activeElement).toBe(cellElements.at(8).instance());
      // move 2 cell to the left to reach the first visual column start
      list.simulate('keyDown', arrowLeftProps);
      list.simulate('keyDown', arrowLeftProps);
      expect(document.activeElement).toBe(cellElements.at(6).instance());
      // should not move anymore as the start of the visual row has been reached
      list.simulate('keyDown', arrowLeftProps);
      expect(document.activeElement).toBe(cellElements.at(6).instance());
    });

    it('Up/Down Arrow should move through semantic column and break to the next/previous visual column once reached its start/end', () => {
      const wrapper = mountWithIntl(
        testListVerticalFlow, {
          attachTo: document.body,
        },
      );
      const list = wrapper.find('.compact-interactive-list');
      list.instance().focus();
      // Set focus to the first cell
      const cellElements = wrapper.find('.cell');
      expect(document.activeElement).toBe(cellElements.at(0).instance());

      // Testing DOWN ARROW
      // move one cell down, same sematic column
      list.simulate('keyDown', arrowDownProps);
      expect(document.activeElement).toBe(cellElements.at(6).instance());
      // move two cells down, should break to the next visual column
      list.simulate('keyDown', arrowDownProps);
      list.simulate('keyDown', arrowDownProps);
      expect(document.activeElement).toBe(cellElements.at(3).instance());
      // move one cells down to reach the end of the visual column and the list
      list.simulate('keyDown', arrowDownProps);
      expect(document.activeElement).toBe(cellElements.at(9).instance());
      // should not move as the end of the list has been reached
      list.simulate('keyDown', arrowDownProps);
      expect(document.activeElement).toBe(cellElements.at(9).instance());

      // Testing UP ARROW
      // move one cell up, same visual column
      list.simulate('keyDown', arrowUpProps);
      expect(document.activeElement).toBe(cellElements.at(3).instance());
      // move one cell up, break to the previous visual column
      list.simulate('keyDown', arrowUpProps);
      expect(document.activeElement).toBe(cellElements.at(12).instance());
      // move 2 cell3 up to reach the first visual row in the list
      list.simulate('keyDown', arrowUpProps);
      list.simulate('keyDown', arrowUpProps);
      expect(document.activeElement).toBe(cellElements.at(0).instance());
      // should not move as the beginning of the list has been reached
      list.simulate('keyDown', arrowUpProps);
      expect(document.activeElement).toBe(cellElements.at(0).instance());
    });

    it('Right/left Arrow Keys + metaKey and Right/left Arrow Keys + ctrl + metaKey should take to the end/start of the visual row/list', () => {
      const wrapper = mountWithIntl(
        testListVerticalFlow, {
          attachTo: document.body,
        },
      );
      const list = wrapper.find('.compact-interactive-list');
      list.instance().focus();
      // Set focus to the first cell
      const cellElements = wrapper.find('.cell');
      expect(document.activeElement).toBe(cellElements.at(0).instance());

      // Testing RIGHT ARROW + META_KEY (CMD on mac or HOME for windows)
      // should focus the last cell in the current visual row
      list.simulate('keyDown', {
        ...arrowRightProps, metaKey: true,
      });
      expect(document.activeElement).toBe(cellElements.at(5).instance());

      // Testing RIGHT ARROW + CTRL + META_KEY (CMD on mac or HOME for windows)
      // should focus the last cell in the last list element
      list.simulate('keyDown', {
        ...arrowRightProps, ctrlKey: true, metaKey: true,
      });
      expect(document.activeElement).toBe(cellElements.at(14).instance());

      // Testing LEFT ARROW + META_KEY (CMD on mac or HOME for windows)
      // should focus the first cell in the current visual row
      list.simulate('keyDown', {
        ...arrowLeftProps, metaKey: true,
      });
      expect(document.activeElement).toBe(cellElements.at(12).instance());

      // Testing LEFT ARROW + CTRL + META_KEY (CMD on mac or HOME for windows)
      // should focus the first cell in the first list element
      list.simulate('keyDown', {
        ...arrowLeftProps, ctrlKey: true, metaKey: true,
      });
      expect(document.activeElement).toBe(cellElements.at(0).instance());
    });

    it('Home/End Keys should take focus to the first/last iten in visual row, with ctrl + metaKey - to the first/last item in the list', () => {
      const wrapper = mountWithIntl(
        testListVerticalFlow, {
          attachTo: document.body,
        },
      );
      const list = wrapper.find('.compact-interactive-list');
      list.instance().focus();
      // Set focus to the first cell
      const cellElements = wrapper.find('.cell');
      expect(document.activeElement).toBe(cellElements.at(0).instance());

      // Testing END_KEY
      // should focus the last cell in the current visual row
      list.simulate('keyDown', endKeyProps);
      expect(document.activeElement).toBe(cellElements.at(5).instance());

      // Testing END_KEY + CTRL + META_KEY (CMD on mac or HOME for windows)
      // should focus the last cell in the last list element
      list.simulate('keyDown', {
        ...endKeyProps, ctrlKey: true, metaKey: true,
      });
      expect(document.activeElement).toBe(cellElements.at(14).instance());

      // Testing HOME_KEY
      // should focus the first cell in the current visual row
      list.simulate('keyDown', homeKeyProps);
      expect(document.activeElement).toBe(cellElements.at(12).instance());

      // Testing HOME_KEY + CTRL + META_KEY (CMD on mac or HOME for windows)
      // should focus the first cell in the first list element
      list.simulate('keyDown', {
        ...homeKeyProps, ctrlKey: true, metaKey: true,
      });
      expect(document.activeElement).toBe(cellElements.at(0).instance());
    });
  });

  describe('onCellSelect method', () => {
    const cols = [
      {
        id: 'Column-0',
        displayName: 'Col_1',
        width: '100px',
      },
      {
        id: 'Column-1',
        displayName: 'Col_2',
        width: '200px',
      },
      {
        id: 'Column-2',
        displayName: 'Col_3',
        width: '100px',
      },
    ];

    const spaceKeyProps = {
      key: 'Space', keyCode: 32, which: 32,
    };

    beforeEach(() => {
      document.getElementsByTagName('html')[0].innerHTML = '';
    });

    beforeAll(() => {
      // Define offsetHeight for HTML elements
      Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
        configurable: true,
        value: 44,
      });
      // Define offsetWidth for HTML elements
      Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
        configurable: true, value: 100,
      });
    });

    it('should call onCellSelect method per mouse click or Space key down if cell is selectable', () => {
      const mockOnCellSelect = jest.fn();
      const testList = (
        <CompactInteractiveList
          id="compact-interactive-list-space-key-on-cell"
          rows={rows}
          columns={cols}
          numberOfColumns={2}
          onCellSelect={mockOnCellSelect}
        />
      );

      const wrapper = mountWithIntl(
        testList, {
          attachTo: document.body,
        },
      );
      const list = wrapper.find('.compact-interactive-list');
      list.instance().focus();
      // Set focus to the first cell
      const cellElements = wrapper.find('.cell');
      expect(document.activeElement).toBe(cellElements.at(0).instance());

      // Testing SPACE
      cellElements.at(0).simulate('keyDown', spaceKeyProps);
      expect(mockOnCellSelect).toHaveBeenCalledWith({ columnId: 'Column-0', rowId: 'row_1' });
      // Testing mouse down
      cellElements.at(1).simulate('mouseDown');
      expect(mockOnCellSelect).toHaveBeenCalledWith({ columnId: 'Column-1', rowId: 'row_1' });
    });

    it('Should not call onCellSelect method per mouse click or Space key down if cell is not selactable', () => {
      const buttonCell = <button type="button" aria-label="Learn more button" onClick={jest.fn()}>Learn more</button>;
      const newRows = [
        {
          id: 'row_1',
          cells: [
            { content: buttonCell }, // interactive element makes the cell unselactable
            { content: 'Discern Care Set (1)' },
            { content: 'Row 1 Cell 3 mock content' },
          ],
        },
        {
          id: 'row_2',
          cells: [
            { content: 'Row 2 Cell 1 mock content' },
            { content: 'Initial observation Care/Day High Severity 99220 (2)' },
            { content: 'Row 2 Cell 3 mock content' },
          ],
        },
      ];
      const newCols = [
        {
          id: 'Column-0',
          displayName: 'Col_1',
          width: '100px',
        },
        {
          id: 'unselectable-column-1',
          displayName: 'Col_2',
          width: '200px',
          isSelectable: false, // make column non-selactable
        },
        {
          id: 'Column-2',
          displayName: 'Col_3',
          width: '100px',
        },
      ];
      const mockOnCellSelect = jest.fn();

      const wrapper = mountWithIntl(
        <CompactInteractiveList
          id="compact-interactive-list-space-key-on-cell"
          rows={newRows}
          columns={newCols}
          numberOfColumns={2}
          onCellSelect={mockOnCellSelect}
        />, {
          attachTo: document.body,
        },
      );

      const list = wrapper.find('.compact-interactive-list');
      const cellElements = wrapper.find('.cell');
      const button = wrapper.find('button');

      list.instance().focus();
      // As first cell contains interactive element (button), the focus should go to the button
      expect(document.activeElement).toBe(button.instance());

      // SPACE or MOUSE CLICK should not select the cell with interactible element in it.
      cellElements.at(0).simulate('keyDown', spaceKeyProps);
      cellElements.at(0).simulate('mouseDown');
      // SPACE or MOUSE CLICK should not select the cell if corresponding column isSelectable prop set to false.
      cellElements.at(1).simulate('keyDown', spaceKeyProps);
      cellElements.at(1).simulate('mouseDown');
      expect(mockOnCellSelect).not.toHaveBeenCalled();
    });
  });
});
