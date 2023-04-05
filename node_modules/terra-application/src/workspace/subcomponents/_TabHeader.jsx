import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';

import styles from './TabHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The child content to display within the title area
   */
  title: PropTypes.string,
};

const TabHeader = ({
  title,
}) => {
  const theme = React.useContext(ThemeContext);

  // tabIndex of -1 ensure a focus location for the dropdown to navigate to with a screen reader.
  return (
    <div className={cx('header', theme.className)}>
      <VisuallyHiddenText aria-level="2" role="heading" tabIndex="-1" text={title} />
      <div className={cx('title')} aria-hidden="true">
        {title}
      </div>
    </div>
  );
};

TabHeader.propTypes = propTypes;

export default TabHeader;
