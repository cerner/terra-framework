/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import {
  withRouter, Redirect, matchPath, Switch, Route,
} from 'react-router-dom';
import { injectIntl, intlShape } from 'react-intl';
import Image from 'terra-image';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-action-header';
import { withDisclosureManager } from 'terra-disclosure-manager';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconPill from 'terra-icon/lib/icon/IconPill';
import IconVisualization from 'terra-icon/lib/icon/IconVisualization';
import IconLightbulb from 'terra-icon/lib/icon/IconLightbulb';
import IconCalculator from 'terra-icon/lib/icon/IconCalculator';
import IconTrophy from 'terra-icon/lib/icon/IconTrophy';

import ApplicationNavigation from '../../../../ApplicationNavigation';
import CommonContent from './CommonContent';
import profileImage from './henry.jpg';
import heroImage from './hero.jpg';

const DisclosureComponent = withDisclosureManager(({ disclosureManager, text }) => (
  <ContentContainer
    header={(
      <ActionHeader title="Disclosure Component" onBack={disclosureManager.goBack} onClose={disclosureManager.closeDisclosure} />
    )}
    fill
  >
    <div style={{ padding: '5px' }}>
      {text}
    </div>
  </ContentContainer>
));

// const Extensions = withDisclosureManager(withActiveBreakpoint(({ disclosureManager, activeBreakpoint }) => (
//   <span>
//     <Button
//       style={{ marginRight: '5px' }}
//       text={activeBreakpoint === 'tiny' || activeBreakpoint === 'small' ? 'E1' : 'Extension 1'}
//       onClick={() => {
//         disclosureManager.disclose({
//           preferredType: 'modal',
//           content: {
//             component: <DisclosureComponent text="Extensions Go Here" />,
//           },
//         });
//       }}
//     />
//     <Button
//       text={activeBreakpoint === 'tiny' || activeBreakpoint === 'small' ? 'E2' : 'Extension 2'}
//       onClick={() => {
//         disclosureManager.disclose({
//           preferredType: 'modal',
//           content: {
//             component: <DisclosureComponent text="Extensions Go Here" />,
//           },
//         });
//       }}
//     />
//   </span>
// )));

/**
 * The navigationItems will be used to present the ApplicationLayout's navigation controls. The paths provided here must be present in
 * the routingConfig. If no navigation controls are desired, these items can be omitted.
 *
 * With standard rendering, the items will be presented as tabs within the ApplicationLayout's header.
 * With compact rendering, the items will be presented within the layout's menu region within a ApplicationLayout-managed menu.
 */
const navigationItems = [{
  key: '/page_1',
  text: 'Page 1',
}, {
  key: '/page_2',
  text: 'Page 2',
}, {
  key: '/page_3',
  text: 'Page 3',
}, {
  key: '/page_4',
  text: 'Page 4',
}, {
  key: '/page_5',
  text: 'Page 5',
}, {
  key: '/page_6',
  text: 'Page 6',
}, {
  key: '/page_7',
  text: 'Page 7',
}];

/**
 * The data provided for nameConfig will be visible in the ApplicationLayout's header, as well
 * as in any menus at the tiny and small breakpoints.
 */
const nameConfig = Object.freeze({
  title: 'Test Application',
  accessory: <Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" />,
});

class TestApplication extends React.Component {
  static getActiveNavigationItem(location) {
    for (let i = 0, numberOfNavigationItems = navigationItems.length; i < numberOfNavigationItems; i += 1) {
      if (matchPath(location.pathname, navigationItems[i].key)) {
        return navigationItems[i];
      }
    }

    return undefined;
  }

  static getDerivedStateFromProps(newProps) {
    return {
      activeNavigationItem: TestApplication.getActiveNavigationItem(newProps.location, newProps.navigationItems),
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      activeNavigationItem: undefined,
    };
  }

  render() {
    const {
      intl, history, location, disclosureManager,
    } = this.props;
    const { activeNavigationItem } = this.state;

    if (!activeNavigationItem) {
      return <Redirect to="/page_1" />;
    }

    const handleSelect = (event, metaData) => {
      disclosureManager.disclose({
        preferredType: 'modal',
        content: {
          component: <DisclosureComponent text={metaData.key} />,
        },
      });
    };

    const extensionConfig = {
      extensions: [
        {
          image: <IconSearch />,
          metaData: { key: 'Search' },
          onSelect: handleSelect,
          text: '0',
        },
        {
          image: <IconPill />,
          metaData: { key: 'Pill' },
          onSelect: handleSelect,
          text: '1',
        },
        {
          image: <IconVisualization />,
          metaData: { key: 'Visualization' },
          onSelect: handleSelect,
          text: '2',
        },
        {
          image: <IconLightbulb />,
          metaData: { key: 'Lightbulb' },
          onSelect: handleSelect,
          text: '3',
        },
        {
          image: <IconCalculator />,
          metaData: { key: 'Calculator' },
          onSelect: handleSelect,
          text: '4',
        },
        {
          image: <IconTrophy />,
          metaData: { key: 'Trophy' },
          onSelect: handleSelect,
          text: '5',
        },
      ],
    };

    return (
      <ApplicationNavigation
        nameConfig={nameConfig}
        extensionConfig={extensionConfig}
        userConfig={{
          name: 'Test User',
          detail: 'Super Cool Person',
          initials: 'TU',
          image: profileImage,
        }}
        menuHeroConfig={{
          component: <Image src={heroImage} variant="rounded" style={{ height: '150px', width: '100%' }} />,
          padded: true,
        }}
        utilityHeroConfig={{
          component: <Image src={heroImage} variant="rounded" style={{ height: '150px', width: '100%' }} />,
          padded: true,
        }}
        navigationItems={navigationItems}
        activeNavigationItemKey={activeNavigationItem.key}
        onSelectNavigationItem={(navigationItemKey) => {
          if (this.state.activeNavigationItem !== navigationItemKey) {
            history.push(navigationItemKey);
          }
        }}
        onSelectSettings={() => {
          disclosureManager.disclose({
            preferredType: 'modal',
            content: {
              key: 'settings-component',
              component: <DisclosureComponent text="Settings" />,
            },
          });
        }}
        onSelectHelp={() => {
          disclosureManager.disclose({
            preferredType: 'modal',
            content: {
              key: 'help-component',
              component: <DisclosureComponent text="Help" />,
            },
          });
        }}
        onSelectLogout={() => {
          disclosureManager.disclose({
            preferredType: 'modal',
            content: {
              key: 'logout-component',
              component: <DisclosureComponent text="Logout" />,
            },
          });
        }}
      >
        <Switch>
          <Route path="/page_1" render={() => <CommonContent contentName="Page 1" />} />
          <Route path="/page_2" render={() => <CommonContent contentName="Page 2" />} />
          <Route path="/page_3" render={() => <CommonContent contentName="Page 3" />} />
          <Route path="/page_4" render={() => <CommonContent contentName="Page 4" />} />
          <Route path="/page_5" render={() => <CommonContent contentName="Page 5" />} />
          <Route path="/page_6" render={() => <CommonContent contentName="Page 6" />} />
          <Route path="/page_7" render={() => <CommonContent contentName="Page 7" />} />
        </Switch>
      </ApplicationNavigation>
    );
  }
}

TestApplication.propTypes = {
  intl: intlShape,
};

export default withDisclosureManager(withRouter(injectIntl((TestApplication))));
