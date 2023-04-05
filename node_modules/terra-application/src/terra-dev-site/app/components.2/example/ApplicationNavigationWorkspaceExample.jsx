import React, { useState } from 'react';
import classNames from 'classnames/bind';
import ApplicationNavigation, {
  ApplicationNavigationActionsContext,
} from 'terra-application/lib/application-navigation';
import { WorkspaceContent } from 'terra-application/lib/workspace';
import NotificationBanner from 'terra-application/lib/notification-banner';
import Button from 'terra-button';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconAttachment from 'terra-icon/lib/icon/IconAttachment';
import Toolbar from 'terra-toolbar';

import styles from './ApplicationNavigationExample.module.scss';

const cx = classNames.bind(styles);

// Content to be rendered within the workspace must be rendered using the
// WorkspaceContent component. For this example, we define two components to
// represent both simple and complex scenarios.

const WorkspaceContent1 = () => (
  <WorkspaceContent>
    <div className={cx('workspace-content')}>
      <p>Example Workspace Content 1</p>
    </div>
  </WorkspaceContent>
);

const WorkspaceContent2 = () => (
  <WorkspaceContent
    toolbar={(
      <Toolbar>
        <Button text="Button 1" variant="utility" icon={<IconEdit />} />
        <Button text="Button 2" variant="utility" icon={<IconAdd />} />
        <Button text="Button 3" variant="utility" icon={<IconAttachment />} />
      </Toolbar>
    )}
  >
    <div className={cx('workspace-content')}>
      <p>Example Workspace Content 2</p>
    </div>
    <NotificationBanner variant="hazard-low" description="Example Notification" />
  </WorkspaceContent>
);

const ApplicationNavigationWorkspaceExample = () => {
  const [activeNavigationItem, setActiveNavigationItem] = useState('page_1');
  const [loggedOut, setLoggedOut] = useState(false);

  // For the purposes of this example, the state changes reported through the
  // ApplicationNavigation.Workspace's callbacks are recorded and presented to the
  // user. In most cases, usage of these callbacks is not necessary. However, if
  // you wish to persist the current state and reapply it upon next load (using
  // the 'initial' props), these callbacks can be used to detect and respond to
  // changes in the ApplicationNavigation.Workspace's internal state.
  const [reportedWorkspaceActiveItem, setReportedWorkspaceActiveItem] = useState();
  const [reportedWorkspaceSize, setReportedWorkspaceSize] = useState();
  const [reportedWorkspaceVisibility, setReportedWorkspaceVisibility] = useState();

  const workspace = (
    <ApplicationNavigation.Workspace
      id="application-workspace-example"
      initialActiveItemKey="item-1"
      initialSize={{ scale: 0 }}
      initialIsOpen
      onActiveItemChange={(activeItem) => {
        setReportedWorkspaceActiveItem(activeItem);
      }}
      onSizeChange={(size) => {
        setReportedWorkspaceSize(size);
      }}
      onPresentationStateChange={(isPresented) => {
        setReportedWorkspaceVisibility(isPresented ? 'true' : 'false');
      }}
    >
      <ApplicationNavigation.Workspace.Item
        itemKey="item-1"
        label="Item 1"
        render={() => <WorkspaceContent1 />}
      />
      <ApplicationNavigation.Workspace.Item
        itemKey="item-2"
        label="Item 2"
        render={() => <WorkspaceContent2 />}
      />
    </ApplicationNavigation.Workspace>
  );

  return (
    <div className={cx('example-container')}>
      {loggedOut ? (
        <>
          <p>Logged Out</p>
          <button type="button" onClick={() => { setLoggedOut(false); }}>Reset</button>
        </>
      ) : (
        <ApplicationNavigation
          titleConfig={{
            title: 'ApplicationNavigation Example',
            subline: 'With Workspace',
          }}
          userConfig={{
            name: 'Example User',
            initials: 'EU',
          }}
          navigationItems={[{
            key: 'page_1',
            text: 'Page 1',
          }, {
            key: 'page_2',
            text: 'Page 2',
          }, {
            key: 'page_3',
            text: 'Page 3',
          }]}
          activeNavigationItemKey={activeNavigationItem}
          onSelectNavigationItem={(key) => { setActiveNavigationItem(key); }}
          onSelectLogout={() => { setLoggedOut(true); }}
          workspace={workspace}
        >
          <ApplicationNavigationActionsContext.Consumer>
            {({ actions = [] }) => (
              <div className={cx('page-content')}>
                <p>
                  Example Content for
                  {' '}
                  {activeNavigationItem}
                </p>
                <p>
                  Layout Actions:
                  {' '}
                  {actions.map(action => (
                    <button
                      key={action.key}
                      type="button"
                      onClick={action.onSelect}
                      aria-label={action.label}
                    >
                      {action.icon}
                    </button>
                  ))}
                </p>
                <p>
                  Last Reported Active Workspace Item:
                  {' '}
                  {reportedWorkspaceActiveItem}
                </p>
                <p>
                  Last Reported Workspace Size:
                  {' '}
                  {reportedWorkspaceSize}
                </p>
                <p>
                  Last Reported Workspace Visibility:
                  {' '}
                  {reportedWorkspaceVisibility}
                </p>
              </div>
            )}
          </ApplicationNavigationActionsContext.Consumer>
        </ApplicationNavigation>
      )}
    </div>
  );
};

export default ApplicationNavigationWorkspaceExample;
