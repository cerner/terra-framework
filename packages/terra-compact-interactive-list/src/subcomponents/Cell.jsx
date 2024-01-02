import React, { useContext, useState, useEffect } from 'react';
import * as KeyCode from 'keycode-js';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { checkIfColumnIsResponsive } from '../utils/utils';
import getFocusableElements from '../../../terra-table/src/utils/focusManagement';
import formattedColumnShape from '../proptypes/formattedColumnShape';
import { widthUnitTypes, alignTypes } from '../utils/constants';
import styles from './Cell.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String identifier of the row in which the Cell will be rendered.
   */
  rowId: PropTypes.string.isRequired,

  /**
   * Boolean indicating that the cell is a row header.
   */
  isRowHeader: PropTypes.bool,

  /**
   * Content that will be rendered within the Cell.
   */
  children: PropTypes.node,

  /**
   * A column data.
   */
  column: formattedColumnShape,

  /**
   * Columns minimum width in units set by widthUnit prop.
   */
  columnMinimumWidth: PropTypes.number,

  /**
   * Columns maximum width in units set by widthUnit prop.
   */
  columnMaximumWidth: PropTypes.number,

  /**
   * The type of width value. Defaults to px.
   */
  widthUnit: PropTypes.oneOf([
    widthUnitTypes.PX,
    widthUnitTypes.EM,
    widthUnitTypes.REM,
  ]).isRequired,

  /**
   * Callback function that will be called on click on the cell.
   */
  onCellSelect: PropTypes.func,

  /**
   * Boolean indicating whether the Cell is currently selected.
   */
  isSelected: PropTypes.bool,

  /**
   * Callback function that will pass the focused column and focused row ids to the main component.
   */
  setFocusedCell: PropTypes.func,
};

const Cell = (props) => {
  const {
    rowId,
    children,
    column,
    columnMinimumWidth,
    columnMaximumWidth,
    widthUnit,
    onCellSelect,
    isSelected,
    setFocusedCell,
    isRowHeader,
  } = props;

  const theme = useContext(ThemeContext);
  const cellRef = React.useRef();
  const [isSelectableCell, setIsSelectableCell] = useState(false);
  const selectable = column.isSelectable && isSelectableCell;
  const className = cx('cell', theme.className, {
    selected: selectable && isSelected,
    selectable,
  });

  const {
    id,
    width,
    flexGrow,
    maximumWidth,
    minimumWidth,
    align,
  } = column;

  const isResponsive = checkIfColumnIsResponsive(flexGrow, width);

  useEffect(() => {
    if (cellRef?.current) {
      const interactiveChildren = getFocusableElements(cellRef?.current);
      // if no interactive elements
      if (interactiveChildren?.length === 0) {
        setIsSelectableCell(true);
      }
    }
  }, [cellRef]);

  const handleKeyDown = (event) => {
    // does not need setFocusedCell call as the cell focused by key is tracked in CompactInteractiveList component
    const key = event.keyCode;
    if (key === KeyCode.KEY_SPACE && isSelectableCell) {
      event.preventDefault(); // prevents scroll on empty cells
      if (onCellSelect) {
        onCellSelect({ rowId, columnId: id });
      }
    }
  };

  const handleMouseDown = (event) => {
    setFocusedCell({ rowId, columnId: id });
    if (isSelectableCell) {
      if (onCellSelect) {
        onCellSelect({ rowId, columnId: id });
      }
    } else {
      // allows clickable elements inside non-nselactable cells to be clicked, but not the cell itself
      event.preventDefault();
    }
  };

  const style = {
    justifyContent: align || alignTypes.LEFT,
    textAlign: align || alignTypes.LEFT,
  };
  if (isResponsive) {
    // flex and minimumWidth props required for responsive cells
    style.flex = `1 1 ${width || minimumWidth || columnMinimumWidth}${widthUnit}`;
    style.minWidth = `${(minimumWidth || columnMinimumWidth)}${widthUnit}`;
    // assign maxWidth prop only if such exist
    if ((maximumWidth || columnMaximumWidth)) {
      style.maxWidth = `${(maximumWidth || columnMaximumWidth)}${widthUnit}`;
    }
  } else {
    // width prop is required for fixed width cells
    style.width = `${width}${widthUnit}`;
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      role={isRowHeader ? 'rowheader' : 'gridcell'}
      ref={cellRef}
      className={className}
      tabIndex={isSelectableCell ? -1 : null}
      // eslint-disable-next-line react/forbid-dom-props
      style={style}
      onMouseDown={handleMouseDown}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
};

Cell.propTypes = propTypes;

export default React.memo(Cell);
