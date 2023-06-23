import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import '../_elementPolyfill';
import * as KeyCode from 'keycode-js';
import styles from './ColumnHeaderCell.module.scss';
import WorklistDataGridUtils from '../utils/WorklistDataGridUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String identifier of the column in which the Cell will be rendered.
   */
  columnId: PropTypes.string.isRequired,
  /**
   * The coordinates of the cell within the grid.
   */
  coordinates: PropTypes.shape({
    row: PropTypes.number,
    col: PropTypes.number,
  }),
  /**
   * Boolean value to indicate if the cell is the tab stop on the grid. The grid will have only one tab stop.
   */
  acceptsFocus: PropTypes.bool,
  /**
   * String that specifies the width of the column. Any valid CSS width value is accepted.
   */
  width: PropTypes.string,
  /**
   * Callback function that is called when cell selection changes.
   */
  onCellSelectionChange: PropTypes.func,
  /**
     * Callback function that is called when focus moves from one cell to another.
     */
  onMoveCellFocus: PropTypes.func,

  /**
   * Content that will rendered within the Cell.
   */
  children: PropTypes.node,
};

const defaultProps = {
  acceptsFocus: false,
};

function ColumnHeaderCell(props) {
  const {
    columnId,
    coordinates,
    acceptsFocus,
    width,
    onMoveCellFocus,
    onCellSelectionChange,
    children,
    ...customProps
  } = props;

  const theme = useContext(ThemeContext);
  const handleClick = () => {
    if (onCellSelectionChange) {
      onCellSelectionChange(null, null, coordinates);
    }
  };

  const handleKeyDown = (event) => {
    let nextRow = coordinates.row;
    let nextCol = coordinates.col;

    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_UP:
        nextRow -= 1;
        break;
      case KeyCode.KEY_DOWN:
        nextRow += 1;
        break;
      case KeyCode.KEY_LEFT:
        nextCol -= 1;
        break;
      case KeyCode.KEY_RIGHT:
        nextCol += 1;
        break;
      case KeyCode.KEY_HOME:
        nextCol = 0;
        if (event.ctrlKey) {
          nextRow = 1; // Assumption is that the first row is the column Heading.
        }
        break;
      case KeyCode.KEY_END:
        nextCol = customProps.columnsLength - 1; // Col are zero based.
        if (event.ctrlKey) {
          // Though rows are zero based, the header is the first row so the rowsLength will
          // always be one more than then actual number of data rows.
          nextRow = customProps.rowsLength;
        }
        break;
      case KeyCode.KEY_SPACE:
        // Default behavior of scrolling by space key needs to be prevented.
        event.preventDefault();
        return;
      case KeyCode.KEY_ESCAPE:
        event.preventDefault();
        break;
      default:
        return;
    }
    if (nextRow > customProps.rowsLength || nextCol > customProps.columnsLength) {
      event.preventDefault();
      return;
    }
    if (nextCol < 0 || nextRow < 0) {
      event.preventDefault();
      return;
    }
    if (onMoveCellFocus) {
      onMoveCellFocus(coordinates, { row: nextRow, col: nextCol });
    }
    event.preventDefault();
  };

  return (
    <th
      className={cx('worklist-data-grid-column-header', theme.className)}
      tabIndex={acceptsFocus ? 0 : -1}
      // eslint-disable-next-line react/forbid-dom-props
      style={{ width }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onCopy={WorklistDataGridUtils.copyCellContent}
    >
      {children}
    </th>
  );
}

ColumnHeaderCell.propTypes = propTypes;
ColumnHeaderCell.defaultProps = defaultProps;
export default ColumnHeaderCell;
