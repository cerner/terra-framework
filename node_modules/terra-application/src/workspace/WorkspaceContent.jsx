import React from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import useNotificationBanners from '../notification-banner/private/useNotificationBanners';

import ActivityOverlay from './overlays/WorkspaceContentActivityOverlay';
import StatusOverlay from './overlays/WorkspaceContentStatusOverlay';

import DynamicOverlayContainer from './shared/DynamicOverlayContainer';
import TabContext from './subcomponents/_TabContext';
import TabHeader from './subcomponents/_TabHeader';
import styles from './WorkspaceContent.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Child node content to be displayed within the content region.
   */
  children: PropTypes.node,
  /**
   * Text to be displayed as the title of the workspace content.
   * Special Note: this prop is optional and should be used with caution. If this prop is not provided, the workspace content title is injected by default using the label specified in `WorkspaceItem` _(recommended without additional guidance)_. Providing this prop will override the default text and will need to follow proper accessibility guidelines.
   */
  label: PropTypes.string,
  /**
   * Optional toolbar to be displayed outside of the content region.
   */
  toolbar: PropTypes.element,
  /**
   * A WorkspaceContent.StatusOverlay component instance to be rendered on top of the provided children.
   */
  statusOverlay: PropTypes.element,
  /**
   * A WorkspaceContent.ActivityOverlay component instance to be rendered on top of the provided children.
   */
  activityOverlay: PropTypes.element,
};

const WorkspaceContent = ({
  children,
  label,
  toolbar,
  statusOverlay,
  activityOverlay,
}) => {
  const theme = React.useContext(ThemeContext);
  const { panelId, tabId, label: tabLabel } = React.useContext(TabContext);
  const { NotificationBannerProvider, NotificationBanners } = useNotificationBanners();

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

  const labelDisplay = label || tabLabel;
  return (
    <div
      className={cx('panel', theme.className)}
      role="none"
    >
      <div
        className={cx('panel-header')}
        role="none"
        data-testid="workspace-content-heading"
      >
        <TabHeader title={labelDisplay} />
        { toolbar ? (
          <div className={cx('toolbar', 'rounded')}>
            {toolbar}
          </div>
        ) : undefined}
        <NotificationBanners
          id={`${panelId}-notifications`}
          label={`Workspace ${labelDisplay}`}
          activeClassName={cx('notification-banners-container')}
          bannerClassName={cx('notification-banner', 'rounded')}
        />
      </div>
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
            <NotificationBannerProvider>
              {children}
            </NotificationBannerProvider>
          </DynamicOverlayContainer>
        </div>
      </div>
    </div>
  );
};

WorkspaceContent.propTypes = propTypes;

WorkspaceContent.StatusOverlay = StatusOverlay;
WorkspaceContent.ActivityOverlay = ActivityOverlay;

export default WorkspaceContent;
