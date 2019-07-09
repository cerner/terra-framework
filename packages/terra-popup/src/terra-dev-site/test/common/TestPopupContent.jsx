import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TestPopupContent.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'large']),
};

const TestPopupContent = ({
  onClick,
  size,
}) => (
  <div className={cx(`popup-content-${size}`)}>
    <button type="button" id="resize-content" onClick={onClick}>
      Resize
    </button>
  </div>
);

TestPopupContent.propTypes = propTypes;

export default TestPopupContent;
