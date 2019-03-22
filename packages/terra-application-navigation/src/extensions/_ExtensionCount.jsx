import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './ExtensionCount.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The child tabs to be placed in the menu.
   */
  value: PropTypes.number,
  /**
   * Prop from popup, determines if the menu height is bound by the screen.
   */
  isInline: PropTypes.bool,
  /**
   * Prop from popup, determines if the menu height is bound by the screen.
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
      isInline,
      isRollup,
      ...customProps
    } = this.props;

    let validatedValue = value;
    if (isRollup) {
      validatedValue = null;
    } else if (isInline && value > 999) {
      validatedValue = '999+';
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
