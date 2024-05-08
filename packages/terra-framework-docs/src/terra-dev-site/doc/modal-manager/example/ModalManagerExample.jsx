/* eslint-disable max-classes-per-file */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ActionHeader from 'terra-action-header';
import CollapsibleMenuView from 'terra-collapsible-menu-view';
import ContentContainer from 'terra-content-container';
import {
  availableDisclosureHeights, availableDisclosureWidths, DisclosureManagerHeaderAdapter, DisclosureManagerContext,
} from 'terra-disclosure-manager';

import ModalManager from 'terra-modal-manager';
import styles from './example-styles.module.scss';

const cx = classNames.bind(styles);

class DisclosureComponent extends React.Component {
  constructor(props) {
    super(props);

    this.checkLockState = this.checkLockState.bind(this);

    this.state = {
      text: undefined,
    };
  }

  componentDidMount() {
    const disclosureManager = this.context;

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
    const { name, disclosureType } = this.props;
    const disclosureManager = this.context;

    return (
      <ContentContainer fill>
        <DisclosureManagerHeaderAdapter
          title={name}
          collapsibleMenuView={(
            <CollapsibleMenuView>
              <CollapsibleMenuView.Item
                text="Button 1"
                key="button_1"
                onClick={() => {
                  this.setState({
                    selectedHeaderAction: 'Button 1',
                  });
                }}
              />
              <CollapsibleMenuView.Item
                text="Button 2"
                key="button_2"
                onClick={() => {
                  this.setState({
                    selectedHeaderAction: 'Button 2',
                  });
                }}
              />
            </CollapsibleMenuView>
          )}
        />
        <div className={cx('content-wrapper')}>
          <h3>{name}</h3>
          <p>The disclosed component can disclose content within the same modal.</p>
          <p>It can also render a header (like above) that implements the various DisclosureManager control functions.</p>
          <button
            type="button"
            onClick={() => {
              disclosureManager.dismiss()
                .catch(() => {
                  console.log('Dismiss failed. A lock must be in place.'); // eslint-disable-line no-console
                });
            }}
          >
            Dismiss
          </button>
          <button
            type="button"
            onClick={() => {
              disclosureManager.disclose({
                preferredType: disclosureType,
                size: 'small',
                content: {
                  key: `Nested ${name}`,
                  component: <DisclosureComponent name={`Nested ${name}`} disclosureType={disclosureType} />,
                },
              });
            }}
          >
            Disclose Again
          </button>
          <br />
          <br />
          <p>The disclosed component can register a dismiss check function that can interrupt and prevent dismissal. This component will prompt the user if text is detected in the input field below.</p>
          <input
            type="text"
            onChange={(event) => {
              this.setState({
                text: event.target.value,
              });
            }}
            value={this.state.text || ''}
          />
          {this.state.text && this.state.text.length ? <p>Component has unsaved changes!</p> : null}
          <br />
          <br />
          <p>
            Selected Header Action:
            {' '}
            <b>{this.state.selectedHeaderAction}</b>
          </p>
        </div>
      </ContentContainer>
    );
  }
}

DisclosureComponent.contextType = DisclosureManagerContext;
DisclosureComponent.propTypes = {
  name: PropTypes.string,
  disclosureType: PropTypes.string,
};
DisclosureComponent.defaultProps = {
  name: 'Disclosure Component',
};

const HEIGHT_KEYS = Object.keys(availableDisclosureHeights);
const WIDTH_KEYS = Object.keys(availableDisclosureWidths);

const generateDimensionOptions = values => (
  values.map((currentValue, index) => {
    const keyValue = index;
    return <option key={keyValue} value={currentValue}>{currentValue}</option>;
  })
);

class ContentComponent extends React.Component {
  constructor(props) {
    super(props);

    this.renderButton = this.renderButton.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.getId = this.getId.bind(this);

    this.state = { id: 'dimensions', disclosureHeight: HEIGHT_KEYS[0], disclosureWidth: WIDTH_KEYS[0] };
  }

  handleSelectChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  getId(name) {
    return name + this.state.id;
  }

  renderButton(size) {
    const { disclosureType } = this.props;
    const disclosureManager = this.context;

    return (
      <button
        type="button"
        onClick={() => {
          disclosureManager.disclose({
            preferredType: disclosureType,
            size,
            content: {
              key: `Content-Disclosure-${size}`,
              component: <DisclosureComponent name="Disclosure Component" disclosureType={disclosureType} />,
            },
          });
        }}
      >
        {`Disclose (${size})`}
      </button>
    );
  }

  renderFormButton() {
    const { disclosureType } = this.props;
    const disclosureManager = this.context;

    const name = `Disclose (${this.state.disclosureHeight}) x (${this.state.disclosureWidth})`;

    return (
      <button
        type="button"
        onClick={() => {
          disclosureManager.disclose({
            preferredType: disclosureType,
            dimensions: { height: this.state.disclosureHeight, width: this.state.disclosureWidth },
            content: {
              key: 'Content-Disclosure-Dimensions',
              component: <DisclosureComponent name="Disclosure Component" disclosureType={disclosureType} />,
            },
          });
        }}
      >
        {name}
      </button>
    );
  }

  renderForm() {
    return (
      <form>
        <label htmlFor={this.getId('disclosureHeight')}>Pop Content Height</label>
        <select id={this.getId('disclosureHeight')} name="disclosureHeight" value={this.state.disclosureHeight} onChange={this.handleSelectChange}>
          {generateDimensionOptions(HEIGHT_KEYS)}
        </select>
        <br />
        <br />
        <label htmlFor={this.getId('disclosureWidth')}>Pop Content Width</label>
        <select id={this.getId('disclosureWidth')} name="disclosureWidth" value={this.state.disclosureWidth} onChange={this.handleSelectChange}>
          {generateDimensionOptions(WIDTH_KEYS)}
        </select>
        <br />
        <br />
      </form>
    );
  }

  render() {
    return (
      <ContentContainer
        header={(
          <ActionHeader
            title="ModalManager Child Component"
          />
        )}
      >
        <div className={cx('content-wrapper')}>
          {this.renderButton('default')}
          {this.renderButton('tiny')}
          {this.renderButton('small')}
          {this.renderButton('medium')}
          {this.renderButton('large')}
          {this.renderButton('huge')}
          {this.renderButton('fullscreen')}
          <br />
          <p>The child components can disclose content in the modal at various sizes.</p>
        </div>
        <div className={cx('content-wrapper')}>
          {this.renderForm()}
          {this.renderFormButton()}
        </div>
      </ContentContainer>
    );
  }
}

ContentComponent.contextType = DisclosureManagerContext;
ContentComponent.propTypes = {
  disclosureType: PropTypes.string,
};

const ModalManagerExample = ({ showDisclosureAccessory }) => (
  <div className={cx('example-wrapper')}>
    <ModalManager
      shouldTrapFocus
      disclosureAccessory={showDisclosureAccessory ? (
        <div className={cx('disclosure-accessory')}>
          Disclosure Accessory
        </div>
      ) : undefined}
      zIndex="7000"
    >
      <ContentComponent disclosureType="modal" />
    </ModalManager>
  </div>
);

ModalManagerExample.propTypes = {
  showDisclosureAccessory: PropTypes.bool,
};

export default ModalManagerExample;
/* eslint-enable max-classes-per-file */
