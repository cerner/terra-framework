import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import DynamicOverlayContainer from 'terra-application/lib/workspace/shared/DynamicOverlayContainer';

import PageHeader from './PageHeader';
import PageActions from './PageActions';
import PageAction from './PageAction';

import styles from './Page.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The string description of the Page to present to the user. This value is
   * also used to build description text for screen readers and accessibility
   * tools.
   */
  label: PropTypes.string.isRequired,
  /**
   * A PageActions instance defining the Actions to present within the Page's
   * header. Only the PageActions component is supported.
   */
  actions: PropTypes.element,
  /**
   * A function to be executed upon selection of the Page's back button. If not
   * provided, the back button will not be rendered.
   */
  onRequestClose: PropTypes.func,
  /**
   * A react element to render inside an activity overlay, for example when loading.
   */
  activityOverlay: PropTypes.element,
  /**
  * A react element to render to display statues, for example a 404.
  */
  statusOverlay: PropTypes.element,
  /**
   * The components to render within the Page.
   */
  children: PropTypes.node,
};

const Page = ({
  label,
  actions,
  onRequestClose,
  children,
  statusOverlay,
  activityOverlay,
}) => {
  if (actions && actions.type !== PageActions) {
    throw new Error(`[terra-application] Page.Actions must be used to define actions for ${label}.`);
  }

  const theme = React.useContext(ThemeContext);

  // If onRequestClose is provided, we check for unsaved changes prior to
  // executing the callback (unless explicitly disabled).
  const handleOnSelectBack = onRequestClose ? () => {
    onRequestClose();
  } : undefined;

  const pageClassNames = cx(
    'page',
    theme.className,
  );

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
    <div className={pageClassNames}>
      <div className={cx('header')}>
        <PageHeader
          onSelectBack={handleOnSelectBack}
          label={label}
          actions={actions}
        />
      </div>
      <div className={cx('content')}>
        <DynamicOverlayContainer
          overlays={overlays}
        >
          {children}
        </DynamicOverlayContainer>
      </div>
    </div>
  );
};

Page.propTypes = propTypes;
Page.Actions = PageActions;
Page.Action = PageAction;

export default Page;
