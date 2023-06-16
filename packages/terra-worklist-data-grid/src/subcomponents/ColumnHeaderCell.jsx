import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import '../_elementPolyfill';
import * as KeyCode from 'keycode-js';
import styles from '../WorklistDataGrid.module.scss';
import WorklistDataGridUtils from '../utils/WorklistDataGridUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String identifier of the column in which the Cell will be rendered.
   */
  columnId: PropTypes.string.isRequired,
  coordinates: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  /**
   * Boolean value to indicate if the cell can accept focus.
   */
  acceptsFocus: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  onMoveCellFocus: PropTypes.func,
  onCellSelectionChange: PropTypes.func,
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
    height,
    onMoveCellFocus,
    onCellSelectionChange,
    children,
    ...customProps
  } = props;

  const handleClick = (event) => {
    if (onCellSelectionChange) {
      onCellSelectionChange(null, null, coordinates);
    }

    event.preventDefault();
  };

  const handleKeyDown = (event) => {
    let nextRow = coordinates.x;
    let nextCol = coordinates.y;

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
      onMoveCellFocus(coordinates, { x: nextRow, y: nextCol });
    }
    event.preventDefault();
  };

  return (
    <th
      id={columnId}
      key={columnId}
      className={cx('worklist-data-grid-column-header')}
      tabIndex={acceptsFocus ? 0 : -1}
      // eslint-disable-next-line react/forbid-dom-props
      style={{ width, height }}
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
