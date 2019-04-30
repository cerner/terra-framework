import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './ExtensionCount.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The number of notifications to display..
   */
  value: PropTypes.number,
  /**
   * Whether or not the count represents rolled up counts.
   */
  isRollup: PropTypes.bool,
};

class ExtensionCount extends React.Component {
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
      isRollup,
      ...customProps
    } = this.props;

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
          { 'is-rollup': isRollup },
          customProps.className,
        ])}
      >
        {validatedValue}
      </div>
    );
  }
}

ExtensionCount.propTypes = propTypes;

export default ExtensionCount;
