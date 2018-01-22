import React from 'react';
import PropTypes from 'prop-types';
import Image from 'terra-image';
import IconSettings from 'terra-icon/lib/icon/IconSettings';
import Header from 'terra-application-header-layout';
import { ApplicationTabs } from 'terra-application-links';
import classNames from 'classnames/bind';
import HeaderUtility from './common/header-templates/Utility';
import Logo from './common/header-templates/Logo';
import Toggle from './ApplicationToggle';

import styles from './ApplicationHeader.scss';

const cx = classNames.bind(styles);

const propTypes = {
  layoutConfig: PropTypes.object,
  navigation: PropTypes.object,

  locale: PropTypes.string,
  onLocaleChange: PropTypes.func,

  dir: PropTypes.string,
  onDirChange: PropTypes.func,

  theme: PropTypes.string,
  onThemeChange: PropTypes.func,
};

class ApplicationHeader extends React.Component {
  render() {
    const isCompactHeader = (this.props.layoutConfig.size === 'tiny' || this.props.layoutConfig.size === 'small');

    const bidiContent = (
      <HeaderUtility.ItemGroup key="site-bidi" isSelectable dir="ltr" size="medium" onChange={this.props.onDirChange}>
        <HeaderUtility.Item id="ltr" text="ltr" key="ltr" isSelected={this.props.dir === 'ltr'} />
        <HeaderUtility.Item id="rtl" text="rtl" key="rtl" isSelected={this.props.dir === 'rtl'} />
      </HeaderUtility.ItemGroup>
    );

    const locales = ['en', 'en-GB', 'en-US', 'de', 'es', 'fr', 'pt', 'fi-FI'];
    const localeContent = (
      <HeaderUtility.Item
        text={`Locale: ${this.props.locale}`}
        key="locale"
        subMenuItems={[
          <HeaderUtility.ItemGroup isSelectable key="local-options" onChange={this.props.onLocaleChange} >
            {locales.map(locale => <HeaderUtility.Item id={locale} text={locale} key={locale} isSelected={this.props.locale === locale} />)}
          </HeaderUtility.ItemGroup>,
        ]}
      />
    );

    let themeSwitcher;

    function supportsCSSVars() {
      return window.CSS && window.CSS.supports && window.CSS.supports('(--fake-var: 0)');
    }

    if (supportsCSSVars()) {
      themeSwitcher = (
        <HeaderUtility.Item
          text={`Theme: ${this.props.theme}`}
          key="theme"
          subMenuItems={[
            <HeaderUtility.ItemGroup isSelectable key="theme-options" onChange={this.props.onThemeChange} >
              <HeaderUtility.Item id="Default Theme" text="Default Theme" key="default" isSelected={this.props.theme === 'Default Theme'} />
              <HeaderUtility.Item id="Consumer Theme" text="Consumer Theme" key="consumer" isSelected={this.props.theme === 'Consumer Theme'} />
              <HeaderUtility.Item id="Mock Theme" text="Mock Theme" key="mock" isSelected={this.props.theme === 'Mock Theme'} />
            </HeaderUtility.ItemGroup>,
          ]}
        />
      );
    } else {
      themeSwitcher = <div />;
    }

    const utility = (
      <HeaderUtility
        accessory={<IconSettings />}
        title={'Config'}
        menuItems={[themeSwitcher, localeContent, <HeaderUtility.Divider key="DIVIDER-1" />, bidiContent]}
        size={this.props.layoutConfig.size}
      />
    );

    let navTabs;
    if (this.props.navigation && !isCompactHeader) {
      navTabs = <ApplicationTabs links={this.props.navigation.links} />;
    }

    return (
      <Header
        className={cx(['header'])}
        logo={(
          <Logo
            title="Terra"
            subtitle="Framework"
            accessory={<Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" isFluid />}
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
