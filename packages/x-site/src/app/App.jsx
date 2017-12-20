/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router-dom';

import Base from 'terra-base';
import Image from 'terra-image';
import i18nSupportedLocales from 'terra-i18n/lib/i18nSupportedLocales';
import ThemeProvider from 'terra-theme-provider';
import NavigationLayout from 'terra-navigation-layout';

import ApplicationHeader from './ApplicationHeader';
import './App.scss';

const propTypes = {
  appTitle: PropTypes.string,
  appSubtitle: PropTypes.string,
  appLogo: PropTypes.element,
  routeConfig: PropTypes.object.isRequired,
  navigation: PropTypes.object,
  themes: PropTypes.object,
  // we should check these values are contained in i18nSupportedLocales
  locales: PropTypes.array,
  hideBidiUtility: PropTypes.bool,
  defaultDir: PropTypes.string,
  defaultTheme: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

const defaultProps = {
  appTitle: 'Terra',
  appLogo: <Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" isFluid />,
  hideBidiUtility: false,
  defaultDir: 'ltr',
  defaultTheme: 'Default Theme',
  themes: {
    'Default Theme': '',
  },
  locales: i18nSupportedLocales,
};

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dir: props.defaultDir,
      locale,
      theme: props.defaultTheme,
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
    let applicationHeader;
    if (matchPath(this.props.location.pathname, '/site')) {
      applicationHeader = (
        <ApplicationHeader
          title={this.props.appTitle}
          subtitle={this.props.appSubtitle}
          logo={this.props.appLogo}
          locale={this.state.locale}
          locales={this.props.locales}
          onLocaleChange={this.handleLocaleChange}
          hideBidiUtility={this.props.hideBidiUtility}
          dir={this.state.dir}
          onDirChange={this.handleBidiChange}
          theme={this.state.theme}
          themes={Object.keys(this.props.themes)}
          onThemeChange={this.handleThemeChange}
          navigation={this.props.navigation}
        />
      );
    }

    return (
      <ThemeProvider id="site" themeName={this.props.themes[this.state.theme]} isGlobalTheme>
        <Base className="base" locale={this.state.locale}>
          <NavigationLayout
            header={applicationHeader}
            menuText="Menu"
            indexPath={this.props.navigation && this.props.navigation.index}
            config={this.props.routeConfig}
          />
        </Base>
      </ThemeProvider>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default withRouter(App);
