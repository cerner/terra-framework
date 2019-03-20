import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'terra-popup';
import { extensionConfigPropType } from '../utils/propTypes';
import ExtensionsPopupView from './_ExtensionsPopupView';
import ExtensionsRow from './_ExtensionsRow';
import { shouldRenderCompactNavigation } from '../utils/helpers';

const propTypes = {
  /**
   * The currently active breakpoint.
   */
  activeBreakpoint: PropTypes.string,
  /**
   * The content to be rendered in the ApplicationLayout's extensions region.
   */
  extensionConfig: extensionConfigPropType,
};

const defaultProps = {
  activeBreakpoint: '',
};

const polyFill = () => {
  if (typeof window.CustomEvent === 'function') {
    return false;
  }

  const CustomEvent = (event, params) => {
    const params2 = params || { bubbles: false, cancelable: false, detail: null };
    const evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params2.bubbles, params2.cancelable, params2.detail);
    return evt;
  };

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;

  return true;
};
polyFill();

class Extensions extends React.Component {
  constructor(props) {
    super(props);

    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleRollupSelect = this.handleRollupSelect.bind(this);

    this.state = { isOpen: false };
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

  handleRollupSelect() {
    this.setState({ isOpen: true });
  }

  render() {
    const {
      activeBreakpoint,
      extensionConfig,
    } = this.props;

    if (!extensionConfig) {
      return null;
    }

    let attachmentSpread;
    if (shouldRenderCompactNavigation(activeBreakpoint)) {
      attachmentSpread = { contentAttachment: 'top right', targetAttachment: 'bottom center' };
    }

    return (
      <React.Fragment>
        <Popup
          {...attachmentSpread}
          contentHeight="auto"
          isArrowDisplayed
          isOpen={this.state.isOpen}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <ExtensionsPopupView
            extensionConfig={extensionConfig}
            activeBreakpoint={activeBreakpoint}
            onRequestClose={this.handleRequestClose}
          />
        </Popup>
        <ExtensionsRow
          extensionConfig={extensionConfig}
          activeBreakpoint={activeBreakpoint}
          onRollupSelect={this.handleRollupSelect}
          refCallback={this.setButtonNode}
          onRequestClose={this.handleRequestClose}
        />
      </React.Fragment>
    );
  }
}

Extensions.propTypes = propTypes;
Extensions.defaultProps = defaultProps;

export default Extensions;
