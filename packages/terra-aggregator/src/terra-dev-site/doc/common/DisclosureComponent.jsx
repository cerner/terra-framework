import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';
import Input from 'terra-form-input';
import ActionHeader from 'terra-action-header';
import { withDisclosureManager } from 'terra-disclosure-manager';

import styles from './example-styles.scss';

const cx = classNames.bind(styles);

const propTypes = {
  name: PropTypes.string,
  disclosureType: PropTypes.string,
  disclosureManager: PropTypes.object,
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
    const { disclosureManager } = this.props;

    if (disclosureManager && disclosureManager.registerDismissCheck) {
      disclosureManager.registerDismissCheck(this.checkLockState);
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
    const { disclosureManager, name, disclosureType } = this.props;

    return (
      <ContentContainer
        fill
        header={(
          <ActionHeader
            title={`Disclosure - ${name}`}
            onClose={disclosureManager.closeDisclosure}
            onBack={disclosureManager.goBack}
            onMaximize={disclosureManager.maximize}
            onMinimize={disclosureManager.minimize}
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
              disclosureManager.dismiss()
                .catch(() => {
                  console.log('Dismiss failed. A lock must be in place.'); // eslint-disable-line no-console
                });
            }}
          />
          <Button
            text="Disclose Again"
            onClick={() => {
              disclosureManager.disclose({
                preferredType: disclosureType,
                size: 'small',
                content: {
                  key: `Nested ${name}`,
                  component: <WrappedDisclosureComponent name={`Nested ${name}`} disclosureType={disclosureType} />,
                },
              });
            }}
          />
          <br />
          <br />
          <p>The disclosed component can register a dismiss check function that can interrupt and prevent dismissal. This component will prompt the user if text is detected in the input field below.</p>
          <Input
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

const WrappedDisclosureComponent = withDisclosureManager(DisclosureComponent);

export default withDisclosureManager(WrappedDisclosureComponent);
