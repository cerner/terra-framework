import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import 'terra-base/lib/baseStyles';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';
import IconClose from 'terra-icon/lib/icon/IconClose';
import IconLeft from 'terra-icon/lib/icon/IconLeft';
import MenuDivider from './_UtilityMenuDivider';
import Utils from '../Utils';
import MenuItem from './_UtilityMenuItem';
import styles from './_UtilityMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The initial selected key. Used as the top level menu page.
   */
  initialSelectedKey: PropTypes.string.isRequired,
  /**
   * The intl object to be injected for translations. Provided by the injectIntl function.
   */
  intl: intlShape.isRequired,
  /**
   * Indicates if the height is bound to it's parent container.
   */
  isHeightBounded: PropTypes.bool,
  /**
   * The array of the menu items configs to be rendered.
   */
  menuItems: PropTypes.arrayOf((Utils.itemShape)).isRequired,
  /**
   * The function to trigger when a menu item is selected.
   * Returns (event, { key: String, metaData: Object})
   */
  onChange: PropTypes.func.isRequired,
  /**
   * The function that closes the menu.
   * This will be provided by the terra-application-header or terra-application-menu.
   */
  onRequestClose: PropTypes.func,
  /**
   * Sets the Utility variant. One of Utils.VARIANTS.HEADER, Utils.VARIANTS.MENU.
   */
  variant: PropTypes.oneOf([Utils.VARIANTS.HEADER, Utils.VARIANTS.MENU]),
};

const processMenuItems = (items) => {
  const map = new Map();
  items.forEach((item) => {
    map.set(
      item.key,
      { itemKey: item.key, ...item },
    );
  });
  return map;
};

const hasChevron = item => item.childKeys && item.childKeys.length > 0;

class UtilityMenu extends React.Component {
  constructor(props) {
    super(props);
    this.getItem = this.getItem.bind(this);
    this.buildItem = this.buildItem.bind(this);
    this.buildListContent = this.buildListContent.bind(this);
    this.buildFooterContent = this.buildFooterContent.bind(this);
    this.childrenHasCheckmark = this.childrenHasCheckmark.bind(this);
    this.childrenHasChevron = this.childrenHasChevron.bind(this);
    this.setMenuNode = this.setMenuNode.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.pop = this.pop.bind(this);
    this.push = this.push.bind(this);
    this.state = {
      map: processMenuItems(props.menuItems),
      currentKey: props.initialSelectedKey,
      focusIndex: -1,
      previousKeyStack: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.initialSelectedKey !== this.props.initialSelectedKey) {
      this.setState({
        currentKey: nextProps.initialSelectedKey,
      });
    }

    if (nextProps.menuItems !== this.props.menuItems) {
      this.setState({
        map: processMenuItems(nextProps.menuItems),
      });
    }
  }

  componentDidUpdate() {
    if (this.menuNode && this.state.focusIndex === -1) {
      this.menuNode.focus();
    }
  }

  getItem(key) {
    return this.state.map.get(key);
  }

  setMenuNode(node) {
    if (node) {
      this.menuNode = node;
    }
  }

  buildItem(key, leftInset, rightInset, isActive, handleOnKeyDown) {
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
        isActive={isActive}
        isSelected={item.isSelected}
        isSelectable={item.isSelectable}
        hasChevron={chevron}
        leftInset={leftInset}
        rightInset={rightInset}
        onChange={this.handleOnChange}
        onKeyDown={handleOnKeyDown}
        variant={this.props.variant}
      />
    );
  }

  buildListContent(currentItem) {
    if (currentItem && currentItem.childKeys && currentItem.childKeys.length) {
      const leftInset = this.childrenHasCheckmark(currentItem);
      const rightInset = this.childrenHasChevron(currentItem);
      let index = -1;
      return (
        <ul className={cx('utility-menu-body')}>
          {currentItem.childKeys.map((key) => {
            if (this.getItem(key).contentLocation !== Utils.LOCATIONS.FOOTER) {
              index += 1;
              const onKeyDown = this.handleOnKeyDown(index);
              const isActive = index === this.state.focusIndex;
              return this.buildItem(key, leftInset, rightInset, isActive, onKeyDown);
            }
            return null;
          })}
        </ul>
      );
    }
    return null;
  }

  buildFooterContent(currentItem) {
    if (currentItem && currentItem.childKeys && currentItem.childKeys.length) {
      return currentItem.childKeys.map((key) => {
        if (this.getItem(key).contentLocation === Utils.LOCATIONS.FOOTER) {
          return this.buildItem(key);
        }
        return null;
      });
    }
    return null;
  }

  childrenHasCheckmark(item) {
    const childrenHasCheckmark = item.childKeys.some((key) => {
      const currentItem = this.getItem(key);
      return currentItem.isSelectable === true && currentItem.contentLocation !== Utils.LOCATIONS.FOOTER;
    });
    return childrenHasCheckmark;
  }

  childrenHasChevron(item) {
    const childrenHasChevron = item.childKeys.some((key) => {
      const { childKeys } = this.getItem(key);
      return childKeys && childKeys.length > 0 && this.getItem(key).contentLocation !== Utils.LOCATIONS.FOOTER;
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
    const { childKeys } = this.getItem(key);
    const item = this.getItem(key);
    if (childKeys && childKeys.length > 0) {
      this.setState(prevState => ({ previousKey: this.push(prevState.currentKey), currentKey: key }));
    } else {
      this.props.onRequestClose();
      this.props.onChange(event, { key, metaData: item.metaData });
    }

    if (this.state.focusIndex !== -1) {
      this.setState({ focusIndex: -1 });
    }
  }

  handleOnKeyDown(index) {
    return ((event) => {
      if (event.nativeEvent.keyCode === Utils.KEY_CODES.LEFT_ARROW && this.state.currentKey !== this.props.initialSelectedKey) {
        this.pop();
      } else if (event.nativeEvent.keyCode === Utils.KEY_CODES.UP_ARROW && this.state.focusIndex !== 0) {
        this.setState({ focusIndex: index - 1 });
      } else if (event.nativeEvent.keyCode === Utils.KEY_CODES.DOWN_ARROW || event.nativeEvent.keyCode === Utils.KEY_CODES.tab) {
        this.setState({ focusIndex: index + 1 });
      }
    });
  }

  pop() {
    this.setState((prevState) => {
      const newStack = prevState.previousKeyStack.slice();
      return { previousKeyStack: newStack, currentKey: newStack.pop() };
    });
  }

  push(key) {
    this.setState((prevState) => {
      const newStack = prevState.previousKeyStack.slice();
      newStack.push(key);
      return { previousKeyStack: newStack };
    });
  }

  render() {
    const {
      menuItems,
      initialSelectedKey,
      intl,
      isHeightBounded,
      onChange,
      onRequestClose,
      variant,
      ...customProps
    } = this.props;

    const { currentKey } = this.state;
    const currentItem = this.getItem(currentKey);
    const firstPage = currentKey === initialSelectedKey;

    const menuClassNames = cx([
      'utility-menu',
      { 'header-utility-menu': variant === Utils.VARIANTS.HEADER },
      { 'menu-utility-menu': variant === Utils.VARIANTS.MENU },
      customProps.className,
    ]);

    const headerClassNames = cx([
      'utility-menu-header',
      { 'header-utility-menu-header': variant === Utils.VARIANTS.HEADER },
      { 'menu-utility-menu-header': variant === Utils.VARIANTS.MENU },
    ]);

    const contentContainerClassNames = cx([
      'utility-menu-content-container',
      { 'header-utility-menu-content-container': variant === Utils.VARIANTS.HEADER },
      { 'menu-utility-menu-content-container': variant === Utils.VARIANTS.MENU },
    ]);

    const leftContentContainer = cx([
      'utility-menu-left-content-container',
      { 'header-utility-menu-left-content-container': variant === Utils.VARIANTS.HEADER },
      { 'menu-utility-menu-left-content-container': variant === Utils.VARIANTS.MENU },
    ]);

    const headerTextClassName = cx([
      { 'header-utility-menu-initial-page-header-text': firstPage && variant === Utils.VARIANTS.HEADER },
      { 'menu-utility-menu-initial-page-header-text': firstPage && variant === Utils.VARIANTS.MENU },
      { 'header-utility-menu-noninitial-page-header-text': !firstPage && variant === Utils.VARIANTS.HEADER },
      { 'menu-utility-menu-noninitial-page-header-text': !firstPage && variant === Utils.VARIANTS.MENU },
    ]);

    const iconLeftClassNames = cx([
      'utility-menu-icon-left',
      { 'header-utility-menu-icon-left': variant === Utils.VARIANTS.HEADER },
      { 'menu-utility-menu-icon-left': variant === Utils.VARIANTS.MENU },
    ]);

    const iconCloseClassNames = cx([
      'utility-menu-icon-close',
      { 'header-utility-menu-icon-close': variant === Utils.VARIANTS.HEADER },
      { 'menu-utility-menu-icon-close': variant === Utils.VARIANTS.MENU },
    ]);

    const backText = intl.formatMessage({ id: 'Terra.application.utility.back' });
    const backButton = (
      <Button
        onClick={this.pop}
        icon={<IconLeft className={iconLeftClassNames} />}
        isCompact
        isIconOnly
        text={backText}
        variant={Button.Opts.Variants.UTILITY}
      />
    );

    const closeText = intl.formatMessage({ id: 'Terra.application.utility.close' });
    const closeButton = (
      <Button
        onClick={this.props.onRequestClose}
        icon={<IconClose className={iconCloseClassNames} />}
        isCompact
        isIconOnly
        text={closeText}
        variant={Button.Opts.Variants.UTILITY}
      />
    );

    let headerText;
    if (currentItem !== undefined) {
      headerText = currentItem.title;
    }
    const header = (
      <div className={headerClassNames}>
        <span className={contentContainerClassNames}>
          <span className={leftContentContainer}>
            {!firstPage && backButton}
            <span className={headerTextClassName}>{headerText}</span>
          </span>
          <span className={cx('utility-menu-right-content-container')}>
            {closeButton}
          </span>
        </span>
        <MenuDivider isTop />
      </div>
    );

    let footer;
    const footerItems = this.buildFooterContent(currentItem);
    const hasFooterItems = footerItems ? footerItems.some(item => item !== null) : null;
    if (hasFooterItems) {
      footer = (
        <div className={cx('utility-menu-footer')}>
          <MenuDivider className={cx('footer-divider')} />
          {footerItems}
        </div>
      );
    }

    const menuText = intl.formatMessage({ id: 'Terra.application.utility.menu' });
    /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
    return (
      <div ref={this.setMenuNode} style={{ height: isHeightBounded ? '100%' : 'auto', outline: 'none' }} tabIndex="0">
        <ContentContainer
          {...customProps}
          header={header}
          footer={footer}
          fill={isHeightBounded}
          className={menuClassNames}
          role="navigation"
          aria-label={menuText}
        >
          {this.buildListContent(currentItem)}
        </ContentContainer>
      </div>
    );
    /* eslint-enable jsx-a11y/no-noninteractive-tabindex */
  }
}

UtilityMenu.propTypes = propTypes;
UtilityMenu.processMenuItems = processMenuItems;
UtilityMenu.hasChevron = hasChevron;
export default injectIntl(UtilityMenu);
