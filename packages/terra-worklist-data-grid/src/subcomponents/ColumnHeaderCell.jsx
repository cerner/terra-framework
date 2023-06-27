import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import '../_elementPolyfill';
import * as KeyCode from 'keycode-js';
import styles from './ColumnHeaderCell.module.scss';
import WorklistDataGridUtils from '../utils/WorklistDataGridUtils';
import columnShape from '../proptypes/columnShape';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The information for the column.
   */
  column: columnShape.isRequired,
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
   * Callback function that is called when a column is selected.
   */
  onColumnSelect: PropTypes.func,
  /**
   * String that specifies the default width for columns in the grid. Any valid CSS width value is accepted.
   * To override the default value, provide width for the column that needs to be overridden.
   */
  defaultWidth: PropTypes.string,
};

const defaultProps = {
  isTabStop: false,
};

function ColumnHeaderCell(props) {
  const {
    coordinates,
    isTabStop,
    onColumnSelect,
    column,
    defaultWidth,
  } = props;

  const theme = useContext(ThemeContext);

  const handleClick = (event) => {
    if (onColumnSelect) {
      onColumnSelect(column.id, coordinates);
      event.stopPropagation();
    }
  };

  const handleKeyDown = (event) => {
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_SPACE:
        if (onColumnSelect) {
          onColumnSelect(column.id, coordinates);
          event.stopPropagation();
          event.preventDefault(); // prevent the default scrolling
        }
        break;
      default:
    }
  };

  const handleCopy = (event) => {
    WorklistDataGridUtils.writeToClipboard(event.target.textContent);
  };

  const width = (column.width || defaultWidth) ? `${column.width || defaultWidth}px` : undefined;
  return (
    <th
      className={cx('worklist-data-grid-column-header', { selectable: !(column.isSelectable === false) }, theme.className)}
      tabIndex={isTabStop ? 0 : -1}
      // eslint-disable-next-line react/forbid-dom-props
      style={{ width }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onCopy={handleCopy}
    >
      {column.displayName}
    </th>
  );
}

ColumnHeaderCell.propTypes = propTypes;
ColumnHeaderCell.defaultProps = defaultProps;
export default ColumnHeaderCell;
