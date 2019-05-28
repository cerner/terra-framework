import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Placeholder.scss';

const cx = classNames.bind(styles);

const propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
};

const defaultProps = {
  text: 'PlaceHolder',
  size: 'tiny',
};

const Placeholder = ({
  text, size,
}) => (
  <div className={cx(`wrapper1-${size}`)}>
    <div className={cx('wrapper2')}>
      <div className={cx('wrapper3')}>
        <h3>{text}</h3>
      </div>
    </div>
  </div>
);

Placeholder.propTypes = propTypes;
Placeholder.defaultProps = defaultProps;

export default Placeholder;
