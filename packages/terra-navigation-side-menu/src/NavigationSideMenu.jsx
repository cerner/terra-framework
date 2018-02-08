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
  navigationItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    key: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
  /**
   * Navigational links that will generate list items that will update the path. These paths are matched with react-router to selection.
   */
  onChange: PropTypes.func,
  /**
    * Delegate prop that is added by the NavigationLayout.
  */
  routingStackDelegate: RoutingStackDelegate.propType,
};

const defaultProps = {
  navigationItems: [],
};

class NavigationSideMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event, key) {
    if (this.props.onChange) {
      this.props.onChange(event, key);
    }
  }

  render() {
    const {
      navigationItems,
      onChange,
      routingStackDelegate,
      ...customProps
    } = this.props; // eslint-disable-line no-unused-vars

    const listItems = navigationItems.map(link => (
      <List.Item
        content={
          <div className={cx(['list-item'])}>
            {link.text}
          </div>
        }
        key={link.path}
        onClick={(event) => { this.handleOnChange(event, link.key); }}
      />
    ));

    // showRoot: PropTypes.func,
    const actionHeader = <ActionHeader className={cx(['header'])} onBack={routingStackDelegate.showParent} />;

    return (
      <ContentContainer {...customProps} className={cx(['side-menu'])} header={actionHeader} fill>
        <List className={cx(['list'])}>
          {listItems}
        </List>
      </ContentContainer>
    );
  }
}

NavigationSideMenu.propTypes = propTypes;
NavigationSideMenu.defaultProps = defaultProps;

export default NavigationSideMenu;
