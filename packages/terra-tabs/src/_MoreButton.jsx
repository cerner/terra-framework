import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import { handleArrows } from './_TabUtils';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Whether or not the 
   */
  isActive: PropTypes.bool,
  /**
   * Ref callback for menu toggle.
   */
  refCallback: PropTypes.func,
  /**
   * @private
   * Object containing intl APIs.
   */
  intl: intlShape.isRequired,
  onSelect: PropTypes.func,
};

class MoreButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.wrapOnClick = this.wrapOnClick.bind(this);
  }

  getTargetRef() {
    return this.targetRef;
  }

  setTargetRef(node) {
    this.targetRef = node;

    if (this.props.refCallback) {
      this.props.refCallback(node);
    }
  }

  handleOnClick(event) {
    this.props.onSelect(event);
  }

  handleOnKeyDown(event) {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      event.preventDefault();
      this.props.onSelect(event);
    } else {
      handleArrows(event, -1, this.props.ids);
    }
  }

  wrapOnClick(child, metaData) {
    return (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (child.props.onSelect) {
        child.props.onSelect(metaData);
      }
    };
  }

  render() {
    const {
      intl,
      isActive,
      refCallback,
    } = this.props;

    // translate
    const menuToggleText = 'More Tabs';
    const theme = this.context;

    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <div
        aria-hidden
        role="button"
        ref={refCallback}
        onClick={this.handleOnClick}
        onKeyDown={this.handleOnKeyDown}
        className={cx('tab-menu', { 'is-active': isActive }, theme.className)}
        data-terra-tabs-menu
      >
        <span>{menuToggleText}</span>
        <IconCaretDown />
      </div>
      /* eslint-enable jsx-ally/no-static-element-interactions */
    );
  }
}

MoreButton.propTypes = propTypes;

export default injectIntl(MoreButton);
