import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Slide.module.scss';
import { isFocusable } from '../../terra-slide-panel/src/SlidePanelUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * If true, the Slide is marked as hidden using accessiblity attributes.
   */
  isHidden: PropTypes.bool,

  /**
   * The components to display inside the Slide.
   */
  children: PropTypes.node,
};

const defaultProps = {
  isHidden: false,
};

const Slide = (props) => {
  const [lastClicked, setLastClicked] = useState(null);

  useEffect(() => {
    if (!props.isHidden && lastClicked) {
      lastClicked.focus();
    }
  });

  const handleClick = (event) => {
    if (isFocusable(event.target)) {
      setLastClicked(event.target);
    }
  };

  const theme = React.useContext(ThemeContext);
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={cx('slide', theme.className)} aria-hidden={props.isHidden || null} onClick={handleClick} onKeyUp={handleClick}>
      <div className={cx('slide-shadow')} />
      {props.children}
    </div>
  );
};

Slide.propTypes = propTypes;
Slide.defaultProps = defaultProps;

export default Slide;
