import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

import AppDelegate from 'terra-app-delegate';
import Button from 'terra-button';
import Menu from 'terra-menu';
import IconExpandMore from 'terra-icon/lib/icon/IconExpandMore';

import styles from './Utility.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The accessory element to be placed next to the title.
   * */
  accessory: PropTypes.element,
  /**
   * The AppDelegate instance provided by the containing component. If present, its properties will propagate to the children components.
   * */
  app: AppDelegate.propType,
  /**
   * The AppDelegate instance provided by the containing component. If present, its properties will propagate to the children components.
   * */
  contentHeight: PropTypes.string,
  /**
   * The AppDelegate instance provided by the containing component. If present, its properties will propagate to the children components.
   * */
  contentWidth: PropTypes.string,
  /**
   * The menu items to be displayed within the utility popup.
   * */
  menuItems: PropTypes.arrayOf(PropTypes.element),
  /**
   * Current breakpoint size that the coming from the layout.
   * */
  size: PropTypes.string,
  /**
   * The utility title to be displayed next to the accessory.
   * */
  title: PropTypes.string,
};

const defaultProps = {
  size: 'tiny',
};

class Utility extends React.Component {

  constructor(props) {
    super(props);

    this.getUtilityNode = this.getUtilityNode.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.state = { menuIsOpen: false };
  }

  getUtilityNode() {
    if (this.utilityNode) {
      return this.utilityNode.querySelector('[data-utility-more-icon=true]');
    }
    return null;
  }

  handleOnClick() {
    this.setState({ menuIsOpen: true });
  }

  handleRequestClose() {
    this.setState({ menuIsOpen: false });
  }

  render() {
    const {
      accessory,
      app,
      contentHeight,
      contentWidth,
      menuItems,
      size,
      title,
      ...customProps
    } = this.props;

    const utilityClassNames = cx([
      'utility',
      customProps.className,
    ]);

    return (
      <div ref={(node) => { this.utilityNode = node; }}>
        <Menu
          isOpen={this.state.menuIsOpen}
          targetRef={this.getUtilityNode}
          onRequestClose={this.handleRequestClose}
          contentHeight={contentHeight}
          contentWidth={contentWidth}
          isArrowDisplayed
        >
          {menuItems}
        </Menu>
        <Button {...customProps} className={utilityClassNames} onClick={this.handleOnClick} variant="link">
          {!!accessory && <div className={cx('accessory')}>{accessory}</div>}
          {!!title && size !== 'tiny' && <div className={cx('title')}>{title}</div>}
          {<IconExpandMore data-utility-more-icon />}
        </Button>
      </div>
    );
  }
}

Utility.propTypes = propTypes;
Utility.defaultProps = defaultProps;
Utility.Item = Menu.Item;
Utility.ItemGroup = Menu.ItemGroup;
Utility.Divider = Menu.Divider;
Utility.Opts = Menu.Opts;

export default Utility;
