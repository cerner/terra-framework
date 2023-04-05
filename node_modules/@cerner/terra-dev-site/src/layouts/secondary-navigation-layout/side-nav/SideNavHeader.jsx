import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button, { ButtonVariants } from 'terra-button';
import IconLeft from 'terra-icon/lib/icon/IconLeft';
import { ThemeContext } from 'terra-application/lib/theme';
import { ApplicationIntlContext } from 'terra-application/lib/application-intl';

import styles from './SideNavHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * A function called to request close of the side nav.
   */
  onRequestClose: PropTypes.func,

  /**
   * The label for the side nav header.
   */
  label: PropTypes.string,
};

const SideNavHeader = ({
  onRequestClose, label,
}) => {
  const theme = React.useContext(ThemeContext);
  const applicationIntl = React.useContext(ApplicationIntlContext);
  return (
    <div className={cx('page-header-container', theme.className)}>
      <div className={cx('page-layout-header')}>
        {onRequestClose ? (
          <div className={cx('back-button-container')}>
            <Button
              className={cx(['header-button', 'back-button'])}
              icon={<IconLeft />}
              text={applicationIntl.formatMessage({ id: 'terraDevSite.pageHeader.back' })}
              onClick={onRequestClose}
              variant={ButtonVariants.UTILITY}
            />
          </div>
        ) : null}
        <div className={cx('label-container')}>
          {label}
        </div>
      </div>
    </div>
  );
};

SideNavHeader.propTypes = propTypes;

export default SideNavHeader;
