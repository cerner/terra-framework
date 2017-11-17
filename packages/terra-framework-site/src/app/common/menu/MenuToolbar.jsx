import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';

import IconLeft from 'terra-icon/lib/icon/IconLeft';
import IconHouse from 'terra-icon/lib/icon/IconHouse';
import Button from 'terra-button';

import RoutingStackDelegate from 'terra-navigation-layout/lib/routing/RoutingStackDelegate';

import './MenuToolbar.scss';

const propTypes = {
  routingStackDelegate: RoutingStackDelegate.propType,
  backButtonOverride: PropTypes.node,
  text: PropTypes.string,
};

const MenuToolbar = ({ routingStackDelegate, text, ...customProps }) => {
  const toolbarClassNames = classNames([
    'terraClinical-MenuToolbar',
    { 'is-terminal': !routingStackDelegate.goBack },
    customProps.className,
  ]);

  let backButton;
  if (routingStackDelegate.goBack) {
    backButton = <Button onClick={routingStackDelegate.goBack} icon={<IconLeft />} variant="link" style={{ color: 'black' }} />;
  }

  let rootButton;
  if (routingStackDelegate.goToRoot) {
    rootButton = <Button onClick={routingStackDelegate.goToRoot} icon={<IconHouse />} variant="link" style={{ color: 'black' }} />;
  }

  const toolbarStart = (
    <div className="terraClinical-MenuToolbar-start">
      {backButton}
      {rootButton}
    </div>
  );

  const toolbarEnd = (
    <div className="terraClinical-MenuToolbar-end" />
  );

  return (
    <div {...customProps} className="terraClinical-FlexWrapper">
      <div className={toolbarClassNames}>
        {toolbarStart}
        <div className="terraClinical-MenuToolbar-body">
          <h3 style={{ margin: '0' }}>{text}</h3>
        </div>
        {toolbarEnd}
      </div>
    </div>
  );
};


MenuToolbar.propTypes = propTypes;

export default MenuToolbar;
