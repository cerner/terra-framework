import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'terra-theme-context';
import classNames from 'classnames/bind';
import styles from './VisualRow.module.scss';
import rowShape from '../proptypes/rowShape';
import Row from './Row';
import columnShape from '../proptypes/columnShape';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * An identifier to uniquely identify the row within the grid.
   */
  id: PropTypes.string.isRequired,

  rows: PropTypes.arrayOf(rowShape),
  columns: PropTypes.arrayOf(columnShape),
};

const VisualRow = (props) => {
  const {
    id,
    rows,
    columns,
  } = props;

  const theme = useContext(ThemeContext);

  return (
    <div
      className={cx('visual-row', theme.className)}
      id={id}
    >
      {rows.map((row, index) => (
        <Row
          rowIndex={index + 1}
          key={row.id}
          id={row.id}
          cells={row.cells}
          ariaLabel={row.ariaLabel}
          onCellSelect={() => {}}
          columns={columns}
        />
      ))}
    </div>
  );
};

VisualRow.propTypes = propTypes;

export default React.memo(VisualRow);
