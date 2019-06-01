/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import { MemoryRouter, withRouter } from 'react-router-dom';
import { injectIntl, intlShape } from 'react-intl';
import Image from 'terra-image';
import Avatar from 'terra-avatar';
import ContentContainer from 'terra-content-container';
import Button from 'terra-button';

import ApplicationLayout, { RoutingMenu, Utils } from '../../../ApplicationLayout';

const PageContent = ({ contentName }) => (
  <div>
    Page Content:
    {' '}
    {contentName}
  </div>
);
PageContent.propTypes = {
  contentName: PropTypes.string,
};

const TestExtensions = () => (
  <Button text="Extensions" />
);

/**
 * The routingConfig API matches that of the NavigationLayout. Routing specifications for the
 * menu and content regions are supported; the header region is not configurable.
 */
const routingConfig = {
  menu: {
    '/page_1': {
      path: '/page_1',
      component: {
        default: {
          componentClass: RoutingMenu,
          props: {
            title: 'Page 1 Menu',
            menuItems: [{
              text: 'Item 1',
              path: '/page_1/item_1',
              hasSubMenu: true,
            }, {
              text: 'Item 2',
              path: '/page_1/item_2',
            }],
          },
        },
      },
    },
    '/page_1/item_1': {
      path: '/page_1/item_1',
      component: {
        default: {
          componentClass: RoutingMenu,
          props: {
            title: 'Page 1 Item 1 Menu',
            menuItems: [{
              text: 'Thing 1',
              path: '/page_1/item_1/thing_1',
            }, {
              text: 'Thing 2',
              path: '/page_1/item_1/thing_2',
            }],
          },
        },
      },
    },
  },
  content: {
    '/page_1': {
      path: '/page_1',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Page 1',
          },
        },
      },
    },
    '/page_2': {
      path: '/page_2',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Page 2',
          },
        },
      },
    },
    '/page_3': {
      path: '/page_3',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Page 3',
          },
        },
      },
    },
    '/page_4': {
      path: '/page_4',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Page 4',
          },
        },
      },
    },
    '/page_5': {
      path: '/page_5',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Page 5',
          },
        },
      },
    },
    '/page_6': {
      path: '/page_6',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Page 6',
          },
        },
      },
    },
    '/page_7': {
      path: '/page_7',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Page 7',
          },
        },
      },
    },
  },
};

/**
 * The navigationItems will be used to present the ApplicationLayout's navigation controls. The paths provided here must be present in
 * the routingConfig. If no navigation controls are desired, these items can be omitted.
 *
 * With standard rendering, the items will be presented as tabs within the ApplicationLayout's header.
 * With compact rendering, the items will be presented within the layout's menu region within a ApplicationLayout-managed menu.
 */
const navigationItems = [{
  path: '/page_1',
  text: 'Page 1',
}, {
  path: '/page_2',
  text: 'Page 2',
}, {
  path: '/page_3',
  text: 'Page 3',
}, {
  path: '/page_4',
  text: 'Page 4',
}, {
  path: '/page_5',
  text: 'Page 5',
}, {
  path: '/page_6',
  text: 'Page 6',
}, {
  path: '/page_7',
  text: 'Page 7',
}];

/**
 * The indexPath will be given to the NavigationLayout to set up the appropriate redirects. If users attempt to navigate to a path unsupported
 * by the routingConfig, they will be redirected to this route. This path should therefore be present in the routingConfig.
 */
const indexPath = '/page_1';

const userAvatar = (
  <Avatar
    alt="User, Test"
    key="user_avatar"
  />
);

const userData = {
  name: 'User, Test',
  detail: 'User Detail',
  photo: userAvatar,
};

/**
 * The data provided for nameConfig will be visible in the ApplicationLayout's header, as well
 * as in any menus at the tiny and small breakpoints.
 */
const nameConfig = Object.freeze({
  title: 'Test Application',
  accessory: <Image variant="rounded" src="https://github.com/cerner/terra-framework/raw/master/terra.png" alt="App logo" height="26px" width="26px" />,
});

class ApplicationLayoutTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkboxItemEnabled: false,
    };
  }

  render() {
    const { intl } = this.props;
    const { checkboxItemEnabled } = this.state;

    const customUtilityItems = [{
      key: 'additional-1',
      title: 'Drill-in Item',
      childKeys: [
        'additional-sub-1',
        'additional-sub-2',
      ],
      parentKey: Utils.utilityHelpers.defaultKeys.MENU,
    }, {
      key: 'additional-sub-1',
      title: 'Additional Item 1 - Sub 1',
      parentKey: 'additional-1',
    }, {
      key: 'additional-sub-2',
      title: 'Additional Item 1 - Sub 2',
      parentKey: 'additional-1',
    }, {
      key: 'checkbox-item',
      title: 'Custom Checkbox Item',
      isSelectable: true,
      isSelected: checkboxItemEnabled,
      parentKey: Utils.utilityHelpers.defaultKeys.MENU,
    }, {
      key: 'read-only-item',
      title: 'Custom Read-Only Item',
      id: 'readonly',
      isReadOnly: true,
      parentKey: Utils.utilityHelpers.defaultKeys.MENU,
    }, {
      key: 'additional-3',
      contentLocation: Utils.utilityHelpers.locations.FOOTER,
      title: 'Custom Footer',
      parentKey: Utils.utilityHelpers.defaultKeys.MENU,
    }];

    /**
     * The data provided for utilityConfig will be visible in the ApplicationLayout's header in the
     * standard rendering mode and within the menus in the compact rendering mode.
     *
     * The ApplicationLayout's Utils export provides a helper function named getDefaultUtilityConfig that will
     * generate the configuration for the standard set of utility options. If the standard configuration is not
     * desirable, an entirely custom configuration can be used instead.
     */
    const utilityConfig = Object.freeze({
      title: 'Test, User',
      accessory: userAvatar,
      menuItems: Utils.utilityHelpers.getDefaultUtilityItems(intl, userData, customUtilityItems),
      initialSelectedKey: Utils.utilityHelpers.defaultKeys.MENU,
      onChange: () => {},
    });

    return (
      <ContentContainer
        fill
        id="application-layout-test"
      >
        <ApplicationLayout
          nameConfig={nameConfig}
          utilityConfig={utilityConfig}
          routingConfig={routingConfig}
          navigationItems={navigationItems}
          extensions={<TestExtensions />}
          indexPath={indexPath}
        />
      </ContentContainer>
    );
  }
}

ApplicationLayoutTest.propTypes = {
  intl: intlShape,
};

const WrappedApplication = withRouter(injectIntl((ApplicationLayoutTest)));

const AppRouter = () => (
  <div style={{ height: '100%' }}>
    <MemoryRouter>
      <WrappedApplication />
    </MemoryRouter>
  </div>
);

export default AppRouter;
