import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import ToggleCount from './_ToggleCount';
import Extensions from '../extensions/_Extensions';
import {
  navigationItemsPropType,
  extensionItemsPropType,
} from '../utils/propTypes';

import styles from './CompactHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  onSelectToggle: PropTypes.func,
  titleConfig: PropTypes.shape({
    title: PropTypes.string.isRequired,
    headline: PropTypes.string,
    subline: PropTypes.string,
    element: PropTypes.element,
  }),
  extensionItems: extensionItemsPropType,
  onSelectExtensionItem: PropTypes.func,
  onSelectSkipToContent: PropTypes.func,
  intl: intlShape,
  /**
   * Array of navigation items to render within the Header.
   */
  navigationItems: navigationItemsPropType,
  notifications: PropTypes.object,
  /**
   * @private
   * The currently active breakpoint.
   */
  activeBreakpoint: PropTypes.string,
};

class CompactHeader extends React.Component {
  constructor(props) {
    super(props);

    this.renderAppName = this.renderAppName.bind(this);
    this.renderToggle = this.renderToggle.bind(this);

    this.previousNotifications = null;
  }

  shouldComponentUpdate() {
    this.previousNotifications = this.props.notifications;
    return true;
  }

  shouldPulse(navigationItems, notifications) {
    let shouldPulse = false;

    if (this.previousNotifications) {
      for (let i = 0; i < navigationItems.length; i += 1) {
        const item = navigationItems[i];
        const previousCount = this.previousNotifications[item.key];
        const newCount = notifications[item.key];
        if (newCount && (!previousCount || newCount > previousCount)) {
          shouldPulse = true;
          break;
        }
      }
    }

    return shouldPulse;
  }

  renderToggle() {
    const {
      intl, navigationItems, onSelectToggle, notifications,
    } = this.props;

    const headerHasCounts = navigationItems.some(item => !!notifications[item.key]);
    const isPulsed = headerHasCounts && this.shouldPulse(navigationItems, notifications);

    return (
      <button
        type="button"
        className={cx('toggle-button')}
        aria-label={intl.formatMessage({ id: 'Terra.applicationLayout.applicationHeader.menuToggleLabel' })}
        onClick={onSelectToggle}
        data-item-show-focus
        onBlur={(event) => {
          event.currentTarget.setAttribute('data-item-show-focus', 'true');
        }}
        onMouseDown={(event) => {
          event.currentTarget.setAttribute('data-item-show-focus', 'false');
        }}
      >
        <IconMenu />
        {headerHasCounts && <ToggleCount value={isPulsed ? 1 : 0} />}
      </button>
    );
  }

  renderAppName() {
    const { titleConfig } = this.props;

    if (!titleConfig) {
      return null;
    }

    if (titleConfig.element) {
      return (
        <div title={titleConfig.title}>
          {titleConfig.element}
        </div>
      );
    }

    return (
      <React.Fragment>
        {titleConfig.headline ? <div className={cx('headline')} title={titleConfig.headline}>{titleConfig.headline}</div> : null}
        <div className={cx('title')} title={titleConfig.title}>{titleConfig.title}</div>
        {titleConfig.subline ? <div className={cx('subline')} title={titleConfig.subline}>{titleConfig.subline}</div> : null}
      </React.Fragment>
    );
  }

  renderExtensions() {
    const {
      extensionItems, activeBreakpoint, onSelectExtensionItem, notifications,
    } = this.props;

    if (!extensionItems || !extensionItems.length) {
      return null;
    }

    return (
      <Extensions
        extensionItems={extensionItems}
        activeBreakpoint={activeBreakpoint}
        onSelect={onSelectExtensionItem}
        notifications={notifications}
      />
    );
  }

  render() {
    const {
      onSelectSkipToContent,
      intl,
    } = this.props;

    return (
      <div className={cx(['compact-application-header'])}>
        <button type="button" onClick={onSelectSkipToContent} className={cx('skip-content-button')}>
          {intl.formatMessage({ id: 'Terra.ApplicationHeaderLayout.SkipToContent' })}
        </button>
        {this.renderToggle()}
        <div className={cx('title-container')}>
          {this.renderAppName()}
        </div>
        <div className={cx('extensions-container')}>
          {this.renderExtensions()}
        </div>
      </div>
    );
  }
}

CompactHeader.propTypes = propTypes;

export default injectIntl(CompactHeader);
