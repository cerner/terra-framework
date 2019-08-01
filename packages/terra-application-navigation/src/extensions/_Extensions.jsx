import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import Popup from 'terra-popup';

import PopupMenu from '../common/_PopupMenu';
import { extensionItemsPropType } from '../utils/propTypes';
import ExtensionRollup from './_ExtensionRollup';
import Extension from './_Extension';
import { sliceIndexForBreakpoint } from './_ExtensionUtils';
import { shouldRenderCompactNavigation } from '../utils/helpers';
import styles from './Extensions.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The currently active breakpoint.
   */
  activeBreakpoint: PropTypes.string,
  /**
   * The extension config for breakpoint display and items.
   */
  extensionItems: extensionItemsPropType,
  /**
   * A function to be executed upon selection of a tab.
   */
  onSelect: PropTypes.func,
  /**
   * Key/Value pairs associating a string key entry to a numerical notification count.
   */
  notifications: PropTypes.object,
  /**
   * @private
   * Object containing intl APIs
   */
  intl: intlShape,
};

const defaultProps = {
  activeBreakpoint: '',
  extensionItems: [],
  notifications: {},
};

const Extensions = ({
  activeBreakpoint,
  extensionItems,
  notifications,
  onSelect,
  intl,
}) => {
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const extensionRollupRef = useRef();
  const popupSelectionCallbackRef = useRef();
  const previousNotificationsRef = useRef();

  useEffect(() => {
    previousNotificationsRef.current = notifications;

    if (popupSelectionCallbackRef.current) {
      popupSelectionCallbackRef.current();
      popupSelectionCallbackRef.current = undefined;
    }
  });

  const sliceIndex = sliceIndexForBreakpoint(activeBreakpoint, extensionItems);
  const visibleExtensions = extensionItems.slice(0, sliceIndex);
  const hiddenExtensions = extensionItems.slice(sliceIndex);

  function renderRollupButton() {
    if (!hiddenExtensions || !hiddenExtensions.length) {
      return null;
    }

    const showNotifications = hiddenExtensions.some(extension => !!notifications[extension.key]);

    const shouldPulse = previousNotificationsRef.current && hiddenExtensions.some((extension) => {
      const previousCount = previousNotificationsRef.current[extension.key];
      const newCount = notifications[extension.key];
      return newCount && (!previousCount || newCount > previousCount);
    });

    return (
      <ExtensionRollup
        onSelect={() => setPopupIsOpen(true)}
        extensionRef={extensionRollupRef}
        hasChildNotifications={showNotifications}
        isPulsed={showNotifications && shouldPulse}
      />
    );
  }

  function renderPopup() {
    let attachmentSpread;
    if (shouldRenderCompactNavigation(activeBreakpoint)) {
      attachmentSpread = { contentAttachment: 'top right', targetAttachment: 'bottom center' };
    }

    return (
      <Popup
        {...attachmentSpread}
        contentHeight="auto"
        contentWidth="320"
        isArrowDisplayed
        isOpen={popupIsOpen}
        targetRef={() => extensionRollupRef.current}
        onRequestClose={() => setPopupIsOpen(false)}
        isContentFocusDisabled
      >
        <PopupMenu
          title={intl.formatMessage({ id: 'Terra.applicationNavigation.extensions.rollupMenuHeaderTitle' })}
          role="menu"
          menuItems={hiddenExtensions.map(item => ({
            key: item.key,
            icon: item.icon,
            text: item.text,
            notificationCount: notifications[item.key],
            metaData: item.metaData,
          }))}
          onSelectMenuItem={(itemKey, metaData) => {
            popupSelectionCallbackRef.current = () => onSelect(itemKey, metaData);
            setPopupIsOpen(false);
          }}
        />
      </Popup>
    );
  }

  return (
    <React.Fragment>
      <div className={cx('extensions-row')}>
        {visibleExtensions.map(extension => (
          <Extension
            notificationCount={notifications[extension.key]}
            key={extension.key}
            icon={extension.icon}
            text={extension.text}
            onSelect={onSelect && onSelect.bind(null, extension.key, extension.metaData)}
          />
        ))}
        {renderRollupButton()}
      </div>
      {renderPopup()}
    </React.Fragment>
  );
};

Extensions.propTypes = propTypes;
Extensions.defaultProps = defaultProps;

export default injectIntl(Extensions);
