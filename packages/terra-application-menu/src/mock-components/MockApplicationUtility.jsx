import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import 'terra-base/lib/baseStyles';

const propTypes = {
  userName: PropTypes.string,
  userPhoto: PropTypes.element,
  userDetails: PropTypes.string,
  onUtilityChange: PropTypes.func,
  onDiscloseUtilityMenu: PropTypes.func,
};

class ApplicationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.createContent = this.createContent.bind(this);
  }

  onButtonClick() {
    if (this.props.onDiscloseUtilityMenu) {
      const content = this.createContent();
      this.props.onDiscloseUtilityMenu(content);
    }
  }

  createContent() {
    return <div style={{ backgroundColor: 'pink', width: '100%', height: '100%' }}>{this.userDetails}</div>;
  }

  render() {
    const {
      userName,
      userPhoto,
      userDetails,
      onUtilityChange,
      onDiscloseUtilityMenu,
      ...customProps
    } = this.props;

    return (
      <Button {...customProps} text={userName} onClick={this.onButtonClick} isBlock />
    );
  }
}

ApplicationMenu.propTypes = propTypes;

export default ApplicationMenu;
