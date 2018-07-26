import React from 'react';
import { MemoryRouter, Link } from 'react-router-dom';

import NavigationLayout from '../../../NavigationLayout';

const config = {
  header: {
    '/': {
      path: '/',
      component: {
        default: {
          componentClass: () => (
            <div>
              <div className="test-header">Header</div>
              {/* eslint-disable  jsx-a11y/anchor-is-valid */}
              <Link to="/page1" className="page-1-link">Page 1</Link>
              <Link to="/page2" className="page-2-link">Page 2</Link>
              <Link to="/page3" className="page-3-link">Page 3</Link>
            </div>
          ),
        },
      },
    },
  },
  menu: {
    '/page1': {
      path: '/page1',
      component: {
        tiny: {
          componentClass: () => (
            <div className="test-menu">Tiny Menu</div>
          ),
        },
        medium: {
          componentClass: () => (
            <div className="test-menu">Medium Menu</div>
          ),
        },
        huge: {
          componentClass: () => (
            <div className="test-menu">Huge Menu</div>
          ),
        },
      },
    },
    '/page2': {
      path: '/page2',
      component: {
        default: {
          componentClass: () => (
            <div className="test-menu">Menu</div>
          ),
        },
        huge: {
          componentClass: () => (
            <div className="test-menu-huge">Huge Menu</div>
          ),
        },
      },
    },
  },
  content: {
    '/page1': {
      path: '/page1',
      component: {
        default: {
          componentClass: () => (
            <div className="page-1-content">Page 1 Content</div>
          ),
        },
      },
    },
    '/page2': {
      path: '/page2',
      component: {
        default: {
          componentClass: () => (
            <div className="page-2-content">Page 2 Content</div>
          ),
        },
      },
    },
    '/page3': {
      path: '/page3',
      component: {
        default: {
          componentClass: () => (
            <div className="page-3-content">Page 3 Content</div>
          ),
        },
      },
    },
  },
};

const NavigationLayoutComplex = () => (
  <MemoryRouter
    initialEntries={['/page1', '/page2', '/page3']}
    initialIndex={0}
  >
    <NavigationLayout
      config={config}
      menuText="Menu"
      id="test-root"
    />
  </MemoryRouter>
);

export default NavigationLayoutComplex;
