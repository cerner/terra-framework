import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './_UtilityMenuDivider.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * If the divider shall be placed before the header
   */
  isTop: PropTypes.bool,
};

const UtilityMenuDivider = ({ isTop, ...customProps }) => {
  const dividerClassNames = cx([
    'divider',
    { 'is-bottom': !isTop },
    { 'is-top': isTop },
    customProps.className,
  ]);

  return <div {...customProps} className={dividerClassNames} role="separator" />;
};

UtilityMenuDivider.propTypes = propTypes;
export default UtilityMenuDivider;
