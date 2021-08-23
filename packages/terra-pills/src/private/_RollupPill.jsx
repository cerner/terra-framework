import React, {
  useRef,
} from 'react';
import {
  KEY_SPACE, KEY_RETURN,
} from 'keycode-js';
import { injectIntl } from 'react-intl';
import classNamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import ThemeContext from 'terra-theme-context';
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
   * Number of pills that are rolled up.
   */
  rollupCount: PropTypes.number,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const RollUpPill = (props) => {
  const {
    isSingleLine, onSelectRollUp, intl, rollupCount,
  } = props;
  const rollUpPillRef = useRef();
  const theme = React.useContext(ThemeContext);

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
      role="listitem"
      className={cx('pill-list-item')}
    >
      <button
        id="rollup-pill"
        className={cx(['roll-up-pill', 'is-selectable', theme.className])}
        onClick={handleOnSelectRollUp}
        onKeyDown={handleRollUpPillKeyDown}
        onMouseDown={handleRollUpPillMouseDown}
        ref={rollUpPillRef}
        tabIndex="0"
        type="button"
        data-terra-rollup-pill-show-focus-styles
        data-terra-rollup-pill
      >
        <span className={cx('roll-up-pill-label')}>{intl.formatMessage({ id: 'Terra.pills.rollupPillLabel' }, { pillsNotVisibleCount: rollupCount })}</span>
      </button>
    </div>
  ) : null;
};

RollUpPill.propTypes = propTypes;
export default injectIntl(RollUpPill);
