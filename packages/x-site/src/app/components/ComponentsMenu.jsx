import React from 'react';
import PropTypes from 'prop-types';
import RoutingStackDelegate from
 'terra-navigation-layout/lib/RoutingStackDelegate';
import SiteUtils from './SiteUtils';

import MenuList from '../common/menu/MenuList';
import { componentConfigPropType, siteConfigPropType } from '../config/proptypes.config';

const menuText = {
  pages: 'Components',
  tests: 'Tests',
};

const subMenuText = {
  pages: '',
  tests: 'Tests',
};

const propTypes = {
  routingStackDelegate: RoutingStackDelegate.propType,
  config: PropTypes.oneOfType([siteConfigPropType, componentConfigPropType]),
  pathRoot: PropTypes.string,
  exampleType: PropTypes.string,
  isSubMenu: PropTypes.bool,
};

const defaultProps = {
  isSubMenu: false,
};

const ComponentsMenu = ({ routingStackDelegate, config, exampleType, pathRoot, isSubMenu }) => {
  let headerText = menuText[`${exampleType}`];
  let links = null;

  if (isSubMenu) {
    headerText = `${config.name} ${subMenuText[exampleType]}`;
    links = SiteUtils.generateSubMenuLinks(config, exampleType, pathRoot);
  } else {
    links = SiteUtils.generateMenuLinks(config, exampleType, pathRoot);
  }

  return (
    <MenuList
      headerText={headerText}
      routingStackDelegate={routingStackDelegate}
      links={links}
    />
  );
};

ComponentsMenu.propTypes = propTypes;
ComponentsMenu.defaultProps = defaultProps;

export default ComponentsMenu;
