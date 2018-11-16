import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-action-header';

import {
  availableDisclosureHeights, availableDisclosureWidths, withDisclosureManager, disclosureManagerShape,
} from 'terra-disclosure-manager';
import DisclosureComponent from './DisclosureComponent';

import styles from './example-styles.scss';

const cx = classNames.bind(styles);

const propTypes = {
  disclosureType: PropTypes.string,
  disclosureManager: disclosureManagerShape,
};

const HEIGHT_KEYS = Object.keys(availableDisclosureHeights);
const WIDTH_KEYS = Object.keys(availableDisclosureWidths);

const generateOptions = values => (
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

  getId(name) {
    return name + this.state.id;
  }

  handleSelectChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  renderButton(size) {
    const { disclosureManager, disclosureType } = this.props;

    return (
      <Button
        text={`Disclose (${size})`}
        onClick={() => {
          disclosureManager.disclose({
            preferredType: disclosureType,
            size,
            content: {
              key: `Content-Disclosure-${size}`,
              component: <DisclosureComponent name={`Disclosure Component (${size})`} disclosureType={disclosureType} />,
            },
          });
        }}
      />
    );
  }

  renderFormButton() {
    const { disclosureManager, disclosureType } = this.props;
    const name = `Disclose (${this.state.disclosureHeight}) x (${this.state.disclosureWidth})`;

    return (
      <Button
        text={name}
        onClick={() => {
          disclosureManager.disclose({
            preferredType: disclosureType,
            dimensions: { height: this.state.disclosureHeight, width: this.state.disclosureWidth },
            content: {
              key: 'Content-Disclosure-Dimensions',
              component: <DisclosureComponent name={`Disclosure Component (${name})`} disclosureType={disclosureType} />,
            },
          });
        }}
      />
    );
  }

  renderForm() {
    return (
      <form>
        <label htmlFor={this.getId('disclosureHeight')}>Pop Content Height</label>
        <select id={this.getId('disclosureHeight')} name="disclosureHeight" value={this.state.disclosureHeight} onChange={this.handleSelectChange}>
          {generateOptions(HEIGHT_KEYS)}
        </select>
        <br />
        <br />
        <label htmlFor={this.getId('disclosureWidth')}>Pop Content Width</label>
        <select id={this.getId('disclosureWidth')} name="disclosureWidth" value={this.state.disclosureWidth} onChange={this.handleSelectChange}>
          {generateOptions(WIDTH_KEYS)}
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
            title="Manager Child"
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
          <p>The child components can disclose content in the panel at various sizes.</p>
        </div>
        <div className={cx('content-wrapper')}>
          {this.renderForm()}
          {this.renderFormButton()}
        </div>
      </ContentContainer>
    );
  }
}

ContentComponent.propTypes = propTypes;

export default withDisclosureManager(ContentComponent);
