import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import ToggleCount from './_ToggleCount';
import {
  navigationItemsPropType,
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
  extensions: PropTypes.element,
  onSelectSkipToContent: PropTypes.func,
  intl: intlShape,
  /**
   * Array of navigation items to render within the Header.
   */
  navigationItems: navigationItemsPropType,
};

class CompactHeader extends React.Component {
  constructor(props) {
    super(props);

    this.renderAppName = this.renderAppName.bind(this);
    this.renderToggle = this.renderToggle.bind(this);

    this.previousNotifications = [];
  }

  shouldPulse(navigationItems) {
    let shouldPulse = false;

    const newNotifications = navigationItems.reduce((acc, item) => {
      if (item.notificationCount > 0) {
        acc[item.key] = item.notificationCount;
      }
      return acc;
    }, {});

    const notificationKeys = Object.keys(newNotifications);
    for (let i = 0; i < notificationKeys.length; i += 1) {
      const previousCount = this.previousNotifications[notificationKeys];
      if (previousCount === undefined || newNotifications[notificationKeys] > previousCount) {
        shouldPulse = true;
        break;
      }
    }

    this.previousNotifications = newNotifications;
    return shouldPulse;
  }

  renderToggle() {
    const {
      intl, navigationItems, onSelectToggle,
    } = this.props;

    const headerHasAnyCounts = navigationItems.some(({ notificationCount }) => notificationCount > 0);
    const isPulsed = this.shouldPulse(navigationItems);

    return (
      <button
        type="button"
        className={cx('toggle-button')}
        aria-label={intl.formatMessage({ id: 'Terra.applicationLayout.applicationHeader.menuToggleLabel' })}
        onClick={onSelectToggle}
        data-application-header-toggle
      >
        <IconMenu />
        {headerHasAnyCounts && <ToggleCount value={isPulsed ? 1 : 0} />}
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

  render() {
    const {
      onSelectSkipToContent,
      extensions,
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
          {extensions}
        </div>
      </div>
    );
  }
}

CompactHeader.propTypes = propTypes;

export default injectIntl(CompactHeader);
