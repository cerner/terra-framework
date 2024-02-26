import React from 'react';
import Button from 'terra-button';
import PropTypes from 'prop-types';
import Menu from 'terra-menu';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import classNames from 'classnames/bind';
import styles from './BasicMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  isArrowDisplayed: PropTypes.bool,
  contentWidth: PropTypes.string,
  boundingRef: PropTypes.func,
};

class LargeMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.handleToggle1OnClick = this.handleToggle1OnClick.bind(this);
    this.handleToggle2OnClick = this.handleToggle2OnClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.handleCloseOnClick = this.handleCloseOnClick.bind(this);
    this.state = {
      open: false,
      toggle1Selected: false,
      toggle2Selected: false,
      toggle3Selected: false,
      toggle31Selected: false,
      groupSelectedIndex: undefined,
      actionClickCount: 0,
    };
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  handleCloseOnClick(event) {
    event.preventDefault();
    this.handleRequestClose();
  }

  handleToggle1OnClick() {
    this.setState(prevState => ({ toggle1Selected: !prevState.toggle1Selected }));
  }

  handleToggle2OnClick() {
    this.setState(prevState => ({ toggle2Selected: !prevState.toggle2Selected }));
  }

  handleToggle3OnClick = () => {
    this.setState(prevState => ({ toggle21Selected: !prevState.toggle3Selected }));
  }

  handleToggle31OnClick = () => {
    this.setState(prevState => ({ toggle31Selected: !prevState.toggle31Selected }));
  }

  handleOnChange(event, index) {
    this.setState({ groupSelectedIndex: index });
  }

  handleAction(event) {
    event.preventDefault();
    const newState = this.state;
    newState.actionClickCount += 1;
    this.setState(newState);
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  render() {
    return (
      <div>
        <div className={cx('menu-wrapper')}>
          <Menu
            isOpen={this.state.open}
            targetRef={this.getButtonNode}
            onRequestClose={this.handleRequestClose}
            contentWidth={this.props.contentWidth}
            isArrowDisplayed={this.props.isArrowDisplayed}
            boundingRef={this.props.boundingRef}
            headerTitle="Clinical Solution"
          >
            <Menu.Item
              text="Menu item 1"
              key="Toggle1"
              isSelected={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isSelectable
            />
            <Menu.Item
              text="Menu item 2"
              key="Toggle2"
              isSelected={this.state.toggle2Selected}
              onClick={this.handleToggle2OnClick}
              isSelectable
            />
            <Menu.Item
              text="Menu item 3"
              key="Toggle3"
              isSelected={this.state.toggle3Selected}
              onClick={this.handleToggle3OnClick}
              isDisabled
            />
            <Menu.Divider key="Divider1" />
            <Menu.Item
              text="Menu item 4"
              key="Offers"
              subMenuItems={[
                <Menu.Item
                  text="Submenu item 1"
                  key="Submenu item 1"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 2"
                  key="Submenu item 2"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 3"
                  key="Submenu item 3"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 4"
                  key="Submenu item 4"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 5"
                  key="Submenu item 5"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 6"
                  key="Submenu item 6"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 7"
                  key="Submenu item 7"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 8"
                  key="Submenu item 8"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 9"
                  key="Submenu item 9"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 10"
                  key="Submenu item 10"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 11"
                  key="Submenu item 11"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 12"
                  key="Submenu item 12"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 13"
                  key="Submenu item 13"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 14"
                  key="Submenu item 14"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 15"
                  key="Submenu item 15"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 16"
                  key="Submenu item 16"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 17"
                  key="Submenu item 17"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 18"
                  key="Submenu item 18"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 19"
                  key="Submenu item 19"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 20"
                  key="Submenu item 20"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 21"
                  key="Submenu item 21"
                  isToggled={this.state.toggle21Selected}
                  onClick={this.handleToggle21OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 22"
                  key="Submenu item 22"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 23"
                  key="Submenu item 23"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 24"
                  key="Submenu item 24"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 25"
                  key="Submenu item 25"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 26"
                  key="Submenu item 26"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 27"
                  key="Submenu item 27"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 28"
                  key="Submenu item 28"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 29"
                  key="Submenu item 29"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 30"
                  key="Submenu item 30"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 31"
                  key="Submenu item 31"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 32"
                  key="Submenu item 32"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 33"
                  key="Submenu item 33"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 34"
                  key="Submenu item 34"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 35"
                  key="Submenu item 35"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 36"
                  key="Submenu item 36"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 37"
                  key="Submenu item 37"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 38"
                  key="Submenu item 38"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 39"
                  key="Submenu item 39"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Submenu item 40"
                  key="Submenu item 40"
                  isToggled={this.state.toggle31Selected}
                  onClick={this.handleToggle31OnClick}
                  isToggleable
                />,
              ]}
            />
            <Menu.Item
              text="Menu item 5"
              key="Menu item 5"
              isToggled={this.state.toggle31Selected}
              onClick={this.handleToggle31OnClick}
              isToggleable
            />
            <Menu.Divider key="Divider3" />
            <Menu.ItemGroup key="Group" aria-label="Health Information" id="health-info" onChange={this.handleOnChange}>
              <Menu.Item ariaDescribedBy="health-info" text="Behavioral Health" key="GroupItem1" isSelected={this.state.groupSelectedIndex === 0} />
              <Menu.Item ariaDescribedBy="health-info" text="Ambulatory Surgery Center" key="GroupItem2" isSelected={this.state.groupSelectedIndex === 1} />
              <Menu.Item ariaDescribedBy="health-info" text="Critical Care" key="GroupItem3" isSelected={this.state.groupSelectedIndex === 2} isDisabled />
            </Menu.ItemGroup>
          </Menu>
          <Button onClick={this.handleButtonClick} text="Explore Clinical Solution" aria-haspopup icon={<IconCaretDown />} isReversed refCallback={this.setButtonNode} />
        </div>
      </div>
    );
  }
}

LargeMenu.propTypes = propTypes;

export default LargeMenu;
