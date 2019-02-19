import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { extensionConfigPropType } from '../utils/propTypes';
import { shouldRenderCompactNavigation } from '../utils/helpers';
import Extension from './Extension';

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
   * The configuration values for the ApplicationName component.
   */
  alerts: PropTypes.object,
  /**
   * Function callback for closing the drawer.
   */
  onRequestClose: PropTypes.func,
};

const defaultProps = {
  activeBreakpoint: '',
};

const createExtensions = (extensionItems, alerts, onRequestClose) => (
  extensionItems.map((item, index) => {
    const key = `${item.text}-${index}`;
    const alertCount = alerts && item.notifyKey ? alerts[item.notifyKey] : null;
    return (
      <Extension
        alertCount={alertCount}
        key={key}
        image={item.image}
        text={item.text}
        metaData={item.metaData}
        onSelect={item.onSelect}
        onRequestClose={onRequestClose}
      />
    );
  })
);

const ExtensionsPopupView = ({
  activeBreakpoint,
  extensionConfig,
  alerts,
  onRequestClose,
}) => {
  if (!extensionConfig) {
    return null;
  }

  let extensionItems = extensionConfig.extensions.slice(3);
  if (shouldRenderCompactNavigation(activeBreakpoint)) {
    extensionItems = extensionConfig.extensions.slice(1);
  }

  return (
    <div className={cx('extensions-popup-view')}>
      {createExtensions(extensionItems, alerts, onRequestClose)}
    </div>
  );
};

ExtensionsPopupView.propTypes = propTypes;
ExtensionsPopupView.defaultProps = defaultProps;

export default ExtensionsPopupView;
