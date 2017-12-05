import React from 'react';
import PropTypes from 'prop-types';
import Image from 'terra-image';
import IconSettings from 'terra-icon/lib/icon/IconSettings';
import Header from 'terra-application-header-layout';
import classNames from 'classnames/bind';
import NavTabs from './common/nav-tabs/NavTabs';
import Utility from './common/header-templates/Utility';
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
      <Utility.ItemGroup key="site-bidi" isSelectable dir="ltr" size="medium" onChange={this.props.onDirChange}>
        <Utility.Item id="ltr" text="ltr" key="ltr" isSelected={this.props.dir === 'ltr'} />
        <Utility.Item id="rtl" text="rtl" key="rtl" isSelected={this.props.dir === 'rtl'} />
      </Utility.ItemGroup>
    );

    const localeContent = (
      <Utility.Item
        text={`Locale: ${this.props.locale}`}
        key="locale"
        subMenuItems={[
          <Utility.ItemGroup isSelectable key="local-options" onChange={this.props.onLocaleChange} >
            <Utility.Item id="en" text="en" key="en" isSelected={this.props.locale === 'en'} />
            <Utility.Item id="en-GB" text="en-GB" key="en-GB" isSelected={this.props.locale === 'en-GB'} />
            <Utility.Item id="en-US" text="en-US" key="en-US" isSelected={this.props.locale === 'en-US'} />
            <Utility.Item id="de" text="de" key="de" isSelected={this.props.locale === 'de'} />
            <Utility.Item id="es" text="es" key="es" isSelected={this.props.locale === 'es'} />
            <Utility.Item id="fr" text="fr" key="fr" isSelected={this.props.locale === 'fr'} />
            <Utility.Item id="pt" text="pt" key="pt" isSelected={this.props.locale === 'pt'} />
            <Utility.Item id="fi-FI" text="fi-FI" key="fi-FI" isSelected={this.props.locale === 'fi-FI'} />
          </Utility.ItemGroup>,
        ]}
      />
    );

    let themeSwitcher;

    function supportsCSSVars() {
      return window.CSS && window.CSS.supports && window.CSS.supports('(--fake-var: 0)');
    }

    if (supportsCSSVars()) {
      themeSwitcher = (
        <Utility.Item
          text={`Theme: ${this.props.theme}`}
          key="theme"
          subMenuItems={[
            <Utility.ItemGroup isSelectable key="theme-options" onChange={this.props.onThemeChange} >
              <Utility.Item id="Default Theme" text="Default Theme" key="default" isSelected={this.props.theme === 'Default Theme'} />
              <Utility.Item id="Consumer Theme" text="Consumer Theme" key="consumer" isSelected={this.props.theme === 'Consumer Theme'} />
              <Utility.Item id="Mock Theme" text="Mock Theme" key="mock" isSelected={this.props.theme === 'Mock Theme'} />
            </Utility.ItemGroup>,
          ]}
        />
      );
    } else {
      themeSwitcher = <div />;
    }

    const utility = (
      <Utility
        accessory={<IconSettings />}
        title={'Config'}
        menuItems={[themeSwitcher, localeContent, <Utility.Divider key="DIVIDER-1" />, bidiContent]}
      />
    );

    let navTabs;
    if (this.props.navigation && !isCompactHeader) {
      navTabs = <NavTabs links={this.props.navigation.links} />;
    }

    return (
      <Header
        className={cx(['header'])}
        layoutConfig={this.props.layoutConfig}
        logo={(
          <Logo
            title="Terra"
            subtitle="Framework"
            accessory={<Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" isFluid />}
          />
        )}
        utilities={utility}
        navigation={navTabs}
        toggle={<Toggle />}
      />
    );
  }
}

ApplicationHeader.propTypes = propTypes;

export default ApplicationHeader;
