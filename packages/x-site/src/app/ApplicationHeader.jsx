import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconSettings from 'terra-icon/lib/icon/IconSettings';
import Header from 'terra-application-header-layout';

import HeaderUtility from './common/header-templates/Utility';
import Logo from './common/header-templates/Logo';
import NavTabs from './common/nav-tabs/NavTabs';
import Toggle from './ApplicationToggle';

import styles from './ApplicationHeader.scss';

const cx = classNames.bind(styles);

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
        <HeaderUtility.Item
          text={`Theme: ${this.props.theme}`}
          key="theme-utility"
          subMenuItems={[
            <HeaderUtility.ItemGroup isSelectable key="theme-options" onChange={this.props.onThemeChange} >
              {this.props.themes.map(themeName => (
                <HeaderUtility.Item id={themeName} text={themeName} key={themeName} isSelected={this.props.theme === themeName} />
              ))}
            </HeaderUtility.ItemGroup>,
          ]}
        />,
      );
    }

    if (this.props.locales && this.props.locales.length > 1) {
      menuItems.push(
        <HeaderUtility.Item
          text={`Locale: ${this.props.locale}`}
          key="locale-utility"
          subMenuItems={[
            <HeaderUtility.ItemGroup isSelectable key="local-options" onChange={this.props.onLocaleChange} >
              {this.props.locales.map(localeName => (
                <HeaderUtility.Item id={localeName} text={localeName} key={localeName} isSelected={this.props.locale === localeName} />
              ))}
            </HeaderUtility.ItemGroup>,
          ]}
        />,
      );
    }

    if (!this.props.hideBidiUtility) {
      menuItems.push(
        <HeaderUtility.Divider key="utility-divider" />,
        <HeaderUtility.ItemGroup key="bidi-utility" isSelectable dir="ltr" size="medium" onChange={this.props.onDirChange}>
          <HeaderUtility.Item id="ltr" text="ltr" key="ltr" isSelected={this.props.dir === 'ltr'} />
          <HeaderUtility.Item id="rtl" text="rtl" key="rtl" isSelected={this.props.dir === 'rtl'} />
        </HeaderUtility.ItemGroup>,
      );
    }

    let utility;
    if (menuItems.length > 0) {
      utility = (
        <HeaderUtility
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
      <Header
        className={cx(['header'])}
        logo={(
          <Logo
            title={this.props.title}
            subtitle={this.props.subtitle}
            accessory={this.props.logo}
            size={this.props.layoutConfig.size}
          />
        )}
        utilities={utility}
        navigation={navTabs}
        toggle={<Toggle layoutConfig={this.props.layoutConfig} />}
      />
    );
  }
}

ApplicationHeader.propTypes = propTypes;

export default ApplicationHeader;
