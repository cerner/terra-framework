import React from 'react';
import TabsTemplate from './TabsTemplate';

class TabsResponsiveToParent extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnButtonClick = this.handleOnButtonClick.bind(this);
    this.state = {
      containerClassName: 'content-wrapper',
    };
  }

  handleOnButtonClick() {
    this.setState({
      containerClassName: 'content-wrapper-600',
    });
  }

  render() {
    return (
      <div id="responsiveToParent">
        <button type="button" onClick={this.handleOnButtonClick}>Set Container Width to 600 px</button>
        <TabsTemplate containerClassName={this.state.containerClassName} />
      </div>
    );
  }
}

export default TabsResponsiveToParent;
