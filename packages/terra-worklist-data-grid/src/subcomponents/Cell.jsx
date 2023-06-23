import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as KeyCode from 'keycode-js';
import '../_elementPolyfill';
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
   * Boolean value to indicate if the cell is the tab stop on the grid. The grid will have only one tab stop.
   */
  acceptsFocus: PropTypes.bool,

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
   * Function that is called when a selectable cell is selected. Parameters: `onCellSelect(rowId, columnId)`
   */
  onCellSelect: PropTypes.func,

  onNavigationModeChange: PropTypes.func,

  /**
     * Callback function that is called when cell selection changes.
     */
  onCellSelectionChange: PropTypes.func,
  /**
   * Callback function that is called when focus moves from one cell to another.
   */
  onMoveCellFocus: PropTypes.func,

  /**
   * Boolean indicating if grid navigation is enabled. When grid navigation is disabled, navigation is restricted to the cell.
   */
  isNavigationEnabled: PropTypes.bool,

  /**
     * Boolean indicating whether or not the DataGrid should allow entire rows to be selectable. An additional column will be
     * rendered to allow for row selection to occur.
     */
  isRowSelectionModeEnabled: PropTypes.bool,
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

};

const defaultProps = {
  acceptsFocus: false,
  isRowSelectionCell: false,
  isRowHeader: false,
};

function Cell(props) {
  const {
    rowId,
    columnId,
    coordinates,
    acceptsFocus,
    isSelected,
    isMasked,
    isRowSelectionCell,
    ariaLabel,
    onCellSelectionChange,
    onCellSelect,
    onMoveCellFocus,
    isRowSelectionModeEnabled,
    onNavigationModeChange,
    isRowHeader,
    children,
    isNavigationEnabled,
    ...customProps
  } = props;

  const theme = useContext(ThemeContext);

  const selectCell = (event) => {
    // If current cell is selected, do nothing.
    if (isSelected || isMasked) {
      event.preventDefault();
      return;
    }

    // Make note of cell that is currently selected.
    if (onCellSelectionChange) {
      onCellSelectionChange(rowId, columnId, coordinates);
    }

    event.preventDefault();

    if (onCellSelect) {
      onCellSelect(rowId);
    }
  };

  const handleClick = (event) => {
    if (isRowSelectionModeEnabled) {
      if (onCellSelectionChange) {
        onCellSelectionChange(null, null, coordinates);
      }
    } else {
      selectCell(event);
    }
  };

  const handleKeyUp = (event) => {
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_SPACE:
        if (isRowSelectionModeEnabled) {
          if (onCellSelectionChange) {
            onCellSelectionChange(null, null, coordinates);
          }
        } else {
          selectCell(event);
        }
        event.preventDefault();
        break;
      default:
    }
  };

  const handleKeyDownWhenGridNavigationDisabled = (event) => {
    // TODO: Set focus to the first focusable child of the active cell.
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_ESCAPE:
        if (onNavigationModeChange) {
          onNavigationModeChange(true);
        }
        break;
      default:
        break;
    }
  };

  const handleKeyDown = (event) => {
    if (!isNavigationEnabled) {
      handleKeyDownWhenGridNavigationDisabled(event);
      event.preventDefault();
      return;
    }

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
        if (event.metaKey) {
          // Cmd + Left = Home
          nextCol = 0;

          if (event.ctrlKey) {
            // Ctrl + Cmd + Left = Ctrl + Home
            nextRow = WorklistDataGridUtils.FIRST_NON_HEADER_ROW;
          }
        } else {
          // Left key
          nextCol -= 1;
        }
        break;
      case KeyCode.KEY_RIGHT:
        if (event.metaKey) {
          // Cmd + Right = End
          nextCol = customProps.columnsLength - 1;

          if (event.ctrlKey) {
            // Ctrl + Cmd + Right = Ctrl + End
            nextRow = customProps.rowsLength;
          }
        } else {
          // Right key
          nextCol += 1;
        }
        break;
      case KeyCode.KEY_HOME:
        nextCol = 0;
        if (event.ctrlKey) {
          nextRow = WorklistDataGridUtils.FIRST_NON_HEADER_ROW; // Assumption is that the first row is the column Heading.
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
        if (!isRowSelectionModeEnabled) {
          if (onCellSelectionChange) {
            onCellSelectionChange(null, null, coordinates);
          }
        }
        event.preventDefault();
        break;
      case KeyCode.KEY_RETURN: // May need to handle KeyCode.KEY_FIREFOX_ENTER
        if (!isRowSelectionModeEnabled) {
          if (onNavigationModeChange) {
            onNavigationModeChange(false);
          }

          // TODO - Enter: Disable grid navigation.
          // Enter cell, focus first focusable element, subsequent tab presses cycle between focusable elements within cell.
          // Do not clear selection. If cell is text only, nothing happens; maintain grid navigation and focus on the cell.
        }
        return;
      default:
        return;
    }
    if (nextRow > customProps.rowsLength || nextCol >= customProps.columnsLength) {
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

  const className = isRowSelectionCell ? 'selectable' : ['worklist-data-grid-cell', { 'worklist-data-grid-cell-selected': (isSelected && !isMasked) }, { masked: isMasked }];
  const CellTag = isRowHeader ? 'th' : 'td';
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <CellTag
      aria-selected={isSelected ? true : undefined}
      aria-label={ariaLabel}
      tabIndex={acceptsFocus ? 0 : -1}
      className={cx(className, theme.className)}
      onCopy={!isRowSelectionModeEnabled ? WorklistDataGridUtils.copyCellContent : undefined}
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
    >
      {isRowSelectionCell ? children : <div className={cx('cell-content', theme.className)}>{children}</div>}
    </CellTag>
  );
}

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default Cell;
