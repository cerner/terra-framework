import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';

import IconThreeSquares from './_TempSVG';
import ExtensionCount from './_ExtensionCount';
import { enableFocusStyles, disableFocusStyles, generateKeyDownSelection } from '../utils/helpers';

import styles from './ExtensionRollup.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Whether or not hidden extensions have notifications.
   */
  hasChildNotifications: PropTypes.bool,
  /**
   * Function callback for selection of the extension rollup.
   */
  onSelect: PropTypes.func,
  /**
   * Callback function for the rollup node.
   */
  extensionRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  /**
   * Whether or not the notification count should pulse.
   */
  isPulsed: PropTypes.bool,
  /**
   * @private
   * Object containing intl APIs
   */
  intl: intlShape,
};

const defaultProps = {
  hasChildNotifications: false,
  isPulsed: false,
};

const ExtensionRollup = ({
  hasChildNotifications,
  isPulsed,
  onSelect,
  extensionRef,
  intl,
}) => (
  <div
    role="button"
    tabIndex="0"
    className={cx('extension-rollup')}
    onClick={onSelect}
    onKeyDown={generateKeyDownSelection(onSelect)}
    ref={extensionRef}
    onBlur={enableFocusStyles}
    onMouseDown={disableFocusStyles}
    title={intl.formatMessage({ id: 'Terra.applicationNavigation.extensions.rollupButtonDescription' })}
    aria-label={intl.formatMessage({ id: 'Terra.applicationNavigation.extensions.rollupButtonDescription' })}
    data-focus-styles-enabled
    data-application-extension-rollup
  >
    <div className={cx('extension-rollup-inner')}>
      <div className={cx('extension-rollup-image')}>
        <IconThreeSquares />
      </div>
      {hasChildNotifications && <ExtensionCount isRollup className={cx('extension-rollup-count')} value={isPulsed ? 1 : 0} />}
    </div>
  </div>
);

ExtensionRollup.propTypes = propTypes;
ExtensionRollup.defaultProps = defaultProps;

export default injectIntl(ExtensionRollup);
