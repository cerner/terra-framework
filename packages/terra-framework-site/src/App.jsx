/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route } from 'react-router-dom';
import Base from 'terra-base';
import ThemeProvider from 'terra-theme-provider';
import NavigationLayout from 'terra-navigation';
import ContentWrapper from 'terra-navigation/lib/wrappers/ContentWrapper';
import MenuWrapper from 'terra-navigation/lib/wrappers/MenuWrapper';

import ApplicationHeader from './ApplicationHeader';
import styles from './site.scss';

const propTypes = {
  children: PropTypes.node,
  config: PropTypes.object,
};

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const themes = {
  'Default Theme': '',
  'Consumer Theme': 'cerner-consumer-theme',
  'Mock Theme': 'cerner-mock-theme',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: window.innerWidth >= 768,
      dir: 'ltr',
      locale,
      theme: 'Default Theme',
    };
    this.handleBidiChange = this.handleBidiChange.bind(this);
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.handleLocaleChange = this.handleLocaleChange.bind(this);
    this.handleResetScroll = this.handleResetScroll.bind(this);
  }

  handleBidiChange(e) {
    document.getElementsByTagName('html')[0].setAttribute('dir', e.currentTarget.id);
    this.setState({ dir: e.currentTarget.id });
  }

  handleLocaleChange(e) {
    this.setState({ locale: e.currentTarget.id });
  }

  handleThemeChange(e) {
    this.setState({ theme: e.currentTarget.id });
  }

  handleResetScroll() {
    const element = document.getElementById('site-content-section');
    if (element && element.parentNode) {
      element.parentNode.scrollTop = 0;
    }
    if (window.innerWidth < 768) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    const applicationHeader = (
      <ApplicationHeader
        locale={this.state.locale}
        onLocaleChange={this.handleLocaleChange}
        dir={this.state.dir}
        onDirChange={this.handleBidiChange}
        theme={this.state.theme}
        onThemeChange={this.handleThemeChange}
      />
    );

    return (
      <Router>
        <Route
          render={() => (
            <ThemeProvider id="site-content-section" themeName={themes[this.state.theme]} isGlobalTheme>
              <Base style={{ height: '100%' }} locale={this.state.locale}>
                <NavigationLayout
                  header={applicationHeader}
                  menu={<MenuWrapper />}
                  menuText="Menu"
                  routeConfig={this.props.config}
                >
                  <ContentWrapper />
                </NavigationLayout>
              </Base>
            </ThemeProvider>
          )}
        />
      </Router>
    );
  }
}

App.propTypes = propTypes;

export default App;
