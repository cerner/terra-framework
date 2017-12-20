import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';

import IconLeft from 'terra-icon/lib/icon/IconLeft';
import IconHouse from 'terra-icon/lib/icon/IconHouse';
import Button from 'terra-button';

import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';

import './MenuToolbar.scss';

const propTypes = {
  routingStackDelegate: RoutingStackDelegate.propType,
  backButtonOverride: PropTypes.node,
  text: PropTypes.string,
};

const MenuToolbar = ({ routingStackDelegate, text, ...customProps }) => {
  const toolbarClassNames = classNames([
    'menu-toolbar',
    { 'is-terminal': !routingStackDelegate.showParent },
    customProps.className,
  ]);

  let backButton;
  if (routingStackDelegate.showParent) {
    backButton = <Button onClick={routingStackDelegate.showParent} icon={<IconLeft />} variant="link" style={{ color: 'black' }} />;
  }

  let rootButton;
  if (routingStackDelegate.showRoot) {
    rootButton = <Button onClick={routingStackDelegate.showRoot} icon={<IconHouse />} variant="link" style={{ color: 'black' }} />;
  }

  const toolbarStart = (
    <div className="menu-toolbar-start">
      {backButton}
      {rootButton}
    </div>
  );

  const toolbarEnd = (
    <div className="menu-toolbar-end" />
  );

  return (
    <div {...customProps} className="menu-toolbar-flex-wrapper">
      <div className={toolbarClassNames}>
        {toolbarStart}
        <div className="menu-toolbar-body">
          <h3 style={{ margin: '0' }}>{text}</h3>
        </div>
        {toolbarEnd}
      </div>
    </div>
  );
};


MenuToolbar.propTypes = propTypes;

export default MenuToolbar;
