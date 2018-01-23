/* global SystemJS */
import React from 'react';
import PropTypes from 'prop-types';
import 'systemjs/dist/system';
import { loadStylesheet } from './assets';

// Expose AMD required globals on the window
window.define = window.SystemJS.amdDefine;
window.require = window.requirejs = SystemJS.amdRequire;

const propTypes = {

 /**
  * The basePath to load the manifest and manifest asset dependencies from.
  * */
  basePath: PropTypes.string.isRequired,

  /**
   * A placeholder to display while the component is laoding.
   * */
  placeholder: PropTypes.element,

  /**
   * The entry file in the manifest to use to load the embeddable module.
   * */
  entry: PropTypes.string,

  /**
   * A manifest object defining the asset dependencies. If provided will be used instead
   * of fetching a manifest from the basePath.
   * */
  manifest: PropTypes.object,
};

const defaultProps = {
  entry: 'index.js',
};


class EmbeddedComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { module: null, cssReady: false };
  }

  componentDidMount() {
    this.fetchManifest().then((manifest) => {
      this.loadCSS(manifest);
      this.loadModule(this.getAbsolutePath(manifest[this.props.entry]));
    });
  }

  /**
  * Get the absolute path to the given filename.
  * @param {String} fileName - The file name to resolve to the absolute path.
  * @return {String} The absolute path to the given filename.
  */
  getAbsolutePath(fileName) {
    return `${this.props.basePath}/${fileName}`;
  }

  /**
  * Loads the CSS files detected within the manifest.
  * @param {object} manifest - The manifest used to load the CSS.
  */
  loadCSS(manifest) {
    const loadStylesheets = Object.keys(manifest)
      .filter(file => /\.css$/.test(file))
      .map(file => this.getAbsolutePath(manifest[file]))
      .map(loadStylesheet);

    Promise
      .all(loadStylesheets)
      .then(() => this.setState({ cssReady: true }));
  }

  /**
  * Fetches the asset manifest.
  * @return {Promise}
  */
  fetchManifest() {
    // If manifest is passed in, resolve immediately
    if (this.props.manifest) {
      return Promise.resolve(this.props.manifest);
    }

    // Fetch manifest from basePath
    return fetch(`${this.props.basePath}/manifest.json`, { cache: 'no-store' })
      .then(res => res.json());
  }

  /**
  * Loads the module specified by the url.
  * @param {String} url - The url to load
  */
  loadModule(url) {
    SystemJS.amdRequire(url, module => this.setState({ module }));
  }

  render() {
    const { module: Component, cssReady } = this.state;
    const { entry, manifest, placeholder, basePath, ...customProps } = this.props;
    if (cssReady && Component) {
      return <Component {...customProps} />;
    }

    return this.props.placeholder;
  }
}

EmbeddedComponent.propTypes = propTypes;
EmbeddedComponent.defaultProps = defaultProps;

export default EmbeddedComponent;
