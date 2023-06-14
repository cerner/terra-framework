/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import '../_elementPolyfill';
import { injectIntl } from 'react-intl';
import styles from '../WorklistDataGrid.module.scss';

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
  acceptsFocus: PropTypes.bool,
  handleCellCopy: PropTypes.func,
  /**
   * Boolean indicating whether the Cell is actively selected.
   */
  isSelected: PropTypes.bool,
  /**
   * Content that will rendered within the Cell.
   */
  children: PropTypes.node,
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  acceptsFocus: false,
};

function DataCell(props) {
  const {
    rowId,
    columnId,
    acceptsFocus,
    isSelected,
    handleCellCopy,
    children,
    intl,
  } = props;

  return (
    <td
      key={`${rowId}_${columnId}}`}
      id={`${rowId}_${columnId}}`}
      aria-selected={isSelected ? true : undefined}
      aria-label={isSelected ? intl.formatMessage({ id: 'Terra.worklist-data-grid.cell.selected' }) : undefined}
      // aria-description={isSelected ? intl.formatMessage({ id: 'Terra.worklist-data-grid.cell.selected' }) : undefined}
      tabIndex={acceptsFocus ? 0 : -1}
      className={
            cx(['worklist-data-grid-cell-data',
              { 'worklist-data-grid-cell-selected': isSelected }])
            }
      onCopy={handleCellCopy}
    >
      {children}
    </td>
  );
}

DataCell.propTypes = propTypes;
DataCell.defaultProps = defaultProps;

export default injectIntl(DataCell);
