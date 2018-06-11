import React from 'react';
import PropTypes from 'prop-types';
import { MemoryRouter, withRouter } from 'react-router-dom';
import { injectIntl, intlShape } from 'react-intl';
import Image from 'terra-image';
import Avatar from 'terra-avatar';
import ContentContainer from 'terra-content-container';

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import ApplicationLayout, { Utils } from 'terra-application-layout/lib/ApplicationLayout';
import ApplicationContent from 'terra-application-layout/lib/terra-dev-site/doc/common/ApplicationContent';
import ApplicationMenu from 'terra-application-layout/lib/terra-dev-site/doc/common/ApplicationMenu';
import UtilityOption from 'terra-application-layout/lib/terra-dev-site/doc/common/UtilityOption';
import ApplicationExtensions from 'terra-application-layout/lib/terra-dev-site/doc/common/ApplicationExtensions';
import ProfilePicture from 'terra-application-layout/lib/terra-dev-site/doc/common/henry.jpg';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

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
          componentClass: ApplicationMenu,
          props: {
            baseUrl: '/page_1',
            menuName: 'Page 1 Menu',
            includeNestedMenu: true,
          },
        },
      },
    },
    '/page_1/nested': {
      path: '/page_1/nested',
      component: {
        default: {
          componentClass: ApplicationMenu,
          props: {
            baseUrl: '/page_1/nested',
            menuName: 'Nested Menu',
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
          componentClass: ApplicationContent,
          props: {
            basePath: '/page_1',
            contentName: 'Page 1',
          },
        },
      },
    },
    '/page_2': {
      path: '/page_2',
      component: {
        default: {
          componentClass: ApplicationContent,
          props: {
            basePath: '/page_2',
            contentName: 'Page 2',
            noMenu: true,
          },
        },
      },
    },
    '/page_3': {
      path: '/page_3',
      component: {
        default: {
          componentClass: ApplicationContent,
          props: {
            basePath: '/page_3',
            contentName: 'Page 3',
            showDummyContent: true,
          },
        },
      },
    },
    '/page_4': {
      path: '/page_4',
      component: {
        default: {
          componentClass: ApplicationContent,
          props: {
            basePath: '/page_4',
            contentName: 'Page 4',
            showDummyContent: true,
          },
        },
      },
    },
    '/page_5': {
      path: '/page_5',
      component: {
        default: {
          componentClass: ApplicationContent,
          props: {
            basePath: '/page_5',
            contentName: 'Page 5',
            showDummyContent: true,
          },
        },
      },
    },
    '/page_6': {
      path: '/page_6',
      component: {
        default: {
          componentClass: ApplicationContent,
          props: {
            basePath: '/page_6',
            contentName: 'Page 6',
            showDummyContent: true,
          },
        },
      },
    },
    '/page_7': {
      path: '/page_7',
      component: {
        default: {
          componentClass: ApplicationContent,
          props: {
            basePath: '/page_7',
            contentName: 'Page 7',
            showDummyContent: true,
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

/**
 * Any component type can be used for the userData photo; however, the Avatar is an appropriate choice.
 */
const userAvatar = (
  <Avatar
    image={ProfilePicture}
    variant="user"
    alt="Swanson, Henry"
    ariaLabel="Swanson, Henry"
    key="user_avatar"
  />
);

/**
 * The userData information will be used to construct the User Information utility menu item that is created by
 * the default utility configuration generated by `getDefaultUtilityItems`.
 */
const userData = {
  name: 'Swanson, Henry',
  detail: 'Henry Swanson\'s my name, and excitement\'s my game.',
  photo: userAvatar,
};

/**
 * The data provided for nameConfig will be visible in the ApplicationLayout's header, as well
 * as in any menus at the tiny and small breakpoints.
 */
const nameConfig = Object.freeze({
  title: 'Example Application',
  accessory: <Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" />,
});

class ExampleApplication extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkboxItemEnabled: false,
    };
  }

  render() {
    const { intl, location } = this.props;
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
      title: 'Swanson, Henry',
      accessory: userAvatar,
      menuItems: Utils.utilityHelpers.getDefaultUtilityItems(intl, userData, customUtilityItems),
      initialSelectedKey: Utils.utilityHelpers.defaultKeys.MENU,
      onChange: (event, itemData, disclose) => {
        /**
         * This function will be called when items are selected within the utility menu.
         * The disclose parameter is provided for convenience, but any presentation method
         * could be used to handle that menu content selection.
         */

        /**
         * For the checkbox item, we maintain its selection state locally and show no disclosure.
         */
        if (itemData.key === 'checkbox-item') {
          this.setState({
            checkboxItemEnabled: !checkboxItemEnabled,
          });
          return;
        }

        /**
         * For everything else, we can present a custom modal component for that content.
         */
        disclose({
          preferredType: 'modal',
          size: 'small',
          content: {
            key: itemData.key,
            component: <UtilityOption name={itemData.key} />,
          },
        });
      },
    });

    return (
      <ContentContainer
        fill
        header={<h3>{`Router Location: ${location.pathname}`}</h3>}
      >
        <ApplicationLayout
          nameConfig={nameConfig}
          utilityConfig={utilityConfig}
          routingConfig={routingConfig}
          navigationItems={navigationItems}
          extensions={<ApplicationExtensions />}
          indexPath={indexPath}
        />
      </ContentContainer>
    );
  }
}

ExampleApplication.propTypes = {
  intl: intlShape,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

const WrappedApplication = withRouter(injectIntl((ExampleApplication)));

const AppRouter = () => (
  <div style={{ height: '100%' }}>
    <MemoryRouter>
      <WrappedApplication />
    </MemoryRouter>
  </div>
);

export default AppRouter;
