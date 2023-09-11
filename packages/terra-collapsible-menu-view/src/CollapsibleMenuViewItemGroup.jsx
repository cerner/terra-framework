import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ButtonGroup from 'terra-button-group';
import Menu from './_CollapsibleMenu';
import styles from './CollapsibleMenuView.module.scss';
import CollapsibleMenuView from '../lib/CollapsibleMenuView';

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
   * A list of keys of the CollapsibleMenuView.Items that should be selected.
   */
  selectedKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * Indicates if the item group should be multi select.
   */
  isMultiSelect: PropTypes.bool,
};

const defaultProps = {
  selectedKeys: [],
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
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleDisplayTypeChange = this.handleDisplayTypeChange.bind(this);
    this.state = { updatedKeys: this.props.selectedKeys };
  }

  getChildContext() {
    return { isCollapsibleGroupItem: true };
  }

  handleOnChange(event, selectedIndex) {
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

  handleDisplayTypeChange(event, selectedKey) {
    if (this.props.onChange) {
      if (this.props.isMultiSelect) {
        event.preventDefault();
        this.setState(prevState => ({ updatedKeys: CollapsibleMenuView.Utils.handleMultiSelectedKeys(prevState.updatedKeys, selectedKey) }), () => {
          this.props.onChange(event, this.state.updatedKeys);
        });
      } else if (CollapsibleMenuView.Utils.shouldHandleSingleSelection(this.state.updatedKeys, selectedKey)) {
        event.preventDefault();
        this.setState({ updatedKeys: [selectedKey] }, () => {
          this.props.onChange(event, this.state.updatedKeys);
        });
      }
    }
  }

  render() {
    const {
      children,
      onChange,
      selectedKeys,
      isMultiSelect,
      ...customProps
    } = this.props;

    const { isCollapsibleMenuItem } = this.context;

    if (isCollapsibleMenuItem && selectedKeys.length && !isMultiSelect) {
      return (
        <li role="none">
          <Menu.ItemGroup {...customProps} onChange={this.handleOnChange}>
            {children}
          </Menu.ItemGroup>
        </li>
      );
    }

    if (isCollapsibleMenuItem && selectedKeys.length && isMultiSelect) {
      return (
        children.map((child) => (
          <Menu.Item
            text={child.props.text}
            isSelected={child.props.isSelected}
            isDisabled={child.props.isDisabled}
            isIconOnly={child.props.isIconOnly}
            index={child.props.index}
            totalItems={child.props.totalItems}
            isToggleable={isMultiSelect ? true : undefined}
          />
        ))
      );
    }

    if (isCollapsibleMenuItem) {
      return (
        <div {...customProps}>
          { children }
        </div>
      );
    }

    const buttonGroupClassNames = cx([
      'face-up-item',
      customProps.className,
    ]);

    return (
      <ButtonGroup {...customProps} onChange={this.handleDisplayTypeChange} isMultiSelect={isMultiSelect} className={buttonGroupClassNames} selectedKeys={selectedKeys}>
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
