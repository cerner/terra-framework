import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './PopupCount.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The number of notifications to display..
   */
  value: PropTypes.number,
};

class PopupCount extends React.Component {
  constructor(props) {
    super(props);
    this.listener = this.listener.bind(this);
    this.setCountNode = this.setCountNode.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.value > prevProps.value && this.countNode) {
      this.countNode.addEventListener('animationend', this.listener);
      this.countNode.setAttribute('data-count-pulse', 'true');
    }
  }

  setCountNode(node) {
    this.countNode = node;
  }

  listener() {
    this.countNode.setAttribute('data-count-pulse', 'false');
    this.countNode.removeEventListener('animationend', this.listener);
  }

  render() {
    const {
      value,
    } = this.props;

    let validatedValue = value;
    if (value > 999) {
      validatedValue = '999+';
    }

    return (
      <div
        ref={this.setCountNode}
        className={cx('popup-count')}
      >
        {validatedValue}
      </div>
    );
  }
}

PopupCount.propTypes = propTypes;

export default PopupCount;
