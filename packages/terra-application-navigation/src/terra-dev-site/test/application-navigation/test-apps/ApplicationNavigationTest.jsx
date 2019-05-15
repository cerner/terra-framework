/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import {
  withRouter, Redirect, matchPath, Switch, Route,
} from 'react-router-dom';
import Image from 'terra-image';
import { withActiveBreakpoint } from 'terra-application/lib/breakpoints';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconPill from 'terra-icon/lib/icon/IconPill';
import IconVisualization from 'terra-icon/lib/icon/IconVisualization';
import IconLightbulb from 'terra-icon/lib/icon/IconLightbulb';
import IconCalculator from 'terra-icon/lib/icon/IconCalculator';
import IconTrophy from 'terra-icon/lib/icon/IconTrophy';
import IconProjects from 'terra-icon/lib/icon/IconProjects';
import IconSpinner from 'terra-icon/lib/icon/IconSpinner';

import ApplicationNavigation from '../../../../ApplicationNavigation';
import ContentComponent from './ContentComponent';
import profileImage from './henry.jpg';
import heroImage from './hero.jpg';
import heroCloseupImage from './heroCloseup.jpg';
import desktopTitleImage from './desktop-title-img.png';
import { shouldRenderCompactNavigation } from '../../../../utils/helpers';

// const myRenderFunction = (props) => {
//   const {
//     text,
//     // hasCount,
//     // metaData,
//     // isActive,
//     notificationCount,
//   } = props;

//   return (
//     <div style={{
//       height: '60px',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: '0 10px',
//     }}
//     >
//       <span style={{ marginTop: '3px' }}>{text}</span>
//       <span>{notificationCount}</span>
//     </div>
//   );
// };

const singleTitleConfig = {
  title: 'Test Application',
};

const headlineTitleConfig = {
  title: 'Test Application',
  headline: 'Alfred Hitchcock Presents',
};

const sublineTitleConfig = {
  title: 'Test Application',
  subline: 'Powered by Human Suffering™',
};

const longTitleConfig = {
  title: 'Now this is a story all about how my life got flipped-turned upside down and I\'d like to take a minute just sit right there I\'ll tell you how I became the prince of a town called Bel Air',
  subline: 'In west Philadelphia born and raised on the playground was where I spent most of my days chillin\' out maxin\' relaxin\' all cool and all shootin some b-ball outside of the school',
};

const elementTitleConfig = {
  title: 'I\'M ONLY A DINOSAUR',
  element: <Image src={desktopTitleImage} style={{ height: 'auto', width: 'auto' }} />,
};

const titleConfigs = [
  singleTitleConfig,
  headlineTitleConfig,
  sublineTitleConfig,
  longTitleConfig,
  elementTitleConfig,
];

const navigationItems = [
  {
    key: '/page_1',
    text: 'Page 1',
    metaData: {
      test: 'data',
    },
  }, {
    key: '/page_2',
    text: 'Page 2',
  }, {
    key: '/page_3',
    text: 'Page 3Page 3Page 3Page 3Page 3Page 3Page 3Page 3Page 3Page 3',
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
    text: 'Page 7Page 7Page 7',
    metaData: {
      test: 'data',
    },
  },
];

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

const notifications = {
  '/page_3': 61,
  Pill: 1,
};

const notifications2 = {
  '/page_1': 1000,
  '/page_2': 1,
  '/page_3': 65,
  '/page_5': 6,
  Calculator: 2,
  Pill: 3,
};

const userConfig = {
  name: 'Test UserTest UserTest UserTest UserTest UserTest User',
  detail: 'Super Cool Person',
  initials: 'TU',
  imageSrc: profileImage,
};

const drawerMenuHero = <Image src={heroImage} variant="rounded" style={{ height: 'auto', width: '100%' }} />;
const utilityMenuHero = <Image src={heroCloseupImage} variant="rounded" style={{ height: 'auto', width: '100%' }} />;

const utilityItems = [{
  key: 'Custom Utility 1',
  text: 'Custom Utility 1',
  icon: <IconProjects />,
}, {
  key: 'Custom Utility 2',
  text: 'Custom Utility 2 - This is a long, long, long, long, long, long, long, long, long, long, long one',
  icon: <IconSpinner />,
}];

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

    this.state = {
      activeNavigationItemKey: undefined,
      useItems2: false,
      titleConfigIndex: 0,
    };
  }

  handleExtensionSelect(key, metaData) {
    if (key === 'Search') {
      this.setState(prevState => ({
        useItems2: !prevState.useItems2,
      }));
      return;
    }

    if (key === 'Pill') {
      this.setState(prevState => ({
        titleConfigIndex: (prevState.titleConfigIndex + 1) % titleConfigs.length,
      }));
      return;
    }

    if (key === 'Lightbulb') {
      document.documentElement.style.fontSize = '28px';
      return;
    }

    alert(`${key}-${JSON.stringify(metaData)}`); // eslint-disable-line no-alert
  }

  handleNavigationItemSelection(navigationItemKey) {
    const { history } = this.props;
    const { activeNavigationItemKey } = this.state;

    if (activeNavigationItemKey !== navigationItemKey) {
      history.push(navigationItemKey);
    }
  }

  render() {
    const {
      hideSettings,
      hideHelp,
      hideLogout,
      hideNavigationItems,
      hideUser,
      hideHero,
      activeBreakpoint,
    } = this.props;

    const { activeNavigationItem } = this.state;

    if (!activeNavigationItem) {
      return <Redirect to="/page_1" />;
    }

    let notificationsToUse = notifications;
    if (this.state.useItems2) {
      notificationsToUse = notifications2;
    }

    let hero = utilityMenuHero;
    if (shouldRenderCompactNavigation(activeBreakpoint)) {
      hero = drawerMenuHero;
    }

    return (
      <ApplicationNavigation
        // navigationRenderFunction={myRenderFunction}
        titleConfig={titleConfigs[this.state.titleConfigIndex]}
        extensionItems={extensionItems}
        onSelectExtensionItem={this.handleExtensionSelect}
        userConfig={!hideUser ? userConfig : undefined}
        hero={!hideHero ? hero : undefined}
        navigationItems={!hideNavigationItems ? navigationItems : undefined}
        activeNavigationItemKey={activeNavigationItem.key}
        onSelectNavigationItem={!hideNavigationItems ? this.handleNavigationItemSelection : null}
        onSelectSettings={!hideSettings ? () => { alert('Settings Selected'); } : null} // eslint-disable-line no-alert
        onSelectHelp={!hideHelp ? () => { alert('Help Selected'); } : null} // eslint-disable-line no-alert
        onSelectLogout={!hideLogout ? () => { alert('Logout Selected'); } : null} // eslint-disable-line no-alert
        utilityItems={utilityItems}
        onSelectUtilityItem={(key, metaData) => { alert(`${key}-${JSON.stringify(metaData)} Selected`); }} // eslint-disable-line no-alert
        notifications={notificationsToUse}
      >
        <Switch>
          <Route path="/page_1" render={() => <ContentComponent contentName="Page 1" numberOfParagraphs={1} />} />
          <Route path="/page_2" render={() => <ContentComponent contentName="Page 2" numberOfParagraphs={2} />} />
          <Route path="/page_3" render={() => <ContentComponent contentName="Page 3" numberOfParagraphs={3} />} />
          <Route path="/page_4" render={() => <ContentComponent contentName="Page 4" numberOfParagraphs={4} />} />
          <Route path="/page_5" render={() => <ContentComponent contentName="Page 5" numberOfParagraphs={5} />} />
          <Route path="/page_6" render={() => <ContentComponent contentName="Page 6" numberOfParagraphs={6} />} />
          <Route path="/page_7" render={() => <ContentComponent contentName="Page 7" numberOfParagraphs={7} />} />
        </Switch>
      </ApplicationNavigation>
    );
  }
}

ApplicationNavigationTest.propTypes = {
  history: PropTypes.object,
  hideLogout: PropTypes.bool,
  hideSettings: PropTypes.bool,
  hideHelp: PropTypes.bool,
  hideNavigationItems: PropTypes.bool,
  hideUser: PropTypes.bool,
  hideHero: PropTypes.bool,
  activeBreakpoint: PropTypes.string,
};

export default withActiveBreakpoint(withRouter((ApplicationNavigationTest)));
