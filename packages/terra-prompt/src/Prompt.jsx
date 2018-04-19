import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'terra-modal';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import { elementType } from 'react-prop-types';
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
  actions: PropTypes.arrayOf(PropTypes.node),
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
    const {
      title,
      message,
      actions,
      ...customProps
    } = this.props;

    return (
      <div {...customProps} className={cx('prompt')}>
        <Modal
          ariaLabel="My Modal"
          isOpen
          onRequestClose
        >
          <div className={cx('prompt-body')}>
            <div className={cx('title')}>{title}</div>
            <div className={cx('message')}>{message}</div>
          </div>
          {actionSection(actions)}
        </Modal>
      </div>
    );
  }
}

Prompt.propTypes = propTypes;
Prompt.defaultProps = defaultProps;
export default Prompt;
