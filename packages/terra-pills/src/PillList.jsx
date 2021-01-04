import React, { useEffect, useRef, useState } from 'react';
import {
  KEY_SPACE,
  KEY_RETURN,
} from 'keycode-js';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Pill.module.scss';
import Pill from './Pill';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The aria label string value for the pills container.
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * The content to be shown in the pills container. Should only contain the sub-component pills.
   */
  children: PropTypes.node,
  /**
   * Determines if the Pill List rolls up or not.
   */
  isCollapsible: PropTypes.bool,
};

const defaultProps = {
  isCollapsible: false,
};

const PillList = (props) => {
  const {
    ariaLabel,
    children,
    isCollapsible,
  } = props;

  const theme = React.useContext(ThemeContext);
  const pillListRef = useRef();
  const rollUpPillRef = useRef();
  const [rollUpCount, setRollUpCount] = useState(0);
  const [isRollUpRequired, setIsRollUpRequired] = useState(true);

  const handleCollapse = () => {
    let pillListHeight = pillListRef.current.clientHeight;
    const rollUpPillStyles = rollUpPillRef.current.currentStyle || window.getComputedStyle(rollUpPillRef.current);
    const pillHeight = rollUpPillRef.current.offsetHeight + Math.round(parseFloat(rollUpPillStyles.marginTop)) + Math.round(parseFloat(rollUpPillStyles.marginBottom));

    if (pillListHeight <= pillHeight) {
      setIsRollUpRequired(false);
      return;
    }

    const childPills = pillListRef.current.querySelectorAll('[class*="pill-container"]');
    let index = childPills.length - 1;
    let pillCounter = 0;
    while (pillListHeight > pillHeight) {
      childPills[index].style.display = 'none';
      index -= 1;
      pillCounter += 1;
      pillListHeight = pillListRef.current.clientHeight;
    }
    setIsRollUpRequired(true);
    setRollUpCount(pillCounter);
  };

  useEffect(() => {
    if (isCollapsible) {
      handleCollapse();
    }
    pillListRef.current.style.visibility = 'visible';
  }, []);

  const handleRollUp = () => {
    const childPills = pillListRef.current.querySelectorAll('[class*="pill-container"]');
    let index = childPills.length - 1;
    let pillCounter = rollUpCount;
    while (pillCounter > 0) {
      childPills[index].removeAttribute('style');
      index -= 1;
      pillCounter -= 1;
    }
    setIsRollUpRequired(false);
    setRollUpCount(pillCounter);
  };

  const handleKeyDown = (event) => {
    rollUpPillRef.current.setAttribute('data-terra-pills-show-focus-styles', 'true');
    if (event.keyCode === KEY_RETURN || event.keyCode === KEY_SPACE) {
      handleRollUp();
    }
  };

  const handleMouseDown = () => {
    rollUpPillRef.current.setAttribute('data-terra-pills-show-focus-styles', 'false');
  };

  let rollUpButton;
  if (isCollapsible) {
    rollUpButton = (
      <div
        className={cx(['roll-up-button'])}
        onClick={handleRollUp}
        onKeyDown={handleKeyDown}
        onMouseDown={handleMouseDown}
        ref={rollUpPillRef}
        role="button"
        tabIndex="0"
      >
        {`${rollUpCount} more ...`}
      </div>
    );
  }

  const PillListClassNames = cx([
    'pill-list',
    theme.className,
  ]);

  return (
    <div
      aria-label={ariaLabel}
      className={PillListClassNames}
      ref={pillListRef}
    >
      {children}
      {isRollUpRequired && rollUpButton}
    </div>
  );
};

PillList.propTypes = propTypes;
PillList.defaultProps = defaultProps;

export default PillList;
export { Pill };
