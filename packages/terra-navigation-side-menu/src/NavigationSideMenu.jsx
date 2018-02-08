import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import List from 'terra-list';
import ActionHeader from 'terra-clinical-action-header';
import ContentContainer from 'terra-content-container';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';

import styles from './NavigationSideMenu.scss';

const cx = classNames.bind(styles);

const KEYCODES = {
  ENTER: 13,
};

const propTypes = {
  /**
   * Navigational links that will generate list items that will update the path. These paths are matched with react-router to selection.
   */
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    key: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
  /**
   * Navigational links that will generate list items that will update the path. These paths are matched with react-router to selection.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Delegate prop that is added by the NavigationLayout.
   */
  routingStackDelegate: RoutingStackDelegate.propType,
  /**
   * Delegate prop that is added by the NavigationLayout.
   */
  selectedKey: PropTypes.string,
  /**
   * Delegate prop that is added by the NavigationLayout.
   */
  title: PropTypes.string,
};

const defaultProps = {
  menuItems: [],
};

const NavigationSideMenu = ({
  menuItems,
  onChange,
  routingStackDelegate,
  selectedKey,
  title,
  ...customProps
}) => {
  const listItems = menuItems.map((item) => {
    const content = (
      <div id={item.id} className={cx(['list-item', { 'is-selected': item.key === selectedKey }])}>
        {item.text}
      </div>
    );
    return (
      <List.Item
        tabIndex="0"
        content={content}
        key={item.key}
        onClick={(event) => { onChange(event, item.key); }}
        onKeyDown={(event) => { if (event.nativeEvent.keyCode === KEYCODES.ENTER) { onChange(event, item.key); } }}
      />
    );
  });

  // showRoot: PropTypes.func,
  let onBack;
  if (routingStackDelegate) {
    onBack = routingStackDelegate.showParent;
  }
  const actionHeader = <ActionHeader className={cx(['header'])} onBack={onBack} title={title} />;

  return (
    <ContentContainer {...customProps} header={actionHeader} fill>
      <List>
        {listItems}
      </List>
    </ContentContainer>
  );
};

NavigationSideMenu.propTypes = propTypes;
NavigationSideMenu.defaultProps = defaultProps;

export default NavigationSideMenu;
