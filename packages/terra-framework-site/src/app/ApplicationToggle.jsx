import React from 'react';
import PropTypes from 'prop-types';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import styles from './ApplicationHeader.scss';

const cx = classNames.bind(styles);

const propTypes = {
  layoutConfig: PropTypes.object,
};

const ApplicationToggle = ({
  layoutConfig,
}) => {
  if (!layoutConfig.toggleMenu || (layoutConfig.size !== 'tiny' && layoutConfig.size !== 'small')) {
    return null;
  }
  return <Button className={cx('toggle-button')} variant="link" icon={<IconMenu />} onClick={layoutConfig.toggleMenu} />;
};

ApplicationToggle.propTypes = propTypes;

export default ApplicationToggle;
