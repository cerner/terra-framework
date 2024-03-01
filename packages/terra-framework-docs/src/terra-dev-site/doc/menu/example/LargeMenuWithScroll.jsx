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

class LargeMenuWithScroll extends React.Component {
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
      toggle31Selected: false,
      toggle32Selected: false,
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

  handleToggle2OnClick = () => {
    this.setState(prevState => ({ toggle2Selected: !prevState.toggle2Selected }));
  }

  handleToggle31OnClick() {
    this.setState(prevState => ({ toggle21Selected: !prevState.toggle21Selected }));
  }

  handleToggle32OnClick() {
    this.setState(prevState => ({ toggle22Selected: !prevState.toggle22Selected }));
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
                  isToggled={this.state.toggle32Selected}
                  onClick={this.handleToggle32OnClick}
                  isToggleable
                />,
              ]}
            />
            <Menu.Divider key="Divider1" />
            <Menu.Item
              text="Menu item 4"
              key="Toggle4"
              isSelected={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isDisabled
            />
            <Menu.Item
              text="Menu item 5"
              key="Toggle5"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 6"
              key="Toggle6"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 7"
              key="Toggle7"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 8"
              key="Toggle8"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 9"
              key="Toggle9"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 10"
              key="Toggle10"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 11"
              key="Toggle11"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 12"
              key="Toggle12"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 13"
              key="Toggle13"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 14"
              key="Toggle14"
              isSelected={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isDisabled
            />
            <Menu.Item
              text="Menu item 15"
              key="Toggle15"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 16"
              key="Toggle16"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 17"
              key="Toggle17"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 18"
              key="Toggle18"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 19"
              key="Toggle19"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 20"
              key="Toggle20"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 21"
              key="Toggle21"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 22"
              key="Toggle22"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 23"
              key="Toggle23"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 24"
              key="Toggle24"
              isSelected={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isDisabled
            />
            <Menu.Item
              text="Menu item 25"
              key="Toggle25"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 26"
              key="Toggle26"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 27"
              key="Toggle27"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 28"
              key="Toggle28"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 29"
              key="Toggle29"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 30"
              key="Toggle30"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 31"
              key="Toggle31"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 32"
              key="Toggle32"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 33"
              key="Toggle33"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 34"
              key="Toggle34"
              isSelected={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isDisabled
            />
            <Menu.Item
              text="Menu item 35"
              key="Toggle35"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 36"
              key="Toggle36"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 37"
              key="Toggle37"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 38"
              key="Toggle38"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 39"
              key="Toggle39"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isToggleable
            />
            <Menu.Item
              text="Menu item 40"
              key="Toggle40"
              isToggled={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
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

LargeMenuWithScroll.propTypes = propTypes;

export default LargeMenuWithScroll;
