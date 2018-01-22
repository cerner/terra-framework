import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import List from 'terra-list';
import styles from './ApplicationTabMenuContent.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Ref callback for menu toggle.
   */
  children: PropTypes.node,
  /**
   * Ref callback for menu toggle.
   */
  isHeightBounded: PropTypes.bool,
  /**
   * Ref callback for menu toggle.
   */
  isWidthBounded: PropTypes.bool,
  /**
   * Ref callback for menu toggle.
   */
  refCallback: PropTypes.func,
};

const ApplicationTabMenuContent = ({
  children,
  isHeightBounded,
  isWidthBounded,
  refCallback,
  ...customProps
}) => {
  const listStyle = {};
  if (isHeightBounded) {
    listStyle.height = '100%';
  }
  if (isWidthBounded) {
    listStyle.width = '100%';
  }

  return (
    <List {...customProps} style={listStyle} className={cx(['list'])} role="menu" ref={refCallback}>
      {React.Children.map(children, child => (
        <List.Item content={child} key={child.props.path} />
      ))}
    </List>
  );
};

ApplicationTabMenuContent.propTypes = propTypes;

export default ApplicationTabMenuContent;
