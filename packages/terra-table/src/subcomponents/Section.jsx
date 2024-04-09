/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { useCallback, useContext } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import SectionHeader from 'terra-section-header';
import ThemeContext from 'terra-theme-context';
import GridContext, { GridConstants } from '../utils/GridContext';
import { SUBSECTION_HEADER_LEVEL } from '../utils/constants';

import Row from './Row';
import rowShape from '../proptypes/rowShape';
import subsectionShape from '../proptypes/subsectionShape';
import columnShape from '../proptypes/columnShape';
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
   * An array of subsection objects to be rendered within the section.
   */
  subsections: PropTypes.arrayOf(subsectionShape),

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
   * String that specifies the height for the rows in the table. Any valid CSS value is accepted.
   */
  rowHeight: PropTypes.string,

  /**
   * String that specifies the minimum height for the rows on the table. rowHeight takes precedence if valid CSS value is passed.
   * With this property the height of the cell will grow to fit the cell content.
   */
  rowMinimumHeight: PropTypes.string,

  /**
   * A zero-based index indicating which column represents the row header.
   * Index can be set to -1 if row headers are not required.
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
  /**
   * Width to assign for the section header in order to enable sticky behavior.
   * This should be a dynamic size based on the current screen width and the state of the table container's client width.
   */
  boundingWidth: PropTypes.number,
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
    subsections,
    onSectionSelect,
    rowMinimumHeight,
    boundingWidth,
    firstRowId,
    lastRowId,
  } = props;

  const theme = useContext(ThemeContext);

  const gridContext = useContext(GridContext);
  const isGridContext = gridContext.role === GridConstants.GRID;

  const hasSectionButton = isCollapsible && onSectionSelect;

  const handleClick = useCallback(() => {
    onSectionSelect(id);
  }, [id, onSectionSelect]);

  const sectionHeader = (
    <tbody>
      {/* Render section rows */}
      {!isHidden && (
      <tr
        aria-rowindex={sectionRowIndex}
        className={cx('header-row', theme.className)}
        data-section-id={id}
      >
        <th
          id={`${tableId}-${id}`}
          className={cx('header-cell')}
          align="left"
          colSpan={displayedColumns.length}
          role="columnheader"
          scope="col"
          tabIndex={isGridContext && !hasSectionButton ? -1 : undefined}
        >
          <SectionHeader
            className={cx('section-header')}
            text={text}
            isOpen={hasSectionButton ? !isCollapsed : undefined}
            onClick={hasSectionButton ? handleClick : undefined}
            isTitleSticky
            boundedWidth={boundingWidth}
          />
        </th>
      </tr>
      )}
    </tbody>
  );

  const rowProps = {
    displayedColumns,
    firstRowId,
    height: rowHeight,
    isTableStriped,
    lastRowId,
    onCellSelect,
    rowHeaderIndex,
    rowMinimumHeight,
    rowSelectionMode,
    sectionId: !isHidden ? id : undefined,
    tableId,
  };

  if (subsections) {
    return (
      <>
        {sectionHeader}
        {!isCollapsed && subsections.map((subsection) => (
          <>
            <tbody className={cx('subsection', {
              collapsed: isCollapsed,
              collapsible: isCollapsible,
            }, theme.className)}
            >

              <tr
                aria-rowindex={subsection.subSectionRowIndex}
                className={cx('header-row', theme.className)}
                data-subsection-id={subsection.id}
              >
                <th
                  id={`${tableId}-${id}-${subsection.id}`}
                  className={cx('header-cell')}
                  align="left"
                  colSpan={displayedColumns.length}
                  role="columnheader"
                  scope="col"
                  tabIndex={isGridContext ? -1 : undefined}
                >

                  <SectionHeader
                    className={cx('subsection-header-row')}
                    text={subsection.text}
                    isTitleSticky
                    boundedWidth={boundingWidth}
                    level={SUBSECTION_HEADER_LEVEL}
                  />

                </th>
              </tr>
            </tbody>
            <tbody className={cx('subsection-rows', {
              collapsed: isCollapsed,
              collapsible: isCollapsible,
            }, theme.className)}
            >
              {/* Render subsection rows */}
              {!isCollapsed && subsection.rows.map((row, rowIndex) => (
                <Row
                  rowIndex={subsection.subSectionRowIndex + (rowIndex + 1)}
                  key={row.id}
                  id={row.id}
                  cells={row.cells}
                  ariaLabel={row.ariaLabel}
                  isSelected={row.isSelected}
                  subsectionId={!isHidden ? subsection.id : undefined}
                  {...rowProps}
                />
              ))}
            </tbody>
          </>
        ))}
      </>
    );
  }

  return (
    <>
      {sectionHeader}
      <tbody className={cx('section', {
        collapsed: isCollapsed,
        collapsible: isCollapsible,
      }, theme.className)}
      >
        {/* Render section rows */}
        {!isCollapsed && rows.map((row, rowIndex) => (
          <Row
            rowIndex={sectionRowIndex + (rowIndex + 1)}
            key={row.id}
            id={row.id}
            cells={row.cells}
            ariaLabel={row.ariaLabel}
            isSelected={row.isSelected}
            {...rowProps}
          />
        ))}
      </tbody>
    </>
  );
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default React.memo(Section);
