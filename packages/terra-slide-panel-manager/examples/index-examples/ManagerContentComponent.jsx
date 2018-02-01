import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';
import AppDelegate from 'terra-app-delegate';
import ActionHeader from 'terra-clinical-action-header';

import ManagerDisclosureComponent from './ManagerDisclosureComponent';

const propTypes = {
  app: AppDelegate.propType,
  disclosureType: PropTypes.string,
};

class ManagerContentComponent extends React.Component {
  constructor(props) {
    super(props);

    this.renderButton = this.renderButton.bind(this);
  }

  renderButton(size) {
    const { app, disclosureType } = this.props;

    return (
      <Button
        text={`Disclose (${size})`}
        onClick={() => {
          app.disclose({
            preferredType: disclosureType,
            size,
            content: {
              key: `Content-Disclosure-${size}`,
              component: <ManagerDisclosureComponent name={`Disclosure Component (${size})`} />,
            },
          });
        }}
      />
    );
  }

  render() {
    const { app } = this.props;

    return (
      <ContentContainer
        header={(
          <ActionHeader
            title={'Manager Child'}
          />
        )}
      >
        <div style={{ padding: '.7rem' }}>
          {this.renderButton('tiny')}
          {this.renderButton('small')}
          {this.renderButton('medium')}
          {this.renderButton('large')}
          {this.renderButton('huge')}
          {this.renderButton('fullscreen')}
          <br />
          <p>The child components can disclose content in the panel at various sizes.</p>
        </div>
      </ContentContainer>
    );
  }
}

ManagerContentComponent.propTypes = propTypes;

export default ManagerContentComponent;
