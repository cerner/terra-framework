import React from 'react';
import PropTypes from 'prop-types';
import AppDelegate from 'terra-app-delegate';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-action-header';

const propTypes = {
  name: PropTypes.string,
  app: AppDelegate.propType,
};

const ExtensionsDisclosure = ({ name, app }) => (
  <ContentContainer
    fill
    header={(
      <ActionHeader
        title={name.charAt(0).toUpperCase() + name.slice(1)}
        onClose={app.closeDisclosure}
        onBack={app.goBack}
        onMaximize={app.maximize}
        onMinimize={app.minimize}
      />
   )}
  >
    <div style={{ padding: '10px' }}>
Content for extension:
      {name}
    </div>
  </ContentContainer>
);

ExtensionsDisclosure.propTypes = propTypes;

export default ExtensionsDisclosure;
