import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import IconMenu from 'terra-icon/lib/icon/IconMenu';

import styles from './CompactHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  onSelectToggle: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  extensions: PropTypes.element,
  onSelectSkipToContent: PropTypes.func,
  intl: intlShape,
};

class CompactHeader extends React.Component {
  constructor(props) {
    super(props);

    this.renderAppName = this.renderAppName.bind(this);

    this.previousNotifications = [];
  }

  shouldPulse(navigationItems) {
    let shouldPulse = false;

    const newNotifications = navigationItems.map(item => item.notificationCount);
    if (newNotifications.length === this.previousNotifications.length) {
      for (let i = 0; i < newNotifications.length; i += 1) {
        if (newNotifications[i] > this.previousNotifications[i]) {
          shouldPulse = true;
          break;
        }
      }
    }
    this.previousNotifications = newNotifications;
    return shouldPulse;
  }

  renderAppName() {
    const { title } = this.props;

    if (title) {
      return (
        <div className={cx('application-name-container')}>
          {typeof title === 'string' ? <div className={cx('application-name-title')}>{title}</div> : title}
        </div>
      );
    }

    return null;
  }

  render() {
    const {
      onSelectSkipToContent,
      onSelectToggle,
      extensions,
      intl,
    } = this.props;

    return (
      <div className={cx(['compact-application-header'])}>
        <button type="button" onClick={onSelectSkipToContent} className={cx('skip-content')}>
          {intl.formatMessage({ id: 'Terra.ApplicationHeaderLayout.SkipToContent' })}
        </button>
        <button
          type="button"
          className={cx('toggle-button')}
          aria-label={intl.formatMessage({ id: 'Terra.applicationLayout.applicationHeader.menuToggleLabel' })}
          onClick={onSelectToggle}
        >
          <IconMenu />
        </button>
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
