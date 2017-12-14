import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import NavigationLayout from '../../src/NavigationLayout';

const config = {
  header: {
    '/': {
      path: '/',
      component: {
        default: {
          componentClass: () => (
            <div className="test-header">Header</div>
          ),
        },
      },
    },
  },
  menu: {
    '/': {
      path: '/',
      component: {
        default: {
          componentClass: () => (
            <div className="test-menu">Menu</div>
          ),
        },
      },
    },
  },
  content: {
    '/': {
      path: '/',
      component: {
        default: {
          componentClass: () => (
            <div className="test-content">Content</div>
          ),
        },
      },
    },
  },
};

const NavigationLayoutBasic = () => (
  <MemoryRouter
    initialEntries={['/']}
    initialIndex={0}
  >
    <NavigationLayout
      config={config}
      menuText="Menu"
    />
  </MemoryRouter>
);

export default NavigationLayoutBasic;
