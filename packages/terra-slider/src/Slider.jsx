import React, {
  useContext, useState, useRef, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import { injectIntl } from 'react-intl';
import { v4 as uuidv4 } from 'uuid';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
  * The label for the slider.
  */
  label: PropTypes.string.isRequired,

  /**
  * The minimum value in the range.
  */
  minimumValue: PropTypes.number.isRequired,

  /**
  * The maximum value in the range.
  */
  maximumValue: PropTypes.number.isRequired,

  /**
  * The default or initial value for the slider.
  */
  value: PropTypes.number.isRequired,

  /**
  * When set to **true**, the slider is disabled.
  */
  isDisabled: PropTypes.bool,

  /**
  * The minimum value label to display on the left of the slider.
  */
  minimumLabel: PropTypes.string,

  /**
  * The maximum value label to display on the right of the slider.
  */
  maximumLabel: PropTypes.string,

  /**
  * The function that activates when a user changes the input value - function(value).
  */
  onChange: PropTypes.func,

  /**
  * @private
  * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
  */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  isDisabled: false,
};

const Slider = props => {
  const {
    isDisabled,
    intl,
    minimumValue,
    maximumValue,
    label,
    minimumLabel,
    maximumLabel,
    onChange,
    value,
  } = props;

  const theme = useContext(ThemeContext);
  const sliderClassNames = cx([
    'slider',
    theme.className,
  ]);
  const sliderRef = useRef();
  const minLabel = minimumLabel || minimumValue;
  const maxLabel = maximumLabel || maximumValue;
  const visuallyHiddenTextValue = (minimumLabel && maximumLabel)
    ? intl.formatMessage({ id: 'Terra.slider.ariaDescribedByTextWithLabels' }, {
      minimumLabel, maximumLabel, minimumValue, maximumValue,
    })
    : intl.formatMessage({ id: 'Terra.slider.ariaDescribedByTextWithoutLabels' }, { minimumValue, maximumValue });
  const descriptionId = uuidv4();
  const [slidervalue, setSliderValue] = useState(value);

  useEffect(() => {
    setSliderValue(value);
  }, [value]);

  const handleOnChange = (event) => {
    setSliderValue(event.currentTarget.value);
    if (onChange) {
      onChange(event.currentTarget.value);
    }
  };

  return (
  /* eslint-disable-next-line react/forbid-dom-props */
    <div style={{ '--terra-slider-progress-status': `${slidervalue}%` }} className={sliderClassNames}>
      <span className={cx('label')} aria-hidden="true">
        {label}
      </span>
      <span className={cx('slider-label', 'slider-min-label')} aria-hidden="true">
        {minLabel}
      </span>
      <input className={cx('input-range')} type="range" ref={sliderRef} aria-label={label} aria-describedby={descriptionId} value={slidervalue} disabled={isDisabled} min={minimumValue} max={maximumValue} onChange={handleOnChange} />
      <span className={cx('slider-label', 'slider-max-label')} aria-hidden="true">
        {maxLabel}
      </span>
      <VisuallyHiddenText id={descriptionId} text={visuallyHiddenTextValue} />
    </div>
  );
};

Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;

export default injectIntl(Slider);
