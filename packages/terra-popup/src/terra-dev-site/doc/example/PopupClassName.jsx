import React from 'react';
import Button from 'terra-button';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Popup from 'terra-popup/lib/Popup';
import ExamplePopupContent from 'terra-popup/lib/terra-dev-site/doc/common/ExamplePopupContent';
import 'terra-popup/lib/terra-dev-site/doc/example/PopupClassName.scss';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

class PopupClassName extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = { open: false };
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  handleOnChange() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <Popup
          classNameArrow="terra-example-class-arrow"
          classNameContent="terra-example-class-content"
          classNameOverlay="terra-example-class-overlay"
          isArrowDisplayed
          isOpen={this.state.open}
          onRequestClose={this.handleRequestClose}
          targetRef={() => document.getElementById('popup-class-name')}
        >
          <ExamplePopupContent onChange={this.handleOnChange} />
        </Popup>
        <Button id="popup-class-name" text="Class Name Popup" onClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default PopupClassName;
