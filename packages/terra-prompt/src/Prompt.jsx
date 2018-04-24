import React from 'react';
import PropTypes from 'prop-types';
import AbstractModal from 'terra-abstract-modal';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import { elementType } from 'airbnb-prop-types';
import styles from './Prompt.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Title of the prompt.
   */
  title: PropTypes.string,
  /**
   * Message of the prompt.
   */
  message: PropTypes.string,
  /**
   * Array of buttons. Restricted to terra-button.
   */
  actions: PropTypes.arrayOf(elementType(Button)),
  /*
   * Toggle to show prompt or not.
   */
  showprompt: PropTypes.bool.isRequired,
  /*
   * Callback function indicating a close condition was met, should be combined with showprompt for state management.
   */
  onRequestClose: PropTypes.func.isRequired,
};

const defaultProps = {
  title: null,
  message: null,
  actions: [],
};

const actionSection = (actions) => {
  if (!actions || !actions.length) {
    return null;
  }
  return <div className={cx('actions')}>{actions}</div>;
};

class Prompt extends React.Component {
  render() {
    if (!this.props.showprompt) {
      return null;
    }

    const {
      title,
      message,
      actions,
      showprompt,
      onRequestClose,
      ...customProps
    } = this.props;

    return (
      <div {...customProps} className={cx('prompt')}>
        <AbstractModal
          ariaLabel="Prompt"
          classNameModal={cx('prompt')}
          isOpen={this.props.showprompt}
          onRequestClose={this.props.onRequestClose}
          zIndex="8000"
        >
          <div className={cx('prompt-body')}>
            <div className={cx('title')}>{title}</div>
            <div className={cx('message')}>{message}</div>
            {actionSection(actions)}
          </div>
        </AbstractModal>
      </div>
    );
  }
}

Prompt.propTypes = propTypes;
Prompt.defaultProps = defaultProps;
export default Prompt;
