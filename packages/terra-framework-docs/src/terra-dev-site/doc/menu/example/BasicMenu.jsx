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

class BasicMenu extends React.Component {
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
      toggle21Selected: false,
      toggle31Selected: false,
      toggle41Selected: false,
      toggle51Selected: false,
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

  handleToggle21OnClick = () => {
    this.setState(prevState => ({ toggle21Selected: !prevState.toggle21Selected }));
  }

  handleToggle31OnClick = () => {
    this.setState(prevState => ({ toggle31Selected: !prevState.toggle31Selected }));
  }

  handleToggle41OnClick = () => {
    this.setState(prevState => ({ toggle41Selected: !prevState.toggle41Selected }));
  }

  handleToggle51OnClick = () => {
    this.setState(prevState => ({ toggle51Selected: !prevState.toggle51Selected }));
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
              text="Hospital Details"
              key="Toggle1"
              isSelected={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isSelectable
            />
            <Menu.Item
              text="Hospitals & Health Systems"
              key="Toggle2"
              isSelected={this.state.toggle2Selected}
              onClick={this.handleToggle2OnClick}
              isSelectable
            />
            <Menu.Item
              text="Health System Operations"
              key="Toggle3"
              isSelected={this.state.toggle1Selected}
              onClick={this.handleToggle1OnClick}
              isDisabled
            />
            <Menu.Divider key="Divider1" />
            <Menu.Item
              text="Our Offerings"
              key="Offers"
              subMenuItems={[
                <Menu.Item
                  text="Policies and Guidelines"
                  key="Policies"
                  isToggled={this.state.toggle21Selected}
                  onClick={this.handleToggle21OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Population Health Management"
                  key="Population"
                  isToggled={this.state.toggle51Selected}
                  onClick={this.handleToggle51OnClick}
                  isToggleable
                />,
                <Menu.Item
                  text="Clinical Solutions"
                  key="Clinical"
                  subMenuItems={[
                    <Menu.Item
                      text="Clinical Communication & Collaboration"
                      key="Communication"
                      isToggled={this.state.toggle31Selected}
                      onClick={this.handleToggle31OnClick}
                      isToggleable
                    />,
                    <Menu.Item
                      text="Community, Critical Access & Specialty Hospital"
                      key="Community"
                      isToggled={this.state.toggle41Selected}
                      onClick={this.handleToggle41OnClick}
                      isToggleable
                    />,
                  ]}
                />,
              ]}
            />
            <Menu.Item
              text="Community, Critical Access & Specialty Hospital"
              key="Nested2 disabled"
              isDisabled
              subMenuItems={[
                <Menu.Item text="Default 2.1" key="2.1" />,
                <Menu.Item text="Default 2.2" key="2.2" />,
                <Menu.Item text="Default 2.3" key="2.3" />,
              ]}
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

BasicMenu.propTypes = propTypes;

export default BasicMenu;
