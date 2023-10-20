import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
  * Slider label value.
  */
  labelText: PropTypes.string.isRequired,

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
  value: PropTypes.number.isRequired,

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
  onChange: PropTypes.func,
};

const defaultProps = {
  isDisabled: false,
  onChange: null,
};

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.sliderRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (this.props.value === prevProps.value) {
      return;
    }
    // eslint-disable-next-line react/no-did-update-set-state
    this.setState({
      value: this.props.value,
    });
  }

  handleOnChange(event) {
    this.setState({ value: event.currentTarget.value });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  render() {
    const {
      isDisabled,
      minimumValue,
      maximumValue,
      labelText,
      minimumLabel,
      maximumLabel,
    } = this.props;

    const theme = this.context;
    const sliderClassNames = cx([
      'slider',
      theme.className,
    ]);

    const minLabel = minimumLabel || minimumValue;
    const maxLabel = maximumLabel || maximumValue;

    return (
      /* eslint-disable-next-line react/forbid-dom-props */
      <div style={{ '--terra-slider-progress-status': `${this.state.value}%` }} className={sliderClassNames}>
        <span className={cx('label')}>
          {labelText}
        </span>
        <span className={cx('slider-label', 'slider-min-label')}>
          {minLabel}
        </span>
        <input className={cx('input-range')} type="range" ref={this.sliderRef} aria-label={labelText} value={this.state.value} disabled={isDisabled} min={minimumValue} max={maximumValue} onChange={this.handleOnChange} />
        <span className={cx('slider-label', 'slider-max-label')}>
          {maxLabel}
        </span>
      </div>
    );
  }
}

Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;
Slider.contextType = ThemeContext;

export default Slider;
