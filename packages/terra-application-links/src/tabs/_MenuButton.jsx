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

class MenuButton extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.update = this.update.bind(this);

    this.hasMounted = false;
  }

  componentDidMount() {
    window.requestAnimationFrame(this.update);
  }

  update() {
    if (this.contentNode) {
      this.contentNode.setAttribute('aria-current', 'true');
      this.hasMounted = true;
    }
  }

  render() {
    const {
      popup,
      refCallback,
      text,
      ...customProps
    } = this.props;

    const attributes = {};
    if (this.hasMounted) {
      attributes['aria-current'] = true;
    }
    return (
      <div {...customProps} {...attributes} className={cx(['tab-menu'])} ref={(node) => { this.contentNode = node; this.props.refCallback(node); }}>
        <span>{text}</span>
        <IconCaretDown />
        {popup}
      </div>
    );
  }
}

MenuButton.propTypes = propTypes;

export default MenuButton;
