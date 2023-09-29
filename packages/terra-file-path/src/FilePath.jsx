import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import CollapsibleMenuView from 'terra-collapsible-menu-view';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    onMouseDown: PropTypes.func,
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
