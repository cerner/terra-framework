import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
  * Slider label value.
  */
  labelName: PropTypes.string.isRequired,

  /**
  * Minimum value in the range.
  */
  minimumValue: PropTypes.number.isRequired,

  /**
  * Maximum value in the range.
  */
  maximumValue: PropTypes.number.isRequired,

  /**
  * Default or initial value for the slider.
  */
  defaultValue: PropTypes.number.isRequired,

  /**
  * When true, will disable the field.
  */
  isDisabled: PropTypes.bool,

  /**
  * Minimum value label to display on the left side of the slider.
  */
  minimumLabel: PropTypes.string,

  /**
  * Maximum value label to display on the right side of the slider.
  */
  maximumLabel: PropTypes.string,

  /**
   * Function to trigger when user changes the input value. Sends parameter {Event} event.
   */
   onChange: PropTypes.func
};

const defaultProps = {
  isDisabled: false,
};

const Slider = (props) => {
  const {
    isDisabled,
    minimumValue,
    maximumValue,
    defaultValue,
    labelName,
    minimumLabel,
    maximumLabel,
    onChange,
  } = props;

  const sliderRef = useRef();

  useEffect(() => {
    sliderRef.current.style.setProperty('--terra-slider-progress-status', `${sliderRef.current.value}%`);
  }, []);

  function handleValueChange(event) {
    event.currentTarget.style.setProperty('--terra-slider-progress-status', `${event.currentTarget.value}%`);
    event.currentTarget.setAttribute('aria-valuenow', `${event.currentTarget.value}`);

    if (onChange) {
      onChange(event);
    }
  }
  const theme = React.useContext(ThemeContext);

  const sliderClassNames = cx([
    'slider',
    theme.className,
  ]);

  const minLabel = minimumLabel || minimumValue;
  const maxLabel = maximumLabel || maximumValue;

  return (
    <div className={sliderClassNames}>
      <label className={cx('label')} id="sliderLabel">
        {labelName}
      </label>
      <span className={cx('min-label')}>
        {minLabel}
      </span>
      <input className={cx('input-range')} type="range" ref={sliderRef} aria-labelledby="sliderLabel" aria-valuemin={minimumValue} aria-valuemax={maximumValue} aria-valuenow={defaultValue} defaultValue={defaultValue} disabled={isDisabled} min={minimumValue} max={maximumValue} onChange={handleValueChange} />
      <span className={cx('max-label')}>
        {maxLabel}
      </span>
    </div>
  );
};

Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;

export default Slider;
