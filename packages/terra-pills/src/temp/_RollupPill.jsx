import React, {
  useRef,
} from 'react';
import {
  KEY_SPACE, KEY_RETURN,
} from 'keycode-js';
import { injectIntl } from 'react-intl';
import classNamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Pill.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Determines if the Pill List is rolled up or not.
   */
  isSingleLine: PropTypes.bool,
  /**
   * Callback function triggered on click/key press of the roll-up pill
   */
  onSelectRollUp: PropTypes.func,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  /**
   * Number of pills that are rolled up.
   */
  rollupCount: PropTypes.number,
};

const RollUpPill = (props) => {
  const {
    isSingleLine, onSelectRollUp, intl, rollupCount,
  } = props;
  const rollUpPillRef = useRef();

  const handleOnSelectRollUp = (event) => {
    onSelectRollUp(event);
  };

  const handleRollUpPillKeyDown = (event) => {
    rollUpPillRef.current.setAttribute('data-terra-rollup-pill-show-focus-styles', 'true');
    if (event.keyCode === KEY_RETURN || event.keyCode === KEY_SPACE) {
      onSelectRollUp(event);
    }
  };

  const handleRollUpPillMouseDown = () => {
    rollUpPillRef.current.setAttribute('data-terra-rollup-pill-show-focus-styles', 'false');
  };

  return (isSingleLine && rollupCount > 0) ? (
    <div
      id="rollup-pill"
      className={cx(['roll-up-pill'])}
      onClick={handleOnSelectRollUp}
      onKeyDown={handleRollUpPillKeyDown}
      onMouseDown={handleRollUpPillMouseDown}
      ref={rollUpPillRef}
      role="button"
      tabIndex="0"
      data-terra-rollup-pill-show-focus-styles
      data-terra-rollup-pill
    >
      {intl.formatMessage({ id: 'Terra.pills.rollupPillLabel' }, { pillsNotVisibleCount: rollupCount })}
    </div>
  ) : null;
};

RollUpPill.propTypes = propTypes;
export default injectIntl(RollUpPill);
