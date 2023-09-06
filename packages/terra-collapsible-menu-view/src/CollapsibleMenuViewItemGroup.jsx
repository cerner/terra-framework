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
   * Whether or not it is a multi select CollapsibleMenuView.Items group.
   */
  isMultiSelect: PropTypes.bool,
  /**
   * A list of keys of the CollapsibleMenuView.Items that should be selected.
   */
  selectedKeys: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  selectedKeys: [],
  isMultiSelect: false,
};

const childContextTypes = {
  isCollapsibleGroupItem: PropTypes.bool,
  isMultiSelect: PropTypes.bool,
};

const contextTypes = {
  isCollapsibleMenuItem: PropTypes.bool,
};

class CollapsibleMenuViewItemGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleMenuOnChange = this.handleMenuOnChange.bind(this);
    this.handleButtonOnChange = this.handleButtonOnChange.bind(this);
    this.state = { selectedKeys: this.props.selectedKeys };
  }

  getChildContext() {
    return { isCollapsibleGroupItem: true, isMultiSelect: this.props.isMultiSelect };
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

  handleButtonOnChange(event, selectedKey) {
    if (this.props.onChange) {
      this.props.onChange(event, selectedKey);
    }

    // ensures only one item is selected when isMultiselect is not specified.
    if (!this.props.isMultiSelect) {
      this.setState({ selectedKeys: [selectedKey] });
    }
  }

  render() {
    const {
      children,
      onChange,
      isMultiSelect,
      selectedKeys,
      ...customProps
    } = this.props;

    const { isCollapsibleMenuItem } = this.context;

    if (isCollapsibleMenuItem && selectedKeys.length) {
      return (
        <li role="none">
          <Menu.ItemGroup {...customProps} onChange={this.handleMenuOnChange}>
            {children}
          </Menu.ItemGroup>
        </li>
      );
    } if (isCollapsibleMenuItem) {
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
      <ButtonGroup {...customProps} isMultiSelect={isMultiSelect} onChange={this.handleButtonOnChange} className={buttonGroupClassNames} selectedKeys={this.state.selectedKeys}>
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
