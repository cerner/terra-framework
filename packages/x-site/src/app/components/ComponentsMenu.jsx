import React from 'react';
import PropTypes from 'prop-types';
import RoutingStackDelegate from
 'terra-navigation-layout/lib/RoutingStackDelegate';
import SiteUtils from './SiteUtils';

import MenuList from '../common/menu/MenuList';
import { componentConfigPropType, siteConfigPropType } from '../configPropTypes';

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
  siteRoot: PropTypes.string,
  exampleType: PropTypes.string,
  isSubMenu: PropTypes.bool,
};

const defaultProps = {
  isSubMenu: false,
};

const ComponentsMenu = ({ routingStackDelegate, config, exampleType, siteRoot, isSubMenu }) => {
  let headerText = menuText[`${exampleType}`];
  let links = SiteUtils.generateMenuLinks(config, exampleType, siteRoot);

  if (isSubMenu) {
    headerText = `${config.name} ${subMenuText[exampleType]}`;
    links = SiteUtils.generateSubMenuLinks(config, exampleType, siteRoot);
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
