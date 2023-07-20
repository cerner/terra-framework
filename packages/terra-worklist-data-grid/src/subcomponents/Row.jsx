import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'terra-theme-context';
import classNames from 'classnames/bind';
import '../_elementPolyfill';
import styles from './Row.module.scss';
import RowSelectionCell from './RowSelectionCell';
import Cell from './Cell';
import cellShape from '../proptypes/cellShape';
import WorklistDataGridPropTypes from '../proptypes/WorklistDataGridPropTypes';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * An identifier to uniquely identify the row within the grid.
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
   * Data to be displayed in the cells of the row. Cells will be rendered in the row in the order given.
   */
  cells: PropTypes.arrayOf(cellShape),

  /**
   * A boolean indicating whether or not the row should render as selected.
   */
  isSelected: PropTypes.bool,

  /**
   * A string identifier used to describe the row contents. This value will be used to construct additional labels
   * for internal controls (e.g. row selection cells).
   */
  ariaLabel: PropTypes.string,

  /**
   * Boolean indicating whether or not the DataGrid allows a row to be selected. If true, an additional
   * column containing a checkbox is rendered to indicate when when the row is selected.
   */
  hasRowSelection: PropTypes.bool,

  /**
   * Callback function that will be called when a row is selected. Parameters:
   * @param {string} rowId rowId
   */
  onRowSelect: PropTypes.func,

  /**
   * All columns currently displayed.
   */
  displayedColumns: PropTypes.arrayOf(WorklistDataGridPropTypes.columnShape),

  /**
   * Callback function that will be called when a cell in the row is selected.
   * @param {string} rowId rowId
   * @param {string} columnId columnId
   */
  onCellSelect: PropTypes.func,

  /**
   * A zero-based index indicating which column represents the row header.
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
  hasRowSelection: false,
  rowHeaderIndex: 0,
  isSelected: false,
};

function Row(props) {
  const {
    rowIndex,
    height,
    hasRowSelection,
    id,
    isSelected,
    cells,
    ariaLabel,
    displayedColumns,
    rowHeaderIndex,
    onRowSelect,
    onCellSelect,
    selectedCellColumnId,
    tabStopColumnIndex,
  } = props;

  const theme = useContext(ThemeContext);

  const columnIndexOffSet = hasRowSelection ? 1 : 0;

  const handleCellSelect = (rowIdColId, coordinates, isShiftKeyPressed, isCellSelectedFromKeyboard) => {
    if (hasRowSelection || isShiftKeyPressed) {
      if (onRowSelect) {
        onRowSelect(rowIdColId.rowId, rowIndex, coordinates, isShiftKeyPressed, isCellSelectedFromKeyboard);
      }
    } else if (onCellSelect) {
      onCellSelect(rowIdColId, coordinates);
    }
  };

  const getCellData = (cellRowIndex, cellColumnIndex, cellData, rowId) => {
    const columnId = displayedColumns[cellColumnIndex].id;
    const isRowHeader = cellColumnIndex === rowHeaderIndex + columnIndexOffSet;

    return (
      <Cell
        rowId={rowId}
        columnId={columnId}
        rowIndex={cellRowIndex}
        columnIndex={cellColumnIndex}
        key={`${rowId}_${columnId}`}
        isTabStop={tabStopColumnIndex === cellColumnIndex}
        isSelected={!hasRowSelection && selectedCellColumnId === columnId}
        isMasked={cellData.isMasked}
        isSelectable={cellData.isSelectable}
        isRowHeader={isRowHeader}
        onCellSelect={handleCellSelect}
        height={height}
      >
        {cellData.content}
      </Cell>
    );
  };

  const rowSelectionCell = hasRowSelection ? (
    <RowSelectionCell
      rowId={id}
      columnId={displayedColumns[0].id}
      rowIndex={rowIndex}
      columnIndex={0}
      isTabStop={tabStopColumnIndex === 0}
      isSelected={isSelected}
      ariaLabel={ariaLabel}
      onCellSelect={handleCellSelect}
    />
  ) : null;

  return (
    <tr
      className={cx([isSelected ? 'row-selected' : 'worklist-data-grid-row', hasRowSelection ? 'selectable' : null, theme.className])}
      // eslint-disable-next-line react/forbid-dom-props
      style={{ height }}
    >
      {rowSelectionCell}
      {cells.map((cellData, cellColumnIndex) => (
        getCellData(rowIndex, cellColumnIndex + columnIndexOffSet, cellData, id)
      ))}
    </tr>
  );
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
