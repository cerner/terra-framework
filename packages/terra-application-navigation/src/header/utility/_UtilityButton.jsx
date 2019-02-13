import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import Avatar from 'terra-avatar';
import IconChevronDown from 'terra-icon/lib/icon/IconChevronDown';
import IconKnurling from 'terra-icon/lib/icon/IconKnurling';

import styles from './UtilityButton.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  userConfig: PropTypes.func,
  onClick: PropTypes.func,
  refCallback: PropTypes.func,
  intl: intlShape,
};

const defaultProps = {};

const UtilityButton = ({
  userConfig, onClick, refCallback, intl,
}) => (
  <button
    type="button"
    className={cx('utility-button')}
    onClick={onClick}
    aria-label={intl.formatMessage({ id: 'Terra.application.utility.button' })}
    ref={refCallback}
    data-application-header-utility
  >
    {userConfig ? (
      <React.Fragment>
        <Avatar alt={userConfig.name} image={userConfig.image} initials={userConfig.initials} className={cx('avatar')} />
        <span className={cx('title')}>{userConfig.name}</span>
        <IconChevronDown className={cx('icon')} />
      </React.Fragment>
    ) : (
      <IconKnurling className={cx('icon')} />
    )}
  </button>
);

UtilityButton.propTypes = propTypes;
UtilityButton.defaultProps = defaultProps;

export default injectIntl(UtilityButton);
