import React, { useState } from 'react';
import classNames from 'classnames/bind';
import ApplicationNavigation, {
  ApplicationNavigationActionsContext,
} from 'terra-application/lib/application-navigation';
import { WorkspaceContent, WorkspaceContext } from 'terra-application/lib/workspace';
import NotificationBanner from 'terra-application/lib/notification-banner';
import Button from 'terra-button';
import Toolbar from 'terra-toolbar';

import styles from './WorkspaceContentHowToExample.module.scss';

const cx = classNames.bind(styles);

const MyContent1 = () => {
  const { isActive } = React.useContext(WorkspaceContext);

  React.useEffect(() => {
    if (isActive) {
      // add listeners

      return () => {
        // remove listeners
      };
    }

    return undefined;
  }, [isActive]);

  return (
    <WorkspaceContent
      toolbar={(
        <Toolbar>
          <Button text="Action 1" onClick={() => {}} />
          <Button text="Action 2" onClick={() => {}} />
        </Toolbar>
      )}
    >
      <div>
        <p>Example Content 1</p>
      </div>
    </WorkspaceContent>
  );
};

const MyContent2 = () => {
  const [showAlertBanner, setShowAlertBanner] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasNoResults, setHasNoResults] = React.useState(false);

  return (
    <WorkspaceContent
      activityOverlay={isLoading ? (
        <WorkspaceContent.ActivityOverlay variant="loading" />
      ) : undefined}
      statusOverlay={hasNoResults ? (
        <WorkspaceContent.StatusOverlay variant="no-matching-results" />
      ) : undefined}
    >
      <div>
        <p>Example Content 2</p>
        <button type="button" onClick={() => { setShowAlertBanner(true); }}>Show Alert Banner</button>
        <button type="button" onClick={() => { setIsLoading(true); }}>Show Activity Overlay</button>
        <button type="button" onClick={() => { setHasNoResults(true); }}>Show Status Overlay</button>
      </div>
      {showAlertBanner && (
        <NotificationBanner
          variant="hazard-high"
          id="my-component-notification-id"
          onRequestClose={() => setShowAlertBanner(false)}
        />
      )}
    </WorkspaceContent>
  );
};

MyContent2.labelTranslationId = 'myNamespace.myContent2.label';

const WorkspaceContentHowToExample = () => {
  const [activeNavigationItem, setActiveNavigationItem] = useState('page_1');

  const workspace = (
    <ApplicationNavigation.Workspace
      id="application-workspace-example"
      initialActiveItemKey="item-1"
      initialSize={{ scale: 0.5 }}
      initialIsOpen
    >
      <ApplicationNavigation.Workspace.Item
        itemKey="item-1"
        label="Item 1"
        render={() => <MyContent1 />}
      />
      <ApplicationNavigation.Workspace.Item
        itemKey="item-2"
        label="Item 2"
        render={() => <MyContent2 />}
      />
    </ApplicationNavigation.Workspace>
  );

  return (
    <div className={cx('example-container')}>
      <ApplicationNavigation
        titleConfig={{
          title: 'Create Workspace Content ',
          headline: 'How To',
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
            </div>
          )}
        </ApplicationNavigationActionsContext.Consumer>
      </ApplicationNavigation>
    </div>
  );
};

export default WorkspaceContentHowToExample;
