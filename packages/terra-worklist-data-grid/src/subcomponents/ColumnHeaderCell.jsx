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
  isTabStop: PropTypes.bool,
  /**
   * String that specifies the width of the column. Any valid CSS width value is accepted.
   */
  width: PropTypes.string,
  /**
   * Content that will rendered within the Cell.
   */
  children: PropTypes.node,
  /**
   * Callback function that is called when a column is selected.
   */
  onColumnSelect: PropTypes.func,
};

const defaultProps = {
  isTabStop: false,
};

function ColumnHeaderCell(props) {
  const {
    columnId,
    coordinates,
    isTabStop,
    width,
    onColumnSelect,
    children,
  } = props;

  const theme = useContext(ThemeContext);

  const handleClick = (event) => {
    if (onColumnSelect) {
      onColumnSelect(columnId, coordinates);
      event.stopPropagation();
    }
  };

  const handleKeyDown = (event) => {
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_SPACE:
        if (onColumnSelect) {
          onColumnSelect(columnId, coordinates);
          event.stopPropagation();
          event.preventDefault(); // prevent the default scrolling
        }
        break;
      default:
    }
  };

  return (
    <th
      className={cx('worklist-data-grid-column-header', theme.className)}
      tabIndex={isTabStop ? 0 : -1}
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
