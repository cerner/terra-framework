import React from 'react';
// import AppDelegate from 'terra-app-delegate';
import { Link, withRouter } from 'react-router-dom';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';

const propTypes = {
//   app: AppDelegate.propType,
//   routingManager: RoutingManagerDelegate.propType,
};

const TestsMenu = props => (
  <ContentContainer
    fill
    header={props.routingManager.goBack && (
      <Button text="Back" onClick={props.routingManager.goBack} />
    )}
  >
    <div style={{ height: '100%', position: 'relative' }}>
      <Link to="/tests/layout">Layout</Link>
      <br />
    </div>
  </ContentContainer>
);

TestsMenu.propTypes = propTypes;

export default withRouter(TestsMenu);
