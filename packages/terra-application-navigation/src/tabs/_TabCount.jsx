import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './TabCount.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The child tabs to be placed in the menu.
   */
  value: PropTypes.number,
  /**
   * Whether or not the count is to be display in inline style.
   */
  isInline: PropTypes.bool,
  /**
   * Whether or not the count represents rolled up counts.
   */
  isRollup: PropTypes.bool,
  /**
   * Callback function for the count node.
   */
  refCallback: PropTypes.func,
};

class TabCount extends React.Component {
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
      isInline,
      isRollup,
      refCallback,
      ...customProps
    } = this.props;

    let digitClass = null;
    if (!isInline && value > 0) {
      if (value < 10) {
        digitClass = 'one';
      } else if (value < 100) {
        digitClass = 'two';
      } else {
        digitClass = 'plus';
      }
    }

    let validatedValue = value;
    if (isRollup) {
      validatedValue = null;
    } else if (value > 99) {
      validatedValue = '99+';
    }

    return (
      <div
        {...customProps}
        ref={this.setCountNode}
        className={cx([
          'count',
          { 'is-inline': isInline },
          { 'is-rollup': isRollup },
          digitClass,
          customProps.className,
        ])}
      >
        {validatedValue}
      </div>
    );
  }
}

TabCount.propTypes = propTypes;

export default TabCount;
