/* eslint-disable react/no-unused-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import rowShape from './proptypes/rowShape';
import { columnShape } from './proptypes/columnShape';
import validateRowHeaderIndex from './proptypes/validators';

export const tableShape = {
  /**
      * String that will be used to identify the table. If multiple tables are on the same page, each table should have
      * a unique id.
      */
  id: PropTypes.string.isRequired,

  /**
     * Data for content in the body of the table. Rows will be rendered in the order given.
     */
  rows: PropTypes.arrayOf(rowShape),

  /**
      * String that identifies the element (or elements) that labels the table.
      */
  ariaLabelledBy: PropTypes.string,

  /**
      * String that labels the table for accessibility. If ariaLabelledBy is specified, ariaLabel will not be used.
      */
  ariaLabel: PropTypes.string,

  /**
      * Data for pinned columns. Pinned columns are the stickied leftmost columns of the table.
      * Columns will be presented in the order given.
      */
  pinnedColumns: PropTypes.arrayOf(columnShape),

  /**
      * Data for overflow columns. Overflow columns are rendered in the table's horizontal overflow.
      * Columns will be presented in the order given.
      */
  overflowColumns: PropTypes.arrayOf(columnShape),

  /**
      * Number indicating the default column width in px. This value will be used if no overriding width value is provided on a per-column basis.
      */
  defaultColumnWidth: PropTypes.number,

  /**
      * String that specifies the column height. Any valid CSS height value is accepted.
      */
  columnHeaderHeight: PropTypes.string,

  /**
      * String that specifies the height for the rows in the table. Any valid CSS value is accepted.
      */
  rowHeight: PropTypes.string,

  /**
      * Number indicating the index of the column that represents row header. Index is 0 based and cannot exceed one less than the number of columns in the table.
      */
  rowHeaderIndex: validateRowHeaderIndex,

  /**
      * Function that is called when a resizable column is resized. Parameters:
      * @param {string} columnId columnId
      * @param {string} requestedWidth requestedWidth
      */
  onColumnResize: PropTypes.func,

  /**
      * Callback function that is called when a selectable cell is selected. Parameters:
      * @private
      * @param {string} rowId rowId
      * @param {string} columnId columnId
      */
  onCellSelect: PropTypes.func,

  /**
      * Callback function that is called when a selectable column is selected. Parameters:
      *  @param {string} columnId columnId
      */
  onColumnSelect: PropTypes.func,

  /**
      * Boolean indicating whether or not the table should allow entire rows to be selectable. An additional column will be
      * rendered to allow for row selection to occur.
      */
  hasSelectableRows: PropTypes.bool,

  /**
      * Boolean indicating whether or not the table columns should be displayed. Setting the value to false will hide the columns,
      * but the voice reader will use the column header values for a11y.
      */
  hasColumnHeaders: PropTypes.bool,

  /*
      * Boolean specifying whether or not the table should have zebra striping for rows.
      */
  isStriped: PropTypes.bool,
};

export const defaultProps = {
  rowHeaderIndex: 0,
  defaultColumnWidth: 200,
  columnHeaderHeight: '2.5rem',
  rowHeight: '2.5rem',
  pinnedColumns: [],
  overflowColumns: [],
  rows: [],
  hasColumnHeaders: true,
};

const TablePropTypes = () => <div>This is only used for the props table for terra-dev-site. REMOVE THIS WHEN WE GET TO React-intl v3+</div>;

TablePropTypes.defaultProps = defaultProps;
TablePropTypes.propTypes = tableShape;

export default TablePropTypes;
