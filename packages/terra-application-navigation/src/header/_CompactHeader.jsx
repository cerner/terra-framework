import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import IconMenu from 'terra-icon/lib/icon/IconMenu';

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
