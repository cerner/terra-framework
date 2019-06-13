import React from 'react';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Popup from 'terra-popup/lib/Popup';
import Placeholder from 'terra-doc-template/lib/Placeholder';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

/* eslint-disable */
const PopupContent = ({ closeButtonRequired, handleRequestClose}) => {
  
  return (<div style={{/* height: '450px', width: '250px', */ background: 'red'}}>
    <Button text="Hi" />
    <p>Long 
    Long Long Long Long 
    Long Long Long Long Long Long Long Long 
    Long Long Long Long Long Long Long Long Long Long Long Long 
    </p>
    <p>Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long </p>
  </div>);
};
/* eslint-enable */

class PopupNoHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setParentNode = this.setParentNode.bind(this);
    this.getParentNode = this.getParentNode.bind(this);
    this.state = { open: false };
  }

  setParentNode(node) {
    this.parentNode = node;
  }

  getParentNode() {
    return this.parentNode;
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <div
          style={{
            height: '300px',
            width: '359px',
            background: 'aliceblue',
            overflow: 'hidden',
            position: 'relative',
          }}
          ref={this.setParentNode}
        >
          <Popup
            boundingRef={this.getParentNode}
            contentHeight="auto"
            contentWidth="auto"
            isHeaderDisabled
            isOpen={this.state.open}
            onRequestClose={this.handleRequestClose}
            targetRef={() => document.getElementById('popup-no-header')}
            isContentFocusDisabled
          >
            <PopupContent title="Popup Content" handleRequestClose={this.handleRequestClose} />
          </Popup>
        </div>
        <div style={{ margin: '15px'}}/* style={{ position: 'absolute', bottom: '0', right: '0'}} */>
          <Button
            id="popup-no-header"
            text="No Header Popup"
            onClick={this.handleButtonClick}
          />
        </div>
      </div>
    );
  }
}

export default PopupNoHeader;
