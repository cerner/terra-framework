/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import {
  withRouter, Redirect, matchPath, Switch, Route,
} from 'react-router-dom';
import { DisclosureManager } from 'terra-application';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconPill from 'terra-icon/lib/icon/IconPill';
import IconVisualization from 'terra-icon/lib/icon/IconVisualization';
import IconLightbulb from 'terra-icon/lib/icon/IconLightbulb';
import IconCalculator from 'terra-icon/lib/icon/IconCalculator';
import IconTrophy from 'terra-icon/lib/icon/IconTrophy';
import IconProjects from 'terra-icon/lib/icon/IconProjects';
import IconTable from 'terra-icon/lib/icon/IconTable';

import ApplicationNavigation from '../../../../ApplicationNavigation';
import ContentComponent from './ContentComponent';
import DisclosureComponent from './DisclosureComponent';

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
}];

const userConfig = {
  name: 'User, Test',
  detail: 'Test Location',
  initials: 'TU',
};

const utilityItems = [{
  key: 'Custom Utility 1',
  text: 'Custom Utility 1',
  icon: <IconProjects />,
}, {
  key: 'Custom Utility 2',
  text: 'Custom Utility 2',
  icon: <IconTable />,
}];

class ApplicationNavigationDemo extends React.Component {
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
      activeNavigationItem: ApplicationNavigationDemo.getActiveNavigationItem(newProps.location),
    };
  }

  constructor(props) {
    super(props);

    this.handleExtensionSelect = this.handleExtensionSelect.bind(this);
    this.handleNavigationItemSelection = this.handleNavigationItemSelection.bind(this);
    this.handleSettingsSelection = this.handleSettingsSelection.bind(this);
    this.handleHelpSelection = this.handleHelpSelection.bind(this);
    this.handleLogoutSelection = this.handleLogoutSelection.bind(this);
    this.handleCustomUtilitySelection = this.handleCustomUtilitySelection.bind(this);

    this.state = {
      activeNavigationItemKey: undefined,
      useItems2: false,
    };
  }

  handleExtensionSelect(key, metaData) {
    if (key === 'Search') {
      this.setState(prevState => ({
        useItems2: !prevState.useItems2,
      }));
      return;
    }

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

  handleCustomUtilitySelection(utilityItemKey) {
    const { disclosureManager } = this.props;

    disclosureManager.disclose({
      preferredType: 'modal',
      size: 'small',
      content: {
        key: utilityItemKey,
        component: <DisclosureComponent text={utilityItemKey} />,
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
    } = this.props;

    const { activeNavigationItem } = this.state;

    if (!activeNavigationItem) {
      return <Redirect to="/page_1" />;
    }

    const extensionItems = [
      {
        icon: <IconSearch />,
        metaData: { key: 'Search' },
        text: 'Search',
        key: 'Search',
      },
      {
        icon: <IconPill />,
        metaData: { key: 'Pill' },
        text: 'Pill',
        key: 'Pill',
      },
      {
        icon: <IconVisualization />,
        metaData: { key: 'Visualization' },
        text: 'Visualization',
        key: 'Visualization',
      },
      {
        icon: <IconLightbulb />,
        metaData: { key: 'Lightbulb' },
        text: 'Lightbulb',
        key: 'Lightbulb',
      },
      {
        icon: <IconCalculator />,
        metaData: { key: 'Calculator' },
        text: 'Calculator',
        key: 'Calculator',
      },
      {
        icon: <IconTrophy />,
        metaData: { key: 'Trophy' },
        text: 'Trophy',
        key: 'Trophy',
      },
    ];

    return (
      <ApplicationNavigation
        title="Test Application"
        extensionItems={extensionItems}
        onSelectExtensionItem={this.handleExtensionSelect}
        userConfig={!hideUser ? userConfig : undefined}
        navigationItems={!hideNavigationItems ? navigationItems : undefined}
        activeNavigationItemKey={activeNavigationItem.key}
        onSelectNavigationItem={!hideNavigationItems ? this.handleNavigationItemSelection : null}
        onSelectSettings={!hideSettings ? this.handleSettingsSelection : undefined}
        onSelectHelp={!hideHelp ? this.handleHelpSelection : undefined}
        onSelectLogout={!hideLogout ? this.handleLogoutSelection : undefined}
        utilityItems={utilityItems}
        onSelectUtilityItem={this.handleCustomUtilitySelection}
      >
        <Switch>
          <Route path="/page_1" render={() => <ContentComponent contentName="Page 1" numberOfParagraphs={1} />} />
          <Route path="/page_2" render={() => <ContentComponent contentName="Page 2" numberOfParagraphs={2} />} />
          <Route path="/page_3" render={() => <ContentComponent contentName="Page 3" numberOfParagraphs={3} />} />
          <Route path="/page_4" render={() => <ContentComponent contentName="Page 4" numberOfParagraphs={4} />} />
          <Route path="/page_5" render={() => <ContentComponent contentName="Page 5" numberOfParagraphs={5} />} />
        </Switch>
      </ApplicationNavigation>
    );
  }
}

ApplicationNavigationDemo.propTypes = {
  disclosureManager: DisclosureManager.disclosureManagerShape,
  history: PropTypes.object,
  hideLogout: PropTypes.bool,
  hideSettings: PropTypes.bool,
  hideHelp: PropTypes.bool,
  hideNavigationItems: PropTypes.bool,
  hideUser: PropTypes.bool,
};

export default DisclosureManager.withDisclosureManager(withRouter((ApplicationNavigationDemo)));
