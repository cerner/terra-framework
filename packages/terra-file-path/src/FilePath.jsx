import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import CollapsibleMenuView from 'terra-collapsible-menu-view';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
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
  })),

  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {};

const FilePath = props => {
  const {
    items,
    intl,
  } = props;

  const allItemsExceptLast = items.slice(0, items.length - 1);
  const lastItem = items[items.length - 1];

  const generateChildren = () => allItemsExceptLast.map((item) => [
    <CollapsibleMenuView.Hyperlink
      key={item.key}
      text={item.text}
      href={item.href}
      onClick={item.onClick}
      onBlur={item.onBlur}
      onFocus={item.onFocus}
      onKeyDown={item.onKeyDown}
      onKeyUp={item.onKeyUp}
      onMouseDown={item.onMouseDown}
      variant={item.variant}
    />,
    <CollapsibleMenuView.Divider useChevronRightIcon key={`divider-${item.key}`} />,
  ]).flat();

  return (
    <CollapsibleMenuView
      isReversedChildrenOrder
      useHorizontalIcon
      isStartAligned
      iconText={intl.formatMessage({ id: 'Terra.file-path.icon.text' })}
    >
      {generateChildren()}
      <CollapsibleMenuView.Item isTextOnly text={lastItem.text} key={lastItem.key} />
    </CollapsibleMenuView>
  );
};

FilePath.propTypes = propTypes;
FilePath.defaultProps = defaultProps;

export default injectIntl(FilePath);
