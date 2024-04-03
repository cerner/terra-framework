/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import ThemeContext from 'terra-theme-context';
import GridContext, { GridConstants } from '../utils/GridContext';

import columnShape from '../proptypes/columnShape';
import styles from './SubSection.module.scss';

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
   * The subsection's row index position in the table.
   */
  subSectionRowIndex: PropTypes.number,

  /**
   * A text string to render within the section header.
   */
  text: PropTypes.string,

  /**
   * All columns currently displayed.
   */
  displayedColumns: PropTypes.arrayOf(columnShape),

  /**
   * A boolean indicating whether or not the the subsection is collapsible. If true, the DataGrid's `onRequestSectionCollapse`
   * function will be called upon selection of the subsection header, and an icon indicating collapsibility will be rendered within the seaction header.
   */
  isCollapsible: PropTypes.bool,

  /**
     * A boolean indicating whether or not the subsection is collapsed. If true, the DataGrid will not render the contents of the subsection.
     */
  isCollapsed: PropTypes.bool,
};

function Section(props) {
  const {
    id,
    tableId,
    subSectionRowIndex,
    text,
    displayedColumns,
    isCollapsible,
    isCollapsed,
  } = props;

  const theme = useContext(ThemeContext);

  const gridContext = useContext(GridContext);
  const isGridContext = gridContext.role === GridConstants.GRID;

  return (
    <>
      <tbody className={cx('subsection-header', {
        collapsed: isCollapsed,
        collapsible: isCollapsible,
      }, theme.className)}
      >

        <tr
          aria-rowindex={subSectionRowIndex}
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
            tabIndex={isGridContext ? -1 : undefined}
          >
            <h3
              className={cx('subsection')}
            >
              <span
                className={cx('sticky')}
              >
                {text}
              </span>
            </h3>
          </th>
        </tr>
      </tbody>
    </>
  );
}

Section.propTypes = propTypes;

export default React.memo(Section);
