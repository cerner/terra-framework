import React from 'react';
import PropTypes from 'prop-types';
import { MemoryRouter, withRouter } from 'react-router-dom';
import ContentContainer from 'terra-content-container';
import classNames from 'classnames/bind';
import styles from './ApplicationLayoutCommon.test.module.scss';

import ApplicationLayout, { RoutingMenu } from '../../../ApplicationLayout';

const cx = classNames.bind(styles);

const PageContent = ({ contentName }) => (
  <div>
    Page Content:
    {' '}
    {contentName}
  </div>
);
PageContent.propTypes = {
  contentName: PropTypes.string,
};

/**
 * The routingConfig API matches that of the NavigationLayout. Routing specifications for the
 * menu and content regions are supported; the header region is not configurable.
 */
const routingConfig = {
  menu: {
    '/page_1': {
      path: '/page_1',
      component: {
        default: {
          componentClass: RoutingMenu,
          props: {
            title: 'Page 1 Menu',
            menuItems: [{
              text: 'Item 1',
              path: '/page_1/item_1',
              hasSubMenu: true,
            }, {
              text: 'Item 2',
              path: '/page_1/item_2',
            }],
          },
        },
      },
    },
    '/page_1/item_1': {
      path: '/page_1/item_1',
      component: {
        default: {
          componentClass: RoutingMenu,
          props: {
            title: 'Page 1 Item 1 Menu',
            menuItems: [{
              text: 'Thing 1',
              path: '/page_1/item_1/thing_1',
            }, {
              text: 'Thing 2',
              path: '/page_1/item_1/thing_2',
            }],
          },
        },
      },
    },
  },
  content: {
    '/page_1': {
      path: '/page_1',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Page 1',
          },
        },
      },
    },
  },
};

const indexPath = '/page_1';

const EmptyApplicationLayoutTest = () => (
  <ContentContainer
    fill
    id="application-layout-test"
  >
    <ApplicationLayout
      routingConfig={routingConfig}
      indexPath={indexPath}
    />
  </ContentContainer>
);

const WrappedApplication = withRouter((EmptyApplicationLayoutTest));

const AppRouter = () => (
  <div className={cx('app-router')}>
    <MemoryRouter>
      <WrappedApplication />
    </MemoryRouter>
  </div>
);

export default AppRouter;
