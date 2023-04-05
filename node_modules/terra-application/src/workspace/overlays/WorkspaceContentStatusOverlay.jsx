import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import StatusLayout from '../shared/StatusLayout';
import { ThemeContext } from '../../theme';

import WorkspaceContentStatusOverlayButton from './WorkspaceContentStatusOverlayButton';

import styles from './WorkspaceContentStatusOverlay.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The status variant indicating which messaging should be rendered.
   */
  variant: PropTypes.oneOf(['no-data', 'no-matching-results', 'not-authorized', 'error']),
  /**
   * The message to render within the overlay.
   */
  message: PropTypes.string,
  /**
   * The StatusOverlay.Button components to render within the status overlay.
   */
  children: (props, propName, componentName) => {
    if (props[propName]) {
      let errorString;
      React.Children.forEach(props[propName], (child) => {
        if (child.type !== WorkspaceContentStatusOverlayButton) {
          errorString = `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Child must be of type WorkspaceContent.StatusOverlay.Button.`;
        }
      });

      if (errorString) {
        return new Error(errorString);
      }
    }

    return null;
  },
};

const WorkspaceContentStatusOverlay = ({ variant, message, children }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div
      className={cx('status-overlay', theme.className)}
      role="status"
      data-testid="workspace-content-status"
    >
      <StatusLayout variant={variant} message={message}>
        {children}
      </StatusLayout>
    </div>
  );
};

WorkspaceContentStatusOverlay.propTypes = propTypes;

WorkspaceContentStatusOverlay.Button = WorkspaceContentStatusOverlayButton;

export default WorkspaceContentStatusOverlay;
