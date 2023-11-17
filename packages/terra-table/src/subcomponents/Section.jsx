import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import SectionHeader from 'terra-section-header';

import ThemeContext from 'terra-theme-context';

import Row from './Row';
import rowShape from '../proptypes/rowShape';
import { columnShape } from '../proptypes/columnShape';
import styles from './Section.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * An identifier for the section. This identifier should be unique across the set of sections provided to the DataGrid.
   */
  id: PropTypes.string.isRequired,

  /**
   * Unique identifier for the parent table
   */
  tableId: PropTypes.string.isRequired,

  /**
   * The section's row index position in the table.
   */
  sectionRowIndex: PropTypes.number,

  /**
   * A boolean indicating whether or not the the section is collapsible. If true, the DataGrid's `onRequestSectionCollapse`
   * function will be called upon selection of the section header, and an icon indicating collapsibility will be rendered within the seaction header.
   */
  isCollapsible: PropTypes.bool,

  /**
   * A boolean indicating whether or not the section is collapsed. If true, the DataGrid will not render the contents of the section.
   */
  isCollapsed: PropTypes.bool,

  /**
   * A Boolean indicating whether or not the section header is visible.
   */
  isHidden: PropTypes.bool,

  /**
   * A text string to render within the section header.
   */
  text: PropTypes.string,

  /**
   * An array of row objects to be rendered within the section.
   */
  rows: PropTypes.arrayOf(rowShape),

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
   */
  onCellSelect: PropTypes.func,

  /**
   * String that specifies the height for the rows in the table. Any valid CSS value is accepted.
   */
  rowHeight: PropTypes.string,

  /**
   * A zero-based index indicating which column represents the row header.
   */
  rowHeaderIndex: PropTypes.number,

  /**
   * Boolean specifying whether zebra striping is enabled.
   */
  isTableStriped: PropTypes.bool,

  /**
   * Function that is called when a collapsible section is selected. Parameters: `onSectionSelect(sectionId)`
   */
  onSectionSelect: PropTypes.func,
};

const defaultProps = {
  isCollapsible: false,
  isCollapsed: false,
  isHidden: false,
  rows: [],
};

function Section(props) {
  const {
    id,
    tableId,
    sectionRowIndex,
    isCollapsible,
    isCollapsed,
    isHidden,
    isTableStriped,
    text,
    rowSelectionMode,
    displayedColumns,
    onCellSelect,
    rowHeight,
    rowHeaderIndex,
    rows,
    onSectionSelect,
  } = props;

  const theme = useContext(ThemeContext);

  const handleMouseDown = (event) => {
    onSectionSelect(id);
    event.stopPropagation();
  };

  return (
    <>
      {/* Render section rows */}
      {!isHidden && (
      <tr
        aria-rowindex={sectionRowIndex}
        className={cx('header')}
      >
        <th
          id={`${tableId}-${id}`}
          align="left"
          colSpan={displayedColumns.length}
          role="columnheader"
          scope="col"
        >
          <SectionHeader
            text={text}
            isOpen={!isCollapsed}
            onClick={isCollapsible && onSectionSelect ? handleMouseDown : undefined}
          />
        </th>
      </tr>
      )}
      <tbody className={cx('section', {
        collapsed: isCollapsed,
        collapsible: isCollapsible,
      }, theme.className)}
      >
        {/* Render section rows */}
        {rows.map((row, rowIndex) => (
          <Row
            rowIndex={sectionRowIndex + (rowIndex + 1)}
            key={row.id}
            height={rowHeight}
            id={row.id}
            sectionId={!isHidden ? id : undefined}
            tableId={tableId}
            cells={row.cells}
            ariaLabel={row.ariaLabel}
            rowSelectionMode={rowSelectionMode}
            displayedColumns={displayedColumns}
            rowHeaderIndex={rowHeaderIndex}
            onCellSelect={onCellSelect}
            isSelected={row.isSelected}
            isTableStriped={isTableStriped}
          />
        ))}
      </tbody>
    </>
  );
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default React.memo(Section);
