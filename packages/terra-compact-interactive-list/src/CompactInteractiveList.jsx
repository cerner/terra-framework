/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './CompactInteractiveList.module.scss';
import rowShape from './proptypes/rowShape';
import Row from './subcomponents/Row';
import columnShape from './proptypes/columnShape';
import { widthUnitTypes, DefaultListValues } from './utils/constants';
import {
  getRowMaximumWidth,
  getRowMinimumWidth,
  checkIfRowHasFlexColumns,
  getListMaximumWidth,
  getListMinimumWidth,
} from './utils/utils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String that will be used to identify the table. If multiple tables are on the same page, each table should have
   * a unique id.
   */
  id: PropTypes.string.isRequired,

  /**
   * String that identifies the element (or elements) that labels the table.
   */
  ariaLabelledBy: PropTypes.string,

  /**
   * String that labels the table for accessibility. If ariaLabelledBy is specified, ariaLabel will not be used.
   */
  ariaLabel: PropTypes.string,

  /**
   * Data for columns.
   */
  columns: PropTypes.arrayOf(columnShape),

  /**
   * Data for rows (list items) content.
   */
  rows: PropTypes.arrayOf(rowShape),

  /**
   * A number of visual columns. Defaults to 1.
   */
  numberOfColumns: PropTypes.number,

  /**
   * By default the items go from top to bottom, then break to the next column.
   * If flowVertically prop is set to false, items will flow left to right, then break to the next row.
   */
  flowVertically: PropTypes.bool,

  /**
   * A string for container's width. Any valid css string. Defaults to '100%'.
   * In case when all the columns has their widths explicitly set to a number, the width of the list will be determined by the width of it's columns unless the flexGrow prop would allow them grow.
   */
  width: PropTypes.string,

  /**
   * Container's minimum width in units set by widthUnit prop, such as `px`, `em`, or `rem`.
   */
  minimumWidth: PropTypes.number,

  /**
   * Container's maximum width in units set by widthUnit prop, such as `px`, `em`, or `rem`.
   */
  maximumWidth: PropTypes.number,

  /**
   * Columns' minimum width in units set by widthUnit prop, such as `px`, `em`, or `rem`.
   */
  columnMinimumWidth: PropTypes.number,

  /**
   * Columns' maximum width in units set by widthUnit prop, such as `px`, `em`, or `rem`.
   */
  columnMaximumWidth: PropTypes.number,

  /**
   * The width units, one of `px`, `em`, `rem`. Defaults to 'px'.
   */
  widthUnit: PropTypes.oneOf([
    widthUnitTypes.PX,
    widthUnitTypes.EM,
    widthUnitTypes.REM,
  ]),
};

const defaultProps = {
  rows: [],
  numberOfColumns: 1,
  width: '100%',
  widthUnit: widthUnitTypes.PX,
  flowVertically: true,
};

const CompactInteractiveList = (props) => {
  const {
    id,
    ariaLabelledBy,
    ariaLabel,
    columns,
    rows,
    numberOfColumns,
    flowVertically,
    width,
    widthUnit,
    minimumWidth,
    maximumWidth,
    columnMinimumWidth,
    columnMaximumWidth,
  } = props;

  const theme = useContext(ThemeContext);

  const listMinimumWidth = minimumWidth || DefaultListValues.minimumWidth[widthUnit];
  const listMaximumWidth = maximumWidth || DefaultListValues.maximumWidth[widthUnit];
  const columnMinWidth = columnMinimumWidth || DefaultListValues.columnMinimumWidth[widthUnit];
  const columnMaxWidth = columnMaximumWidth || DefaultListValues.columnMaximumWidth[widthUnit];

  const isFlexGrow = checkIfRowHasFlexColumns(columns);

  const rowMaxWidth = isFlexGrow ? getRowMaximumWidth(columns, columnMaxWidth) : null;
  const rowMinWidth = isFlexGrow ? getRowMinimumWidth(columns, columnMinWidth) : null;
  const getListMaxWidth = getListMaximumWidth(isFlexGrow, numberOfColumns, rowMaxWidth, listMaximumWidth);
  const getListMinWidth = getListMinimumWidth(isFlexGrow, numberOfColumns, rowMinWidth, listMinimumWidth);

  const getRowWidthSum = (total, column) => total + column.width;
  const rowWidth = !isFlexGrow && columns.reduce(getRowWidthSum, 0);
  const listWidth = `${rowWidth * numberOfColumns}${widthUnit}`;

  const style = {
    width: isFlexGrow ? width : listWidth,
    minWidth: `${getListMinWidth}${widthUnit}`,
    maxWidth: `${getListMaxWidth}${widthUnit}`,
  };

  const numberOfRows = Math.ceil(rows.length / numberOfColumns);
  const mapRows = () => {
    let result = [];
    if (flowVertically) {
      for (let i = 0; i < numberOfRows; i += 1) {
        for (let j = i; j < rows.length; j += numberOfRows) {
          result.push(rows[j]);
        }
      }
    } else {
      result = [...rows];
    }
    // add placeholder rows
    const placeholdersNumber = isFlexGrow ? (numberOfRows * numberOfColumns) - rows.length : 0;
    for (let i = rows.length; i < rows.length + placeholdersNumber; i += 1) {
      result.push({ id: `placeholder-row-${i}` });
    }
    return result;
  };

  const mappedRows = mapRows();

  return (
    <div
      className={cx('compact-interactive-list-container', theme.className)}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
    >
      <div
        id={id}
        role="grid"
        aria-labelledby={ariaLabelledBy}
        aria-label={ariaLabel}
        className={cx('compact-interactive-list')}
        // eslint-disable-next-line react/forbid-dom-props
        style={style}
      >
        {mappedRows.map((row, index) => (
          <Row
            rowIndex={index + 1}
            key={row.id}
            id={row.id}
            cells={row.cells}
            ariaLabel={row.ariaLabel}
            columns={columns}
            columnMinimumWidth={columnMinWidth}
            columnMaximumWidth={columnMaximumWidth}
            numberOfColumns={numberOfColumns}
            rowWidth={rowWidth}
            isFlexGrow={isFlexGrow}
            rowMaximumWidth={rowMaxWidth}
            rowMinimumWidth={rowMinWidth}
            widthUnit={widthUnit}
          />
        ))}
      </div>
    </div>
  );
};

CompactInteractiveList.propTypes = propTypes;
CompactInteractiveList.defaultProps = defaultProps;

export default injectIntl(CompactInteractiveList);
