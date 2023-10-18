import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import SectionHeader from 'terra-section-header';

import ThemeContext from 'terra-theme-context';
import GridContext, { GridConstants } from '../utils/GridContext';

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
   * A boolean indicating whether or not the the section is collapsible. If true, the DataGrid's `onRequestSectionCollapse`
   * function will be called upon selection of the section header, and an icon indicating collapsibility will be rendered within the seaction header.
   */
  isCollapsible: PropTypes.bool,

  /**
   * A boolean indicating whether or not the section is collapsed. If true, the DataGrid will not render the contents of the section.
   */
  isCollapsed: PropTypes.bool,

  /**
   * A text string to render within the section header.
   */
  text: PropTypes.string,

  /**
   * An array of row objects to be rendered within the section.
   */
  rows: PropTypes.arrayOf(rowShape),

  /**
   * Boolean indicating whether or not the table allows a row to be selected. If true, an additional
   * column containing a checkbox is rendered to indicate when when the row is selected.
   */
  hasRowSelection: PropTypes.bool,

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
   * Function that is called when a collapsible section is selected. Parameters: `onSectionSelect(sectionId)`
   */
  onSectionSelect: PropTypes.func,
};

const defaultProps = {
  isCollapsible: false,
  isCollapsed: false,
  rows: [],
};

function Section(props) {
  const {
    id,
    isCollapsible,
    isCollapsed,
    text,
    hasRowSelection,
    displayedColumns,
    onCellSelect,
    rowHeight,
    rowHeaderIndex,
    rows,
    onSectionSelect,
  } = props;

  const theme = useContext(ThemeContext);

  const gridContext = useContext(GridContext);
  const isGridContext = gridContext.role === GridConstants.GRID;

  const handleMouseDown = (event) => {
    onSectionSelect(id);
    event.stopPropagation();
  };

  return (
    <tbody className={cx('section', {
      collapsed: isCollapsed,
      collapsible: isCollapsible,
    }, theme.className)}
    >
      <tr
        className={cx('header', { visible: text || isCollapsible })}
      >
        <th
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
      {rows.map((row, index) => (
        <Row
          rowIndex={index + 1}
          key={row.id}
          height={rowHeight}
          id={row.id}
          cells={row.cells}
          ariaLabel={row.ariaLabel}
          hasRowSelection={hasRowSelection}
          displayedColumns={displayedColumns}
          rowHeaderIndex={rowHeaderIndex}
          onCellSelect={isGridContext ? onCellSelect : undefined}
          isSelected={row.isSelected}
        />
      ))}
    </tbody>
  );
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default React.memo(Section);
