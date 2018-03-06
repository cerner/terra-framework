import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import styles from './ApplicationTabs.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Whether or not the menu display should be hidden.
   */
  isHidden: PropTypes.bool,
  /**
   * Whether or not the menu display should be animated with selection.
   */
  isSelected: PropTypes.bool,
  /**
   * The terra-popup to attach to the menu display.
   */
  popup: PropTypes.node,
  /**
   * The display text for the display.
   */
  text: PropTypes.string,
  /**
   * Ref callback for menu display.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  isSelected: false,
  isHidden: false,
};

class TabMenuDisplay extends React.Component {
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
      isHidden,
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
        className={cx(['tab-menu-display', { 'is-hidden': isHidden }])}
        ref={(node) => { this.contentNode = node; this.props.refCallback(node); }}
      >
        <div className={cx(['inner'])}>
          <span>{text}</span>
          <IconCaretDown />
        </div>
        {popup}
      </div>
    );
  }
}

TabMenuDisplay.propTypes = propTypes;
TabMenuDisplay.defaultProps = defaultProps;

export default TabMenuDisplay;
