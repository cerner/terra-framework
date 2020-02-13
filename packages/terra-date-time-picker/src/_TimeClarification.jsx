import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AbstractModal from 'terra-abstract-modal';
import Button from 'terra-button';
import { injectIntl, intlShape } from 'react-intl';
import DateTimeUtils from './DateTimeUtils';
import styles from './_TimeClarification.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * An ISO 8601 date time with the ambiguous hour.
   */
  ambiguousDateTime: PropTypes.object,
  /**
   * @private
   * intl object programmatically imported through injectIntl from react-intl.
   * */
  intl: intlShape.isRequired,
  /**
   * If set to true, the modal will rendered as opened
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * If set to true, the button to open the modal will be hidden.
   */
  isOffsetButtonHidden: PropTypes.bool.isRequired,
  /**
   * A callback function triggered when the timezone offset button loses focus.
   */
  onBlur: PropTypes.func,
  /**
   * Callback function indicating the before time change option was selected.
   */
  onDaylightSavingButtonClick: PropTypes.func.isRequired,
  /**
   * A callback function triggered when the timezone offset button gains focus.
   */
  onFocus: PropTypes.func,
  /**
   * Callback function indicating the after time change option was selected.
   */
  onStandardTimeButtonClick: PropTypes.func.isRequired,
  /**
   * Callback function indicating the DST offset button was selected.
   */
  onOffsetButtonClick: PropTypes.func.isRequired,
  /**
   * Callback function indicating the modal is requesting to close.
   */
  onRequestClose: PropTypes.func.isRequired,
  /**
   * Whether the clarification is disabled.
   */
  disabled: PropTypes.bool,
};

const defaultProps = {
  disabled: false,
};

class TimeClarification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offsetDisplay: '',
      offsetLongDisplay: '',
    };

    this.handleDaylightSavingButtonClick = this.handleDaylightSavingButtonClick.bind(this);
    this.handleStandardTimeButtonClick = this.handleStandardTimeButtonClick.bind(this);
  }

  handleDaylightSavingButtonClick(event) {
    this.setState({
      offsetDisplay: DateTimeUtils.getDaylightSavingTZDisplay(this.props.ambiguousDateTime),
      offsetLongDisplay: DateTimeUtils.getDaylightSavingExpandedTZDisplay(this.props.ambiguousDateTime),
    });

    if (this.props.onDaylightSavingButtonClick) {
      this.props.onDaylightSavingButtonClick(event);
    }
  }

  handleStandardTimeButtonClick(event) {
    this.setState({
      offsetDisplay: DateTimeUtils.getStandardTZDisplay(this.props.ambiguousDateTime),
      offsetLongDisplay: DateTimeUtils.getStandardExpandedTZDisplay(this.props.ambiguousDateTime),
    });

    if (this.props.onStandardTimeButtonClick) {
      this.props.onStandardTimeButtonClick(event);
    }
  }

  render() {
    if (this.props.isOffsetButtonHidden) {
      this.state.offsetDisplay = '';
    }

    const offsetButtonClassNames = cx([
      'button-offset',
      { 'button-offset-hidden': this.props.isOffsetButtonHidden || !this.state.offsetDisplay },
    ]);

    const { intl } = this.props;
    const title = intl.formatMessage({ id: 'Terra.dateTimePicker.timeClarification.title' });
    const message = intl.formatMessage({ id: 'Terra.dateTimePicker.timeClarification.message' });
    const daylightSavingButtonLabel = intl.formatMessage({ id: 'Terra.dateTimePicker.timeClarification.button.daylightSaving' });
    const standardTimeButtonLabel = intl.formatMessage({ id: 'Terra.dateTimePicker.timeClarification.button.standardTime' });

    return (
      <React.Fragment>
        <AbstractModal
          classNameModal={cx('time-clarification')}
          ariaLabel="Time Clarification"
          isOpen={this.props.isOpen}
          onRequestClose={this.props.onRequestClose}
          closeOnEsc={false}
          closeOnOutsideClick={false}
          zIndex="9000"
        >
          <div>
            <header className={cx('header')}>
              {<h1 className={cx('title')}>{title}</h1>}
            </header>
            <div className={cx('body')}>
              <p>{message}</p>
            </div>
            <div className={cx('buttons')}>
              <Button
                text={daylightSavingButtonLabel}
                onClick={this.handleDaylightSavingButtonClick}
                variant={Button.Opts.Variants.EMPHASIS}
                className={cx('button-daylight')}
              />
              <Button
                text={standardTimeButtonLabel}
                onClick={this.handleStandardTimeButtonClick}
                variant={Button.Opts.Variants.EMPHASIS}
                className={cx('button-standard')}
              />
            </div>
          </div>
        </AbstractModal>
        <div className={cx('offset-button-container')}>
          <Button
            title={this.state.offsetLongDisplay}
            aria-label={this.state.offsetLongDisplay}
            className={offsetButtonClassNames}
            onBlur={this.props.onBlur}
            onFocus={this.props.onFocus}
            onClick={this.props.onOffsetButtonClick}
            text={this.state.offsetDisplay}
            isCompact
            isDisabled={this.props.disabled}
          />
        </div>
      </React.Fragment>
    );
  }
}

TimeClarification.propTypes = propTypes;
TimeClarification.defaultProps = defaultProps;

export default injectIntl(TimeClarification);
