import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import styles from 'terra-theme-provider/lib/terra-dev-site/doc/example/MockThemeComponent.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Child node. Component to display next to the status indicator.
   */
  children: PropTypes.node.isRequired,
};

const MockThemeComponent = ({ children, ...customProps }) => (
  <div {...customProps} className={cx('mock-theme-component', customProps.className)} >
    {children}
  </div>
);

MockThemeComponent.propTypes = propTypes;

export default MockThemeComponent;
