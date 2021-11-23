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
import VisuallyHiddenText from 'terra-visually-hidden-text';
import styles from './Pill.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Determines if the Pill List is rolled up or not.
   */
  isCollapsed: PropTypes.bool,
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
    isCollapsed, onSelectRollUp, intl, rollupCount,
  } = props;
  const rollUpPillRef = useRef();
  const theme = React.useContext(ThemeContext);

  const handleOnSelectRollUp = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onSelectRollUp(event);
  };

  const handleRollUpPillKeyDown = (event) => {
    rollUpPillRef.current.setAttribute('data-terra-rollup-pill-show-focus-styles', 'true');
    if (event.keyCode === KEY_RETURN || event.keyCode === KEY_SPACE) {
      event.preventDefault();
      event.stopPropagation();
      onSelectRollUp(event);
    }
  };

  const handleRollUpPillMouseDown = () => {
    rollUpPillRef.current.setAttribute('data-terra-rollup-pill-show-focus-styles', 'false');
  };

  const handleOnBlur = () => {
    rollUpPillRef.current.setAttribute('data-terra-rollup-pill-show-focus-styles', 'true');
  };

  const rollUpLabel = isCollapsed && rollupCount > 0 ? intl.formatMessage({ id: 'Terra.pills.label.rollupPill' }, { pillsNotVisibleCount: rollupCount }) : intl.formatMessage({ id: 'Terra.pills.label.showLess' });
  const rollUpHint = isCollapsed ? intl.formatMessage({ id: 'Terra.pills.hint.rollupPill' }, { pillsNotVisibleCount: rollupCount }) : intl.formatMessage({ id: 'Terra.pills.hint.showLess' });
  return (
    <div
      role="listitem"
      className={cx('pill-list-item')}
    >
      <button
        id="rollup-pill"
        className={cx(['rollup-pill', 'is-selectable', theme.className])}
        onClick={handleOnSelectRollUp}
        onKeyDown={handleRollUpPillKeyDown}
        onMouseDown={handleRollUpPillMouseDown}
        onBlur={handleOnBlur}
        ref={rollUpPillRef}
        tabIndex="0"
        type="button"
        aria-describedby="rollup-pill-hint"
        data-terra-rollup-pill-show-focus-styles
        data-terra-rollup-pill
      >
        <span className={cx('rollup-pill-label')}>{rollUpLabel}</span>
      </button>
      <VisuallyHiddenText id="rollup-pill-hint" text={rollUpHint} aria-hidden="true" />
    </div>
  );
};

RollUpPill.propTypes = propTypes;
export default injectIntl(RollUpPill);
