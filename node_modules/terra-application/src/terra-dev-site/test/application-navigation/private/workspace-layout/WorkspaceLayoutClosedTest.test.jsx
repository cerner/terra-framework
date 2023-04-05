import React from 'react';
import PropTypes from 'prop-types';
import ApplicationNavigation, {
  ApplicationNavigationActionsContext,
} from 'terra-application/lib/application-navigation';
import { WorkspaceContent } from 'terra-application/lib/workspace';
import WorkspaceLayout from 'terra-application/lib/application-navigation/private/workspace-layout/WorkspaceLayout';

const PageContent = ({ title }) => {
  const actionsContext = React.useContext(ApplicationNavigationActionsContext);

  return (
    <div data-nav-test-content>
      <p>{title}</p>
      <p>
        Layout Actions:
        {' '}
        {actionsContext.actions && actionsContext.actions.map((action, index) => (
          <button
            id={`test-action-id-${index}`}
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
  );
};

PageContent.propTypes = {
  title: PropTypes.string,
};

const Tab1 = () => (
  <WorkspaceContent>
    <p id="test-workspace-0">Example Workspace Content 1</p>
  </WorkspaceContent>
);

const Tab2 = () => (
  <WorkspaceContent>
    <p id="test-workspace-1">Example Workspace Content 2</p>
  </WorkspaceContent>
);

const workspace = (
  <ApplicationNavigation.Workspace
    id="application-workspace-example"
    initialActiveItemKey="tab-1"
    initialSize={{ scale: 0.50 }}
    onActiveItemChange={(newActiveItemKey) => {
      console.log(`Workspace active item: ${newActiveItemKey}`); // eslint-disable-line no-console
    }}
    onSizeChange={(size) => {
      console.log(`Workspace size changed: ${size}`); // eslint-disable-line no-console
    }}
    onPresentationStateChange={(isPresented) => {
      console.log(`Workspace presentation changed. isOpen - ${isPresented}`); // eslint-disable-line no-console
    }}
  >
    <ApplicationNavigation.Workspace.Item
      itemKey="tab-1"
      label="Tab 1"
      metaData={{ key: 'tab-1' }}
      render={() => <Tab1 />}
    />
    <ApplicationNavigation.Workspace.Item
      itemKey="tab-2"
      label="Tab 2"
      metaData={{ key: 'tab-2' }}
      render={() => <Tab2 />}
    />
  </ApplicationNavigation.Workspace>
);

const WorkspaceLayoutTest = () => {
  const actionRef = React.useRef();
  const [isToggleEnabled, setIsToggleEnabled] = React.useState(false);

  return (
    <WorkspaceLayout
      id="workspace-layout-test"
      workspace={workspace}
      skipToCallback={(actionFunc) => {
        actionRef.current = actionFunc;
        setIsToggleEnabled(!!actionRef.current);
      }}
    >
      <PageContent
        title="Main Content Region"
        action={isToggleEnabled ? () => actionRef.current() : null}
      />
    </WorkspaceLayout>
  );
};

export default WorkspaceLayoutTest;
