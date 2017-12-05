import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import AppDelegate from 'terra-app-delegate';

import styles from './ApplicationMenuLayout.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The AppDelegate instance provided by the containing component. If present, its properties will propagate to the children components.
   * */
  app: AppDelegate.propType,
  /**
   * Content element to be placed within the fill area of the header.
   * */
  content: PropTypes.element,
  /**
   * Extensions element to be placed beforethe end of the header.
   * */
  extensions: PropTypes.element,
  /**
   * Footer element to be placed at the end of the header.
   * */
  footer: PropTypes.element,
  /**
   * Header element to be placed at the start of the header.
   * */
  header: PropTypes.element,
  /**
   * Layout configuration to handle size and toggle functionality.
   * */
  layoutConfig: PropTypes.shape({
    size: PropTypes.string,
    toggleMenu: PropTypes.func,
    menuIsOpen: PropTypes.bool,
    togglePin: PropTypes.func,
    menuIsPinned: PropTypes.bool,
  }),
};

const defaultProps = {
  layoutConfig: {
    menuIsOpen: false,
    menuIsPinned: false,
  },
};

const appendPropsToElement = (app, size, element) => React.cloneElement(element, { app, size });

const ApplicationMenuLayout = ({
  app,
  content,
  extensions,
  footer,
  header,
  layoutConfig,
  ...customProps
}) => {
  const menuClassNames = cx([
    'menu',
    'fill',
    customProps.className,
  ]);

  let headerElement;
  if (header) {
    const clonedElement = appendPropsToElement(app, layoutConfig.size, header);
    headerElement = <div className={cx(['fit', 'header'])}>{clonedElement}</div>;
  }

  let contentElement;
  if (content) {
    const clonedElement = appendPropsToElement(app, layoutConfig.size, content);
    contentElement = <div className={cx(['fill', 'content'])}><div className={cx('normalizer')}>{clonedElement}</div></div>;
  }

  let extensionsElement;
  if (extensions) {
    const clonedElement = appendPropsToElement(app, layoutConfig.size, extensions);
    extensionsElement = <div className={cx(['fit', 'widget'])}>{clonedElement}</div>;
  }

  let footerElement;
  if (footer) {
    const clonedElement = appendPropsToElement(app, layoutConfig.size, footer);
    footerElement = <div className={cx(['fit', 'footer'])}>{clonedElement}</div>;
  }

  return (
    <div {...customProps} className={menuClassNames}>
      {headerElement}
      <div className={cx(['fill', 'body'])}>
        {extensionsElement}
        {contentElement}
      </div>
      {footerElement}
    </div>
  );
};

ApplicationMenuLayout.propTypes = propTypes;
ApplicationMenuLayout.defaultProps = defaultProps;

export default ApplicationMenuLayout;
