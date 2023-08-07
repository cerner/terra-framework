import React from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import ActivityOverlay from './CommonTabContentActivityOverlay';
import StatusOverlay from './CommonTabContentStatusOverlay';

import DynamicOverlayContainer from './DynamicOverlayContainer';
import TabContext from './_TabContext';
import styles from './CommonTabContent.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Child node content to be displayed within the content region.
   */
  children: PropTypes.node,
  /**
   * A CommonTabContent.StatusOverlay component instance to be rendered on top of the provided children.
   */
  statusOverlay: PropTypes.element,
  /**
   * A CommonTabContent.ActivityOverlay component instance to be rendered on top of the provided children.
   */
  activityOverlay: PropTypes.element,
  /**
   *  @private
   * The style to be applied to the tabs
   */
  variant: PropTypes.oneOf(['workspace', 'framework']),
};

const CommonTabContent = ({
  children,
  statusOverlay,
  activityOverlay,
  variant,
}) => {
  const theme = React.useContext(ThemeContext);
  const { panelId, tabId } = React.useContext(TabContext);

  const overlays = React.useMemo(() => {
    const overlaysToRender = [];

    if (statusOverlay) {
      overlaysToRender.push({
        key: 'status-overlay',
        component: statusOverlay,
      });
    }

    if (activityOverlay) {
      overlaysToRender.push({
        key: 'activity-overlay',
        component: activityOverlay,
      });
    }

    return overlaysToRender;
  }, [statusOverlay, activityOverlay]);

  return (
    <div
      className={variant === 'framework' ? undefined : cx('panel', theme.className)}
      role="none"
    >
      <div
        className={variant === 'framework' ? undefined : cx('panel-header')}
        role="none"
        data-testid="workspace-content-heading"
      />
      <div role="none" className={cx('panel-content')}>
        <div
          className={cx('panel-overflow', { 'disable-overflow': overlays.length })}
          role="tabpanel"
          tabIndex="0"
          id={panelId}
          aria-labelledby={tabId}
          data-application-overflow-container
        >
          <DynamicOverlayContainer overlays={overlays}>
            {children}
          </DynamicOverlayContainer>
        </div>
      </div>
    </div>
  );
};

CommonTabContent.propTypes = propTypes;

CommonTabContent.StatusOverlay = StatusOverlay;
CommonTabContent.ActivityOverlay = ActivityOverlay;

export default CommonTabContent;
