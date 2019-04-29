import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Popup from 'terra-popup';
import { extensionConfigPropType } from '../utils/propTypes';
import ExtensionsPopupView from './_ExtensionsPopupView';
import ExtensionRollup from './_ExtensionRollup';
import ExtensionHelper from './_ExtensionHelper';
import { sliceIndexForBreakpoint } from './_ExtensionUtils';
import { shouldRenderCompactNavigation } from '../utils/helpers';
import styles from './Extensions.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The currently active breakpoint.
   */
  activeBreakpoint: PropTypes.string,
  /**
   * The extension config for breakpoint display and items.
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

class Extensions extends React.Component {
  constructor(props) {
    super(props);

    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleRollupSelect = this.handleRollupSelect.bind(this);
    this.shouldPulse = this.shouldPulse.bind(this);
    this.createRollupButton = this.createRollupButton.bind(this);

    this.state = { isOpen: false };
    this.previousNotifications = null;
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

  shouldPulse(extensions) {
    let shouldPulse = false;

    const newNotifications = extensions.reduce((acc, item, index) => {
      if (item.notificationCount > 0) {
        acc[item.key] = { count: item.notificationCount, isHidden: index >= this.hiddenStartIndex };
      }
      return acc;
    }, []);

    if (this.previousNotifications) {
      const notificationKeys = Object.keys(newNotifications);
      for (let i = 0; i < notificationKeys.length; i += 1) {
        const previousCount = this.previousNotifications[notificationKeys[i]];
        const newCount = newNotifications[notificationKeys[i]];
        if (newCount.isHidden && (!previousCount || newCount.count > previousCount.count)) {
          shouldPulse = true;
          break;
        }
      }
    }

    this.previousNotifications = newNotifications;
    return shouldPulse;
  }

  createRollupButton(hiddenItems) {
    if (!hiddenItems || !hiddenItems.length) {
      return null;
    }
    return (
      <ExtensionRollup
        onSelect={this.handleRollupSelect}
        refCallback={this.setButtonNode}
        hasChildNotifications={shouldShowNotifications(hiddenItems)}
        isPulsed={this.shouldPulse(this.props.extensionConfig.extensions)}
      />
    );
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

    const sliceIndex = sliceIndexForBreakpoint(activeBreakpoint, extensionConfig);
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
          {this.createRollupButton(hiddenItems)}
        </div>
      </React.Fragment>
    );
  }
}

Extensions.propTypes = propTypes;
Extensions.defaultProps = defaultProps;

export default Extensions;
