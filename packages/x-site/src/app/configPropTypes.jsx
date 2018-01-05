import PropTypes from 'prop-types';

const itemConfigPropType = PropTypes.shape({
  path: PropTypes.string,
  component: PropTypes.func,
  description: PropTypes.string,
});

const componentConfigPropType = PropTypes.shape(
  {
    name: PropTypes.string,
    pagesRoot: PropTypes.string,
    pages: PropTypes.arrayOf(itemConfigPropType),
    testsRoot: PropTypes.string,
    tests: PropTypes.arrayOf(itemConfigPropType),
  },
);

const siteConfigPropType = PropTypes.objectOf(
  PropTypes.shape({
    name: PropTypes.string,
    pagesRoot: PropTypes.string,
    pages: PropTypes.arrayOf(itemConfigPropType),
    testsRoot: PropTypes.string,
    tests: PropTypes.arrayOf(itemConfigPropType),
  }),
);

export { siteConfigPropType, componentConfigPropType, itemConfigPropType };
