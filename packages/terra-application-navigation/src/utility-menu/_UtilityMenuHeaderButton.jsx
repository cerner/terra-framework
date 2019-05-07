import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import Avatar from 'terra-avatar';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import IconKnurling from 'terra-icon/lib/icon/IconKnurling';

import styles from './UtilityMenuHeaderButton.module.scss';
import { userConfigPropType } from '../utils/propTypes';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: userConfigPropType,
  onClick: PropTypes.func,
  popupAnchorRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  /**
   * @private
   */
  intl: intlShape,
};

const defaultProps = {};

const UtilityMenuHeaderButton = ({
  userConfig, onClick, popupAnchorRef, intl,
}) => (
  <button
    type="button"
    className={cx('utility-button')}
    onClick={onClick}
    aria-label={intl.formatMessage({ id: 'Terra.application.utility.button' })}
    data-application-header-utility
    data-item-show-focus
    onBlur={(event) => {
      event.currentTarget.setAttribute('data-item-show-focus', 'true');
    }}
    onMouseDown={(event) => {
      event.currentTarget.setAttribute('data-item-show-focus', 'false');
    }}
  >
    <span className={cx('focus-me')}>
      {userConfig ? (
        <React.Fragment>
          <Avatar alt={userConfig.name} image={userConfig.imageSrc} initials={userConfig.initials} className={cx('avatar')} />
          <div className={cx('title')}>{userConfig.name}</div>
          <IconCaretDown className={cx('icon')} />
          <div className={cx('popup-anchor')} ref={popupAnchorRef} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <IconKnurling className={cx('icon')} />
          <span className={cx('popup-anchor')} ref={popupAnchorRef} />
        </React.Fragment>
      )}
    </span>
  </button>
);

UtilityMenuHeaderButton.propTypes = propTypes;
UtilityMenuHeaderButton.defaultProps = defaultProps;

export default injectIntl(UtilityMenuHeaderButton);
