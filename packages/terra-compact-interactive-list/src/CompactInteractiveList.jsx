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
  checkIfRowHasResponsiveColumns,
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
   * Row height in units set by widthUnit prop, such as px, em, or rem.
   */
  rowHeight: PropTypes.number,

  /**
   * A number of visual columns. Defaults to 1.
   */
  numberOfColumns: PropTypes.number,

  /**
   * By default the items go from top to bottom, then break to the next column.
   * If flowHorizontally prop is set to true, items will flow left to right, then break to the next row.
   */
  flowHorizontally: PropTypes.bool,

  /**
   * A string for container's width. Any valid css string. Defaults to '100%'.
   * In case when all the columns has their widths explicitly set to a number, the width of the list will be determined by the width of it's columns unless the flexGrow prop would allow them grow.
   */
  width: PropTypes.string,

  /**
   * Container's minimum width in units set by widthUnit prop, such as px, em, or rem.
   */
  minimumWidth: PropTypes.number,

  /**
   * Columns minimum width in units set by widthUnit prop, such as px, em, or rem.
   */
  columnMinimumWidth: PropTypes.number,

  /**
   * Columns maximum width in units set by widthUnit prop, such as px, em, or rem.
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
};

const CompactInteractiveList = (props) => {
  const {
    id,
    ariaLabelledBy,
    ariaLabel,
    columns,
    rows,
    rowHeight,
    numberOfColumns,
    flowHorizontally,
    width,
    widthUnit,
    minimumWidth,
    columnMinimumWidth,
    columnMaximumWidth,
  } = props;

  const theme = useContext(ThemeContext);

  const columnMinWidth = columnMinimumWidth || DefaultListValues.columnMinimumWidth[widthUnit];
  const columnMaxWidth = columnMaximumWidth;
  // check if list has responsive columns
  const isResponsive = checkIfRowHasResponsiveColumns(columns);
  // if there are responsive columns, the items will need maxWidth and minWidth
  const rowMaxWidth = isResponsive ? getRowMaximumWidth(columns, columnMaxWidth) : null;
  const rowMinWidth = isResponsive ? getRowMinimumWidth(columns, columnMinWidth) : null;
  // calculate row width based on the width of its columns
  const getRowWidthSum = (total, column) => total + column.width;
  const rowWidth = isResponsive ? 0 : columns.reduce(getRowWidthSum, 0);
  const rowsPerColumn = Math.ceil(rows.length / numberOfColumns);
  const calculatedRowHeight = flowHorizontally ? null : rowHeight || DefaultListValues.rowDefaultHeight[widthUnit];
  // calculate list width based on the item width and number of columns
  const listWidth = `${rowWidth * numberOfColumns}${widthUnit}`;
  const listMinWidth = Math.max(rowMinWidth * numberOfColumns, (minimumWidth || DefaultListValues.minimumWidth[widthUnit]));
  // defining styles to apply to the list
  const style = {
    width: isResponsive ? width : listWidth,
    height: flowHorizontally ? null : `${calculatedRowHeight * rowsPerColumn}${widthUnit}`,
    minWidth: `${listMinWidth}${widthUnit}`,
    flexDirection: flowHorizontally ? 'row' : 'column',
  };
  if (rowMaxWidth) {
    style.maxWidth = `${rowMaxWidth * numberOfColumns}${widthUnit}`;
  }

  // number of rows including placeholder rows
  const numberOfRows = Math.ceil(rows.length / numberOfColumns);
  // map rows differently depending on vertical or horizontal orientation
  const mapRows = () => {
    const placeholdersNumber = isResponsive ? (numberOfRows * numberOfColumns) - rows.length : 0;
    let result = [];
    result = [...rows];
    if (flowHorizontally) {
      // all placeholder rows go in the end.
      for (let i = rows.length; i < rows.length + placeholdersNumber; i += 1) {
        result.push({ id: `placeholder-row-${i}` });
      }
    } else {
      // inject placeholders to specific positions so that they all appear in the last row.
      let position = rows.length;
      for (let i = placeholdersNumber; i > 0; i -= 1) {
        result.splice(position, 0, { id: `placeholder-row-${i}` });
        position -= rowsPerColumn - 1;
      }
    }
    return result;
  };

  const mappedRows = mapRows();
  const checkIfLeftmost = (index) => (flowHorizontally ? index % numberOfColumns === 0 : index < rowsPerColumn);
  const checkIfTopmost = (index) => (flowHorizontally ? index < numberOfColumns : index % rowsPerColumn === 0);

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
            isResponsive={isResponsive}
            rowMaximumWidth={rowMaxWidth}
            rowMinimumWidth={rowMinWidth}
            widthUnit={widthUnit}
            flowHorizontally={flowHorizontally}
            rowHeight={calculatedRowHeight}
            isTopmost={checkIfTopmost(index)}
            isLeftmost={checkIfLeftmost(index)}
          />
        ))}
      </div>
    </div>
  );
};

CompactInteractiveList.propTypes = propTypes;
CompactInteractiveList.defaultProps = defaultProps;

export default injectIntl(CompactInteractiveList);
