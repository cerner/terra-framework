import React from 'react';
import PropTypes from 'prop-types';

const ThemeProviderThemes = {
  CONSUMER: 'cerner-consumer-theme',
  MOCK: 'cerner-mock-theme',
};

const propTypes = {
  /**
   * The component(s) that will be wrapped by `<ThemeProvider />`
   */
  children: PropTypes.node.isRequired,
  /**
   * Name of class for specified theme. e.g `cerner-consumer-theme`
   */
  themeName: PropTypes.string,
};

class ThemeProvider extends React.Component {
  componentDidMount() {
    if (this.props.themeName) {
      document.documentElement.classList.add(this.props.themeName);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props === prevProps) return;

    if (prevProps.themeName) {
      document.documentElement.classList.remove(prevProps.themeName);
    }

    if (this.props.themeName) {
      document.documentElement.classList.add(this.props.themeName);
    }
  }

  componentWillUnmount() {
    if (this.props.themeName) {
      document.documentElement.classList.remove(this.props.themeName);
    }
  }

  render() {
    return this.props.children;
  }
}

ThemeProvider.propTypes = propTypes;
ThemeProvider.Opts = {};
ThemeProvider.Opts.Themes = ThemeProviderThemes;

export default ThemeProvider;
