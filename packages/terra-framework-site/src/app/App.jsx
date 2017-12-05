/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router } from 'react-router-dom';
import Base from 'terra-base';
import ThemeProvider from 'terra-theme-provider';
import NavigationLayout from 'terra-navigation-layout';

import ApplicationHeader from './ApplicationHeader';
import './App.scss';

const propTypes = {
  routeConfig: PropTypes.object,
  navigation: PropTypes.object,
};

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const themes = {
  'Default Theme': '',
  'Mock Theme': 'cerner-mock-theme',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dir: 'ltr',
      locale,
      theme: 'Default Theme',
    };
    this.handleBidiChange = this.handleBidiChange.bind(this);
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.handleLocaleChange = this.handleLocaleChange.bind(this);
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

  render() {
    const applicationHeader = (
      <ApplicationHeader
        locale={this.state.locale}
        onLocaleChange={this.handleLocaleChange}
        dir={this.state.dir}
        onDirChange={this.handleBidiChange}
        theme={this.state.theme}
        onThemeChange={this.handleThemeChange}
        navigation={this.props.navigation}
      />
    );

    return (
      <Router>
        <ThemeProvider id="framework-site" themeName={themes[this.state.theme]} isGlobalTheme>
          <Base className="base" locale={this.state.locale}>
            <NavigationLayout
              header={applicationHeader}
              menuText="Menu"
              indexPath={this.props.navigation.index}
              config={this.props.routeConfig}
            />
          </Base>
        </ThemeProvider>
      </Router>
    );
  }
}

App.propTypes = propTypes;

export default App;
