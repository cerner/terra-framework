import React from 'react';
import PropTypes from 'prop-types';
import List from 'terra-list';
import IconLeft from 'terra-icon/lib/icon/IconLeft';
import ContentContainer from 'terra-content-container';
import IconClose from 'terra-icon/lib/icon/IconClose';
import Arrange from 'terra-arrange';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Object containing data for this specific page
   */
  pageData: PropTypes.shape({
    Title: PropTypes.string,
    Content: PropTypes.element,
    children: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  /**
   * Function to trigger when an item is selected
   */
  onchange: PropTypes.func.isRequired,
};

const defaultProps = {
};

const childContextTypes = {
  isSelectableMenu: PropTypes.bool,
};

class MenuContent extends React.Component {
  constructor(props) {
    super(props);
    this.wrapOnClick = this.wrapOnClick.bind(this);
    this.wrapOnKeyDown = this.wrapOnKeyDown.bind(this);
    this.buildHeader = this.buildHeader.bind(this);
    this.isSelectable = this.isSelectable.bind(this);
    this.onKeyDownBackButton = this.onKeyDownBackButton.bind(this);
    this.validateFocus = this.validateFocus.bind(this);
    this.needsFocus = props.isFocused;
    this.handleContainerRef = this.handleContainerRef.bind(this);
    this.generateMenuItem = this.generateMenuItem.bind(this);

    this.state = {
      focusIndex: -1,
    };
  }

  getChildContext() {
    return { isSelectableMenu: this.isSelectable() };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isFocused) {
      this.needsFocus = this.needsFocus || this.props.isFocused !== newProps.isFocused;
    } else {
      this.needsFocus = false;
    }
  }

  wrapOnClick(item) {
    const onClick = item.props.onClick;
    return (event) => {
      event.preventDefault();
      if (this.state.focusIndex !== -1) {
        this.setState({ focusIndex: -1 });
      }

      if (item.props.subMenuItems && item.props.subMenuItems.length > 0) {
        this.props.onRequestNext(item);
      }

      if (onClick) {
        onClick(event);
      }
    };
  }

  wrapOnKeyDown(item, index) {
    const onKeyDown = item.props.onKeyDown;
    return ((event) => {
      event.preventDefault();
      if (event.nativeEvent.keyCode === MenuUtils.KEYCODES.ENTER || event.nativeEvent.keyCode === MenuUtils.KEYCODES.SPACE) {
        if (item.props.subMenuItems && item.props.subMenuItems.length > 0) {
          this.props.onRequestNext(item);
        }
      } else if (event.nativeEvent.keyCode === MenuUtils.KEYCODES.RIGHT_ARROW) {
        if (item.props.subMenuItems && item.props.subMenuItems.length > 0) {
          this.props.onRequestNext(item);
        }
      } else if (event.nativeEvent.keyCode === MenuUtils.KEYCODES.LEFT_ARROW) {
        this.props.onRequestBack();
      } else if (event.nativeEvent.keyCode === MenuUtils.KEYCODES.UP_ARROW) {
        this.setState({ focusIndex: index - 1 });
      } else if (event.nativeEvent.keyCode === MenuUtils.KEYCODES.DOWN_ARROW) {
        this.setState({ focusIndex: index + 1 });
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    });
  }

  buildHeader() {
    const closeIcon = <IconClose />;
    let closeButton = <div />;
    if (this.props.onRequestClose) {
      closeButton = (
        <button className={cx(['header-button'])} onClick={this.props.onRequestClose}>
          {closeIcon}
        </button>
      );
    }

    const backIcon = <IconLeft />;
    const backButton = this.props.index > 0 ? (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        role="button"
        onClick={this.props.onRequestBack}
        onKeyDown={this.onKeyDownBackButton}
        tabIndex="0"
      >
        <Arrange
          align="center"
          fitStart={(
            <div className={cx(['header-button'])}>
              {backIcon}
            </div>
          )}
          fill={<h1 className={cx(['header-title'])}>{this.props.title}</h1>}
        />
      </div>
    ) : <div />;

    return (
      <Arrange
        className={cx(['header'])}
        fitEnd={closeButton}
        fill={backButton}
        align="center"
      />
    );
  }

  render() {
    let index = -1;
    const items = React.Children.map(this.props.children, (item) => {
      const onClick = this.wrapOnClick(item);
      let newItem = item;
      index += 1;
      const onKeyDown = this.wrapOnKeyDown(item, index);
      const isActive = this.state.focusIndex === index;

      newItem = React.cloneElement(item, {
        onClick,
        onKeyDown,
        isActive,
      });

      return newItem;
    });

    const isSubMenu = this.props.index > 0;
    const contentClass = cx([
      'content',
      { submenu: isSubMenu },
      { 'hidden-page': this.props.isHidden },
    ]);

    const header = this.buildHeader();
    const contentHeight = this.props.isHeightBounded ? '100%' : this.props.fixedHeight;
    const contentPosition = this.props.isHeightBounded ? 'relative' : 'static';
    const contentWidth = this.props.isWidthBounded ? undefined : this.props.fixedWidth;

    return (
      <div
        ref={this.handleContainerRef}
        className={contentClass}
        style={{ height: contentHeight, width: contentWidth, position: contentPosition }}
        tabIndex="0"
      >
        <ContentContainer header={header} fill={this.props.isHeightBounded || this.props.index > 0}>
          <List className={cx(['list'])} role="menu">
            {items}
          </List>
        </ContentContainer>
      </div>
    );
  }
}


MenuContent.propTypes = propTypes;
MenuContent.defaultProps = defaultProps;
MenuContent.childContextTypes = childContextTypes;

export default MenuContent;
