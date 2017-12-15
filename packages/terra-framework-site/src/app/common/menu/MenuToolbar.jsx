import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

import IconLeft from 'terra-icon/lib/icon/IconLeft';
import IconHouse from 'terra-icon/lib/icon/IconHouse';
import Button from 'terra-button';

import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';
import styles from './MenuToolbar.scss';

const cx = classNames.bind(styles);

const propTypes = {
  app: PropTypes.object,
  routingStackDelegate: RoutingStackDelegate.propType,
  backButtonOverride: PropTypes.node,
  text: PropTypes.string,
};

const MenuToolbar = ({ app, routingStackDelegate, text, ...customProps }) => {
  const toolbarClassNames = cx([
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
    <div className={cx(['terraClinical-MenuToolbar-start'])}>
      {backButton}
      {rootButton}
    </div>
  );

  const toolbarEnd = (
    <div className={cx(['end'])} />
  );

  return (
    <div {...customProps} className={cx(['flex-wrapper'])}>
      <div className={toolbarClassNames}>
        {toolbarStart}
        <div className={cx(['body'])}>
          <h3 style={{ margin: '0' }}>{text}</h3>
        </div>
        {toolbarEnd}
      </div>
    </div>
  );
};


MenuToolbar.propTypes = propTypes;

export default MenuToolbar;
