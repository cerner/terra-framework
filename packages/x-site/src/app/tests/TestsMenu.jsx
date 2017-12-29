import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';

import MenuList from '../common/menu/MenuList';
import { siteConfigPropType } from '../configPropTypes';

const propTypes = {
  routingStackDelegate: RoutingStackDelegate.propType,
  config: siteConfigPropType,
  siteRoot: PropTypes.string,
};

const generateLinks = (config, siteRoot) => (
  Object.keys(config).map((componentKey) => {
    const testsRoot = config[componentKey].testsRoot;
    const tests = config[componentKey].tests;
    if (testsRoot && tests) {
      return {
        id: siteRoot + testsRoot,
        path: `${siteRoot}${testsRoot}`,
        text: config[componentKey].name,
      };
    }
    return undefined;
  }).filter(link => (!!link))
);

const TestsMenu = ({ routingStackDelegate, config, siteRoot }) => {console.log(siteRoot); return (
  <MenuList
    headerText="Tests"
    routingStackDelegate={routingStackDelegate}
    links={generateLinks(config, siteRoot)}
  />
)};

TestsMenu.propTypes = propTypes;

export default withRouter(TestsMenu);
