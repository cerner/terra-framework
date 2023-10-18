import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ButtonGroup from 'terra-button-group';
import Menu from './_CollapsibleMenu';
import styles from './CollapsibleMenuView.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Callback function that is called when the group's selection state changes
   */
  onChange: PropTypes.func,
  /**
   * CollapsibleMenuView.Items to be grouped together
   */
  children: PropTypes.node.isRequired,
  /**
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue) For best practices, ensure to use `isMultiSelect`
   * in collapsibleMenuViewItemGroup element when creating multi select group items. This ensures collapsibleMenuItem's are rendered with role `checkbox` for face up group items and
   * role `menuItemCheckBox` for collapsed group items.
   */
  isMultiSelect: PropTypes.bool,
  /**
   * A list of keys of the CollapsibleMenuView.Items that should be selected.
   */
  selectedKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * String that labels the group for accessibility.
   */
  ariaLabel: PropTypes.string,
  /**
   * String that used in menu item for aria-describedby that labels the group for accessibility.
   */
  GroupId: PropTypes.string,
};

const defaultProps = {
  selectedKeys: [],
  isMultiSelect: false,
};

const childContextTypes = {
  isCollapsibleGroupItem: PropTypes.bool,
};

const contextTypes = {
  isCollapsibleMenuItem: PropTypes.bool,
};

class CollapsibleMenuViewItemGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleMenuOnChange = this.handleMenuOnChange.bind(this);
  }

  getChildContext() {
    return { isCollapsibleGroupItem: true };
  }

  handleMenuOnChange(event, selectedIndex) {
    if (this.props.onChange) {
      let selectedKey = selectedIndex;
      React.Children.forEach(this.props.children, (child, index) => {
        if (selectedIndex === index) {
          selectedKey = child.key;
        }
      });

      this.props.onChange(event, selectedKey);
    }
  }

  render() {
    const {
      children,
      onChange,
      isMultiSelect,
      selectedKeys,
      ariaLabel,
      GroupId,
      ...customProps
    } = this.props;

    const { isCollapsibleMenuItem } = this.context;

    if (isCollapsibleMenuItem) {
      if (isMultiSelect) {
        const cloneChildren = [];
        React.Children.forEach(children, (item, index) => {
          let clonedElement = item;
          clonedElement = React.cloneElement(item, { onChange: (e) => this.handleMenuOnChange(e, index), isToggleable: true, isToggled: item.isToggled });
          cloneChildren.push(clonedElement);
        });
        return (
          <li role="none">
            <div {...customProps} role="group" id={GroupId}>
              {cloneChildren}
            </div>
          </li>
        );
      }
      if (onChange) {
        return (
          <li role="none">
            <Menu.ItemGroup {...customProps} onChange={this.handleMenuOnChange} id={GroupId}>
              {children}
            </Menu.ItemGroup>
          </li>
        );
      }
      return (
        <li role="none">
          <div {...customProps} role="group">
            {children}
          </div>
        </li>
      );
    }

    const buttonGroupClassNames = cx([
      'face-up-item',
      customProps.className,
    ]);

    return (
      <ButtonGroup {...customProps} isMultiSelect={isMultiSelect} onChange={onChange} className={buttonGroupClassNames} selectedKeys={selectedKeys}>
        {children}
      </ButtonGroup>
    );
  }
}

CollapsibleMenuViewItemGroup.propTypes = propTypes;
CollapsibleMenuViewItemGroup.defaultProps = defaultProps;
CollapsibleMenuViewItemGroup.childContextTypes = childContextTypes;
CollapsibleMenuViewItemGroup.contextTypes = contextTypes;

export default CollapsibleMenuViewItemGroup;
