import React from 'react';
import PropTypes from 'prop-types';
import { DisclosureManager } from 'terra-application';
import Popup from 'terra-popup';
import Extension from './_Extension';
import ContentWrapper from './_ContentWrapper';

const propTypes = {
  /**
   * The content to be displayed within the popup/modal disclosure.
   */
  content: PropTypes.element,
  /*
   * @private The content to be rendered in the ApplicationLayout's extensions region.
   */
  disclosureManager: DisclosureManager.disclosureManagerShape,
  /**
   * The image to display for the associated extension action.
   */
  image: PropTypes.element,
  /**
   * Whether or not the extension is hidden by the rollup pattern.
   */
  isHidden: PropTypes.bool,
  /**
   * The number of notifications to be displayed for the extension.
   */
  notificationCount: PropTypes.number,
  /**
   * Function callback for closing the disclsoure.
   */
  onRequestClose: PropTypes.func,
  /**
   * The text display for the extension, either the aira label or the inline text.
   */
  text: PropTypes.string,
  /**
   * TODO: Is this still needed.
   */
  uniqueKey: PropTypes.string,
};

const defaultProps = {
  text: '',
};

class ExtensionWithPopup extends React.Component {
  constructor(props) {
    super(props);

    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleExtensionClick = this.handleExtensionClick.bind(this);

    this.state = { isOpen: false };
    this.notifications = {};
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  handleRequestClose() {
    this.setState({ isOpen: false });
  }

  handleExtensionClick() {
    const { isHidden, disclosureManager, content } = this.props;
    if (isHidden) {
      disclosureManager.disclose({
        preferredType: 'modal',
        size: 'large',
        content: {
          key: 'extension-with-popup',
          component: <ContentWrapper>{content}</ContentWrapper>,
        },
      });
      return;
    }
    this.setState({ isOpen: true });
  }

  render() {
    const {
      content,
      notificationCount,
      image,
      isHidden,
      text,
      onRequestClose,
      uniqueKey,
    } = this.props;

    let popup;
    if (!isHidden && this.state.isOpen) {
      popup = (
        <Popup
          contentHeight="auto"
          isArrowDisplayed
          isOpen={this.state.isOpen}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <ContentWrapper>
            {content}
          </ContentWrapper>
        </Popup>
      );
    }

    return (
      <React.Fragment>
        {popup}
        <Extension
          isHidden={isHidden}
          notificationCount={notificationCount}
          key={uniqueKey}
          image={image}
          text={text}
          onSelect={this.handleExtensionClick}
          onRequestClose={onRequestClose}
          refCallback={this.setButtonNode}
        />
      </React.Fragment>
    );
  }
}

ExtensionWithPopup.propTypes = propTypes;
ExtensionWithPopup.defaultProps = defaultProps;

export default DisclosureManager.withDisclosureManager(ExtensionWithPopup);
