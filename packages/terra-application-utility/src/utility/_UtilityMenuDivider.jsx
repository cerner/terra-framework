import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './_UtilityMenuDivider.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * If the divider shall be placed before the header
   */
  isTop: PropTypes.bool,
};

const UtilityMenuDivider = ({ isTop, ...customProps }) => {
  const theme = React.useContext(ThemeContext);
  const dividerClassNames = classNames(cx(
    'divider',
    { 'is-bottom': !isTop },
    { 'is-top': isTop },
    theme.className,
  ),
  customProps.className);

  return <div {...customProps} className={dividerClassNames} role="separator" />;
};

UtilityMenuDivider.propTypes = propTypes;
export default UtilityMenuDivider;
