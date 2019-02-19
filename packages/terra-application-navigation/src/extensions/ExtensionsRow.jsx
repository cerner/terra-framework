import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { extensionConfigPropType } from '../utils/propTypes';
import { shouldRenderCompactNavigation } from '../utils/helpers';
import Extension from './Extension';

import styles from './ExtensionsRow.module.scss';

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
   * The configuration values for the ApplicationName component.
   */
  onClick: PropTypes.func,
  /**
   * The configuration values for the ApplicationName component.
   */
  refCallback: PropTypes.func,
  /**
   * Function callback for closing the drawer.
   */
  onRequestClose: PropTypes.func,
};

const defaultProps = {
  activeBreakpoint: '',
};

const shouldShowHiddenAlert = (extensionItems, alerts) => {
  for (let i = 0; i < extensionItems.length; i += 1) {
    const item = extensionItems[i];
    const alertCount = alerts && item.notifyKey ? alerts[item.notifyKey] : null;
    if (alertCount > 0) {
      return true;
    }
  }
  return false;
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

const createFancyButton = (hiddenItems, alerts, onClick, refCallback) => {
  if (!hiddenItems || !hiddenItems.length) {
    return null;
  }

  const showAlerts = shouldShowHiddenAlert(hiddenItems, alerts);
  return <Extension onSelect={onClick} refCallback={refCallback} alertCount={showAlerts ? 1 : 0} />;
};

const ExtensionsRow = ({
  activeBreakpoint,
  extensionConfig,
  alerts,
  onClick,
  refCallback,
  onRequestClose,
}) => {
  if (!extensionConfig) {
    return null;
  }

  const sliceIndex = shouldRenderCompactNavigation(activeBreakpoint) ? 1 : 3;
  const extensionItems = extensionConfig.extensions.slice(0, sliceIndex);
  const hiddenItems = extensionConfig.extensions.slice(sliceIndex);

  return (
    <div className={cx('extensions-row')}>
      {createExtensions(extensionItems, alerts, onRequestClose)}
      {createFancyButton(hiddenItems, alerts, onClick, refCallback)}
    </div>
  );
};

ExtensionsRow.propTypes = propTypes;
ExtensionsRow.defaultProps = defaultProps;

export default ExtensionsRow;
