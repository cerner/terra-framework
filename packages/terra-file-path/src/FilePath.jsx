import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import CollapsibleMenuView from 'terra-collapsible-menu-view';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    /**
     * The unique key for the link.
     */
    key: PropTypes.string,
    /**
     * The content to display inside link.
     */
    text: PropTypes.string,
    /**
     * Additional information to display as a native tooltip on hover per hyperlink.
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
  })),
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const FilePath = props => {
  const {
    items,
    intl,
  } = props;

  const allItemsExceptLast = items.slice(0, items.length - 1);
  const lastItem = items[items.length - 1];

  /*
  * .flat() is used here instead of a react fragment on purpose.
  * The children that get passed down to CollapsibleMenuView will not work with react fragments.
  * They will be passed down without being spread.
  * This results in pairs of hyperlinks and dividers being grouped together as one, breaking how width calculation is handled for resizing.
  */
  const generateChildren = () => allItemsExceptLast.map((item) => [
    <CollapsibleMenuView.Hyperlink
      key={item.key}
      text={item.text}
      title={item.title}
      href={item.href}
      onClick={item.onClick}
    />,
    <CollapsibleMenuView.Divider useChevronRightIcon key={`divider-${item.key}`} />,
  ]).flat();

  return (
    <nav
      aria-label={
        `${intl.formatMessage({ id: 'Terra.file-path.ariaLabel' })}, ${intl.formatMessage({ id: 'Terra.file-path.ariaLabel-current-location' })} ${lastItem.text}`
      }
    >
      <CollapsibleMenuView
        isReversedChildrenOrder
        useHorizontalIcon
        isStartAligned
        menuIconText={intl.formatMessage({ id: 'Terra.file-path.icon.text' })}
      >
        {generateChildren()}
        <CollapsibleMenuView.Item isTextOnly text={lastItem.text} key={lastItem.key} />
      </CollapsibleMenuView>
    </nav>
  );
};

FilePath.propTypes = propTypes;

export default injectIntl(FilePath);
