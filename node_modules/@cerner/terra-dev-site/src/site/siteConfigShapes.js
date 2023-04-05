import PropTypes from 'prop-types';

/**
 * Object describing in site configurable settings
 */
const settingsConfigShape = PropTypes.shape({
  /**
   * By default the site is set to this theme
   */
  defaultTheme: PropTypes.string,

  /**
   * By default the site is set to this locale
   */
  defaultLocale: PropTypes.string,

  /**
   * By default the site is set to this direction
   */
  defaultDirection: PropTypes.string,
});

/**
 * Additional Sites that can be switched to.
 */
const sitesShape = PropTypes.arrayOf(PropTypes.shape({
  /**
   * The path to the site
   */
  path: PropTypes.string,

  /**
   * The title of the site
   */
  title: PropTypes.string,

  /**
   * The url to navigate to the site
   */
  url: PropTypes.string,
}));

/**
 * Describes the extensions
 */
const extensionItemsShape = PropTypes.arrayOf(PropTypes.shape({
  /**
   * The react key for the extension.
   */
  key: PropTypes.string,
  /**
   * The text describing the extension.
   */
  text: PropTypes.string,
  /**
   * The icon to represent the extension.
   */
  icon: PropTypes.elementType,
  /**
   * The modal to launch from the extension.
   */
  modal: PropTypes.elementType,
}));

/**
 * Describes page content
 */
const pageContentConfigShape = PropTypes.shape({
  /**
   * The path to the page
   */
  path: PropTypes.string,
  /**
   * Text for the page
   */
  label: PropTypes.string.isRequired,
  /**
   * The type of the content being loaded
   */
  type: PropTypes.string.isRequired,
});

/**
 * Describes navigation config
 */
const navigationConfigShape = PropTypes.arrayOf(PropTypes.shape({
  /**
   * The text for the nav item
   */
  label: PropTypes.string.isRequired,
  /**
   * The singular page config item
   */
  pageConfig: pageContentConfigShape,
  /**
   * children
   */
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.array,
}));

/**
 * Path to imports map
 */
const contentImportsShape = PropTypes.object;
/**
 * Path to page config map
 */
const pageConfigShape = PropTypes.object;
/**
 * Short routes to content routes.
 */
const routesMapShape = PropTypes.object;

/**
 * Describes the title config
 */
const titleConfigShape = PropTypes.shape({
  /**
   * Title for site
   */
  title: PropTypes.string.isRequired,
  /**
   * Headline for site
   */
  subline: PropTypes.string,
  /**
   * subline for site
   */
  headline: PropTypes.string,
});

/**
 * Object describing the generated dev-site-config object.
 */
const siteConfigShape = PropTypes.shape({
  /**
   * The basename for the application.
   */
  basename: PropTypes.string.isRequired,
  /**
   * The map of routes to lazy components.
   */
  contentImports: contentImportsShape.isRequired,
  /**
   * Custom extensions
   */
  extensionItems: extensionItemsShape.isRequired,
  /**
   * Configuration layout out primary and secondary navigation.
   */
  navigationConfig: navigationConfigShape,
  /**
   * The map of routes to page config
   */
  pageConfig: pageConfigShape.isRequired,
  /**
   * map of routes to redirect to content routes.
   */
  routesMap: routesMapShape.isRequired,
  /**
   * Object describing in site configurable settings
   */
  settingsConfig: settingsConfigShape.isRequired,
  /**
   * Sites to switch to
   */
  sites: sitesShape.isRequired,
  /**
   * Describes the site name
   */
  titleConfig: titleConfigShape.isRequired,
  /**
   * A bucket of config useful when extending dev site.
   */
  // eslint-disable-next-line react/forbid-prop-types
  additionalConfig: PropTypes.object,
});

export default siteConfigShape;
export {
  settingsConfigShape,
  sitesShape,
  routesMapShape,
  pageConfigShape,
  contentImportsShape,
  navigationConfigShape,
  pageContentConfigShape,
  titleConfigShape,
};
