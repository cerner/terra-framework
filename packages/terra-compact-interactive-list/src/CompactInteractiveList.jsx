import React, {
  useContext, useRef, useMemo, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import * as KeyCode from 'keycode-js';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import getFocusableElements from 'terra-table/lib/utils/focusManagement';
import styles from './CompactInteractiveList.module.scss';
import rowShape from './proptypes/rowShape';
import Row from './subcomponents/Row';
import columnShape from './proptypes/columnShape';
import { widthUnitTypes, DefaultListValues } from './utils/constants';
import {
  getRowMaximumWidth,
  getRowMinimumWidth,
  checkIfRowHasResponsiveColumns,
  getValueUnitTypePair,
  converseColumnTypes,
  getColumnMaxWidth,
  getColumnMinWidth,
} from './utils/utils';

import {
  isTextInput,
  handleLeftKey,
  handleRightKey,
  moveFocusFromElement,
  handleDownKey,
  handleUpKey,
  handleHomeKey,
  handleEndKey,
  getFocusedCellIndexes,
  getFocusedCellIds,
} from './utils/keyHandlerUtils';
import validateRowHeaderIndex from './proptypes/validators';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String that will be used to identify the table. If multiple tables are on the same page, each table should have
   * a unique id.
   */
  id: PropTypes.string.isRequired,

  /**
   * String that identifies the element (or elements) that labels the table.
   */
  ariaLabelledBy: PropTypes.string,

  /**
   * String that labels the table for accessibility. If ariaLabelledBy is specified, ariaLabel will not be used.
   */
  ariaLabel: PropTypes.string,

  /**
   * Data for columns.
   */
  columns: PropTypes.arrayOf(columnShape),

  /**
   * Data for rows (list items) content.
   */
  rows: PropTypes.arrayOf(rowShape),

  /**
   * Row height should be a valid css string with height in px, em, or rem units.
   */
  rowHeight: PropTypes.string,

  /**
   * A number of visual columns. Defaults to 1. Number of visual rows is calculated as the number of items divided by the number of columns, rounded up.
   */
  numberOfColumns: PropTypes.number,

  /**
   * By default the items go from top to bottom, then break to the next column.
   * If flowHorizontally prop is set to true, items will flow left to right, then break to the next row.
   */
  flowHorizontally: PropTypes.bool,

  /**
   * A string for container's width. Any valid css string. Defaults to '100%'.
   * In case when all the columns has their widths explicitly set to a number, the width of the list will be determined by the width of it's columns unless the flexGrow prop would allow them grow.
   */
  width: PropTypes.string,

  /**
   * Callback function that is called when a selectable cell is selected.
   * Returns an object with named parameters for rowId and columnId
   */
  onCellSelect: PropTypes.func,

  /**
   * Callback function that is called when all selected cells need to be unselected. Parameters: none.
   */
  onClearSelection: PropTypes.func,

  /**
   * Columns minimum width should be a valid css string in value in px, em, or rem units.
   */
  columnMinimumWidth: PropTypes.string,

  /**
   * Columns maximum width should be a valid css string in value in px, em, or rem units.
   */
  columnMaximumWidth: PropTypes.string,

  /**
   * A zero-based index indicating which column represents the row header.
   */
  rowHeaderIndex: validateRowHeaderIndex,
};

const defaultProps = {
  rows: [],
  numberOfColumns: 1,
  width: '100%',
  rowHeaderIndex: 0,
};

const CompactInteractiveList = (props) => {
  const {
    id,
    ariaLabelledBy,
    ariaLabel,
    columns,
    rows,
    rowHeight,
    numberOfColumns,
    flowHorizontally,
    width,
    columnMinimumWidth,
    columnMaximumWidth,
    onCellSelect,
    onClearSelection,
    rowHeaderIndex,
  } = props;

  const theme = useContext(ThemeContext);
  const listRef = React.useRef();

  // using ref so that keyboard navigation and focusing on cells won't trigger component re-render.
  const focusedCell = useRef({ rowId: '', columnId: '' });

  // set the first cell as a default focus cell once the list renders
  useEffect(() => {
    if (listRef?.current && focusedCell?.current) {
      focusedCell.current = getFocusedCellIds(listRef?.current, columns, { row: 0, cell: 0 });
    }
  }, [listRef, focusedCell, columns]);

  const focusCell = ({ row, cell }) => {
    // add 1 to the row number to accommodate for hidden header
    const focusedCellElement = listRef.current?.children[row + 1]?.children[cell];
    if (focusedCellElement) {
      const interactiveChildren = getFocusableElements(focusedCellElement);
      if (interactiveChildren?.length > 0 && interactiveChildren[0]) {
        // currently a cell can have only one interact-able element in it, which gets auto-focused.
        interactiveChildren[0].focus();
      } else {
        // cell gets focus if there is no interact-able elements in it.
        focusedCellElement.focus();
      }
    }
  };

  const setFocusedCell = ({ rowId, columnId }) => {
    focusedCell.current = { rowId, columnId };
  };

  const handleKeyDown = (event) => {
    let moveFocusTo = getFocusedCellIndexes(listRef?.current, columns, focusedCell.current);

    const targetElement = event.target;

    // Allow default behavior if the event target is an editable field

    if (event.keyCode !== KeyCode.KEY_TAB
        && (isTextInput(targetElement)
            || ['textarea', 'select'].indexOf(targetElement.tagName.toLowerCase()) >= 0
            || (targetElement.hasAttribute('contentEditable') && targetElement.getAttribute('contentEditable') !== false))) {
      return;
    }

    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_UP:
        moveFocusTo = handleUpKey(moveFocusTo, numberOfColumns, flowHorizontally, rows.length);
        break;
      case KeyCode.KEY_DOWN:
        moveFocusTo = handleDownKey(moveFocusTo, numberOfColumns, flowHorizontally, rows.length);
        break;
      case KeyCode.KEY_LEFT: {
        moveFocusTo = handleLeftKey(event, moveFocusTo, numberOfColumns, flowHorizontally, columns.length, rows.length);
        break;
      }
      case KeyCode.KEY_RIGHT: {
        moveFocusTo = handleRightKey(event, moveFocusTo, numberOfColumns, flowHorizontally, columns.length, rows.length);
        break;
      }
      case KeyCode.KEY_HOME:
        moveFocusTo = handleHomeKey(event, moveFocusTo, numberOfColumns, flowHorizontally, rows.length);
        break;
      case KeyCode.KEY_END:
        moveFocusTo = handleEndKey(event, moveFocusTo, numberOfColumns, flowHorizontally, columns.length, rows.length);
        break;
      case KeyCode.KEY_ESCAPE:
        if (onClearSelection) {
          onClearSelection();
        }
        event.preventDefault();
        return;
      case KeyCode.KEY_TAB:
        moveFocusFromElement(listRef, id, !event.shiftKey);
        event.preventDefault();
        return;
      default:
        return;
    }
    focusedCell.current = getFocusedCellIds(listRef?.current, columns, moveFocusTo);
    focusCell(moveFocusTo);
    event.preventDefault(); // prevent the page from moving with the arrow keys.
  };

  const onFocus = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      // Not triggered when swapping focus between children
      focusCell(getFocusedCellIndexes(listRef?.current, columns, focusedCell.current));
    }
  };

  const defaultUnitType = widthUnitTypes.PX;
  // map the columns to ensure that width, maximumWidth and minimumWidth use same units (px, em, or rem) across all columns.
  // if a width prop uses different units, it will be disregarded.
  const [conversionedColumns, widthUnit] = useMemo(() => converseColumnTypes(columns, defaultUnitType), [columns, defaultUnitType]);
  const columnMinWidth = useMemo(() => getColumnMinWidth(columnMinimumWidth, widthUnit), [columnMinimumWidth, widthUnit]);
  const columnMaxWidth = useMemo(() => getColumnMaxWidth(columnMaximumWidth, widthUnit), [columnMaximumWidth, widthUnit]);

  // check if list has responsive columns
  const isResponsive = checkIfRowHasResponsiveColumns(conversionedColumns);
  // if there are responsive columns, we need maxWidth and minWidth for semantic rows specifically.

  const rowMaxWidth = isResponsive ? getRowMaximumWidth(conversionedColumns, columnMaxWidth?.value) : null;
  const rowMinWidth = isResponsive ? getRowMinimumWidth(conversionedColumns, columnMinWidth?.value) : null;

  // calculate row width based on the width of its columns
  const getRowWidthSum = (total, column) => total + column.width;
  const rowWidth = isResponsive ? null : conversionedColumns.reduce(getRowWidthSum, 0);

  const calculatedRowHeight = rowHeight ? getValueUnitTypePair(rowHeight) : null;
  // calculate list width based on the semantic row width and number of columns
  const listWidth = `${rowWidth * numberOfColumns}${widthUnit}`;
  // calculate list min width or use default
  const defaultListMinWidth = getValueUnitTypePair(DefaultListValues.listMinimumWidth[widthUnit])?.value;
  const listMinWidth = isResponsive ? Math.max(rowMinWidth * numberOfColumns, defaultListMinWidth) : null;
  // defining styles to apply to the list
  const style = {
    width: isResponsive ? width : listWidth,
  };
  if (listMinWidth) {
    // assign minWidth to the list only if such exists (list must be responsive)
    style.minWidth = `${listMinWidth}${widthUnit}`;
  }
  if (rowMaxWidth) {
    // assign maxWidth prop to the list only if row maximum width exists (list must be responsive)
    style.maxWidth = `${rowMaxWidth * numberOfColumns}${widthUnit}`;
  }

  // number of rows including placeholder rows
  const numberOfRows = Math.ceil(rows.length / numberOfColumns);
  // map rows differently depending on vertical or horizontal orientation
  const mapRows = () => {
    const placeholdersNumber = isResponsive ? (numberOfRows * numberOfColumns) - rows.length : 0;
    let result = [];
    if (flowHorizontally) {
      result = [...rows];
    } else {
      for (let i = 0; i < numberOfRows; i += 1) {
        let x = numberOfColumns - placeholdersNumber;
        for (let j = i; j < rows.length; j += numberOfRows - (x >= 0 ? 0 : 1)) {
          if (result.length < rows.length) {
            result.push({ ...rows[j] });
            if (x >= 0) { x -= 1; }
          }
        }
      }
    }
    // add placeholder rows
    for (let i = rows.length; i < rows.length + placeholdersNumber; i += 1) {
      result.push({ id: `placeholder-row-${i - rows.length + 1}` });
    }
    return result;
  };

  const mappedRows = mapRows();
  const isLeftmost = (index) => (index % numberOfColumns === 0);
  const isTopmost = (index) => (index < numberOfColumns);

  return (
    <div className={cx('compact-interactive-list-container', theme.className)}>
      <div
        id={id}
        role="grid"
        ref={listRef}
        aria-labelledby={ariaLabelledBy}
        aria-label={ariaLabel}
        className={cx('compact-interactive-list')}
        // eslint-disable-next-line react/forbid-dom-props
        style={style}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onFocus={onFocus}
      >
        <div role="row" aria-rowindex={1} className={cx('hidden')}>
          {columns.map((column) => (
            <span
              key={column.id}
              role="columnheader"
            >
              {column.displayName}
            </span>
          ))}
          {/* aria-rowindex needs to ba assigned to all cells  */}
        </div>
        {mappedRows.map((row, index) => (
          <Row
            key={row.id}
            id={row.id}
            cells={row.cells}
            ariaLabel={row.ariaLabel}
            columns={conversionedColumns}
            columnMaximumWidth={columnMaxWidth?.value}
            columnMinimumWidth={columnMinWidth?.value}
            numberOfColumns={numberOfColumns}
            rowWidth={rowWidth}
            isResponsive={isResponsive}
            rowMaximumWidth={rowMaxWidth}
            rowMinimumWidth={rowMinWidth}
            widthUnit={widthUnit}
            onCellSelect={onCellSelect}
            setFocusedCell={setFocusedCell}
            rowHeight={calculatedRowHeight}
            isTopmost={isTopmost(index)}
            isLeftmost={isLeftmost(index)}
            rowHeaderIndex={rowHeaderIndex}
          />
        ))}
      </div>
    </div>
  );
};

CompactInteractiveList.propTypes = propTypes;
CompactInteractiveList.defaultProps = defaultProps;

export default injectIntl(CompactInteractiveList);
