import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Popup from 'terra-popup';
import { extensionConfigPropType } from '../utils/propTypes';
import ExtensionsPopupView from './_ExtensionsPopupView';
import ExtensionRollup from './_ExtensionRollup';
import ExtensionHelper from './_ExtensionHelper';
import { EXTENSION_COUNT } from './_ExtensionUtils';
import { shouldRenderCompactNavigation } from '../utils/helpers';
import styles from './Extensions.module.scss';

const cx = classNames.bind(styles);

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

const shouldShowNotifications = (extensionItems) => {
  for (let i = 0; i < extensionItems.length; i += 1) {
    if (extensionItems[i].notificationCount > 0) {
      return true;
    }
  }
  return false;
};

const createRollupButton = (hiddenItems, onRollupSelect, refCallback) => {
  if (!hiddenItems || !hiddenItems.length) {
    return null;
  }
  return (
    <ExtensionRollup
      onSelect={onRollupSelect}
      refCallback={refCallback}
      hasChildNotifications={shouldShowNotifications(hiddenItems)}
    />
  );
};

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

    let sliceIndex;
    if (activeBreakpoint === 'tiny' || activeBreakpoint === 'small') {
      sliceIndex = EXTENSION_COUNT.SMALL;
    } else if (activeBreakpoint === 'medium') {
      sliceIndex = extensionConfig.mediumCount; // 3 - 5?
    } else {
      sliceIndex = extensionConfig.largeCount; // 1 - 6
    }

    if (extensionConfig.extensions.length <= sliceIndex + 1) {
      sliceIndex = extensionConfig.extensions.length;
    }

    const visibleItems = extensionConfig.extensions.slice(0, sliceIndex);
    const hiddenItems = extensionConfig.extensions.slice(sliceIndex);

    return (
      <React.Fragment>
        <Popup
          {...attachmentSpread}
          contentHeight="auto"
          contentWidth="auto"
          isArrowDisplayed
          isOpen={this.state.isOpen}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <ExtensionsPopupView
            extensions={hiddenItems}
            activeBreakpoint={activeBreakpoint}
            onRequestClose={this.handleRequestClose}
          />
        </Popup>
        <div className={cx('extensions-row')}>
          {ExtensionHelper(visibleItems, this.handleRequestClose, false)}
          {createRollupButton(hiddenItems, this.handleRollupSelect, this.setButtonNode)}
        </div>
      </React.Fragment>
    );
  }
}

Extensions.propTypes = propTypes;
Extensions.defaultProps = defaultProps;

export default Extensions;
