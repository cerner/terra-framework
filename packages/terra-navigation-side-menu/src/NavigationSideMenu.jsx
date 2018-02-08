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
  routingStackDelegate: RoutingStackDelegate.propType.isRequired,
  /**
   * Delegate prop that is added by the NavigationLayout.
   */
  selectedKey: PropTypes.string,
};

const defaultProps = {
  menuItems: [],
};

const NavigationSideMenu = ({
  menuItems,
  onChange,
  routingStackDelegate,
  selectedKey,
  ...customProps
}) => {
  const listItems = menuItems.map(item => (
    <List.Item
      content={<div className={cx(['list-item', { 'is-selected': item.key === selectedKey }])}>{item.text}</div>}
      key={item.key}
      onClick={(event) => { this.props.onChange(event, item.key); }}
    />
  ));

  // showRoot: PropTypes.func,
  const actionHeader = <ActionHeader className={cx(['header'])} onBack={routingStackDelegate.showParent} />;

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
