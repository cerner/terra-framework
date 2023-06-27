import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as KeyCode from 'keycode-js';
import '../_elementPolyfill';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import WorklistDataGridUtils from '../utils/WorklistDataGridUtils';
import styles from './Cell.module.scss';

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
   * The coordinates of the cell within the grid.
   */
  coordinates: PropTypes.shape({
    row: PropTypes.number,
    col: PropTypes.number,
  }),

  /**
   * Boolean value to indicate if the cell is the tab stop on the grid. At any given time, the grid has only one tab stop.
   */
  isTabStop: PropTypes.bool,

  /**
   * Boolean indicating whether the Cell is currently selected.
   */
  isSelected: PropTypes.bool,

  /**
   * Boolean indicating if the cell is masked.
   */
  isMasked: PropTypes.bool,

  /**
   * String that labels the cell for accessibility.
   */
  ariaLabel: PropTypes.string,

  /**
   * Boolean indicating that the cell is a row header
   */
  isRowHeader: PropTypes.bool,
  /**
   * Content that will rendered within the Cell.
   */
  children: PropTypes.node,
  /**
   * Boolean indicating whether the cell is a row selection cell.
   */
  isRowSelectionCell: PropTypes.bool,
  /**
   * Callback function that will be called when this cell is selected.
   */
  onCellSelect: PropTypes.func,

  isSelectable: PropTypes.bool,
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  isTabStop: false,
  isRowSelectionCell: false,
  isRowHeader: false,
};

function Cell(props) {
  const {
    rowId,
    columnId,
    coordinates,
    isTabStop,
    isSelected,
    isMasked,
    isRowSelectionCell,
    ariaLabel,
    isRowHeader,
    children,
    onCellSelect,
    isSelectable,
    intl,
  } = props;

  const theme = useContext(ThemeContext);

  const handleClick = (event) => {
    if (onCellSelect) {
      onCellSelect({ rowId, columnId }, coordinates);
      event.stopPropagation();
    }
  };

  const handleKeyDown = (event) => {
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_SPACE:
        if (onCellSelect) {
          onCellSelect({ rowId, columnId }, coordinates);
          event.stopPropagation();
          event.preventDefault(); // prevent the default scrolling
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

  const className = isRowSelectionCell ? 'row-selection-cell'
    : ['worklist-data-grid-cell',
      { masked: isMasked, selectable: !(isMasked || isSelectable === false) },
      { 'worklist-data-grid-cell-selected': (isSelected && !isMasked) },
      { blank: !children },
    ];

  const CellTag = isRowHeader ? 'th' : 'td';
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <CellTag
      aria-selected={isSelected ? true : undefined}
      aria-label={cellAriaLabel}
      tabIndex={isTabStop ? 0 : -1}
      className={cx(className, theme.className)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onCopy={!isRowSelectionCell ? WorklistDataGridUtils.copyCellContent : undefined}
    >
      {isRowSelectionCell ? children : (!isMasked && children && <div className={cx('cell-content', theme.className)}>{children}</div>)}
    </CellTag>
  );
}

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default injectIntl(Cell);
