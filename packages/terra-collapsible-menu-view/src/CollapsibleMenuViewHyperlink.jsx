import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Hyperlink from 'terra-hyperlink';
import Menu from './_CollapsibleMenu';
import styles from './CollapsibleMenuView.module.scss';

const cx = classNames.bind(styles);

const variants = {
  DEFAULT: 'default',
  EXTERNAL: 'external',
  IMAGE: 'image',
  VIDEO: 'video',
  AUDIO: 'audio',
  DOCUMENT: 'document',
};

const contextTypes = {
  isCollapsibleMenuItem: PropTypes.bool,
};

const propTypes = {
  /**
   * The content to display inside link.
   */
  text: PropTypes.string,
  /**
   * Additional information to display as a native tooltip on hover.
   */
  title: PropTypes.string,
  /**
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)
   * Sets the href of the link. href is required for hyperlinks and should be ignored when `onClick` callback is used.
   */
  href: PropTypes.string,
  /**
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)
   * Callback function triggered when clicked. onClick is required to render hyperlink as a button.
   * `onClick` should be ignored when `href` is provided.
   */
  onClick: PropTypes.func,
  /**
   * Callback function triggered when hyperlink loses focus.
   */
  onBlur: PropTypes.func,
  /**
   * Callback function triggered when hyperlink gains focus.
   */
  onFocus: PropTypes.func,
  /**
   * Callback function triggered when key is pressed.
   */
  onKeyDown: PropTypes.func,
  /**
   * Callback function triggered when key is released.
   */
  onKeyUp: PropTypes.func,
  /**
   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.
   */
  onMouseDown: PropTypes.func,
  /**
   * Sets the hyperlink variant. One of `default`, `external`, `image`, `video`, `audio`, `document`.
   */
  variant: PropTypes.oneOf(['default', 'external', 'image', 'video', 'audio', 'document']),
};

const defaultProps = {
  variant: variants.DEFAULT,
};

const CollapsibleMenuViewHyperlink = ({
  text,
  title,
  href,
  onClick,
  onBlur,
  onFocus,
  onKeyDown,
  onKeyUp,
  onMouseDown,
  variant,
  ...customProps
},
{ isCollapsibleMenuItem }) => {
  const handleOnClick = (event) => {
    if (href) {
      window.location.href = href;
    } else {
      onClick(event);
    }
  };

  if (isCollapsibleMenuItem) {
    return (
      <Menu.Item
        {...customProps}
        text={text}
        onClick={(event) => handleOnClick(event)}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onMouseDown={onMouseDown}
      />
    );
  }

  return (
    <div className={cx(['face-up-item'])}>
      <Hyperlink
        text={text}
        title={title}
        href={href}
        onClick={onClick}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onMouseDown={onMouseDown}
        variant={variant}
      />
    </div>
  );
};

CollapsibleMenuViewHyperlink.propTypes = propTypes;
CollapsibleMenuViewHyperlink.defaultProps = defaultProps;
CollapsibleMenuViewHyperlink.contextTypes = contextTypes;

export default CollapsibleMenuViewHyperlink;
