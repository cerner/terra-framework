import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';
import TextField from 'terra-form/lib/TextField';
import AppDelegate from 'terra-app-delegate';
import ActionHeader from 'terra-action-header';

import styles from './example-styles.scss';

const cx = classNames.bind(styles);

const propTypes = {
  app: AppDelegate.propType,
  name: PropTypes.string,
  disclosureType: PropTypes.string,
};

const defaultProps = {
  name: 'Disclosure Component',
};

class DisclosureComponent extends React.Component {
  constructor(props) {
    super(props);

    this.checkLockState = this.checkLockState.bind(this);

    this.state = {
      text: undefined,
    };
  }

  componentDidMount() {
    if (this.props.app && this.props.app.registerDismissCheck) {
      this.props.app.registerDismissCheck(this.checkLockState);
    }
  }

  checkLockState() {
    if (this.state.text && this.state.text.length) {
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line no-restricted-globals
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
    const { app, name, disclosureType } = this.props;

    return (
      <ContentContainer
        fill
        header={(
          <ActionHeader
            title={`Disclosure - ${name}`}
            onClose={app.closeDisclosure}
            onBack={app.goBack}
            onMaximize={app.maximize}
            onMinimize={app.minimize}
          />
        )}
      >
        <div className={cx('content-wrapper')}>
          <h3>{name}</h3>
          <p>The disclosed component can disclose content within the same panel.</p>
          <p>It can also render a header (like above) that implements the various DisclosureManager control functions.</p>
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
                preferredType: disclosureType,
                size: 'small',
                content: {
                  key: `Nested ${name}`,
                  component: <DisclosureComponent name={`Nested ${name}`} disclosureType={disclosureType} />,
                },
              });
            }}
          />
          <br />
          <br />
          <p>The disclosed component can register a dismiss check function that can interrupt and prevent dismissal. This component will prompt the user if text is detected in the input field below.</p>
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

DisclosureComponent.propTypes = propTypes;
DisclosureComponent.defaultProps = defaultProps;

export default DisclosureComponent;
