/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Base from 'terra-base';
import SlidePanel from 'terra-slide-panel';
import Image from 'terra-image';
import ContentContainer from 'terra-content-container';
import List from 'terra-list';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import ThemeProvider from 'terra-theme-provider';
import Menu from 'terra-menu';
import styles from './site.scss';

import NavigationLayout from 'terra-navigation';
import Toolbar from 'terra-navigation/lib/toolbar/Toolbar';
import Logo from 'terra-navigation/lib/toolbar/Logo';
import Utility from 'terra-navigation/lib/toolbar/Utility';

const propTypes = {
  children: PropTypes.node,
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
    this.handleToggleClick = this.handleToggleClick.bind(this);
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

  handleToggleClick() {
    this.setState({ isOpen: !this.state.isOpen });
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
    const bidiContent = (
      <Menu.ItemGroup key="site-bidi" isSelectable dir="ltr" size="medium" onChange={this.handleBidiChange}>
        <Menu.Item id="ltr" text="ltr" key="ltr" isSelected={this.state.dir === 'ltr'} />
        <Menu.Item id="rtl" text="rtl" key="rtl" isSelected={this.state.dir === 'rtl'} />
      </Menu.ItemGroup>
    );

    const localeContent = (
      <Menu.Item
        text={`Locale: ${this.state.locale}`}
        key="locale"
        menuWidth="160"
        shouldCloseOnClick={false}
        subMenuItems={[
          <Menu.ItemGroup isSelectable key="local-options" onChange={this.handleLocaleChange} >
            <Menu.Item id="en" text="en" key="en" isSelected={this.state.locale === 'en'} />
            <Menu.Item id="en-GB" text="en-GB" key="en-GB" isSelected={this.state.locale === 'en-GB'} />
            <Menu.Item id="en-US" text="en-US" key="en-US" isSelected={this.state.locale === 'en-US'} />
            <Menu.Item id="de" text="de" key="de" isSelected={this.state.locale === 'de'} />
            <Menu.Item id="es" text="es" key="es" isSelected={this.state.locale === 'es'} />
            <Menu.Item id="fr" text="fr" key="fr" isSelected={this.state.locale === 'fr'} />
            <Menu.Item id="pt" text="pt" key="pt" isSelected={this.state.locale === 'pt'} />
            <Menu.Item id="fi-FI" text="fi-FI" key="fi-FI" isSelected={this.state.locale === 'fi-FI'} />
          </Menu.ItemGroup>,
        ]}
      />
    );

    let themeSwitcher;

    function supportsCSSVars() {
      return window.CSS && window.CSS.supports && window.CSS.supports('(--fake-var: 0)');
    }

    if (supportsCSSVars()) {
      themeSwitcher = (
        <Menu.Item
          text={`Theme: ${this.state.theme}`}
          key="theme"
          menuWidth="160"
          shouldCloseOnClick={false}
          subMenuItems={[
            <Menu.ItemGroup isSelectable key="theme-options" onChange={this.handleThemeChange} >
              <Menu.Item id="Default Theme" text="Default Theme" key="default" isSelected={this.state.theme === 'Default Theme'} />
              <Menu.Item id="Consumer Theme" text="Consumer Theme" key="consumer" isSelected={this.state.theme === 'Consumer Theme'} />
              <Menu.Item id="Mock Theme" text="Mock Theme" key="mock" isSelected={this.state.theme === 'Mock Theme'} />
            </Menu.ItemGroup>,
          ]}
        />
      );
    } else {
      themeSwitcher = <div />;
    }

    const navHeader = (
      <div className={styles['site-nav-header']}>
        <Link onClick={this.handleResetScroll} to="/">Home</Link>
      </div>
    );

    const panelContent = (
      <ContentContainer header={navHeader} className={styles['site-panel']} fill>
        <List className={styles['site-nav']}>
          <List.Item content={<Link onClick={this.handleResetScroll} to="/layout">Layout</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/navigation">Navigation</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/tests">Tests</Link>} />
        </List>
      </ContentContainer>
    );

    // Moved Base to wrap the main content, as i18nProvider inserts an unstyled div that ruins layout if placed higher.
    // Might consider enablling styling for Base, or evaluate if multipe Bases are viable.
    const mainContent = (
      <ThemeProvider id="site-content-section" themeName={themes[this.state.theme]} isGlobalTheme>
        <Base className={styles['site-content']} locale={this.state.locale}>
          {this.props.children}
        </Base>
      </ThemeProvider>
    );

    const menuItems = [themeSwitcher, localeContent, <Menu.Divider />, bidiContent];
    const utility = (
      <Utility
        title={'Utilities'}
        menuItems={menuItems}
      />
    );

    const applicationHeader = (
      <Toolbar
        logo={(
          <Logo
            title="Terra"
            subtitle="Framework"
            accessory={<Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" isFluid />}
          />
        )}
        utility={utility}
      />
    );

    return (
      <Router>
        <Route
          render={() => (
            <NavigationLayout
              header={applicationHeader}
              menu={panelContent}
              menuText="Menu"
            >
              {mainContent}
            </NavigationLayout>
          )}
        />
      </Router>
    );
  }
}

App.propTypes = propTypes;

export default App;
