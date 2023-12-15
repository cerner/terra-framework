import React from 'react';
import classNames from 'classnames/bind';
import ThemeProvider from 'terra-theme-provider';
import MockThemeComponent from './MockThemeComponent';
import styles from './DefaultThemeProvider.module.scss';

const cx = classNames.bind(styles);

class DefaultThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: '',
      density: '',
    };
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.handleDensityChange = this.handleDensityChange.bind(this);
  }

  handleThemeChange(event) {
    this.setState({ theme: event.target.value });
  }

  handleDensityChange(event) {
    this.setState({ density: event.target.value });
  }

  render() {
    let themeSwitcher;
    let densitySwitcher;

    function supportsCSSVars() {
      // This eslint rule complains of the lack of .CSS support in IE, which is exactly what this line is intended to detect.
      // eslint-disable-next-line compat/compat
      return window.CSS && window.CSS.supports && window.CSS.supports('(--fake-var: 0)');
    }

    if (supportsCSSVars()) {
      themeSwitcher = (
        <div className={cx('theme-switcher-wrapper')}>
          <label htmlFor="theme"> Theme: </label>
          <select id="theme" value={this.state.theme} onChange={this.handleThemeChange}>
            <option value="">Default</option>
            <option value="cerner-mock-theme">Mock Theme</option>
          </select>
        </div>
      );

      densitySwitcher = (
        <div className={cx('theme-switcher-wrapper')}>
          <label htmlFor="density"> Density: </label>
          <select id="density" value={this.state.density} onChange={this.handleDensityChange}>
            <option value="">Default</option>
            <option value="compact">Compact</option>
            <option value="comfortable">Comfortable</option>
            <option value="spacious">Spacious</option>
          </select>
        </div>
      );
    } else {
      themeSwitcher = (
        <div />
      );
    }

    return (
      <div>
        <div>{themeSwitcher}</div>
        <div>{densitySwitcher}</div>
        <ThemeProvider themeName={this.state.theme} density={this.state.density}>
          <div>
            <MockThemeComponent>Themable component</MockThemeComponent>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default DefaultThemeProvider;
