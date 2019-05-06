import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ActionHeader from 'terra-action-header';
import Popup from 'terra-popup';

import PopupMenu from '../common/_PopupMenu';
import { extensionItemsPropType } from '../utils/propTypes';
import ExtensionRollup from './_ExtensionRollup';
import Extension from './_Extension';
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
  extensionItems: extensionItemsPropType,
  /**
   * A function to be executed upon selection of a tab.
   */
  onSelect: PropTypes.func,
  notifications: PropTypes.object,
};

const defaultProps = {
  activeBreakpoint: '',
  extensionItems: [],
  notifications: {},
};

const shouldShowNotifications = (extensionItems, notifications) => extensionItems.some(item => !!notifications[item.key]);

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

  shouldComponentUpdate() {
    this.previousNotifications = this.props.notifications;
    return true;
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

  shouldPulse(extensionItems, notifications) {
    let shouldPulse = false;

    if (this.previousNotifications) {
      for (let i = 0; i < extensionItems.length; i += 1) {
        const item = extensionItems[i];
        const previousCount = this.previousNotifications[item.key];
        const newCount = notifications[item.key];
        if (newCount && (!previousCount || newCount > previousCount)) {
          shouldPulse = true;
          break;
        }
      }
    }

    return shouldPulse;
  }

  createRollupButton(hiddenItems) {
    if (!hiddenItems || !hiddenItems.length) {
      return null;
    }
    const showNotifications = shouldShowNotifications(hiddenItems, this.props.notifications);
    return (
      <ExtensionRollup
        onSelect={this.handleRollupSelect}
        refCallback={this.setButtonNode}
        hasChildNotifications={showNotifications}
        isPulsed={showNotifications && this.shouldPulse(this.props.extensionItems, this.props.notifications)}
      />
    );
  }

  render() {
    const {
      activeBreakpoint,
      extensionItems,
      notifications,
      onSelect,
    } = this.props;

    let attachmentSpread;
    if (shouldRenderCompactNavigation(activeBreakpoint)) {
      attachmentSpread = { contentAttachment: 'top right', targetAttachment: 'bottom center' };
    }

    const sliceIndex = sliceIndexForBreakpoint(activeBreakpoint, extensionItems);
    const visibleItems = extensionItems.slice(0, sliceIndex);
    const hiddenItems = extensionItems.slice(sliceIndex);

    return (
      <React.Fragment>
        <Popup
          {...attachmentSpread}
          contentHeight="auto"
          contentWidth="320"
          isArrowDisplayed
          isOpen={this.state.isOpen}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <PopupMenu
            header={<ActionHeader title="Extensions" />}
            menuItems={hiddenItems.map(item => ({
              key: item.key,
              icon: item.icon,
              text: item.text,
              notificationCount: notifications[item.key],
            }))}
            onSelectMenuItem={(itemKey) => {
              const selectedExtension = hiddenItems.find(item => item.key === itemKey);
              if (onSelect) {
                onSelect(itemKey, selectedExtension.metaData);
              }
              this.handleRequestClose();
            }}
          />
        </Popup>
        <div className={cx('extensions-row')}>
          {visibleItems.map(item => (
            <Extension
              notificationCount={notifications[item.key]}
              key={item.key}
              extensionKey={item.key}
              icon={item.icon}
              text={item.text}
              metaData={item.metaData}
              onSelect={onSelect}
              onRequestClose={this.handleRequestClose}
            />
          ))}
          {this.createRollupButton(hiddenItems)}
        </div>
      </React.Fragment>
    );
  }
}

Extensions.propTypes = propTypes;
Extensions.defaultProps = defaultProps;

export default Extensions;
