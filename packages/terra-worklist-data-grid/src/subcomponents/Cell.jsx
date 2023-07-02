import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as KeyCode from 'keycode-js';
import '../_elementPolyfill';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import WorklistDataGridUtils from '../utils/WorklistDataGridUtils';
import styles from './Cell.module.scss';
import cellShape from '../proptypes/cellShape';

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
   * The information about the cell.
   */
  cell: cellShape.isRequired,
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
   * Boolean indicating that the cell is a row header
   */
  isRowHeader: PropTypes.bool,
  /**
   * Boolean indicating whether the cell is a row selection cell.
   */
  isRowSelectionCell: PropTypes.bool,
  /**
   * Callback function that will be called when this cell is selected.
   */
  onCellSelect: PropTypes.func,
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
  isSelected: false,
};

function Cell(props) {
  const {
    rowId,
    columnId,
    coordinates,
    isTabStop,
    ariaLabel,
    isRowSelectionCell,
    isRowHeader,
    isSelected,
    cell,
    onCellSelect,
    intl,
  } = props;

  const theme = useContext(ThemeContext);

  const handleMouseDown = (event) => {
    if (cell.isMasked || cell.isSelectable === false) {
      event.stopPropagation();
      event.preventDefault();
    } else if (onCellSelect) {
      onCellSelect({ rowId, columnId }, coordinates);
      event.stopPropagation();
    }
  };

  const handleKeyDown = (event) => {
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_SPACE:
        if (cell.isMasked || cell.isSelectable === false) {
          event.stopPropagation();
          event.preventDefault();
        } else if (onCellSelect) {
          onCellSelect({ rowId, columnId }, coordinates);
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

  let cellAriaLabel = ariaLabel;
  if (cell.isMasked) {
    cellAriaLabel = intl.formatMessage({ id: 'Terra.worklistDataGrid.maskedCell' });
  } else if (!cell.content) {
    cellAriaLabel = intl.formatMessage({ id: 'Terra.worklistDataGrid.blank' });
  }

  const className = cx('worklist-data-grid-cell', {
    'row-selection-cell': isRowSelectionCell,
    masked: cell.isMasked,
    selectable: !(cell.isMasked || cell.isSelectable === false),
    selected: isSelected && !cell.isMasked,
    blank: !cell.content,
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
      onCopy={!isRowSelectionCell ? handleCopy : undefined}
    >
      {isRowSelectionCell ? cell.content : (!cell.isMasked && cell.content && <div className={cx('cell-content', theme.className)}>{cell.content}</div>)}
    </CellTag>
  );
}

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default injectIntl(Cell);
