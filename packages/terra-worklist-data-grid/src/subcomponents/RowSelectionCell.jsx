import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import '../_elementPolyfill';
import { injectIntl } from 'react-intl';
import ThemeContext from 'terra-theme-context';
import styles from '../WorklistDataGrid.module.scss';
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
  coordinates: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),

  /**
   * Boolean value to indicate if the cell can accept focus.
   */
  acceptsFocus: PropTypes.bool,

  /**
   * Boolean indicating whether the Cell is actively selected.
   */
  isSelected: PropTypes.bool,

  /**
   * String that labels the cell for accessibility.
   */
  ariaLabel: PropTypes.string,

  onCellSelectionChange: PropTypes.func,
  onMoveCellFocus: PropTypes.func,
  isNavigationEnabled: PropTypes.bool,
  isRowSelectionModeEnabled: PropTypes.bool,

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
    isRowSelectionModeEnabled,
    intl,
    ...customProps
  } = props;

  const theme = useContext(ThemeContext);

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
      isRowSelectionModeEnabled={isRowSelectionModeEnabled}
      ariaLabel={intl.formatMessage({
        id: 'Terra.worklist-data-grid.row-selection-template',
      }, {
        rowDescription: ariaLabel,
      })}
      className={cx(['selectable', theme.className])}
      isNavigationEnabled={isNavigationEnabled}
      rowsLength={customProps.rowsLength}
      columnsLength={customProps.columnsLength}
    >
      <input
        type="checkbox"
        id={`${rowId}_${columnId}_rowselect`}
        tabIndex={acceptsFocus ? 0 : -1}
        checked={isSelected}
        aria-checked={isSelected}
        className={cx(['selectable-centered', theme.className])}
      />
    </Cell>
  );
}

RowSelectionCell.propTypes = propTypes;

export default injectIntl(RowSelectionCell);
