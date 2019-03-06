import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { extensionConfigPropType } from '../utils/propTypes';
import { shouldRenderCompactNavigation } from '../utils/helpers';
import ExtensionHelper from './_ExtensionHelper';
import { EXTENSION_COUNT } from './_ExtensionUtils';

import styles from '../ApplicationNavigation.module.scss';

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
};

const defaultProps = {
  activeBreakpoint: '',
};

const ExtensionsPopupView = ({
  activeBreakpoint,
  extensionConfig,
  onRequestClose,
}) => {
  if (!extensionConfig) {
    return null;
  }

  let extensionItems = extensionConfig.extensions.slice(EXTENSION_COUNT.LARGE);
  if (shouldRenderCompactNavigation(activeBreakpoint)) {
    extensionItems = extensionConfig.extensions.slice(EXTENSION_COUNT.SMALL);
  }

  return (
    <div className={cx('extensions-popup-view')}>
      {ExtensionHelper(extensionItems, onRequestClose, true)}
    </div>
  );
};

ExtensionsPopupView.propTypes = propTypes;
ExtensionsPopupView.defaultProps = defaultProps;

export default ExtensionsPopupView;
