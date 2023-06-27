import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'terra-theme-context';
import classNames from 'classnames/bind';
import '../_elementPolyfill';
import styles from './Row.module.scss';
import RowSelectionCell from './RowSelectionCell';
import Cell from './Cell';
import columnShape from '../proptypes/columnShape';
import rowShape from '../proptypes/rowShape';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The row's position in the Grid. This is zero based.
   */
  rowIndex: PropTypes.number,
  /**
   * String that specifies height of the row. Any valid CSS width value is accepted.
  */
  height: PropTypes.string,
  /**
   * The information about the Row.
   */
  row: rowShape.isRequired,
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
   * Function used by the row to determine if a given cell in the row is currently selected.
   */
  isCellSelected: PropTypes.func,
  /**
   * A number indicating which column represents the row header. This is zero based.
   */
  rowHeaderIndex: PropTypes.number,
};

const defaultProps = {
  hasSelectableRows: false,
};

function Row(props) {
  const {
    rowIndex,
    height,
    hasSelectableRows,
    row,
    displayedColumns,
    rowHeaderIndex,
    onRowSelect,
    onCellSelect,
    isTabStop,
    isCellSelected,
  } = props;

  const theme = useContext(ThemeContext);

  const handleCellSelect = (rowIdColId, coordinates) => {
    if (hasSelectableRows) {
      if (onRowSelect) {
        onRowSelect(rowIdColId.rowId, rowIndex, coordinates);
      }
    } else if (onCellSelect) {
      onCellSelect(rowIdColId, coordinates);
    }
  };

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
        cell={cell}
        isRowHeader={isRowHeader}
        onCellSelect={handleCellSelect}
      />
    );
  };

  const columnIndexOffSet = hasSelectableRows ? 1 : 0;
  return (
    <tr
      className={cx([row.isSelected ? 'worklist-data-grid-row-selected' : 'worklist-data-grid-row', theme.className])}
      // eslint-disable-next-line react/forbid-dom-props
      style={{ height }}
    >
      {hasSelectableRows && (
        <RowSelectionCell
          rowId={row.id}
          columnId={displayedColumns[0].id}
          coordinates={{ row: rowIndex, col: 0 }}
          isTabStop={isTabStop(rowIndex, 0)}
          isSelected={row.isSelected}
          ariaLabel={row.ariaLabel}
          onCellSelect={handleCellSelect}
        />
      )}
      {row.cells.map((cell, cellColumnIndex) => (
        getCellData(rowIndex, cellColumnIndex + columnIndexOffSet, cell, row.id)
      ))}
    </tr>
  );
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
