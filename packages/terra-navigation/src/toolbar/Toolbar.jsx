import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

import AppDelegate from 'terra-app-delegate';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import Button from 'terra-button';
import Utility from './Utility';
import Logo from './Logo';

import styles from './Toolbar.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The AppDelegate instance provided by the containing component. If present, its properties will propagate to the children components.
   * */
  app: AppDelegate.propType,
  /**
   * Content element to be placed within the fill area of the toolbar.
   * */
  content: PropTypes.element,
  /**
   * Logo element to be placed at the start of the toolbar.
   * */
  logo: PropTypes.element,
  layoutConfig: PropTypes.object,
  /**
   * Utility element to be placed at the end of the toolbar.
   * */
  utility: PropTypes.element,
};

const appendPropsToElement = (app, size, element) => React.cloneElement(element, { app, size });

const Toolbar = ({
  app,
  content,
  layoutConfig,
  logo,
  utility,
  ...customProps
}) => {
  const isCompact = layoutConfig.size === 'tiny' || layoutConfig.size === 'small';

  const toolbarClassNames = cx([
    'toolbar',
    { 'is-compact': isCompact },
    customProps.className,
  ]);

  let logoElement;
  if (logo) {
    const clonedElement = appendPropsToElement(app, layoutConfig.size, logo);
    logoElement = <div className={cx('start')}>{clonedElement}</div>;
  }

  let contentElement;
  if (content) {
    const clonedElement = appendPropsToElement(app, layoutConfig.size, content);
    contentElement = <div className={cx('content')}>{clonedElement}</div>;
  }

  let utilityElement;
  if (utility) {
    const clonedElement = appendPropsToElement(app, layoutConfig.size, utility);
    utilityElement = <div className={cx('end')}>{clonedElement}</div>;
  }

  let toolbarToggle;
  if (layoutConfig.toggleMenu && isCompact) {
    toolbarToggle = (
      <div className={cx('toolbar-toggle')}>
        <Button className={cx('toggle-button')} variant="link" icon={<IconMenu />} onClick={layoutConfig.toggleMenu} />
      </div>
    );
  }

  let toolbarBody;
  if (logoElement || contentElement || utilityElement) {
    toolbarBody = (
      <div className={cx('toolbar-body')}>
        {logoElement}
        {contentElement}
        {utilityElement}
      </div>
    );
  }

  return (
    <div>
      {!isCompact && <div className={cx('toolbar-splash')} />}
      <div {...customProps} className={toolbarClassNames}>
        {toolbarToggle}
        {toolbarBody}
      </div>
    </div>
  );
};

Toolbar.propTypes = propTypes;
Toolbar.Utility = Utility;
Toolbar.Logo = Logo;

export default Toolbar;
