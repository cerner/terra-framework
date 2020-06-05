import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { injectIntl, intlShape } from 'react-intl';
import Menu from 'terra-menu';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import { handleArrows } from './_TabUtils';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Tabs that should be displayed collapsed as selectable menu items.
   */
  children: PropTypes.node,

  /**
   * Ref callback for menu toggle.
   */
  refCallback: PropTypes.func,
  /**
   * @private
   * Object containing intl APIs.
   */
  intl: intlShape.isRequired,
  ids: PropTypes.array,
};

class TabMenu extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleOnRequestClose = this.handleOnRequestClose.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.getTargetRef = this.getTargetRef.bind(this);
    this.setTargetRef = this.setTargetRef.bind(this);
    this.wrapOnClick = this.wrapOnClick.bind(this);
    this.state = {
      isOpen: false,
    };
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

  handleOnRequestClose() {
    this.setState({ isOpen: false });
  }

  handleOnClick(event) {
    // this.setState({ isOpen: true });
    this.props.onSelect(event);
  }

  handleOnKeyDown(event) {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      event.preventDefault();
      // this.setState({ isOpen: true });
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

      this.setState({ isOpen: false });
    };
  }

  render() {
    const {
      intl,
      ids,
      ...customProps
    } = this.props;
    const menuItems = [];
    let menuToggleText = intl.formatMessage({ id: 'Terra.tabs.more' });
    let menuActive = false;

    // React.Children.forEach(children, (child) => {
    //   const {
    //     label, customDisplay, icon, isIconOnly, isSelected, metaData, isHidden, ...otherProps
    //   } = child.props;

    //   if (isSelected && isHidden) {
    //     // menuToggleText = label;
    //     menuActive = true;yt^
    //   }
    //   menuItems.push((
    //     <Menu.Item
    //       {...otherProps}
    //       text={label}
    //       onClick={this.wrapOnClick(child, metaData)}
    //       isSelected={isSelected}
    //       isSelectable
    //       key={child.key}
    //     />
    //   ));
    // });
    const theme = this.context;

    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <div
        role="button"
        tabIndex="-1"
        ref={this.setTargetRef}
        onClick={this.handleOnClick}
        onKeyDown={this.handleOnKeyDown}
        className={cx('tab-menu', { 'is-active': menuActive }, theme.className)}
        data-terra-tabs-menu
      >
        <span>{menuToggleText}</span>
        <IconCaretDown />
      </div>
      /* eslint-enable jsx-ally/no-static-element-interactions */
    );
  }
}

TabMenu.propTypes = propTypes;

export default injectIntl(TabMenu);
