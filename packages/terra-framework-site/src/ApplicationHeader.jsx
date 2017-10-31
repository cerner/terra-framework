/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'terra-image';
import Menu from 'terra-menu';

import Toolbar from 'terra-navigation/lib/toolbar/Toolbar';
import Logo from 'terra-navigation/lib/toolbar/Logo';
import Utility from 'terra-navigation/lib/toolbar/Utility';

const propTypes = {
  layoutConfig: PropTypes.object,

  locale: PropTypes.string,
  onLocaleChange: PropTypes.func,

  dir: PropTypes.string,
  onDirChange: PropTypes.func,

  theme: PropTypes.string,
  onThemeChange: PropTypes.func,
};

class ApplicationHeader extends React.Component {
  render() {
    const bidiContent = (
      <Menu.ItemGroup key="site-bidi" isSelectable dir="ltr" size="medium" onChange={this.props.onDirChange}>
        <Menu.Item id="ltr" text="ltr" key="ltr" isSelected={this.props.dir === 'ltr'} />
        <Menu.Item id="rtl" text="rtl" key="rtl" isSelected={this.props.dir === 'rtl'} />
      </Menu.ItemGroup>
    );

    const localeContent = (
      <Menu.Item
        text={`Locale: ${this.props.locale}`}
        key="locale"
        menuWidth="160"
        shouldCloseOnClick={false}
        subMenuItems={[
          <Menu.ItemGroup isSelectable key="local-options" onChange={this.props.onLocaleChange} >
            <Menu.Item id="en" text="en" key="en" isSelected={this.props.locale === 'en'} />
            <Menu.Item id="en-GB" text="en-GB" key="en-GB" isSelected={this.props.locale === 'en-GB'} />
            <Menu.Item id="en-US" text="en-US" key="en-US" isSelected={this.props.locale === 'en-US'} />
            <Menu.Item id="de" text="de" key="de" isSelected={this.props.locale === 'de'} />
            <Menu.Item id="es" text="es" key="es" isSelected={this.props.locale === 'es'} />
            <Menu.Item id="fr" text="fr" key="fr" isSelected={this.props.locale === 'fr'} />
            <Menu.Item id="pt" text="pt" key="pt" isSelected={this.props.locale === 'pt'} />
            <Menu.Item id="fi-FI" text="fi-FI" key="fi-FI" isSelected={this.props.locale === 'fi-FI'} />
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
          text={`Theme: ${this.props.theme}`}
          key="theme"
          menuWidth="160"
          shouldCloseOnClick={false}
          subMenuItems={[
            <Menu.ItemGroup isSelectable key="theme-options" onChange={this.props.onThemeChange} >
              <Menu.Item id="Default Theme" text="Default Theme" key="default" isSelected={this.props.theme === 'Default Theme'} />
              <Menu.Item id="Consumer Theme" text="Consumer Theme" key="consumer" isSelected={this.props.theme === 'Consumer Theme'} />
              <Menu.Item id="Mock Theme" text="Mock Theme" key="mock" isSelected={this.props.theme === 'Mock Theme'} />
            </Menu.ItemGroup>,
          ]}
        />
      );
    } else {
      themeSwitcher = <div />;
    }

    const utility = (
      <Utility
        title={'Utilities'}
        menuItems={[themeSwitcher, localeContent, <Menu.Divider key="DIVIDER-1" />, bidiContent]}
      />
    );

    return (
      <Toolbar
        layoutConfig={this.props.layoutConfig}
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
  }
}

ApplicationHeader.propTypes = propTypes;

export default ApplicationHeader;
