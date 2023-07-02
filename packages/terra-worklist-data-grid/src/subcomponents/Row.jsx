import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'terra-theme-context';
import classNames from 'classnames/bind';
import '../_elementPolyfill';
import styles from './Row.module.scss';
import RowSelectionCell from './RowSelectionCell';
import Cell from './Cell';
import rowShape from '../proptypes/rowShape';
import WorklistDataGridPropTypes from '../proptypes/WorklistDataGridPropTypes';

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
  displayedColumns: PropTypes.arrayOf(WorklistDataGridPropTypes.columnShape),
  /**
   * Callback function that will be called when a cell in the row is selected.
   */
  onCellSelect: PropTypes.func,
  /**
   * A number indicating which column represents the row header. This is zero based.
   */
  rowHeaderIndex: PropTypes.number,
  /**
   * Id of the column in the row that is selected.
   */
  selectedCellColumnId: PropTypes.string,
  /**
   * Column index of the column in that has focus.
   */
  tabStopColumnIndex: PropTypes.number,

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
    selectedCellColumnId,
    tabStopColumnIndex,
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
        isTabStop={tabStopColumnIndex === cellColumnIndex}
        isSelected={!hasSelectableRows && selectedCellColumnId === columnId}
        cell={cell}
        isRowHeader={isRowHeader}
        onCellSelect={handleCellSelect}
      />
    );
  };

  const columnIndexOffSet = hasSelectableRows ? 1 : 0;
  return (
    <tr
      className={cx([row.isSelected ? 'row-selected' : 'worklist-data-grid-row', theme.className])}
      // eslint-disable-next-line react/forbid-dom-props
      style={{ height }}
    >
      {hasSelectableRows && (
        <RowSelectionCell
          rowId={row.id}
          columnId={displayedColumns[0].id}
          coordinates={{ row: rowIndex, col: 0 }}
          isTabStop={tabStopColumnIndex === 0}
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
