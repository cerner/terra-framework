import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './ToggleCount.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The child tabs to be placed in the menu.
   */
  value: PropTypes.number,
};

class ToggleCount extends React.Component {
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

    return (
      <div
        {...customProps}
        ref={this.setCountNode}
        className={cx([
          'count',
          customProps.className,
        ])}
      />
    );
  }
}

ToggleCount.propTypes = propTypes;

export default ToggleCount;
