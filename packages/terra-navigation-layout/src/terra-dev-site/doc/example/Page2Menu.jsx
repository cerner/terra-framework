import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import RoutingStackDelegate from '../../../RoutingStackDelegate';
import styles from './NavigationLayoutDocCommon.scss';

const cx = classNames.bind(styles);

const Page2Menu = ({ layoutConfig, routingStackDelegate }) => (
  <div className={cx('content-wrapper1')}>
    <div className={cx('content-wrapper2')}>
      {routingStackDelegate && routingStackDelegate.showParent
        && (
        <button
          type="button"
          onClick={routingStackDelegate.showParent}
        >
Go Back
        </button>
        )}
      {layoutConfig.toggleMenu
        && (
        <button
          type="button"
          onClick={layoutConfig.toggleMenu}
        >
Toggle Menu
        </button>
        )}
      {layoutConfig.togglePin && !layoutConfig.menuIsPinned
        && (
        <button
          type="button"
          onClick={layoutConfig.togglePin}
        >
Pin
        </button>
        )}
      {layoutConfig.togglePin && layoutConfig.menuIsPinned
        && (
        <button
          type="button"
          onClick={layoutConfig.togglePin}
        >
Unpin
        </button>
        )}
      <h2>Page 2 Menu</h2>
    </div>
  </div>
);

Page2Menu.propTypes = {
  layoutConfig: PropTypes.shape({
    toggleMenu: PropTypes.func,
    togglePin: PropTypes.func,
    menuIsPinned: PropTypes.bool,
  }),
  routingStackDelegate: RoutingStackDelegate.propType,
};

export default withRouter(Page2Menu);
