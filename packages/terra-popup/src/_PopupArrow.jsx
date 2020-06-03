import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './PopupArrow.module.scss';

const cx = classNamesBind.bind(styles);
/**
 * Half the base of the arrow, to use for arrow positioning offset.
 */
const ARROW_OFFSET = 11;
/**
 * Directional attribute to be applied by a presenting component.
 */
const ARROW_ATTR = 'data-align-arrow';

const propTypes = {
  /**
   * The function returning the frame html reference.
   */
  refCallback: PropTypes.func,
};

const PopupArrow = (props) => {
  const {
    refCallback,
    ...customProps
  } = props;
  const theme = React.useContext(ThemeContext);
  const arrowClass = classNames(
    cx(
      'popup-arrow',
      theme.className,
    ),
    customProps.className,
  );

  return <div {...customProps} className={arrowClass} ref={refCallback} />;
};

PopupArrow.propTypes = propTypes;
PopupArrow.Opts = {
  arrowSize: ARROW_OFFSET,
  positionAttr: ARROW_ATTR,
};

export default PopupArrow;
