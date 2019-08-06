import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import Avatar from 'terra-avatar';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import IconRollup from 'terra-icon/lib/icon/IconRollup';

import { enableFocusStyles, disableFocusStyles } from '../utils/helpers';
import { userConfigPropType } from '../utils/propTypes';

import styles from './UtilityMenuHeaderButton.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: userConfigPropType,
  /**
   * A function executed upon selection of the button.
   */
  onClick: PropTypes.func,
  /**
   * A ref Object that will be provided a reference to the created button.
   */
  popupAnchorRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  /**
   * @private
   * Object containing intl APIs.
   */
  intl: intlShape,
};

const UtilityMenuHeaderButton = ({
  userConfig, onClick, popupAnchorRef, intl,
}) => {
  let ariaLabel;
  let content;
  if (userConfig) {
    ariaLabel = intl.formatMessage({ id: 'Terra.applicationNavigation.header.utilityButtonTitleUser' });
    content = (
      <React.Fragment>
        <Avatar alt={userConfig.name} image={userConfig.imageSrc} initials={userConfig.initials} className={cx('avatar')} size="0.5217rem" />
        <div className={cx('title')}>{userConfig.name}</div>
        <IconCaretDown className={cx('caret-icon')} />
        <span className={cx('popup-anchor')} ref={popupAnchorRef} />
      </React.Fragment>
    );
  } else {
    ariaLabel = intl.formatMessage({ id: 'Terra.applicationNavigation.header.utilityButtonTitleNoUser' });
    content = <IconRollup className={cx('rollup-icon')} />;
  }

  return (
    <button
      type="button"
      className={cx('utility-button')}
      onClick={onClick}
      onBlur={enableFocusStyles}
      onMouseDown={disableFocusStyles}
      ref={!userConfig ? popupAnchorRef : undefined}
      aria-label={ariaLabel}
      aria-haspopup
      data-focus-styles-enabled
      data-application-header-utility
    >
      {content}
    </button>
  );
};

UtilityMenuHeaderButton.propTypes = propTypes;

export default injectIntl(UtilityMenuHeaderButton);
