import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import styles from './ApplicationTabs.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Ref callback for menu toggle.
   */
  isMenuHidden: PropTypes.bool,
  /**
   * Ref callback for menu toggle.
   */
  isSelected: PropTypes.bool,
  /**
   * Ref callback for menu toggle.
   */
  popup: PropTypes.node,
  /**
   * Ref callback for menu toggle.
   */
  text: PropTypes.string,
  /**
   * Ref callback for menu toggle.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  isSelected: false,
  isMenuHidden: false,
};

class MenuButton extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.update = this.update.bind(this);

    this.hasAnimated = false;
  }

  componentDidMount() {
    window.requestAnimationFrame(this.update);
  }

  update() {
    if (this.props.isSelected && this.contentNode && !this.hasAnimated) {
      this.contentNode.setAttribute('aria-current', 'true');
      this.hasAnimated = true;
    }
  }

  render() {
    const {
      isMenuHidden,
      isSelected,
      popup,
      refCallback,
      text,
      ...customProps
    } = this.props;

    const attributes = {};
    if (isSelected && this.hasAnimated) {
      attributes['aria-current'] = true;
    }

    return (
      <div
        {...customProps}
        {...attributes}
        className={cx(['tab-menu', { 'menu-hidden': isMenuHidden }])}
        ref={(node) => { this.contentNode = node; this.props.refCallback(node); }}
      >
        <span>{text}</span>
        <IconCaretDown />
        {popup}
      </div>
    );
  }
}

MenuButton.propTypes = propTypes;
MenuButton.defaultProps = defaultProps;

export default MenuButton;
