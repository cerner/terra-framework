import React from 'react';
import PropTypes from 'prop-types';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';
import aggregateExamples from './ComponentsUtils';

import MenuList from '../common/menu/MenuList';
import { siteConfigPropType } from '../configPropTypes';

const propTypes = {
  routingStackDelegate: RoutingStackDelegate.propType,
  config: siteConfigPropType,
  siteRoot: PropTypes.string,
};

const generateLinks = (config, siteRoot) => (
  aggregateExamples(config).map(example => (
    {
      id: example.fullPath,
      path: `${siteRoot}${example.fullPath}`,
      text: example.linkText,
    }
  ))
);

const ComponentsMenu = ({ routingStackDelegate, config, siteRoot }) => (
  <MenuList
    headerText="Components"
    routingStackDelegate={routingStackDelegate}
    links={generateLinks(config, siteRoot)}
  />
);

ComponentsMenu.propTypes = propTypes;

export default ComponentsMenu;
