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

const ApplicationHeaderLayout = ({
  app,
  extensions,
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
    logoElement = <div className={cx(['fit', 'start', 'logo'])}>{logo}</div>;
  }

  let navigationElement;
  if (navigation) {
    navigationElement = <div className={cx('fill')}>{navigation}</div>;
  }

  let extensionsElement;
  if (extensions) {
    extensionsElement = <div className={cx(['fit', 'end', 'extensions'])}>{extensions}</div>;
  }

  let utilitiesElement;
  if (utilities) {
    utilitiesElement = <div className={cx(['fit', 'end', 'utilities'])}>{utilities}</div>;
  }

  let headerToggle;
  if (toggle) {
    headerToggle = <div className={cx('fit')}>{toggle}</div>;
  }

  let headerInner;
  if (navigationElement || extensionsElement) {
    headerInner = (
      <div className={cx(['fill', 'header-inner'])}>
        {navigationElement}
        {extensionsElement}
      </div>
    );
  }

  let headerBody;
  if (headerInner || logoElement || utilitiesElement) {
    headerBody = (
      <div className={cx(['fill', 'header-body'])}>
        {logoElement}
        {headerInner}
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

ApplicationHeaderLayout.propTypes = propTypes;

export default ApplicationHeaderLayout;
