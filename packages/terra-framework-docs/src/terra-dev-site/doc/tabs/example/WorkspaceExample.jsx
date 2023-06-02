/* eslint-disable react/jsx-first-prop-new-line */
import React from 'react';
import Workspace from 'terra-tabs/src/Workspace';
import classNamesBind from 'classnames/bind';
import WorkspaceItem from 'terra-tabs/src/WorkspaceItem';
import styles from 'terra-tabs/src/Workspace.module.scss';
import IconSettings from 'terra-icon/lib/icon/IconSettings';
import IconSearch from 'terra-icon/lib/icon/IconSearch';

const cx = classNamesBind.bind(styles);

const WorkspaceExample = () => {
  const [activeItemKey, setActiveItemKey] = React.useState('tab-1');

  return (
    <Workspace
      id="test-id"
      activeItemKey={activeItemKey}
      onRequestActivate={key => setActiveItemKey(key)}
      activeSize={workspaceSize}
      variant="framework"
    >
      <WorkspaceItem
        itemKey="tab-1"
        label="Tab 1"
        icon={<IconSettings />}
        isIconOnly
        render={() => (
          <div role="none" className={cx('panel-content')}>
            <div role="none">
              <div
                role="tabpanel"
                tabIndex="0"
                id="test-id-tab-1-panel"
                aria-labelledby="test-id-tab-1"
                data-application-overflow-container
              >
                <div>
                  <p>Tab 1 Content</p>
                  <p>
                    Users need to know what is going on, and get appropriate feedback during interaction.
                    For example, users need confirmation messages when actions are completed, such as when forms are submitted.
                    Also, error messages must provide clear directions rather than confuse users.
                    People with some cognitive and learning disabilities, who may be easily confused by unexpected behavior and unclear error messages. People with partial sight and blindness, who rely on notifications, instructions, and errors messages to understand the context and interactions.
                    Content is more usable for people who are new to the particular website or application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      />
      <WorkspaceItem
        itemKey="tab-2"
        label="Tab 2"
        customDisplay={(
          <div id="customDisplayContent">
            <span className={cx('custom-display-content')}>
              Custom Display
            </span>
            <IconSettings />
          </div>
            )}
        render={() => (
          <div role="none" className={cx('panel-content')}>
            <div role="none">
              <div
                role="tabpanel"
                tabIndex="0"
                id="test-id-tab-2-panel"
                aria-labelledby="test-id-tab-2"
                data-application-overflow-container
              >
                <div>
                  <p>Tab 2 Content</p>
                  <p>
                    Content for Custom display
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      />
      <WorkspaceItem
        itemKey="tab-3"
        label="Tab 3"
        icon={<IconSearch />}
        render={() => (
          <div role="none" className={cx('panel-content')}>
            <div role="none">
              <div
                role="tabpanel"
                tabIndex="0"
                id="test-id-tab-3-panel"
                aria-labelledby="test-id-tab-3"
                data-application-overflow-container
              >
                <div>
                  <p>Tab 3 Content</p>
                  <p>
                    Donec ornare nisi ut lectus luctus, vitae venenatis tellus molestie. Quisque augue ante, pulvinar eget ullamcorper eget, pharetra in est. Aenean urna turpis, lobortis in egestas eu, blandit eget sapien. Suspendisse vitae iaculis justo. Sed ex turpis, ultrices ut lobortis a, vestibulum a tortor. Nullam ut risus ex. Duis condimentum dui sem, interdum porttitor lectus scelerisque nec. Curabitur suscipit felis in porta molestie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      />
      <WorkspaceItem
        itemKey="tab-4"
        label="Tab 4"
        render={() => (
          <div role="none" className={cx('panel-content')}>
            <div role="none">
              <div
                role="tabpanel"
                tabIndex="0"
                id="test-id-tab-4-panel"
                aria-labelledby="test-id-tab-4"
                data-application-overflow-container
              >
                <div>
                  <p>Tab 4 Content</p>
                  <p>
                    Etiam non malesuada urna. Vivamus posuere orci augue, nec egestas mauris cursus blandit. Maecenas eu nisl sed nulla venenatis tincidunt. Donec at cursus sapien, nec scelerisque nibh. Vivamus suscipit consequat ex, id feugiat nisl iaculis id. Pellentesque tristique sodales turpis. Cras rutrum nibh laoreet libero dictum, quis condimentum arcu porttitor. Donec ac aliquam orci. Vestibulum luctus sed mi tincidunt volutpat. Mauris ut neque pellentesque, volutpat ex vel, efficitur massa. Phasellus hendrerit mattis semper. Morbi mi nulla, tincidunt at auctor euismod, viverra at libero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      />
      <WorkspaceItem
        itemKey="tab-5"
        label="Tab 5"
        render={() => (
          <div role="none" className={cx('panel-content')}>
            <div
              className={cx('panel-overflow')}
              role="tabpanel"
              tabIndex="0"
              id="test-id-tab-5-panel"
              aria-labelledby="test-id-tab-5"
              data-application-overflow-container
            >
              <div>
                <p>Tab 5 Content</p>
                <p>
                  Maecenas aliquam congue augue sed tristique. Vivamus eu consectetur sapien, in eleifend magna. Etiam laoreet ligula eu fermentum tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed magna nunc, tempor vitae sagittis eu, vulputate ac lorem. Etiam massa ante, aliquam ac consequat et, efficitur dictum turpis. Integer malesuada purus in lobortis ornare. In hac habitasse platea dictumst. Aliquam finibus ipsum quis nibh volutpat, a posuere mi vestibulum. Cras tincidunt odio et aliquet mollis. Ut ac felis neque. Integer nulla elit, mattis eleifend dui pretium, euismod tristique nulla. Curabitur vulputate viverra odio, vitae blandit est dapibus eu.
                </p>
              </div>
            </div>
          </div>
        )}
      />
      <WorkspaceItem
        itemKey="tab-6"
        label="Tab 6"
        render={() => (
          <div role="none" className={cx('panel-content')}>
            <div role="none">
              <div
                role="tabpanel"
                tabIndex="0"
                id="test-id-tab-6-panel"
                aria-labelledby="test-id-tab-6"
                data-application-overflow-container
              >
                <div>
                  <p>Tab 6 Content</p>
                  <p>
                    Maecenas aliquam congue augue sed tristique. Vivamus eu consectetur sapien, in eleifend magna. Etiam laoreet ligula eu fermentum tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed magna nunc, tempor vitae sagittis eu, vulputate ac lorem. Etiam massa ante, aliquam ac consequat et, efficitur dictum turpis. Integer malesuada purus in lobortis ornare. In hac habitasse platea dictumst. Aliquam finibus ipsum quis nibh volutpat, a posuere mi vestibulum. Cras tincidunt odio et aliquet mollis. Ut ac felis neque. Integer nulla elit, mattis eleifend dui pretium, euismod tristique nulla. Curabitur vulputate viverra odio, vitae blandit est dapibus eu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      />
    </Workspace>
  );
};

export default WorkspaceExample;
