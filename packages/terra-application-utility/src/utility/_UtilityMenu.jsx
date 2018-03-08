import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';
import IconClose from 'terra-icon/lib/icon/IconClose';
import IconLeft from 'terra-icon/lib/icon/IconLeft';
import MenuDivider from './_UtilityMenuDivider';
import Utils from '../_Utils';
import MenuItem from './_UtilityMenuItem';
import styles from './_UtilityMenu.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Key of the top level menu.
   */
  selectedKey: PropTypes.string.isRequired,
  /**
   * Indicates if the height is bound to a value.
   */
  isHeightBounded: PropTypes.bool,
  /**
   * The array of the menu items configs to be rendered.
   */
  menuItems: PropTypes.arrayOf((Utils.itemShape)).isRequired,
  /**
   * The function to trigger when a menu item is selected.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * The function that closes the menu. This will be provided by the header/menu.
   */
  onRequestClose: PropTypes.func,
  /**
   * Sets the Utility variant.
   */
  variant: PropTypes.oneOf([Utils.VARIANTS.HEADER, Utils.VARIANTS.MENU]).isRequired,
};

const processMenuItems = (items) => {
  const map = new Map();
  items.forEach((item) => {
    map.set(
      item.key,
      { id: item.id,
        itemKey: item.key,
        title: item.title,
        content: item.content,
        contentLocation: item.contentLocation,
        isSelected: item.isSelected,
        isSelectable: item.isSelectable,
        childKeys: item.childKeys,
      },
    );
  });
  return map;
};

const hasChevron = (item) => {
  if (item.childKeys && item.childKeys.length > 0) {
    return true;
  }
  return false;
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Please add locale prop to Base component to load translations');
    }
  },
};

class UtilityMenu extends React.Component {
  constructor(props) {
    super(props);
    this.getItem = this.getItem.bind(this);
    this.buildItem = this.buildItem.bind(this);
    this.buildListContent = this.buildListContent.bind(this);
    this.buildFooterContent = this.buildFooterContent.bind(this);
    this.childrenHasCheckmark = this.childrenHasCheckmark.bind(this);
    this.childrenHasChevron = this.childrenHasChevron.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleRequestBack = this.handleRequestBack.bind(this);
    this.pop = this.pop.bind(this);
    this.push = this.push.bind(this);
    this.state = {
      map: processMenuItems(props.menuItems),
      currentKey: props.selectedKey,
      previousKeyStack: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.menuItems === this.props.menuItems) {
      return;
    }

    this.setState({
      map: processMenuItems(nextProps.menuItems),
    });
  }

  getItem(key) {
    return this.state.map.get(key);
  }

  buildItem(key, leftInset, rightInset) {
    const item = this.getItem(key);
    const chevron = hasChevron(item);
    return (
      <MenuItem
        key={key}
        itemKey={key}
        id={item.id}
        title={item.title}
        content={item.content}
        contentLocation={item.contentLocation}
        isSelected={item.isSelected}
        isSelectable={item.isSelectable}
        hasChevron={chevron}
        leftInset={leftInset}
        rightInset={rightInset}
        onChange={this.handleOnChange}
        variant={this.props.variant}
      />
    );
  }

  buildListContent(currentItem) {
    if (currentItem && currentItem.childKeys && currentItem.childKeys.length) {
      const leftInset = this.childrenHasCheckmark(currentItem);
      const rightInset = this.childrenHasChevron(currentItem);
      return (
        <ul className={cx('body')}>
          {currentItem.childKeys.map((key) => {
            let item = null;
            if (this.getItem(key).contentLocation !== Utils.LOCATIONS.FOOTER) {
              item = this.buildItem(key, leftInset, rightInset);
            }
            return item;
          })}
        </ul>
      );
    }
    return null;
  }

  buildFooterContent(currentItem) {
    if (currentItem && currentItem.childKeys && currentItem.childKeys.length) {
      return currentItem.childKeys.map((key) => {
        let item = null;
        if (this.getItem(key).contentLocation === Utils.LOCATIONS.FOOTER) {
          item = this.buildItem(key);
        }
        return item;
      });
    }
    return null;
  }

  childrenHasCheckmark(item) {
    const childrenHasCheckmark = item.childKeys.some((key) => {
      const currentItem = this.getItem(key);
      return currentItem.isSelectable === true && currentItem.contentLocation === Utils.LOCATIONS.BODY;
    });
    return childrenHasCheckmark;
  }

  childrenHasChevron(item) {
    const childrenHasChevron = item.childKeys.some((key) => {
      const childKeys = this.getItem(key).childKeys;
      return childKeys && childKeys.length > 0 && this.getItem(key).contentLocation === Utils.LOCATIONS.BODY;
    });
    return childrenHasChevron;
  }

  /**
   * Function to trigger when an item is selected.
   * 1. Has children: navigate to the next page
   * 2. Toggles: trigger onChange without closing the menu.
   * 3. Endpoint: close menu and trigger onChange.
   * @param {*} event
   * @param {*} key
   */
  handleOnChange(event, key) {
    const childKeys = this.getItem(key).childKeys;
    const item = this.getItem(key);
    if (typeof childKeys !== 'undefined' && childKeys.length > 0) {
      this.setState({
        previousKey: this.push(this.state.currentKey),
        currentKey: key,
      });
    } else {
      if (item.isSelectable !== true) {
        this.props.onRequestClose();
      }
      this.props.onChange(event, key);
    }
  }

  handleRequestBack() {
    this.setState({ currentKey: this.pop() });
  }

  pop() {
    const newStack = this.state.previousKeyStack.slice();
    const lastKey = newStack.pop();
    this.setState({ previousKeyStack: newStack });
    return lastKey;
  }

  push(key) {
    const newStack = this.state.previousKeyStack.slice();
    newStack.push(key);
    this.setState({ previousKeyStack: newStack });
  }

  render() {
    const {
      menuItems,
      selectedKey,
      isHeightBounded,
      onChange,
      onRequestClose,
      variant,
      ...customProps
    } = this.props;

    const { intl } = this.context;
    const backText = intl.formatMessage({ id: 'Terra.application.utility.back' });
    const closeText = intl.formatMessage({ id: 'Terra.application.utility.close' });
    let menuClassNames = null;
    if (variant === Utils.VARIANTS.HEADER) {
      menuClassNames = cx(['header-utility-menu', customProps.className]);
    } else {
      menuClassNames = cx(['menu-utility-menu', customProps.className]);
    }

    const currentKey = this.state.currentKey;
    const currentItem = this.getItem(currentKey);
    const firstPage = currentKey === selectedKey;
    let header = null;
    let closeButton = null;
    let backButton = null;

    backButton = (
      <Button
        onClick={this.handleRequestBack}
        icon={<IconLeft className={cx('icon-left')} />}
        isCompact
        isIconOnly
        text={backText}
        variant={Button.Opts.Variants.UTILITY}
      />
    );
    closeButton = (
      <Button
        onClick={this.props.onRequestClose}
        icon={<IconClose className={cx('icon-close')} />}
        isCompact
        isIconOnly
        text={closeText}
        variant={Button.Opts.Variants.UTILITY}
      />
    );

    const headerClassName = cx([
      { 'initial-page-header-text': firstPage },
      { 'noninital-page-header-text': !firstPage },
    ]);

    header = (
      <div className={cx('header')}>
        <span className={cx('content-container')}>
          <span className={cx('left-content-container')}>
            {!firstPage && backButton}
            <span className={headerClassName}>{currentItem.title}</span>
          </span>
          <span className={cx('right-content-container')}>
            {closeButton}
          </span>
        </span>
        <MenuDivider />
      </div>
    );

    let footer = null;
    const footerItems = this.buildFooterContent(currentItem);
    const hasFooterItems = footerItems.some(item => item !== null);
    if (hasFooterItems) {
      footer = (
        <div className={cx('footer')}>
          <MenuDivider isFooter className={cx('footer-divider')} />
          {footerItems}
        </div>
      );
    }

    return (
      <ContentContainer
        {...customProps}
        header={header}
        footer={footer}
        fill={isHeightBounded}
        className={menuClassNames}
        role={'navigation'}
        aria-label={'Utility Menu'}
      >
        {this.buildListContent(currentItem)}
      </ContentContainer>
    );
  }
}

UtilityMenu.propTypes = propTypes;
UtilityMenu.processMenuItems = processMenuItems;
UtilityMenu.hasChevron = hasChevron;
UtilityMenu.contextTypes = contextTypes;

export default UtilityMenu;
