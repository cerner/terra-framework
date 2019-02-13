import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ApplicationLayoutPropTypes from '../utils/propTypes';
import { isSizeCompact } from '../utils/helpers';
import ExtensionButton from './ExtensionButton';

import styles from '../ApplicationLayout.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The currently active breakpoint.
   */
  activeBreakpoint: PropTypes.string,
  /**
   * The content to be rendered in the ApplicationLayout's extensions region.
   */
  extensionConfig: ApplicationLayoutPropTypes.extensionConfigPropType,
  /**
   * The configuration values for the ApplicationName component.
   */
  isOpen: PropTypes.bool,
  /**
   * Function callback for closing the drawer.
   */
  onRequestClose: PropTypes.func,
};

const defaultProps = {
  activeBreakpoint: '',
  isOpen: false,
};

const ExtensionBar = ({
  activeBreakpoint,
  extensionConfig,
  isOpen,
  onRequestClose,
  ...customProps
}) => {
  if (!extensionConfig) {
    return null;
  }

  const moreButton = (
    <ExtensionButton
      key="More"
      image={<div>More</div>}
      text="More"
      onSelect={onRequestClose}
    />
  );
  if (isSizeCompact(activeBreakpoint)) {
    return (
      <div {...customProps} className={cx('extensions-layout')}>
        {moreButton}
      </div>
    );
  }
  const numberOfItems = extensionConfig.extensions.slice(0, 3);

  return (
    <div {...customProps} className={cx('extensions-layout')}>
      {numberOfItems.map((item, index) => {
        const key = `${item.text}-${index}`;
        return (
          <ExtensionButton
            key={key}
            image={item.image}
            text={item.text}
            metaData={item.metaData}
            onSelect={item.onSelect}
          />
        );
      })}
      {extensionConfig.extensions.length > 3 && moreButton}
    </div>
  );
};

ExtensionBar.propTypes = propTypes;
ExtensionBar.defaultProps = defaultProps;

export default ExtensionBar;
