import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Placeholder.scss';

const cx = classNames.bind(styles);

const propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};

const defaultProps = {
  text: 'PlaceHolder',
  type: '',
};

const Placeholder = ({
  text, type,
}) => (
  <div className={cx(`wrapper1-${type}`)}>
    <div className={cx(`wrapper2-${type}`)}>
      <div className={cx(`wrapper3-${type}`)}>
        <h3>{text}</h3>
      </div>
    </div>
  </div>
);

Placeholder.propTypes = propTypes;
Placeholder.defaultProps = defaultProps;

export default Placeholder;
