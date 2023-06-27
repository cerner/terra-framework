import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as KeyCode from 'keycode-js';
import ThemeContext from 'terra-theme-context';
import classNames from 'classnames/bind';
import { injectIntl } from 'react-intl';
import '../_elementPolyfill';
import styles from './Row.module.scss';
import RowSelectionCell from './RowSelectionCell';
import Cell from './Cell';
import columnShape from '../proptypes/columnShape';
import rowShape from '../proptypes/rowShape';
import WorklistDataGridUtils from '../utils/WorklistDataGridUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String identifier of the row.
   */
  id: PropTypes.string.isRequired,
  /**
   * The row's position in the Grid. This is zero based.
   */
  rowIndex: PropTypes.number,
  /**
   * String that specifies height of the row. Any valid CSS width value is accepted.
   */
  height: PropTypes.string,
  /**
   * Boolean indicating whether the row is currently selected.
   */
  isSelected: PropTypes.bool,
  /**
   * Boolean indicating whether or not the DataGrid should allow entire rows to be selectable. An additional column will be
   * rendered to allow for row selection to occur.
   */
  hasSelectableRows: PropTypes.bool,
  /**
   * Callback function that will be called when a row is selected. Parameters: `onRowSelect(rowId)`
   */
  onRowSelect: PropTypes.func,
  /**
   * Content that will rendered within the row.
   */
  /**
   * The row's content to be rendered.
   */
  rowContent: rowShape,
  /**
   * All columns currently displayed.
   */
  displayedColumns: PropTypes.arrayOf(columnShape),
  /**
   * Callback function that will be called when a cell in the row is selected.
   */
  onCellSelect: PropTypes.func,
  /**
   * Function to determine if a given Grid coordinates is the current tab stop on the Grid.
   */
  isTabStop: PropTypes.func,
  /**
   * Function to determine if a given cell in the row is currently.
   */
  isCellSelected: PropTypes.func,
  /**
   * A number indicating which column represents the row header. This is zero based.
   */
  rowHeaderIndex: PropTypes.number,
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  hasSelectableRows: false,
};

function Row(props) {
  const {
    id,
    rowIndex,
    height,
    isSelected,
    hasSelectableRows,
    rowContent,
    displayedColumns,
    rowHeaderIndex,
    onRowSelect,
    onCellSelect,
    isTabStop,
    isCellSelected,
    intl,
  } = props;

  const theme = useContext(ThemeContext);

  const handleClick = (event) => {
    if (onRowSelect) {
      onRowSelect(id, rowIndex, WorklistDataGridUtils.getGridCoordinatesOfInitiatingCell(event));
      event.stopPropagation();
    }
  };

  const handleKeyDown = (event) => {
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_SPACE:
        if (onRowSelect) {
          onRowSelect(id, rowIndex, WorklistDataGridUtils.getGridCoordinatesOfInitiatingCell(event));
          event.stopPropagation();
          event.preventDefault(); // prevent the default scrolling
        }
        break;
      default:
    }
  };

  const getRowSelectionCellData = (cellRowIndex, row) => (
    <RowSelectionCell
      rowId={row.id}
      columnId={displayedColumns[0].id}
      coordinates={{ row: cellRowIndex, col: 0 }}
      isTabStop={isTabStop(cellRowIndex, 0)}
      isSelected={row.isSelected}
      ariaLabel={row.ariaLabel}
      onCellSelect={onCellSelect}
    />
  );

  const getCellData = (cellRowIndex, cellColumnIndex, cell, rowId) => {
    const columnId = displayedColumns[cellColumnIndex].id;
    const isRowHeader = cellColumnIndex === (rowHeaderIndex + hasSelectableRows ? 1 : 0);

    return (
      <Cell
        rowId={rowId}
        columnId={columnId}
        coordinates={{ row: cellRowIndex, col: cellColumnIndex }}
        key={`${rowId}_${columnId}`}
        isTabStop={isTabStop(cellRowIndex, cellColumnIndex)}
        isSelected={isCellSelected(rowId, columnId)}
        isMasked={cell.isMasked}
        isSelectable={cell.isSelectable}
        ariaLabel={cell.isMasked ? intl.formatMessage({ id: 'Terra.worklistDataGrid.maskedCell' }) : undefined}
        isRowHeader={isRowHeader}
        onCellSelect={onCellSelect}
      >
        {cell?.content}
      </Cell>
    );
  };

  const columnIndexOffSet = hasSelectableRows ? 1 : 0;

  return (
    <tr
      className={cx([isSelected ? 'worklist-data-grid-row-selected' : 'worklist-data-grid-row', theme.className])}
      // eslint-disable-next-line react/forbid-dom-props
      style={{ height }}
      onClick={hasSelectableRows ? handleClick : undefined}
      onKeyDown={hasSelectableRows ? handleKeyDown : undefined}
    >
      {hasSelectableRows && getRowSelectionCellData(rowIndex, rowContent)}
      {rowContent.cells.map((cell, cellColumnIndex) => (
        getCellData(rowIndex, cellColumnIndex + columnIndexOffSet, cell, rowContent.id)
      ))}
    </tr>
  );
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default injectIntl(Row);
