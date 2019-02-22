import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { extensionConfigPropType } from '../utils/propTypes';
import { shouldRenderCompactNavigation } from '../utils/helpers';
import ExtensionRollup from './_ExtensionRollup';
import ExtensionHelper from './_ExtensionHelper';
import { EXTENSION_COUNT } from './_ExtensionUtils';

import styles from './ExtensionsRow.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The currently active breakpoint.
   */
  activeBreakpoint: PropTypes.string,
  /**
   * The content to be rendered in the ApplicationLayout's extensions region.
   */
  extensionConfig: extensionConfigPropType,
  /**
   * The configuration values for the ApplicationName component.
   */
  notifications: PropTypes.object,
  /**
   * The configuration values for the ApplicationName component.
   */
  onRollupSelect: PropTypes.func,
  /**
   * The configuration values for the ApplicationName component.
   */
  refCallback: PropTypes.func,
  /**
   * Function callback for closing the drawer.
   */
  onRequestClose: PropTypes.func,
};

const defaultProps = {
  activeBreakpoint: '',
};

const shouldShowNotifications = (extensionItems, notifications) => {
  for (let i = 0; i < extensionItems.length; i += 1) {
    const item = extensionItems[i];
    const notificationCount = notifications && item.notifyKey ? notifications[item.notifyKey] : null;
    if (notificationCount > 0) {
      return true;
    }
  }
  return false;
};

const createRollupButton = (hiddenItems, notifications, onRollupSelect, refCallback) => {
  if (!hiddenItems || !hiddenItems.length) {
    return null;
  }
  return (
    <ExtensionRollup
      onSelect={onRollupSelect}
      refCallback={refCallback}
      hasChildNotifications={shouldShowNotifications(hiddenItems, notifications)}
    />
  );
};

const ExtensionsRow = ({
  activeBreakpoint,
  extensionConfig,
  notifications,
  onRollupSelect,
  refCallback,
  onRequestClose,
}) => {
  if (!extensionConfig) {
    return null;
  }

  const sliceIndex = shouldRenderCompactNavigation(activeBreakpoint) ? EXTENSION_COUNT.SMALL : EXTENSION_COUNT.LARGE;
  const extensionItems = extensionConfig.extensions.slice(0, sliceIndex);
  const hiddenItems = extensionConfig.extensions.slice(sliceIndex);

  return (
    <div className={cx('extensions-row')}>
      {ExtensionHelper(extensionItems, notifications, onRequestClose, false)}
      {createRollupButton(hiddenItems, notifications, onRollupSelect, refCallback)}
    </div>
  );
};

ExtensionsRow.propTypes = propTypes;
ExtensionsRow.defaultProps = defaultProps;

export default ExtensionsRow;
