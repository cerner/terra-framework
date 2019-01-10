import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

const cx = className;

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
  /**
   * When set to true, applies theme class to HTML element
   */
  isGlobalTheme: PropTypes.bool,
};

const defaultProps = {
  isGlobalTheme: false,
};

class ThemeProvider extends React.Component {
  componentDidMount() {
    if (this.props.isGlobalTheme === true && this.props.themeName) {
      document.documentElement.classList.add(this.props.themeName);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props === prevProps) return;
    if (this.props.isGlobalTheme === true) {
      if (prevProps.themeName) {
        document.documentElement.classList.remove(prevProps.themeName);
      }

      if (this.props.themeName) {
        document.documentElement.classList.add(this.props.themeName);
      }
    }
  }

  componentWillUnmount() {
    if (this.props.isGlobalTheme === true && this.props.themeName) {
      document.documentElement.classList.remove(this.props.themeName);
    }
  }

  render() {
    const {
      themeName, isGlobalTheme, children, ...customProps
    } = this.props;
    return (<div {...customProps} className={cx(themeName, customProps.className)}>{children}</div>);
  }
}

ThemeProvider.propTypes = propTypes;
ThemeProvider.defaultProps = defaultProps;
ThemeProvider.Opts = {};
ThemeProvider.Opts.Themes = ThemeProviderThemes;

export default ThemeProvider;
