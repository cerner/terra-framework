import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Slide.module.scss';

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
  const theme = React.useContext(ThemeContext);
  return (
    <div className={cx('slide', theme.className)} aria-hidden={props.isHidden || null}>
      <div className={cx('slide-shadow')} />
      {props.children}
    </div>
  );
};

Slide.propTypes = propTypes;
Slide.defaultProps = defaultProps;

export default Slide;
