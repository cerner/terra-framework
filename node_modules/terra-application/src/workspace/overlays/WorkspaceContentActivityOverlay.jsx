import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import IconSpinner from 'terra-icon/lib/icon/IconSpinner';

import { ThemeContext } from '../../theme';

import styles from './WorkspaceContentActivityOverlay.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String determining which activity variant to render.
   */
  variant: PropTypes.oneOf(['default', 'loading']),
};

const defaultProps = {
  variant: 'default',
};

const WorkspaceContentActivityOverlay = ({ variant }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div
      className={cx('activity-overlay', theme.className)}
      role="status"
      data-testid="workspace-content-activity-overlay"
    >
      <div className={cx('content')}>
        <IconSpinner className={cx('icon')} isSpin height="36" width="36" />
        {variant === 'loading' ? (
          <FormattedMessage id="terraApplication.workspace.activityOverlay.loading">
            {loadingMessage => (
              <div className={cx('message')}>{loadingMessage}</div>
            )}
          </FormattedMessage>
        ) : undefined }
      </div>
    </div>
  );
};

WorkspaceContentActivityOverlay.propTypes = propTypes;
WorkspaceContentActivityOverlay.defaultProps = defaultProps;

export default WorkspaceContentActivityOverlay;
