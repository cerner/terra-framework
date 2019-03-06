/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import {
  withRouter, Redirect, matchPath, Switch, Route,
} from 'react-router-dom';
import Image from 'terra-image';
import { DisclosureManager } from 'terra-application';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconPill from 'terra-icon/lib/icon/IconPill';
import IconVisualization from 'terra-icon/lib/icon/IconVisualization';
import IconLightbulb from 'terra-icon/lib/icon/IconLightbulb';
import IconCalculator from 'terra-icon/lib/icon/IconCalculator';
import IconTrophy from 'terra-icon/lib/icon/IconTrophy';

import ApplicationNavigation from '../../../../ApplicationNavigation';
import ContentComponent from './ContentComponent';
import DisclosureComponent from './DisclosureComponent';
import profileImage from './henry.jpg';
import heroImage from './hero.jpg';
import heroCloseupImage from './heroCloseup.jpg';

const navigationItems = [{
  key: '/page_1',
  text: 'Page 1',
  notificationCount: 1000,
}, {
  key: '/page_2',
  text: 'Page 2',
}, {
  key: '/page_3',
  text: 'Page 3Page 3Page 3Page 3Page 3Page 3Page 3Page 3Page 3Page 3',
  notificationCount: 62,
}, {
  key: '/page_4',
  text: 'Page 4',
}, {
  key: '/page_5',
  text: 'Page 5',
  notificationCount: 5,
}, {
  key: '/page_6',
  text: 'Page 6',
}, {
  key: '/page_7',
  text: 'Page 7Page 7Page 7',
}];

/**
 * The data provided for nameConfig will be visible in the ApplicationLayout's header, as well
 * as in any menus at the tiny and small breakpoints.
 */
const nameConfig = Object.freeze({
  title: 'Test Application',
  accessory: <Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" />,
});

const userConfig = {
  name: 'Test User',
  detail: 'Super Cool Person',
  initials: 'TU',
  imageSrc: profileImage,
};

const menuHeroConfig = {
  component: <Image src={heroImage} variant="rounded" style={{ height: '150px', width: '100%' }} />,
  removeContainerPadding: false,
};

const utilityHeroConfig = {
  component: <Image src={heroCloseupImage} variant="rounded" style={{ height: '100px', width: '100%' }} />,
  removeContainerPadding: false,
};

class ApplicationNavigationTest extends React.Component {
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
      activeNavigationItem: ApplicationNavigationTest.getActiveNavigationItem(newProps.location),
    };
  }

  constructor(props) {
    super(props);

    this.handleExtensionSelect = this.handleExtensionSelect.bind(this);
    this.handleNavigationItemSelection = this.handleNavigationItemSelection.bind(this);
    this.handleSettingsSelection = this.handleSettingsSelection.bind(this);
    this.handleHelpSelection = this.handleHelpSelection.bind(this);
    this.handleLogoutSelection = this.handleLogoutSelection.bind(this);

    this.state = {
      activeNavigationItemKey: undefined,
    };
  }

  handleExtensionSelect(event, metaData) {
    const { disclosureManager } = this.props;

    disclosureManager.disclose({
      preferredType: 'modal',
      content: {
        component: <DisclosureComponent text={metaData.key} />,
      },
    });
  }

  handleNavigationItemSelection(navigationItemKey) {
    const { history } = this.props;
    const { activeNavigationItemKey } = this.state;

    if (activeNavigationItemKey !== navigationItemKey) {
      history.push(navigationItemKey);
    }
  }

  handleSettingsSelection() {
    const { disclosureManager } = this.props;

    disclosureManager.disclose({
      preferredType: 'modal',
      size: 'small',
      content: {
        key: 'settings-component',
        component: <DisclosureComponent text="Settings" />,
      },
    });
  }

  handleHelpSelection() {
    const { disclosureManager } = this.props;

    disclosureManager.disclose({
      preferredType: 'modal',
      size: 'small',
      content: {
        key: 'help-component',
        component: <DisclosureComponent text="Help" />,
      },
    });
  }

  handleLogoutSelection() {
    const { disclosureManager } = this.props;

    disclosureManager.disclose({
      preferredType: 'modal',
      size: 'small',
      content: {
        key: 'logout-component',
        component: <DisclosureComponent text="Logout" />,
      },
    });
  }

  render() {
    const {
      hideSettings,
      hideHelp,
      hideLogout,
      hideNavigationItems,
      hideUser,
      hideHero,
    } = this.props;

    const { activeNavigationItem } = this.state;

    if (!activeNavigationItem) {
      return <Redirect to="/page_1" />;
    }

    const extensionConfig = {
      extensions: [
        {
          image: <IconSearch />,
          metaData: { key: 'Search' },
          onSelect: this.handleExtensionSelect,
          text: 'Search',
        },
        {
          image: <IconPill />,
          metaData: { key: 'Pill' },
          onSelect: this.handleExtensionSelect,
          text: 'Pill',
          notificationCount: 100,
        },
        {
          image: <IconVisualization />,
          text: 'Visualization',
          type: 'popup',
          content: <div>Im a Popup</div>,
        },
        {
          image: <IconLightbulb />,
          metaData: { key: 'Lightbulb' },
          onSelect: this.handleExtensionSelect,
          text: 'Lightbulb',
        },
        {
          image: <IconCalculator />,
          metaData: { key: 'Calculator' },
          onSelect: this.handleExtensionSelect,
          text: 'Calculator',
        },
        {
          image: <IconTrophy />,
          metaData: { key: 'Trophy' },
          onSelect: this.handleExtensionSelect,
          text: 'Trophy',
          notificationCount: 5,
        },
      ],
    };

    return (
      <ApplicationNavigation
        nameConfig={nameConfig}
        extensionConfig={extensionConfig}
        userConfig={!hideUser ? userConfig : undefined}
        menuHeroConfig={!hideHero ? menuHeroConfig : undefined}
        utilityHeroConfig={!hideHero ? utilityHeroConfig : undefined}
        navigationItems={!hideNavigationItems ? navigationItems : undefined}
        activeNavigationItemKey={activeNavigationItem.key}
        onSelectNavigationItem={!hideNavigationItems ? this.handleNavigationItemSelection : null}
        onSelectSettings={!hideSettings ? this.handleSettingsSelection : undefined}
        onSelectHelp={!hideHelp ? this.handleHelpSelection : undefined}
        onSelectLogout={!hideLogout ? this.handleLogoutSelection : undefined}
      >
        <Switch>
          <Route path="/page_1" render={() => <ContentComponent contentName="Page 1" />} />
          <Route path="/page_2" render={() => <ContentComponent contentName="Page 2" />} />
          <Route path="/page_3" render={() => <ContentComponent contentName="Page 3" />} />
          <Route path="/page_4" render={() => <ContentComponent contentName="Page 4" />} />
          <Route path="/page_5" render={() => <ContentComponent contentName="Page 5" />} />
          <Route path="/page_6" render={() => <ContentComponent contentName="Page 6" />} />
          <Route path="/page_7" render={() => <ContentComponent contentName="Page 7" />} />
        </Switch>
      </ApplicationNavigation>
    );
  }
}

ApplicationNavigationTest.propTypes = {
  disclosureManager: DisclosureManager.disclosureManagerShape,
  history: PropTypes.object,
  hideLogout: PropTypes.bool,
  hideSettings: PropTypes.bool,
  hideHelp: PropTypes.bool,
  hideNavigationItems: PropTypes.bool,
  hideUser: PropTypes.bool,
  hideHero: PropTypes.bool,
};

export default DisclosureManager.withDisclosureManager(withRouter((ApplicationNavigationTest)));
