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
  /**
   * Sets focus on content when set to `true`.
   */
  setFocusOnContent: PropTypes.bool,
};

const CommonTabContent = ({
  children,
  statusOverlay,
  activityOverlay,
  variant,
  setFocusOnContent,
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
      className={cx('panel', { 'panel-padding': variant === 'workspace' }, theme.className)}
      role="none"
    >
      <div
        className={cx('panel-header', { 'panel-header-padding': variant === 'workspace' })}
        role="none"
        data-testid="workspace-content-heading"
      />
      <div role="none" className={cx('panel-content')}>
        <div
          className={cx('panel-overflow', { 'disable-overflow': overlays.length })}
          role="tabpanel"
          tabIndex={setFocusOnContent ? 0 : -1}
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
