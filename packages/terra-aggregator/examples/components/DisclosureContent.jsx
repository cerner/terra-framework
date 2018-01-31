import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';
import TextField from 'terra-form/lib/TextField';
import AppDelegate from 'terra-app-delegate';
import ActionHeader from 'terra-clinical-action-header';

const propTypes = {
  app: AppDelegate.propType,
  name: PropTypes.string,
};

class DisclosureContent extends React.Component {
  constructor(props) {
    super(props);

    this.checkLockState = this.checkLockState.bind(this);

    this.state = {
      text: undefined,
    };
  }

  componentDidMount() {
    if (this.props.app && this.props.app.registerLock) {
      this.props.app.registerLock(this.checkLockState);
    }
  }

  checkLockState() {
    if (this.state.text && this.state.text.length) {
      return new Promise((resolve, reject) => {
        if (!confirm(`${this.props.name} has unsaved changes that will be lost. Do you wish to continue?`)) { // eslint-disable-line no-alert
          reject();
          return;
        }

        resolve();
      });
    }

    return Promise.resolve();
  }

  render() {
    const { app, name } = this.props;

    return (
      <ContentContainer
        header={(
          <ActionHeader
            title={`Disclosure Content - ${name}`}
            onClose={app.closeDisclosure}
            onBack={app.goBack}
            onMaximize={app.maximize}
            onMinimize={app.minimize}
          />
        )}
      >
        <div style={{ padding: '.7rem' }}>
          <h3>{name}</h3>
          <Button
            text="Dismiss"
            onClick={() => {
              app.dismiss()
                .catch(() => {
                  console.log('Dismiss failed. A lock must be in place.'); // eslint-disable-line no-console
                });
            }}
          />
          <Button
            text="Disclose Again"
            onClick={() => {
              app.disclose({
                preferredType: 'panel',
                size: 'small',
                content: {
                  key: `Nested ${this.props.name}`,
                  name: 'DisclosureContent',
                  props: {
                    key: `Nested ${this.props.name}`,
                    name: `Nested ${this.props.name}`,
                  },
                },
              });
            }}
          />
          <br />
          <br />
          <TextField
            value={this.state.text || ''}
            onChange={(event) => {
              this.setState({
                text: event.target.value,
              });
            }}
          />
          {this.state.text && this.state.text.length ? <p>Component has unsaved changes!</p> : null}
        </div>
      </ContentContainer>
    );
  }
}

DisclosureContent.propTypes = propTypes;

export default DisclosureContent;

const disclosureKey = 'DisclosureContent';
AppDelegate.registerComponentForDisclosure(disclosureKey, DisclosureContent);
export { disclosureKey };
