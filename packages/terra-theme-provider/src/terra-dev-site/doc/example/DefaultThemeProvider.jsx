import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import ThemeProvider from 'terra-theme-provider/lib/ThemeProvider';
import MockThemeComponent from 'terra-theme-provider/lib/terra-dev-site/doc/example/MockThemeComponent';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

class DefaultThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: '',
    };
    this.handleThemeChange = this.handleThemeChange.bind(this);
  }

  handleThemeChange(e) {
    this.setState({ theme: e.target.value });
  }

  render() {
    let themeSwitcher;

    function supportsCSSVars() {
      return window.CSS && window.CSS.supports && window.CSS.supports('(--fake-var: 0)');
    }

    if (supportsCSSVars()) {
      themeSwitcher = (
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="theme"> Theme: </label>
          <select value={this.state.theme} onChange={this.handleThemeChange}>
            <option value="">Default</option>
            <option value={ThemeProvider.Opts.Themes.MOCK}>Mock Theme</option>
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
        <ThemeProvider themeName={this.state.theme}>
          <div>
            <MockThemeComponent>Themable component</MockThemeComponent>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default DefaultThemeProvider;
