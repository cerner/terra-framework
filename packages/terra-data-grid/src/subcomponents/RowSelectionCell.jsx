import React from 'react';
import PropTypes from 'prop-types';
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
   * The cell's row position in the grid. This is zero based.
   */
  rowIndex: PropTypes.number,

  /**
   * The cell's column position in the grid. This is zero based.
   */
  columnIndex: PropTypes.number,

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
    rowIndex,
    columnIndex,
    isSelected,
    ariaLabel,
    onCellSelect,
    intl,
  } = props;

  const rowLabel = intl.formatMessage({ id: 'Terra.data-grid.row-index' }, { row: rowIndex });

  const selectionCheckbox = (
    <input
      type="checkbox"
      aria-label={ariaLabel || rowLabel}
      readOnly
      tabIndex={-1}
      checked={isSelected}
    />
  );

  return (
    <Cell
      rowId={rowId}
      columnId={columnId}
      key={`${rowId}_${columnId}`}
      rowIndex={rowIndex}
      columnIndex={columnIndex}
      isSelected={false}
      onCellSelect={onCellSelect}
    >
      {selectionCheckbox}
    </Cell>
  );
}

RowSelectionCell.propTypes = propTypes;

export default React.memo(injectIntl(RowSelectionCell));
