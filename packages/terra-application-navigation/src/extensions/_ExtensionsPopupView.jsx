import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-action-header';

import { extensionConfigPropType } from '../utils/propTypes';
import { shouldRenderCompactNavigation } from '../utils/helpers';
import ExtensionHelper from './_ExtensionHelper';
import { EXTENSION_COUNT } from './_ExtensionUtils';

import styles from './Extension.module.scss';

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
  /**
   * Function callback for closing the drawer.
   */
  onRequestClose: PropTypes.func,
  /**
   * @private
   * Prop from terra-popup indicating that the popup containing this element is height contrained.
   */
  isHeightBounded: PropTypes.bool,
};

const defaultProps = {
  activeBreakpoint: '',
};

const ExtensionsPopupView = ({
  activeBreakpoint,
  extensionConfig,
  onRequestClose,
  isHeightBounded,
}) => {
  if (!extensionConfig) {
    return null;
  }

  let extensionItems = extensionConfig.extensions.slice(EXTENSION_COUNT.LARGE);
  if (shouldRenderCompactNavigation(activeBreakpoint)) {
    extensionItems = extensionConfig.extensions.slice(EXTENSION_COUNT.SMALL);
  }

  return (
    <ContentContainer
      header={<ActionHeader title="Extensions" />}
      fill={isHeightBounded}
      className={cx('extensions-popup-view')}
    >
      {ExtensionHelper(extensionItems, onRequestClose, true)}
    </ContentContainer>
  );
};

ExtensionsPopupView.propTypes = propTypes;
ExtensionsPopupView.defaultProps = defaultProps;

export default ExtensionsPopupView;
