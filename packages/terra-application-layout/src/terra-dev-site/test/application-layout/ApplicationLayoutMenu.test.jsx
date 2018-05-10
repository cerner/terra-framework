/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ModalManager from 'terra-modal-manager';
import { MemoryRouter } from 'react-router-dom';
import ApplicationMenu from '../../../menu/_ApplicationMenu';
import ExtensionsExample from '../common/ExtensionsExample';
import ContentExample from '../common/ContentExample';

const ApplicationLayoutMenu = () => (
  <MemoryRouter>
    <ModalManager>
      <ApplicationMenu
        id="test-menu"
        layoutConfig={{ size: 'small' }}
        nameConfig={{ title: 'app-test-title' }}
        routingStackDelegate={{}}
        utilityConfig={{
          title: 'test-util-title',
          initialSelectedKey: 'test-menu',
          onChange: () => {},
          menuItems: [
            {
              key: 'test-menu',
              contentLocation: 'body',
              title: 'test-menu-title',
            },
          ],
        }}
        extensions={<ExtensionsExample layoutConfig={{ size: 'small' }} />}
        content={<ContentExample />}
      />
    </ModalManager>
  </MemoryRouter>
);

export default ApplicationLayoutMenu;
