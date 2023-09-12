import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * When true, will disable the field.
  */
  isDisabled: PropTypes.bool,

  /**
   * Minimum value in the range.
  */
  minimumValue: PropTypes.number.isRequired,

  /**
   * Maximum value in the range.
  */
  maximumValue: PropTypes.number.isRequired,

  /**
  * Slider label value.
  */
  labelName: PropTypes.string.isRequired,

  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  isDisabled: false,
};

/* eslint-disable-next-line react/prefer-stateless-function */
class Slider extends React.Component {
  /* eslint-disable-next-line  no-useless-constructor */
  constructor(props) {
    super(props);
  }

  render() {
    const {
      isDisabled,
      minimumValue,
      maximumValue,
      labelName,
    } = this.props;

    const theme = this.context;

    const sliderClassNames = cx([
      'slider',
      theme.className,
    ]);

    return (
      <div className={sliderClassNames}>
        <label className={cx('label')} aria-label={labelName}>{labelName}</label>
        <input type="range" name="slider" aria-label="slider" disabled={isDisabled} min={minimumValue} max={maximumValue} step="any" />
      </div>
    );
  }
}

Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;
Slider.contextType = ThemeContext;

export default injectIntl(Slider);
