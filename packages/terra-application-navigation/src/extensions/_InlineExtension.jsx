import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './InlineExtension.module.scss';
import { createKeyDown, createOnClick } from './_ExtensionUtils';
import Count from './_ExtensionCount';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The currently active breakpoint.
   */
  image: PropTypes.element,
  /**
   * The configuration values for the ApplicationName component.
   */
  metaData: PropTypes.object,
  /**
   * The currently active breakpoint.
   */
  notificationCount: PropTypes.number,
  /**
   * Function callback for closing the drawer.
   */
  onRequestClose: PropTypes.func,
  /**
   * Function callback for closing the drawer.
   */
  onSelect: PropTypes.func,
  /**
   * Function callback for closing the drawer.
   */
  refCallback: PropTypes.func,
  /**
   * The content to be rendered in the ApplicationLayout's extensions region.
   */
  text: PropTypes.string,
};

const defaultProps = {
  notificationCount: 0,
  text: '',
};

const InlineExtension = ({
  notificationCount,
  image,
  text,
  metaData,
  onRequestClose,
  onSelect,
  refCallback,
}) => {
  const keyDown = createKeyDown(onRequestClose, onSelect, metaData);
  const onClick = createOnClick(onRequestClose, onSelect, metaData);

  return (
    <div
      onClick={onClick}
      onKeyDown={keyDown}
      className={cx('extension-row')}
      role="button"
      tabIndex="0"
      ref={refCallback}
      data-item-show-focus
      onBlur={(event) => {
        event.currentTarget.setAttribute('data-item-show-focus', 'true');
      }}
      onMouseDown={(event) => {
        event.currentTarget.setAttribute('data-item-show-focus', 'false');
      }}
    >
      <div className={cx('extension-icon')}>
        {image}
      </div>
      <div className={cx('extension-text')}>
        {text}
      </div>
      {notificationCount > 0 && <Count value={notificationCount} isInline className={cx('extension-row-count')} />}
    </div>
  );
};

InlineExtension.propTypes = propTypes;
InlineExtension.defaultProps = defaultProps;

export default InlineExtension;
