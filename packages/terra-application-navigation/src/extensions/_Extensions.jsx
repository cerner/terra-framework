import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'terra-popup';
import { extensionConfigPropType } from '../utils/propTypes';
import ExtensionsPopupView from './_ExtensionsPopupView';
import ExtensionsRow from './_ExtensionsRow';

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
    this.handleExtensionUpdate = this.handleExtensionUpdate.bind(this);
    this.handleRollupSelect = this.handleRollupSelect.bind(this);

    this.state = { isOpen: false };
    this.notifications = {};
  }

  // const event = new CustomEvent('terra-app-nav-extension-update', { detail: { pill: 9 } });
  // document.dispatchEvent(event);
  componentDidMount() {
    document.addEventListener('terra-app-nav-extension-update', this.handleExtensionUpdate);
  }

  componentWillUnmount() {
    document.removeEventListener('terra-app-nav-extension-update', this.handleExtensionUpdate);
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  handleExtensionUpdate(event) {
    let wasUpdated = false;
    const data = event.detail;
    const keyEntries = Object.keys(data);
    keyEntries.forEach((key) => {
      const value = this.notifications[key];
      const newValue = data[key];
      if (value) {
        if (newValue === 0) {
          delete this.notifications[key];
          wasUpdated = true;
        } else if (value !== newValue) {
          this.notifications[key] = newValue;
          wasUpdated = true;
        }
      } else {
        this.notifications[key] = newValue;
        wasUpdated = true;
      }
    });

    if (wasUpdated) {
      this.forceUpdate();
    }
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

    return (
      <React.Fragment>
        <Popup
          contentHeight="auto"
          isArrowDisplayed
          isOpen={this.state.isOpen}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <ExtensionsPopupView
            notifications={this.notifications}
            extensionConfig={extensionConfig}
            activeBreakpoint={activeBreakpoint}
            onRequestClose={this.handleRequestClose}
          />
        </Popup>
        <ExtensionsRow
          notifications={this.notifications}
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
