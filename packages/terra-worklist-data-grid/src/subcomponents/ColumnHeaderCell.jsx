import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import '../_elementPolyfill';
import styles from '../WorklistDataGrid.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String identifier of the column in which the Cell will be rendered.
   */
  columnId: PropTypes.string.isRequired,
  tabIndex: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  handleCellCopy: PropTypes.func,
  /**
   * Content that will rendered within the Cell.
   */
  children: PropTypes.node,
};

const defaultProps = {
  tabIndex: -1,
};

function ColumnHeaderCell(props) {
  const {
    columnId,
    tabIndex,
    width,
    height,
    handleCellCopy,
    children,
  } = props;
  return (
    <th
      id={columnId}
      key={columnId}
      className={cx('worklist-data-grid-column-header')}
      tabIndex={tabIndex}
      // eslint-disable-next-line react/forbid-dom-props
      style={{ width, height }}
      onCopy={handleCellCopy}
    >
      {children}
    </th>
  );
}

ColumnHeaderCell.propTypes = propTypes;
ColumnHeaderCell.defaultProps = defaultProps;
export default ColumnHeaderCell;
