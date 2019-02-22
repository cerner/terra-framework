import React from 'react';
import PropTypes from 'prop-types';
import { DisclosureManager } from 'terra-application';
import Popup from 'terra-popup';
import Extension from './_Extension';
import ContentWrapper from './_ContentWrapper';

const propTypes = {
  /**
   * The currently active breakpoint.
   */
  content: PropTypes.element,
  /**
   * The currently active breakpoint.
   */
  notificationCount: PropTypes.number,
  /**
   * The currently active breakpoint.
   */
  isHidden: PropTypes.bool,
  /**
   * The currently active breakpoint.
   */
  image: PropTypes.element,
  /**
   * The content to be rendered in the ApplicationLayout's extensions region.
   */
  text: PropTypes.string,
  /**
   * Function callback for closing the drawer.
   */
  onRequestClose: PropTypes.func,
  /**
   * The content to be rendered in the ApplicationLayout's extensions region.
   */
  uniqueKey: PropTypes.string,
  /*
   * The content to be rendered in the ApplicationLayout's extensions region.
   */
  disclosureManager: DisclosureManager.disclosureManagerShape,
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
