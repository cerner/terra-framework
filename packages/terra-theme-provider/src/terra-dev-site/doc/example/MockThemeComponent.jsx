import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from 'terra-theme-provider/lib/terra-dev-site/doc/example/MockThemeComponent.module.scss';
import 'terra-theme-provider/lib/terra-dev-site/theme/scoped-theme.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Child node. Component to display next to the status indicator.
   */
  children: PropTypes.node.isRequired,
};

const MockThemeComponent = ({ children, ...customProps }) => (
  <div {...customProps} className={cx('mock-theme-component', customProps.className)}>
    {children}
  </div>
);

MockThemeComponent.propTypes = propTypes;

export default MockThemeComponent;
