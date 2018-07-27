import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

import styles from './ApplicationMenuLayout.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content element to be placed within the fill area of the header.
   * */
  content: PropTypes.element,
  /**
   * Extensions element to be placed before the end of the header.
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
};

const ApplicationMenuLayout = ({
  content,
  extensions,
  footer,
  header,
  ...customProps
}) => {
  const menuClassNames = cx([
    'menu',
    'fill',
    customProps.className,
  ]);

  let headerElement;
  if (header) {
    headerElement = <div className={cx(['fit', 'header'])}>{header}</div>;
  }

  let contentElement;
  if (content) {
    contentElement = <div className={cx(['fill', 'content'])}><div className={cx('normalizer')}>{content}</div></div>;
  }

  let extensionsElement;
  if (extensions) {
    extensionsElement = <div className={cx(['fit', 'widget'])}>{extensions}</div>;
  }

  let footerElement;
  if (footer) {
    footerElement = <div className={cx(['fit', 'footer'])}>{footer}</div>;
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

export default ApplicationMenuLayout;
