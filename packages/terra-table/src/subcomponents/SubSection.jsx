// TODO: fix linter error
/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { useCallback, useContext } from 'react';
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
};

function Section(props) {
  const {
    id,
    tableId,
    subSectionRowIndex,
    text,
    displayedColumns,
  } = props;

  const theme = useContext(ThemeContext);

  const gridContext = useContext(GridContext);
  const isGridContext = gridContext.role === GridConstants.GRID;

  return (
    <>
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
    </>
  );
}

Section.propTypes = propTypes;

export default React.memo(Section);
