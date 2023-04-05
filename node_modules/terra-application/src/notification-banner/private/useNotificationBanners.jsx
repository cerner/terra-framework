import React from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import classNames from 'classnames';
import { injectIntl } from 'react-intl';
import Button from 'terra-button';
import ThemeContext from 'terra-theme-context';

import BannerRegistrationContext from './BannerRegistrationContext';
import organizeBannersByPriority from './organizeBannersByPriority';
import useForceUpdate from './useForceUpdate';
import NotificationBannerView, { getTitleStringIdForType } from './_NotificationBannerView';

import styles from './useNotificationBanners.module.scss';

const cx = classNamesBind.bind(styles);

/**
 * Given a NotificationBanner variant, translates the variant into the legacy support banner types.
 * @param {string} variant One of the supported NotificationBanner variants.
 * @returns {string} The legacy banner type corresponding to the variant, or the variant itself if supported.
 */
function getBannerTypeFromVariant(variant) {
  let bannerType;
  switch (variant) {
    case 'hazard-high':
      bannerType = 'alert';
      break;
    case 'hazard-medium':
      bannerType = 'warning';
      break;
    case 'hazard-low':
      bannerType = 'info';
      break;
    default:
      bannerType = variant;
  }

  return bannerType;
}

/**
 * Returns a comparison of two collections of banners, including banners that were added and removed.
 * @param {Array} newBanners An array of banner data representing the current state.
 * @param {Array} oldBanners An array of banner data representing the previous state.
 * @returns {Object} An object containing references to the banners that were added and removed.
 */
function comparedBannerSets(newBanners, oldBanners) {
  const additions = [];
  const deletions = [...oldBanners];

  for (let i = 0, count = newBanners.length; i < count; i += 1) {
    if (oldBanners.findIndex(oldBanner => oldBanner.key === newBanners[i].key) < 0) {
      additions.push(newBanners[i]);
    } else {
      deletions.splice(deletions.findIndex(banner => banner.key === newBanners[i].key), 1);
    }
  }

  return {
    additions,
    deletions,
  };
}

/**
 * The `useNotificationBanners` Hook manages registering and prioritizing Notification Banners
 * rendered within the Notification Banner Context.
 *
 * Returns:
 *   - NotificationBannerProvider - React Context Provider - Provides the Banner Registration Context to its children.
 *         This allows any NotificationBanner registered beneath it to be displayed in the NotificationBanner's list.
 *   - NotificationBanners - React Component - Renders a list of prioritized notification banners.
 *
 * @returns { NotificationBannerProvider, NotificationBanners }
 */
const useNotificationBanners = () => {
  // The registeredBanners ref maintains collection of banner ids and banner props registered to the  NotificationBannerProvider.
  const registeredBanners = React.useRef({});

  // The updateBannerState ref stores the update state function used to manage the banners rendered in the NotificationBanners component.
  // This ties the state updates to the `useNotificationBanners` hook, while allowing the NotificationBanners to be rendered above or below
  // the NotificationBannerProvider.
  const updateBannerState = React.useRef();

  const useNotificationBannerExports = React.useMemo(() => {
    /**
     * Adds the banner ID and props to the collection of registered banners. Once registered,
     * it updates the NotificationBanner's state to render the new Banner.
     *
     * @param {UUID} bannerId - unique ID associated to the banner
     * @param {Object} bannerProps - react props associated to the banner. See ../NotificationBanner's propTypes.
     */
    const registerNotificationBanner = (bannerId, bannerProps) => {
      if (!bannerId) {
        throw new Error('A banner cannot be registered without an identifier.');
      }

      const { variant } = bannerProps;

      if (!registeredBanners.current[variant]) {
        registeredBanners.current[variant] = {};
      }

      registeredBanners.current[variant][bannerId] = { ...bannerProps, key: bannerId };

      if (updateBannerState.current) {
        updateBannerState.current({ banners: { ...registeredBanners.current } });
      }
    };

    /**
     * Removes the banner ID and props from the collection of registered banners. Once unregistered,
     * it updates the NotificationBanner's state to remove the Banner from the list.
     *
     * @param {UUID} bannerId - unique ID associated to the banner
     * @param {String} bannerVariant - the banner variant to remove banner from
     */
    const unregisterNotificationBanner = (bannerId, bannerVariant) => {
      if (!bannerId || !bannerVariant) {
        throw new Error('A banner cannot be unregistered without an identifier or banner variant.');
      }

      if (!registeredBanners.current[bannerVariant] || !registeredBanners.current[bannerVariant][bannerId]) {
        return;
      }

      delete registeredBanners.current[bannerVariant][bannerId];

      if (!registeredBanners.current[bannerVariant].length) {
        delete registeredBanners.current[bannerVariant];
      }

      if (updateBannerState.current) {
        updateBannerState.current({ banners: { ...registeredBanners.current } });
      }
    };

    /**
     * Provides the Banner Registration Context to its children.
     */
    const NotificationBannerProvider = ({ children }) => (
      <BannerRegistrationContext.Provider value={{ registerNotificationBanner, unregisterNotificationBanner }}>
        {children}
      </BannerRegistrationContext.Provider>
    );

    NotificationBannerProvider.propTypes = {
      /**
       * The elements to receive access to the BannerRegistrationContext value.
       */
      children: PropTypes.node,
    };

    /**
     * Renders a list of prioritized notification banners.
     */
    const NotificationBanners = ({
      id, label, activeClassName, bannerClassName, intl,
    }) => {
      const theme = React.useContext(ThemeContext);
      const [bannerState, setBannerState] = React.useState({});

      // The container reference points to the notification region so we
      // can move focus there when necessary.
      const containerRef = React.useRef();

      // We track the last rendered set of banners so that we can determine
      // when banners are added/removed at render time.
      const lastRenderedBannersRef = React.useRef([]);

      // We track the last read removal message to ensure that duplicates are
      // known and updated to work around some VoiceOver issues.
      const lastReadAddedBanner = React.useRef();

      // We track the last read removal message to ensure that duplicates are
      // known and updated to work around some VoiceOver issues.
      const lastReadRemovedBanner = React.useRef();

      // We track identifiers for banners explicitly dismissed by the user
      // so that we can appropriately read the result.
      const dismissalRefs = React.useRef({});

      const forceUpdate = useForceUpdate();

      // Set the updateBannerState ref to the update state function. This ties the state updates to the `useNotificationBanners` hook,
      // while allowing the NotificationBanners to be rendered above or below the NotificationBannerProvider.
      updateBannerState.current = setBannerState;

      const prioritizedBanners = organizeBannersByPriority(bannerState.banners, theme.name);
      const renderedBannerComparison = comparedBannerSets(prioritizedBanners, lastRenderedBannersRef.current);
      lastRenderedBannersRef.current = prioritizedBanners;

      React.useEffect(() => {
        if (renderedBannerComparison.deletions.length || renderedBannerComparison.additions.length) {
          // An update is triggered in a few seconds to clear out the screen reader labels
          // for the additions/deletions. Those labels should not be found after the fact.
          const timeout = setTimeout(() => {
            forceUpdate();
          }, 3000);

          return () => {
            clearTimeout(timeout);
          };
        }

        return undefined;
      }, [renderedBannerComparison, forceUpdate]);

      let addedBannersLog;
      if (renderedBannerComparison.additions.length) {
        addedBannersLog = renderedBannerComparison.additions.map((addedBanner) => {
          let translatedBannerType = getTitleStringIdForType(getBannerTypeFromVariant(addedBanner.variant));
          if (translatedBannerType) {
            translatedBannerType = intl.formatMessage({ id: translatedBannerType });
          }

          return intl.formatMessage({ id: 'terraApplication.notifications.newNotificationLabel' }, {
            label,
            bannerType: translatedBannerType,
            bannerDescription: addedBanner.description,
            bannerAction: addedBanner?.bannerAction?.text ? addedBanner.bannerAction.text : '',
            bannerDismiss: addedBanner.onRequestClose ? intl.formatMessage({ id: 'terraApplication.notificationBanner.dismiss' }) : '',
          });
        }).join(' ');

        if (addedBannersLog.length) {
          addedBannersLog += ` ${intl.formatMessage({ id: 'terraApplication.notifications.totalCountLabel' }, { label, count: prioritizedBanners.length })}`;
        }

        // Certain screen readers will not read text in a live region if it has already been read. This can be a problem
        // if the same notification is presented, dismissed, and then presented again. We work around this by appending
        // an invisible, non-breaking space to the string if it is a duplicate in order to force the screen reader
        // to read the string.
        if (lastReadAddedBanner.current === addedBannersLog) {
          addedBannersLog += '\u00A0';
        }

        lastReadAddedBanner.current = addedBannersLog;
      }

      let removedBannersLog;
      if (renderedBannerComparison.deletions.length) {
        removedBannersLog = renderedBannerComparison.deletions.map((removedBanner) => {
          // Only read removed banners if the user explicitly triggered the removal.
          if (!dismissalRefs.current[removedBanner.key]) {
            return '';
          }

          delete dismissalRefs[removedBanner.key];

          let translatedBannerType = getTitleStringIdForType(getBannerTypeFromVariant(removedBanner.variant));
          if (translatedBannerType) {
            translatedBannerType = intl.formatMessage({ id: translatedBannerType });
          }

          return intl.formatMessage({ id: 'terraApplication.notifications.removedNotificationLabel' }, {
            label,
            bannerType: translatedBannerType,
            bannerDescription: removedBanner.description,
          });
        }).join(' ');

        if (removedBannersLog.trim().length) {
          removedBannersLog += ` ${intl.formatMessage({ id: 'terraApplication.notifications.totalCountLabel' }, { label, count: prioritizedBanners.length })}`;
        }

        // Certain screen readers will not read text in a live region if it has already been read. This can be a problem,
        // if the same notification is presented, dismissed, and then presented again. We work around this by appending
        // and invisible, non-breaking space to the string, if it is a duplicate, in order to force the screen reader
        // to read the string.
        if (lastReadRemovedBanner.current === removedBannersLog) {
          removedBannersLog += '\u00A0';
        }

        lastReadRemovedBanner.current = removedBannersLog;
      }

      const appliedActiveClassName = prioritizedBanners.length && activeClassName ? activeClassName : undefined;

      return (
        <div
          role="region"
          aria-label={intl.formatMessage({ id: 'terraApplication.notifications.regionLabel' }, { label })}
          id={id}
          className={classNames(cx('region'), appliedActiveClassName)}
          tabIndex="-1"
          ref={containerRef}
        >
          <span className={cx('hidden-log')} aria-live="polite" aria-atomic="true" data-testid="added-banner-log">
            <span>{addedBannersLog}</span>
          </span>
          <span className={cx('hidden-log')} aria-live="polite" aria-atomic="true" data-testid="removed-banner-log">
            <span>{removedBannersLog}</span>
          </span>
          <ul className={cx('banners-list')} data-testid="notification-banners-list">
            {prioritizedBanners.map((bannerProps, index) => {
              const {
                bannerAction, custom, description, key, onRequestClose, variant,
              } = bannerProps;

              const bannerType = getBannerTypeFromVariant(variant);

              let actionButton = null;
              if (bannerAction) {
                actionButton = (
                  <Button
                    text={bannerAction.text}
                    variant="ghost"
                    onClick={bannerAction.onClick}
                  />
                );
              }

              let customIcon;
              let customSignalWord;
              if (bannerType === 'custom' && custom) {
                customSignalWord = custom.signalWord;

                if (custom.customIconClass) {
                  customIcon = (
                    <svg className={cx(['custom-icon', custom.customIconClass])} />
                  );
                }
              }

              let translatedBannerLabel = getTitleStringIdForType(bannerType);
              if (translatedBannerLabel) {
                translatedBannerLabel = intl.formatMessage({ id: getTitleStringIdForType(bannerType) });
              } else if (customSignalWord) {
                translatedBannerLabel = customSignalWord;
              }

              return (
                <li
                  className={classNames(cx('banner-list-item', { 'legacy-banner-style': !bannerClassName }), bannerClassName)}
                  aria-label={translatedBannerLabel}
                  aria-setsize={prioritizedBanners.length}
                  aria-posinset={index + 1}
                  tabIndex="-1"
                  key={key}
                >
                  <NotificationBannerView
                    key={key}
                    action={actionButton}
                    onDismiss={onRequestClose ? () => {
                      dismissalRefs.current[key] = true;
                      containerRef.current.focus();
                      onRequestClose();
                    } : undefined}
                    type={bannerType}
                    customIcon={customIcon}
                    title={customSignalWord}
                    data-terra-application-notification-banner={variant}
                  >
                    {description}
                  </NotificationBannerView>
                </li>
              );
            })}
          </ul>
        </div>
      );
    };

    NotificationBanners.propTypes = {
      /**
       * An identifier for the notifications region, applied as an `id` for the notification container element.
       * Must be globally unique.
       */
      id: PropTypes.string,
      /**
       * A description of what the notification banners are related to. Used to provide additional descriptive labeling
       * for screen readers.
       */
      label: PropTypes.string,
      /**
       * A className applied to the notifications container when the container is populated with at least one notification banner.
       * Can be used to provide styling only when notification content will be visible.
       */
      activeClassName: PropTypes.string,
      /**
       * A className applied to each rendered notification banner.
       */
      bannerClassName: PropTypes.string,
      /**
       * @private
       */
      intl: PropTypes.shape({ formatMessage: PropTypes.func }),
    };

    return {
      NotificationBannerProvider,
      NotificationBanners: injectIntl(NotificationBanners),
    };
  }, []);

  return useNotificationBannerExports;
};

export default useNotificationBanners;
