import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-action-header';
import ExtensionHelper from './_ExtensionHelper';

import styles from './ExtensionsPopupView.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The content to be rendered in the ApplicationLayout's extensions region.
   */
  extensions: PropTypes.array,
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
  extensions: [],
};

const ExtensionsPopupView = ({
  extensions,
  onRequestClose,
  isHeightBounded,
}) => (
  <ContentContainer
    header={<ActionHeader title="Extensions" />}
    fill={isHeightBounded}
    className={cx('extensions-popup-view')}
  >
    {ExtensionHelper(extensions, onRequestClose, true)}
  </ContentContainer>
);

ExtensionsPopupView.propTypes = propTypes;
ExtensionsPopupView.defaultProps = defaultProps;

export default ExtensionsPopupView;
