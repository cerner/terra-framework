import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import ThemeContext from 'terra-theme-context';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Whether or not the 
   */
  isActive: PropTypes.bool,
  /**
   * Selection callback function.
   */
  onSelect: PropTypes.func,
  /**
   * Ref callback for button.
   */
  refCallback: PropTypes.func,
  /**
   * @private
   * Object containing intl APIs.
   */
  intl: intlShape.isRequired,
};

const MoreButton = ({
  intl,
  isActive,
  onSelect,
  refCallback,
}) => {
  const theme = React.useContext(ThemeContext);
  const menuToggleText = 'More Tabs'; // TODO: translate

  const handleOnClick = (event) => {
    onSelect(event);
  };

  const handleOnKeyDown = (event) => {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      event.preventDefault();
      onSelect(event);
    }
  };

  return (
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    <div
      aria-hidden
      role="button"
      ref={refCallback}
      onClick={handleOnClick}
      onKeyDown={handleOnKeyDown}
      className={cx('tab-menu', { 'is-active': isActive }, theme.className)}
      data-terra-tabs-menu
    >
      <span>{menuToggleText}</span>
      <IconCaretDown />
    </div>
    /* eslint-enable jsx-ally/no-static-element-interactions */
  );
};

MoreButton.propTypes = propTypes;

export default injectIntl(MoreButton);
