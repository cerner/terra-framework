import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import IconSpinner from 'terra-icon/lib/icon/IconSpinner';
import ThemeContext from 'terra-theme-context';

import styles from './PageActivityOverlay.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  variant: PropTypes.oneOf(['default', 'loading']),
};

const defaultProps = {
  variant: 'default',
};

const PageActivityOverlay = ({ variant }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div
      className={cx('activity-overlay', theme.className)}
      aria-live="polite"
    >
      <div className={cx('content')}>
        <IconSpinner className={cx('icon')} isSpin height="36" width="36" />
        {variant === 'loading' ? (
          <FormattedMessage id="terraDevSite.pageActivityOverlayContainer.loading">
            {loadingMessage => (
              <div className={cx('message')}>{loadingMessage}</div>
            )}
          </FormattedMessage>
        ) : undefined }
      </div>
    </div>
  );
};

PageActivityOverlay.propTypes = propTypes;
PageActivityOverlay.defaultProps = defaultProps;

export default PageActivityOverlay;
