import React, { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import ThemeContext from 'terra-theme-context';

import Cell from './Cell';
import cellShape from '../proptypes/cellShape';
import columnShape from '../proptypes/columnShape';
import RowSelectionCell from './RowSelectionCell';
import styles from './Row.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * An identifier to uniquely identify the row within the table.
   */
  id: PropTypes.string.isRequired,

  /**
   * Unique identifier for the parent table
   */
  tableId: PropTypes.string.isRequired,

  /**
   * The row's position in the table. This is zero based.
   */
  rowIndex: PropTypes.number,

  /**
   * An identifier for the section.
   */
  sectionId: PropTypes.string,

  /**
   * String that specifies height of the row. Any valid CSS width value is accepted.
  */
  height: PropTypes.string,

  /**
   * String that specifies the minimum height for the rows on the table. rowHeight takes precedence if valid CSS value is passed.
   * With this property the height of the cell will grow to fit the cell content.
   */
  rowMinimumHeight: PropTypes.string,

  /**
   * Data to be displayed in the cells of the row. Cells will be rendered in the row in the order given.
   */
  cells: PropTypes.arrayOf(cellShape),

  /**
   * A boolean indicating whether or not the row should render as selected.
   */
  isSelected: PropTypes.bool,

  /**
   * Boolean specifying whether zebra striping is enabled.
   */
  isTableStriped: PropTypes.bool,

  /**
   * A string identifier used to describe the row contents. This value will be used to construct additional labels
   * for internal controls (e.g. row selection cells).
   */
  ariaLabel: PropTypes.string,

  /**
   * Enables row selection capabilities for the table.
   * Use 'single' for single row selection and 'multiple' for multi-row selection.
   */
  rowSelectionMode: PropTypes.string,

  /**
   * All columns currently displayed.
   */
  displayedColumns: PropTypes.arrayOf(columnShape),

  /**
   * Callback function that will be called when a cell in the row is selected.
   * @param {string} rowId rowId
   * @param {string} columnId columnId
   * @param {object} event event
   */
  onCellSelect: PropTypes.func,

  /**
   * A zero-based index indicating which column represents the row header.
   * Index can be set to -1 if row headers are not required.
   */
  rowHeaderIndex: PropTypes.number,

  /**
   * @private
   * Id of the first row in table
   */
  firstRowId: PropTypes.string,

  /**
   * @private
   * Id of the last row in table
   */
  lastRowId: PropTypes.string,
};

const defaultProps = {
  rowHeaderIndex: 0,
  isSelected: false,
};

function Row(props) {
  const {
    rowIndex,
    height,
    rowSelectionMode,
    id,
    tableId,
    sectionId,
    isSelected,
    isTableStriped,
    cells,
    ariaLabel,
    displayedColumns,
    rowHeaderIndex,
    onCellSelect,
    rowMinimumHeight,
    firstRowId,
    lastRowId,
  } = props;

  const theme = useContext(ThemeContext);

  const [isHovered, setHovered] = useState(false);

  const isMultiRowSelect = (rowSelectionMode === 'multiple');
  const columnIndexOffSet = isMultiRowSelect ? 1 : 0;

  // Added to check if rowHeight is defined, it will take precedence. Otherwise the minimum row height would be used.
  const heightProperties = (height) ? {
    height,
  } : { minHeight: rowMinimumHeight };

  return (
    <tr
      aria-rowindex={rowIndex}
      data-row-id={id}
      className={cx('row', {
        selected: isSelected,
        selectable: !!rowSelectionMode,
        'striped-table-row': isTableStriped,
      }, theme.className)}
      // eslint-disable-next-line react/forbid-dom-props
      style={{ ...heightProperties }}
      onMouseEnter={rowSelectionMode ? () => { setHovered(true); } : undefined}
      onMouseLeave={rowSelectionMode ? () => { setHovered(false); } : undefined}
    >
      {
        isMultiRowSelect
        && (
        <RowSelectionCell
          rowId={id}
          columnId={displayedColumns[0].id}
          rowIndex={rowIndex}
          columnIndex={0}
          sectionId={sectionId}
          tableId={tableId}
          isSelected={isSelected}
          isHighlighted={isHovered || isSelected}
          ariaLabel={ariaLabel}
          onCellSelect={onCellSelect}
        />
        )
      }
      {cells.map((cellData, index) => {
        const cellColumnIndex = index + columnIndexOffSet;
        const columnId = displayedColumns[cellColumnIndex].id;
        return (
          <Cell
            rowId={id}
            columnId={columnId}
            rowIndex={rowIndex}
            columnIndex={cellColumnIndex}
            sectionId={sectionId}
            tableId={tableId}
            key={`${id}_${columnId}`}
            isSelected={!rowSelectionMode && cellData.isSelected}
            isMasked={cellData.isMasked}
            maskedLabel={cellData.maskedLabel}
            isSelectable={cellData.isSelectable}
            isRowHeader={rowHeaderIndex !== -1 && cellColumnIndex === (rowHeaderIndex + columnIndexOffSet)}
            isHighlighted={isHovered || isSelected}
            onCellSelect={onCellSelect}
            height={height}
            rowMinimumHeight={rowMinimumHeight}
            rowHeaderIndex={rowHeaderIndex}
            firstRowId={firstRowId}
            lastRowId={lastRowId}
            columnHighlightColor={displayedColumns[cellColumnIndex].columnHighlightColor}
            rowSelectionMode={rowSelectionMode}
          >
            {cellData.content}
          </Cell>
        );
      })}
    </tr>
  );
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default React.memo(Row);
