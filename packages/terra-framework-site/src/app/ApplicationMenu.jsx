import React from 'react';
import { withRouter } from 'react-router-dom';
import ContentContainer from 'terra-content-container';
import Image from 'terra-image';
import MenuList from './common/menu/MenuList';
import RoutingDelegate from './common/navigation/routing/RoutingDelegate';

const propTypes = {
  routingManager: RoutingDelegate.propType,
};

const ApplicationMenu = ({ routingManager }) => (
  <ContentContainer
    fill
    header={(
      <div style={{ height: '51px', display: 'flex', alignItems: 'stretch', background: '#E8E9EA' }}>
        <div style={{ width: '60px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="28px" width="28px" isFluid />
        </div>
        <div style={{ fontSize: '1.3rem', flex: '1 1 auto', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center' }}>
          <div style={{ paddingLeft: '10px' }}>
            <strong>{'Terra'}</strong>{'Framework'}
          </div>
        </div>
      </div>
    )}
  >
    <MenuList
      headerText="Terra Framework"
      routingManager={routingManager}
      links={[
        { id: '/home', path: '/home', text: 'Home' },
        { id: '/components', path: '/components', text: 'Components' },
        { id: '/tests', path: '/tests', text: 'Tests' },
      ]}
    />
  </ContentContainer>
);
ApplicationMenu.propTypes = propTypes;

export default withRouter(ApplicationMenu);
