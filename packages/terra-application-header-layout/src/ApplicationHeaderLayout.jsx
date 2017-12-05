import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import AppDelegate from 'terra-app-delegate';

import styles from './ApplicationHeaderLayout.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The AppDelegate instance provided by the containing component. If present, its properties will propagate to the children components.
   * */
  app: AppDelegate.propType,
  /**
   * Extensions element to be placed before the end of the header.
   * */
  extensions: PropTypes.element,
  /**
   * Logo element to be placed at the start of the header after the toggle element.
   * */
  logo: PropTypes.element,
  /**
   * Layout configuration to handle size and toggle functionality.
   * */
  layoutConfig: PropTypes.shape({
    size: PropTypes.string,
    toggleMenu: PropTypes.func,
    menuIsOpen: PropTypes.bool,
  }),
  /**
   * Navigation element to be placed within the fill area of the header.
   * */
  navigation: PropTypes.element,
  /**
   * Toggle element to be placed at the start of the header.
   * */
  toggle: PropTypes.element,
  /**
   * Utilities element to be placed at the end of the header.
   * */
  utilities: PropTypes.element,
};

const defaultProps = {
  layoutConfig: {
    menuIsOpen: false,
  },
};

const appendSizeToElement = (app, size, element) => React.cloneElement(element, { app, size });
const appendConfigToElement = (app, layoutConfig, element) => React.cloneElement(element, { app, layoutConfig });

const ApplicationHeader = ({
  app,
  extensions,
  layoutConfig,
  logo,
  navigation,
  toggle,
  utilities,
  ...customProps
}) => {
  const headerClassNames = cx([
    'header',
    'fill',
    customProps.className,
  ]);

  let logoElement;
  if (logo) {
    const clonedElement = appendSizeToElement(app, layoutConfig.size, logo);
    logoElement = <div className={cx(['fit', 'start', 'logo'])}>{clonedElement}</div>;
  }

  let navigationElement;
  if (navigation) {
    const clonedElement = appendSizeToElement(app, layoutConfig.size, navigation);
    navigationElement = <div className={cx('fill', 'navigation')}>{clonedElement}</div>;
  }

  let extensionsElement;
  if (extensions) {
    const clonedElement = appendSizeToElement(app, layoutConfig.size, extensions);
    extensionsElement = <div className={cx(['fit', 'end', 'extensions'])}>{clonedElement}</div>;
  }

  let utilitiesElement;
  if (utilities) {
    const clonedElement = appendSizeToElement(app, layoutConfig.size, utilities);
    utilitiesElement = <div className={cx(['fit', 'end', 'utilities'])}>{clonedElement}</div>;
  }

  let headerToggle;
  if (toggle) {
    const clonedElement = appendConfigToElement(app, layoutConfig, toggle);
    headerToggle = <div className={cx(['fit', 'header-toggle'])}>{clonedElement}</div>;
  }

  let headerBody;
  if (logoElement || navigationElement || utilitiesElement || extensionsElement) {
    headerBody = (
      <div className={cx(['fill', 'header-body'])}>
        {logoElement}
        <div className={cx(['fill', 'header-inner'])}>
          {navigationElement}
          {extensionsElement}
        </div>
        {utilitiesElement}
      </div>
    );
  }

  return (
    <div {...customProps} className={headerClassNames}>
      {headerToggle}
      {headerBody}
    </div>
  );
};

ApplicationHeader.propTypes = propTypes;
ApplicationHeader.defaultProps = defaultProps;

export default ApplicationHeader;
