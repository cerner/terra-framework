import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import '../_elementPolyfill';
import { injectIntl } from 'react-intl';
import ThemeContext from 'terra-theme-context';
import styles from './RowSelectionCell.module.scss';
import Cell from './Cell';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String identifier of the row in which the Cell will be rendered.
   */
  rowId: PropTypes.string.isRequired,

  /**
   * String identifier of the column in which the Cell will be rendered.
   */
  columnId: PropTypes.string.isRequired,

  /**
   * The coordinates of the cell within the grid.
   */
  coordinates: PropTypes.shape({
    row: PropTypes.number,
    col: PropTypes.number,
  }),

  /**
   * Boolean value to indicate if the cell is the tab stop on the grid. The grid will have only one tab stop.
   */
  acceptsFocus: PropTypes.bool,

  /**
   * Boolean indicating whether the cell is currently selected.
   */
  isSelected: PropTypes.bool,

  /**
   * String that labels the cell for accessibility.
   */
  ariaLabel: PropTypes.string,

  /**
   * Callback function that is called when cell selection changes.
   */
  onCellSelectionChange: PropTypes.func,
  /**
   * Callback function that is called when focus moves from one cell to another.
   */
  onMoveCellFocus: PropTypes.func,

  /**
   * Boolean indicating if grid navigation is enabled. When grid navigation is disabled, navigation is restricted to the cell.
   */
  isNavigationEnabled: PropTypes.bool,

  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

function RowSelectionCell(props) {
  const {
    rowId,
    columnId,
    coordinates,
    acceptsFocus,
    isSelected,
    ariaLabel,
    onCellSelectionChange,
    onMoveCellFocus,
    isNavigationEnabled,
    intl,
    ...customProps
  } = props;

  const theme = useContext(ThemeContext);
  const rowLabel = intl.formatMessage({ id: 'Terra.worklist-data-grid.row-index' }, { row: coordinates.row });

  return (
    <Cell
      rowId={rowId}
      columnId={columnId}
      coordinates={coordinates}
      acceptsFocus={false}
      isSelected={isSelected}
      isRowSelectionCell
      onCellSelectionChange={onCellSelectionChange}
      onMoveCellFocus={onMoveCellFocus}
      isRowSelectionModeEnabled
      isNavigationEnabled={isNavigationEnabled}
      rowsLength={customProps.rowsLength}
      columnsLength={customProps.columnsLength}
    >
      <input
        type="checkbox"
        aria-label={ariaLabel || rowLabel}
        aria-checked={isSelected}
        tabIndex={acceptsFocus ? 0 : -1}
        checked={isSelected}
        className={cx(['selectable-centered', theme.className])}
      />
    </Cell>
  );
}

RowSelectionCell.propTypes = propTypes;

export default injectIntl(RowSelectionCell);
