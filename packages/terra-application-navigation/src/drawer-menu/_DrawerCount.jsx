import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './DrawerCount.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The child tabs to be placed in the menu.
   */
  value: PropTypes.number,
};

class DrawerCount extends React.Component {
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
      ...customProps
    } = this.props;

    let validatedValue = value;
    if (value > 999) {
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
          customProps.className,
        ])}
      >
        {validatedValue}
      </div>
    );
  }
}

DrawerCount.propTypes = propTypes;

export default DrawerCount;
