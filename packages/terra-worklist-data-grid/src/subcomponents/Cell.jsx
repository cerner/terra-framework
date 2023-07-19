/* eslint-disable react/forbid-dom-props */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import * as KeyCode from 'keycode-js';
import classNames from 'classnames/bind';

import ThemeContext from 'terra-theme-context';

import WorklistDataGridUtils from '../utils/WorklistDataGridUtils';
import styles from './Cell.module.scss';
import '../_elementPolyfill';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String identifier of the row in which the Cell will be rendered.
   */
  rowId: PropTypes.string.isRequired,

  /**
   * String identifier of the column in which the Cell will be rendered.
   */
  columnId: PropTypes.string.isRequired,

  /**
   * The cell's row position in the grid. This is zero based.
   */
  rowIndex: PropTypes.number,

  /**
   * The cell's column position in the grid. This is zero based.
   */
  columnIndex: PropTypes.number,

  /**
   * Content that will be rendered within the Cell.
   */
  children: PropTypes.node,

  /**
   *  Boolean indicating if cell contents are masked.
   */
  isMasked: PropTypes.bool,

  /**
   *  Boolean indicating if cell is pinned.
   */
  isPinned: PropTypes.bool,

  /**
   * Boolean value indicating whether or not the column header is selectable.
   */
  isSelectable: PropTypes.bool,

  /**
   * Boolean value to indicate if the cell is the tab stop on the grid. At any given time, the grid has only one tab stop.
   */
  isTabStop: PropTypes.bool,

  /**
   * Boolean indicating whether the Cell is currently selected.
   */
  isSelected: PropTypes.bool,

  /**
   * String that labels the cell for accessibility.
   */
  ariaLabel: PropTypes.string,

  /**
   * Boolean indicating that the cell is a row header.
   */
  isRowHeader: PropTypes.bool,

  /**
   * Callback function that will be called when this cell is selected.
   */
  onCellSelect: PropTypes.func,

  /**
   * String that specifies the height of the cell. Any valid CSS value is accepted.
   */
  height: PropTypes.string,

  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  isTabStop: false,
  isRowHeader: false,
  isSelected: false,
  isSelectable: true,
  isMasked: false,
  isPinned: false,
};

function Cell(props) {
  const {
    rowId,
    columnId,
    rowIndex,
    columnIndex,
    isTabStop,
    ariaLabel,
    isMasked,
    isPinned,
    isRowHeader,
    isSelectable,
    isSelected,
    children,
    onCellSelect,
    height,
    intl,
  } = props;

  const theme = useContext(ThemeContext);

  const handleMouseDown = (event) => {
    if (isMasked || !isSelectable) {
      event.stopPropagation();
      event.preventDefault();
    } else if (onCellSelect) {
      onCellSelect({ rowId, columnId }, { row: rowIndex, col: columnIndex });
      event.stopPropagation();
    }
  };

  const handleKeyDown = (event) => {
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_SPACE:
        if (isMasked || !isSelectable) {
          event.stopPropagation();
          event.preventDefault();
        } else if (onCellSelect) {
          onCellSelect({ rowId, columnId }, { row: rowIndex, col: columnIndex });
          event.stopPropagation();
          event.preventDefault(); // prevent the default scrolling
        }
        break;
      case KeyCode.KEY_C:
        if (event.ctrlKey || event.metaKey) {
          WorklistDataGridUtils.writeToClipboard(event.target.textContent);
        }
        break;
      default:
    }
  };

  let cellAriaLabel = ariaLabel;
  if (isMasked) {
    cellAriaLabel = intl.formatMessage({ id: 'Terra.worklistDataGrid.maskedCell' });
  } else if (!children) {
    cellAriaLabel = intl.formatMessage({ id: 'Terra.worklistDataGrid.blank' });
  }

  const className = cx('worklist-data-grid-cell', {
    masked: isMasked,
    pinned: isPinned,
    selectable: isSelectable && !isMasked,
    selected: isSelected && !isMasked,
    blank: !children,
  }, theme.className);

  const CellTag = isRowHeader ? 'th' : 'td';
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <CellTag
      aria-selected={isSelected}
      aria-label={cellAriaLabel}
      tabIndex={isTabStop ? 0 : -1}
      className={className}
      onMouseDown={handleMouseDown}
      onKeyDown={handleKeyDown}
    >
      {!isMasked && children && <div className={cx('cell-content', theme.className)} style={{ height }}>{children}</div>}
    </CellTag>
  );
}

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default injectIntl(Cell);
