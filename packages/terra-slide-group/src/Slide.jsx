import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Slide.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * If true, the Slide is marked as hidden using accessibility attributes.
   */
  isHidden: PropTypes.bool,

  /**
   * The components to display inside the Slide.
   */
  children: PropTypes.node,

  /**
   * Ref of the node to focus when the Slide is rendered.
   *
   * Generally this should be the Slide or the parent node of the Slide in order
   * to make the Slide more accessible for keyboard only users and assistive technologies.
   */
  focusRef: PropTypes.instanceOf(Element),

  /**
   * The aria label for the Slide.
   */
  slideAriaLabel: PropTypes.string,
};

const defaultProps = {
  isHidden: false,
};

const Slide = ({
  children,
  focusRef,
  isHidden,
  slideAriaLabel,
}) => {
  const [lastClicked, setLastClicked] = useState(null);
  // used for assistive technology to provide context when returning to the slide
  const [enteredAfterHidden, setEnteredAfterHidden] = useState(false);

  useEffect(() => {
    if (!isHidden && lastClicked) {
      // focus last clicked if slide is shown after being hidden
      setEnteredAfterHidden(true);
      lastClicked.focus();
    } else if (!isHidden && focusRef && focusRef.focus) {
      // set focus to passed in ref when first opened
      focusRef.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHidden]);

  const handleClick = (event) => {
    setEnteredAfterHidden(false);
    setLastClicked(event.target);
  };

  const theme = React.useContext(ThemeContext);
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={cx('slide', theme.className)}
      aria-hidden={isHidden || null}
      aria-label={enteredAfterHidden ? slideAriaLabel : undefined}
      onClick={handleClick}
      onKeyUp={handleClick}
      role={enteredAfterHidden ? 'region' : undefined}
    >
      <div className={cx('slide-shadow')} />
      {children}
    </div>
  );
};

Slide.propTypes = propTypes;
Slide.defaultProps = defaultProps;

export default Slide;
