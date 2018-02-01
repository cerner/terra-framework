import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import 'terra-base/lib/baseStyles';

const propTypes = {
  userName: PropTypes.string,
  userPhoto: PropTypes.element,
  userDetails: PropTypes.string,
  onUtilityChange: PropTypes.func,
};

const defaultProps = {
  nameConfig: {},
};

class ApplicationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.createContent = this.createContent.bind(this);
  }

  onButtonClick() {
    if (this.onUtilityChange) {
      const content = this.createContent();
      this.onUtilityChange(content);
    }
  }

  createContent() {
    return <div style={{ backgroundColor: 'pink', width: '100%', height: '400px' }}>{this.userDetails}</div>;
  }

  render() {
    const {
      userName,
      userPhoto,
      userDetails,
      onUtilityChange,
      ...customProps
    } = this.props;

    return (
      <Button {...customProps} text={userName} onClick={this.onButtonClick} />
    );
  }
}

ApplicationMenu.propTypes = propTypes;
ApplicationMenu.defaultProps = defaultProps;

export default ApplicationMenu;
