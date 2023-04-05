import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl } from 'react-intl';
import Avatar, { Generic } from 'terra-avatar';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import IconRollup from 'terra-icon/lib/icon/IconRollup';
import ThemeContext from 'terra-theme-context';

import { enableFocusStyles, disableFocusStyles, generateKeyDownSelection } from '../utils/helpers';
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
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
};

const UtilityMenuHeaderButton = ({
  userConfig, onClick, popupAnchorRef, intl,
}) => {
  const theme = React.useContext(ThemeContext);

  let ariaLabel;
  let content;
  if (userConfig) {
    ariaLabel = intl.formatMessage({ id: 'terraApplication.navigation.header.utilityButtonTitleUser' }, { currentUserName: userConfig.name });
    content = (
      <React.Fragment>
        <div className={cx('image')}>
          {
          (userConfig.initials || userConfig.imageSrc)
            ? <Avatar alt={userConfig.name} image={userConfig.imageSrc} initials={userConfig.initials || userConfig.name} className={cx('avatar')} isAriaHidden />
            : <Generic alt={userConfig.name} className={cx('avatar')} isAriaHidden />
          }
        </div>
        <div className={cx('title')}>{userConfig.name}</div>
        <IconCaretDown className={cx('caret-icon')} />
        <span className={cx('popup-anchor')} ref={popupAnchorRef} />
      </React.Fragment>
    );
  } else {
    ariaLabel = intl.formatMessage({ id: 'terraApplication.navigation.header.utilityButtonTitleNoUser' });
    content = <div className={cx('no-user-image')}><IconRollup className={cx('rollup-icon')} /></div>;
  }

  return (
    <div
      role="button"
      tabIndex="0"
      className={cx('utility-button', theme.className, { 'no-user': !userConfig })}
      onClick={onClick}
      onKeyDown={generateKeyDownSelection(onClick)}
      onBlur={enableFocusStyles}
      onMouseDown={disableFocusStyles}
      ref={!userConfig ? popupAnchorRef : undefined}
      aria-label={ariaLabel}
      aria-haspopup
      data-focus-styles-enabled
      data-application-header-utility
    >
      {content}
    </div>
  );
};

UtilityMenuHeaderButton.propTypes = propTypes;

export default injectIntl(UtilityMenuHeaderButton);
