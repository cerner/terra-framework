import React from 'react';
import PropTypes from 'prop-types';
import '../_elementPolyfill';
import { injectIntl } from 'react-intl';
import Cell from './Cell';

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
  isTabStop: PropTypes.bool,

  /**
   * Boolean indicating whether the cell is currently selected.
   */
  isSelected: PropTypes.bool,

  /**
   * String that labels the Row for accessibility. When a row is selected, this is the label that will be read.
   */
  ariaLabel: PropTypes.string,
  /**
   * Callback function that will be called when this cell is selected.
   */
  onCellSelect: PropTypes.func,
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
    isTabStop,
    isSelected,
    ariaLabel,
    onCellSelect,
    intl,
  } = props;

  const rowLabel = intl.formatMessage({ id: 'Terra.worklist-data-grid.row-index' }, { row: coordinates.row });

  const selectionCheckbox = (
    <input
      type="checkbox"
      aria-label={ariaLabel || rowLabel}
      aria-checked={isSelected}
      tabIndex={isTabStop ? 0 : -1}
      checked={isSelected}
    />
  );

  return (
    <Cell
      rowId={rowId}
      columnId={columnId}
      key={`${rowId}_${columnId}`}
      coordinates={coordinates}
      isTabStop={false}
      isSelected={isSelected}
      isRowSelectionCell
      onCellSelect={onCellSelect}
      cell={{ content: selectionCheckbox }}
    />
  );
}

RowSelectionCell.propTypes = propTypes;

export default injectIntl(RowSelectionCell);
