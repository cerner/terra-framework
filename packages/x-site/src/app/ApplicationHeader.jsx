import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'terra-menu';
import IconSettings from 'terra-icon/lib/icon/IconSettings';

import Toolbar from './common/toolbar/Toolbar';
import Logo from './common/toolbar/Logo';
import Utility from './common/toolbar/Utility';
import NavTabs from './common/toolbar/NavTabs';

const propTypes = {
  layoutConfig: PropTypes.object,
  navigation: PropTypes.object,

  title: PropTypes.string,
  subtitle: PropTypes.string,
  /**
   * Logo element to be placed at the start of the toolbar.
   * */
  logo: PropTypes.element,

  locale: PropTypes.string,
  locales: PropTypes.array,
  onLocaleChange: PropTypes.func,

  hideBidiUtility: PropTypes.bool,

  dir: PropTypes.string,
  onDirChange: PropTypes.func,

  theme: PropTypes.string,
  themes: PropTypes.array,
  onThemeChange: PropTypes.func,
};

class ApplicationHeader extends React.Component {
  render() {
    const isCompactHeader = (this.props.layoutConfig.size === 'tiny' || this.props.layoutConfig.size === 'small');
    const menuItems = [];

    function supportsCSSVars() {
      return window.CSS && window.CSS.supports && window.CSS.supports('(--fake-var: 0)');
    }

    if (this.props.themes && this.props.themes.length > 1 && supportsCSSVars()) {
      menuItems.push(
        <Menu.Item
          text={`Theme: ${this.props.theme}`}
          key="theme-utility"
          subMenuItems={[
            <Menu.ItemGroup isSelectable key="theme-options" onChange={this.props.onThemeChange} >
              {this.props.themes.map(themeName => (
                <Menu.Item id={themeName} text={themeName} key={themeName} isSelected={this.props.theme === themeName} />
              ))}
            </Menu.ItemGroup>,
          ]}
        />,
      );
    }

    if (this.props.locales && this.props.locales.length > 1) {
      menuItems.push(
        <Menu.Item
          text={`Locale: ${this.props.locale}`}
          key="locale-utility"
          subMenuItems={[
            <Menu.ItemGroup isSelectable key="local-options" onChange={this.props.onLocaleChange} >
              {this.props.locales.map(localeName => (
                <Menu.Item id={localeName} text={localeName} key={localeName} isSelected={this.props.locale === localeName} />
              ))}
            </Menu.ItemGroup>,
          ]}
        />,
      );
    }

    if (!this.props.hideBidiUtility) {
      menuItems.push(
        <Menu.Divider key="utility-divider" />,
        <Menu.ItemGroup key="bidi-utility" isSelectable dir="ltr" size="medium" onChange={this.props.onDirChange}>
          <Menu.Item id="ltr" text="ltr" key="ltr" isSelected={this.props.dir === 'ltr'} />
          <Menu.Item id="rtl" text="rtl" key="rtl" isSelected={this.props.dir === 'rtl'} />
        </Menu.ItemGroup>,
      );
    }

    let utility;
    if (menuItems.length > 0) {
      utility = (
        <Utility
          accessory={<IconSettings />}
          title="Config"
          menuItems={menuItems}
        />
      );
    }

    let navTabs;
    if (this.props.navigation && !isCompactHeader) {
      navTabs = <NavTabs links={this.props.navigation.links} />;
    }

    return (
      <Toolbar
        layoutConfig={this.props.layoutConfig}
        logo={(
          <Logo
            title={this.props.title}
            subtitle={this.props.subtitle}
            accessory={this.props.logo}
          />
        )}
        utility={utility}
        content={navTabs}
      />
    );
  }
}

ApplicationHeader.propTypes = propTypes;

export default ApplicationHeader;
