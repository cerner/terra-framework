import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './_UtilityMenuDivider.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * If the divider shall be placed before the footer
   */
  isFooter: PropTypes.bool,
};

const UtilityMenuDivider = ({ isFooter, ...customProps }) => {
  const dividerClassNames = cx([
    'divider',
    { 'is-header': !isFooter },
    { 'is-footer': isFooter },
    customProps.className,
  ]);

  return <div {...customProps} className={dividerClassNames} role="separator" />;
};

UtilityMenuDivider.propTypes = propTypes;
export default UtilityMenuDivider;
