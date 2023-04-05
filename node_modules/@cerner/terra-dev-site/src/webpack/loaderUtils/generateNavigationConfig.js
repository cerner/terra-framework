const path = require('path');
const glob = require('glob');
const kebabCase = require('lodash.kebabcase');
const {
  startCase,
  pageTypes,
  getNamespace,
  getRoutes,
  parseExtension,
  formatPath,
} = require('./configHelpers');

/**
* Creates the basic page config consisting of name of the page, the route to the page and the sort group for the page.
*/
const getPageConfig = (route) => {
  // Grab the group extension if one exists.
  const { name, extension: group } = parseExtension(route);

  return {
    label: startCase(name),
    group,
  };
};

const generateUrl = (routes, namespace, primaryPath) => (
  `${primaryPath}/${kebabCase(namespace)}/${routes.map((route) => kebabCase(route.replace(/\.[^.]+$/, ''))).join('/')}`
);

/**
* Recursively generates page configs.
*/
const recurs = ({
  config, routes, contentPath, ext, contentImports, url, pageConfig,
}) => {
  // Prefer modifying config over creating new config, this way we blend file paths together in the ui.
  const configCopy = config || getPageConfig(routes[0]);

  // Pop off the top most directory.
  const slicedDir = routes.slice(1);

  // If this is not an end point, recursively gather the child pages.
  if (slicedDir.length > 0) {
    if (!configCopy.children) {
      configCopy.children = {};
    }

    configCopy.children[slicedDir[0]] = recurs({
      config: configCopy.children[slicedDir[0]],
      routes: slicedDir,
      contentPath,
      ext,
      contentImports,
      url,
      pageConfig,
    });
  } else {
    // if this is a leaf page, add the content path and type to the config.
    configCopy.path = url;
    // eslint-disable-next-line no-param-reassign
    contentImports[url] = contentPath;
    configCopy.type = ext;
    // eslint-disable-next-line no-param-reassign
    pageConfig[url] = {
      label: configCopy.label,
      type: ext,
    };
  }

  return configCopy;
};

/**
* Builds out config for a root page.
*/
const buildPageConfig = ({
  filePaths,
  namespace,
  contentImports,
  primaryNavItemsMap,
  pageConfig,
}) => (
  filePaths.reduce((acc, { filePath, entryPoint }) => {
    // Break up the file path
    const parsedPath = path.parse(entryPoint);
    // Grab the type (doc, test, etc) and the name without the extension.
    const { name, extension: fileType } = parseExtension(parsedPath.name);

    const referenceNavItem = primaryNavItemsMap[fileType];
    let primaryNavItem = acc[referenceNavItem.path];
    if (!primaryNavItem) {
      primaryNavItem = {
        label: referenceNavItem.label,
        path: referenceNavItem.path,
        children: {},
      };
      acc[referenceNavItem.path] = primaryNavItem;
    }

    // Drop the period for the extension.
    const ext = parsedPath.ext.slice(1);

    const routes = getRoutes(name, entryPoint);
    const packageNamespace = getNamespace(filePath, namespace);

    const key = routes[0];
    primaryNavItem.children[key] = recurs({
      config: primaryNavItem.children[key],
      routes,
      contentPath: filePath,
      ext,
      contentImports,
      url: generateUrl(routes, packageNamespace, primaryNavItem.path),
      pageConfig,
    });
    return acc;
  }, {})
);

/**
* Simple alpha sort. Modified from MDN, if I'm (Matt) being honest.
*/
const alphaSort = (a, b) => {
  if (a && !b) {
    return -1;
  }

  if (!a && b) {
    return 1;
  }

  if (!a && !b) {
    return 0;
  }

  const nameA = a.toUpperCase(); // ignore upper and lowercase
  const nameB = b.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
};

/**
* Sort first by group, then by alpha as a tie breaker.
*/
const sortPage = (a, b) => {
  let result = alphaSort(a.group, b.group);
  if (result === 0) {
    result = alphaSort(a.label, b.label);
  }
  return result;
};

/**
* Sort the pages objects and convert them into ordered arrays.
*/
const sortPageConfig = config => (
  config.sort(sortPage).map((page) => {
    // eslint-disable-next-line no-param-reassign
    delete page.group;
    if (page.children) {
      // eslint-disable-next-line no-param-reassign
      page.children = sortPageConfig(Object.values(page.children));
    }
    return page;
  })
);

const addWatchContentDirectories = ({
  mode,
  addContextDependency,
  sourceFolder,
  isLernaMonoRepo,
  contentDirectory,
}) => {
  if (mode === 'production') {
    return;
  }

  const processPath = formatPath(process.cwd());

  if (isLernaMonoRepo) {
    glob.sync(`${processPath}/packages/*/${sourceFolder}/${contentDirectory}`).forEach(dir => { addContextDependency(`${dir}/`); });
  } else {
    addContextDependency(`${processPath}/${sourceFolder}/${contentDirectory}/`);
  }
};

const getSearchPatterns = ({
  additionalSearchDirectories,
  primaryNavigationItems,
  resolveExtensions,
  mode,
  sourceFolder,
  distributionFolder,
  isLernaMonoRepo,
  contentDirectory,
}) => {
  const processPath = formatPath(process.cwd());
  const typesGlob = pageTypes(primaryNavigationItems).join(',');
  const typesRegex = pageTypes(primaryNavigationItems).map((type) => `/${type}`).join('|');

  // remove . from extensions
  const extensions = resolveExtensions.map((ext) => ext.slice(1));

  // the markdown extension is not optional.
  const ext = [...extensions, 'md', 'mdx'];

  const sourceDir = (mode !== 'production') ? `${sourceFolder}` : `${distributionFolder}`;

  const localPackages = [
    ...isLernaMonoRepo
      ? [{
        pattern: `${processPath}/packages/*/${sourceDir}/${contentDirectory}/**/*.{${typesGlob},}.{${ext.join(',')}}`,
        entryPoint: `${processPath}/packages/[^/]*/${sourceDir}/${contentDirectory}(${typesRegex})?`,
      }]
      : [{
        pattern: `${processPath}/${sourceDir}/${contentDirectory}/**/*.{${typesGlob},}.{${ext.join(',')}}`,
        entryPoint: `${processPath}/${sourceDir}/${contentDirectory}(${typesRegex})?`,
      }],
  ];

  return [
    ...localPackages,
    ...additionalSearchDirectories.map((searchDirectory) => ({
      pattern: `${searchDirectory}/**/*.{${typesGlob},}.{${ext.join(',')}}`,
      entryPoint: `${searchDirectory}(${typesRegex})?`,
    })),
  ];
};

const executeSearchPatterns = ({ patterns }) => (
  patterns.reduce((acc, { pattern, entryPoint }) => (
    acc.concat(glob.sync(pattern, { nodir: true }).map(filePath => ({ filePath, entryPoint: filePath.replace(new RegExp(entryPoint).exec(filePath)[0], '') })))
  ), [])
);

const findFirstPagePath = (navItem) => {
  if (navItem.children) {
    return findFirstPagePath(navItem.children[0]);
  }
  return navItem.path;
};

/**
* Generates the file representing page config, which is in turn consumed by route config.
*/
const generatePagesConfig = ({
  siteConfig,
  resolveExtensions,
  mode,
  contentDirectory,
  isLernaMonoRepo,
  addContextDependency,
  logger,
}) => {
  const {
    additionalSearchDirectories,
    primaryNavigationItems,
    sourceFolder,
    distributionFolder,
    enableDebugLogging,
  } = siteConfig;

  // Watch directories for changes
  addWatchContentDirectories({
    mode,
    addContextDependency,
    sourceFolder,
    isLernaMonoRepo,
    contentDirectory,
  });

  // Get the default search patterns for both normal and lerna mono repos.
  const patterns = getSearchPatterns({
    additionalSearchDirectories,
    primaryNavigationItems,
    resolveExtensions,
    mode,
    sourceFolder,
    distributionFolder,
    isLernaMonoRepo,
    contentDirectory,
  });

  if (enableDebugLogging) {
    logger.info('*****************************');
    logger.info('[terra dev site] Search Patterns:');
    logger.info(JSON.stringify(patterns, null, 2));
  }

  // Execute the globs and regex masks, to trim the directories.
  const filePaths = executeSearchPatterns({ patterns });

  // Add Additional content
  primaryNavigationItems.forEach(item => {
    if (item.additionalContent) {
      item.additionalContent.forEach((content) => {
        filePaths.push({
          filePath: formatPath(content.filePath),
          entryPoint: `/${content.label}.${item.contentExtension}${path.extname(content.filePath)}`,
        });
      });
    }
  });

  if (enableDebugLogging) {
    logger.info('*****************************');
    logger.info('[terra dev site] File Paths:');
    logger.info(JSON.stringify(filePaths, null, 2));
  }

  const contentImports = {};
  const pageConfig = {};

  // Create a map of primary navigation items
  const primaryNavItemsMap = primaryNavigationItems.reduce((acc, primaryNavigationItem) => {
    acc[primaryNavigationItem.contentExtension] = primaryNavigationItem;
    return acc;
  }, {});

  // Build out the navigation config from the discovered file paths.
  const config = buildPageConfig({
    filePaths, namespace: siteConfig.namespace, contentImports, primaryNavItemsMap, pageConfig,
  });

  const routesMap = {};

  // convert navigation items to an array and sort
  const navigationConfig = primaryNavigationItems.reduce((acc, primaryNavigationItem) => {
    const navItem = config[primaryNavigationItem.path];
    if (navItem) {
      navItem.children = sortPageConfig(Object.values(navItem.children));

      routesMap[navItem.path] = findFirstPagePath(navItem);

      if (navItem.children.length === 1 && !navItem.children[0].children) {
        [navItem.pageConfig] = navItem.children;
        delete navItem.children;
      }

      acc.push(navItem);
    }
    return acc;
  }, []);

  if (enableDebugLogging) {
    logger.info('*****************************');
    logger.info('[terra dev site] Navigation Config:');
    logger.info(JSON.stringify(navigationConfig, null, 2));
  }

  // map root route to first content item in the first primary nav item
  if (navigationConfig.length > 0) {
    routesMap['/'] = routesMap[navigationConfig[0].path];
  }

  return {
    contentImports,
    navigationConfig,
    routesMap,
    pageConfig,
  };
};

module.exports = generatePagesConfig;
